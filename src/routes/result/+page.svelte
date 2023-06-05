<script lang="ts">
    import { invalidate } from "$app/navigation";
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";
    import { headingStore, promptStore, selectedTagsStore } from "../stores";
    import type { AiResponse } from "./types";

    $headingStore = "Generation complete!\nYour game is:";

    async function getData(): Promise<AiResponse> {
        const url: string = `https://jambuddyserver.onrender.com?theme=${$promptStore}&tags=${$selectedTagsStore}`;
        const res = await fetch(url);
        return await res.json();
    }

    function reload() {
        // FIXME
        // execute the load function again = new post request
        invalidate((url) => url.pathname === `/`);
    }

    const data = getData();
</script>

<div class="main">
    {#await data}
        <p>loading ...</p>
    {:then res}
        <GameDescription data={res.concept} />
        <GameDesign data={res.images} />
    {/await}

    <button on:click={reload}>Try again</button>
</div>

<style>
    .main {
        display: grid;
        grid-template-areas:
            "desc image"
            "button button";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 72px;
        grid-column-gap: 5px;
        grid-row-gap: 15px;
        width: 100%;
        max-width: 875px;
        margin: 77px auto 20px auto;
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
