<script lang="ts">
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
            }}>Try again</button
        >
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
