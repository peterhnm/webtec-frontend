<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import "./style.css";
    import TagList from "./TagList.svelte";
    import { promptStore, tagsStore } from "./stores";

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

<h1>Jam Buddy</h1>

<input bind:value={$promptStore} placeholder="Jam Theme..." type="text" />

<TagList bind:checkedTags={$tagsStore} />

<button on:click={processData}>Start Dreaming</button>
