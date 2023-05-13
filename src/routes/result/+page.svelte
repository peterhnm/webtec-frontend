<script lang="ts">
    import { afterNavigate, goto } from "$app/navigation";
    import { base } from "$app/paths";
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";

    let previousPage: string = base;

    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
    });

    function goBack() {
        goto(previousPage);
    }
</script>

<button on:click={goBack}>Back</button>

<GameDescription />

<GameDesign />
