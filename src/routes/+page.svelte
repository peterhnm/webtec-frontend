<script lang="ts">
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import "./style.css";
    import TagList from "./TagList.svelte";
    import { promptStore, tagsStore } from "./stores";

    export let data: PageData;

    let { tags } = data;

    function processData() {
        /*
          TODO Open questions
            - Do we always need a tag?
            - What should happen if no prompt is given?
        */
        if (!prompt) {
            console.error("No prompt given!");
            return;
        }

        // Redirect to result page
        goto(`${base}/result`);
    }
</script>

<section id="logo">
    <h1>Jam Buddy</h1>
</section>

<section id="prompt">
    <input bind:value={$promptStore} placeholder="Jam Theme..." type="text" />
</section>

<section id="tags">
    {#if tags}
        <TagList bind:checkedTags={$tagsStore} {tags} />
    {:else}
        <p>loading ...</p>
    {/if}
</section>

<button on:click={processData}>Start Dreaming</button>
