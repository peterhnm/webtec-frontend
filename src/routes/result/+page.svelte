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
            on:click={() => {
                data = getData();
            }}
            >Try again
        </button>
        <GameDescription data={res.concept} loading={false} />
        <GameDesign data={res.images} loading={false} />
    {/await}
</div>

<style>
    .main {
        display: grid;
        grid-template-areas:
            "desc image"
            "button button";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 72px;
        grid-column-gap: 15px;
        grid-row-gap: 18px;
        width: 876px;
    }

    button {
        grid-area: button;
        padding: 24px 26px;
        width: 142px;
        height: 72px;
        justify-self: start;
    }

    @media (max-width: 480px) {
        .main {
            grid-template-areas:
                "image"
                "desc"
                "button";
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            margin: 0 auto 24px;
            width: calc(480px - 2 * 16px);
        }

        button {
            justify-self: center;
            height: 72px;
            width: 100%;
        }
    }
</style>
