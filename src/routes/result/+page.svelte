<script lang="ts">
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";
    import { headingStore, promptStore } from "../stores";
    import { selectedTagsStore } from "../stores.js";
    import type { AiResponse } from "./types";

    $headingStore = "Generation complete!\nYour game is:";

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
        <GameDesign loading={true} />
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
    {/await}
    <div class="tags">
        <ul>
            {#each $selectedTagsStore as tag}
                <li>{tag}</li>
            {/each}
        </ul>
        <p>Added Tags</p>
    </div>
</div>

<style>
    .main {
        --gap-size: 13px;
        display: grid;
        grid-template-areas:
            "desc image"
            "button button"
            "tags tags";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 72px;
        grid-column-gap: 15px;
        grid-row-gap: 18px;
        margin: 0 auto;
        width: 876px;
    }

    button {
        grid-area: button;
        justify-self: start;
    }

    .tags {
        grid-area: tags;
        margin: calc(57px - var(--gap-size)) 0 0;
    }

    .tags ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        gap: 13px;
        min-height: 32px;
        list-style: none;
    }

    .tags li {
        padding: 7px 12px;
        min-width: 32px;
        border-radius: 15px;
        background: var(--button-col);

        color: var(--link-col);
        font-style: italic;

        float: left;
        text-align: center;
    }

    .tags p {
        margin: 17px 0 0;
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
