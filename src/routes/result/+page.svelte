<script lang="ts">
    import type { PageData } from "./$types";
    import { afterNavigate, invalidate } from "$app/navigation";
    import { base } from "$app/paths";
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";
    import { headingStore } from "../stores";

    export let data: PageData;

    $headingStore = "Generation complete!\nYour game is:";

    let { description, images } = data;

    let previousPage: string = base;

    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });

    // function goBack() {
    //     goto(previousPage);
    // }

    function reload() {
        // execute the load function again = new post request
        invalidate((url) => url.pathname === `/`);
    }
</script>

<!-- <button on:click={goBack}>Back</button> -->

<div class="main">
    {#if description}
        <GameDescription bind:data={description} />
    {:else}
        <p>loading ...</p>
    {/if}

    {#if images}
        <GameDesign bind:data={images} />
    {:else}
        <p>loading ...</p>
    {/if}

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
