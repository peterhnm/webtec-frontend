<script lang="ts">
    import GameDescription from "./GameConcept.svelte";
    import GameDesign from "./GameDesign.svelte";
    import { promptStore } from "../stores";
    import { selectedTagsStore } from "../stores.js";
    import type { AiResponse } from "./types";

    async function getData(): Promise<AiResponse> {
        const url: string = `https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io?theme=${$promptStore}&tags=${$selectedTagsStore}`;
        const res = await fetch(url);
        return await res.json();
    }

    let data = getData();
</script>

<div class="main">
    {#await data}
        <GameDescription loading={true} />
    {:then res}
        <button
            class="app-button"
            on:click={() => {
                data = getData();
            }}
            >Try again
        </button>
        <GameDescription data={res.concept} loading={false} />
        <GameDesign data={res.images} loading={false} />
        <div class="search-container">
            <ul>
                {#each $selectedTagsStore as tag}
                    <li>{tag}</li>
                {/each}
            </ul>
            <p>Added Tags</p>
        </div>
    {/await}
</div>

<style>
    .main {
        display: grid;
        grid-template-areas:
            "heading heading"
            "concept image"
            "button button"
            "tags tags";
        grid-template-columns: 400px 400px;
        grid-column-gap: 75px;
        margin: 0 auto;
        width: 876px;
    }

    button {
        margin-top: 55px;
        grid-area: button;
        justify-self: start;
    }

    .search-container {
        grid-area: tags;
        margin: 57px 0 0;
    }

    .search-container ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        gap: 13px;
        min-height: 32px;
        list-style: none;
    }

    .search-container li {
        --height: 32px;
        padding: 7px 12px;
        min-width: 32px;
        min-height: calc(var(--height) - 2 * 7px);
        border-radius: 15px;
        background: var(--button-col);

        color: var(--link-col);
        font-style: italic;

        float: left;
        text-align: center;
    }

    .search-container p {
        margin: 14px 0 0;
        padding: 0;
        color: #4b4b4b;
        font-size: 14px;
        font-weight: 700;
    }

    @media (max-width: 480px) {
        .main {
            grid-template-areas:
                "desc"
                "image"
                "button"
                "tags";
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            width: calc(480px - 2 * 48px);
        }

        button {
            justify-self: center;
            height: 72px;
            width: 100%;
        }
    }
</style>
