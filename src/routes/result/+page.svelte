<script lang="ts">
    import type { PageData } from "./$types";
    import { afterNavigate, goto } from "$app/navigation";
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

    function goBack() {
        goto(previousPage);
    }
</script>

<button on:click={goBack}>Back</button>

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
