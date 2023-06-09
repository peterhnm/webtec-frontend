<script lang="ts">
    import { invalidate } from "$app/navigation";
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

    function reload() {
        // execute the load function again = new post request
        invalidate((url) => url.pathname === `/`);
    }

    const data = getData();
</script>

<div class="main">
    {#await data}
        <GameDescription loading={true} />
        <GameDesign loading={true} />
        <button on:click={reload} disabled>Try again</button>
    {:then res}
        <GameDescription data={res.concept} loading={false} />
        <GameDesign data={res.images} loading={false} />
        <button on:click={reload}>Try again</button>
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
        width: 100%;
        max-width: 875px;
    }

    button {
        grid-area: button;
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
            place-items: center;
            place-content: center;
        }

        button {
            justify-self: center;
            height: 72px;
        }
    }
</style>
