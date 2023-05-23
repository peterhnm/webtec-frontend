<script lang="ts">
    import type { PageData } from "./$types";
    import { afterNavigate, goto } from "$app/navigation";
    import { base } from "$app/paths";
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";

    export let data: PageData;

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
