<script lang="ts">
    import type { PageData } from "./$types";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { headingStore, promptStore, selectedTagsStore } from "./stores";
    import { onMount } from "svelte";
    import Dropdown from "./Dropdown.svelte";
    import Tag from "./Tag.svelte";

    export let data: PageData;

    let { tags } = data; // all possible tags

    $headingStore = "Generate your Game Jam Idea within minutes!";

    let searchBar: HTMLInputElement;
    let visible = false;

    onMount(() => {
        searchBar.addEventListener("focusin", () => {
            visible = true;
        });

        // TODO use 'focusout' and research on how to keep focus
        window.addEventListener("click", (event) => {
            // hide Dropdown if we click outside it
            const target = event.target as HTMLElement;

            if (
                visible &&
                !target.closest(".search") &&
                !target.closest(".dropdown") &&
                !(target.tagName === "INPUT" && target.type === "checkbox")
            ) {
                visible = false;
                event.stopPropagation();
                event.preventDefault();
            }
        });
    });

    function processData() {
        // TODO Display error message when no prompt is given
        if (!prompt) {
            console.error("No prompt given!");
            return;
        }

        // Redirect to result page
        goto(`${base}/result`);
    }

    let selectedTags: string[];
    selectedTagsStore.subscribe((value: string[]) => {
        selectedTags = value;
    });
</script>

<div class="main">
    <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
    </p>

    <div class="prompt">
        <input
            bind:value={$promptStore}
            placeholder="...enter Game Jam Theme here"
            type="text"
        />
        <small>What is the theme of your Game Jam?</small>

        <button on:click={processData}>Generate</button>
    </div>

    {#if visible}
        <Dropdown {tags} />
    {/if}

    <div class="tags">
        <div class="search">
            <input
                bind:this={searchBar}
                placeholder="...search for game tags"
                type="text"
            />
            <small>Add tags to specify what kind of game you want</small>
        </div>

        <div class="selectedTags">
            {#if selectedTags}
                {#each selectedTags as tag}
                    <Tag id={tag} checked={true} />
                {/each}
            {/if}
        </div>
        <small>Added Tags</small>
    </div>
</div>

<style>
    input[type="text"] {
        min-height: 42px;

        border: solid #000 1px;
        border-radius: 3px;
        font-family: 'Inter', sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
        background: #BEE6DC;
    }

    small {
        width: 100%;

        font-family: 'Inter', sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
    }

    .main {
        display: grid;
        grid-template-areas:
                "desc"
                "prompt"
                "tags";
        width: 100%;
        max-width: 545px;
        margin: 77px auto 0 auto;
        padding: 6px;
    }

    .main p {
        grid-area: desc;
        margin: 0 0 37px 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }

    .prompt {
        grid-area: prompt;
        display: grid;
        grid-template-areas:
                "input button"
                "small button";
        grid-column-gap: 33px;
        margin-bottom: 97px;
    }

    .prompt input {
        display: grid;
        grid-area: input;
    }

    .prompt small {
        display: grid;
        grid-area: small;
    }

    .prompt button {
        grid-area: button;
    }

    .tags {
        grid-area: tags;
        display: grid;
        grid-template-areas:
                "search"
                "selectedTags";
    }

    .search {
        grid-area: search;
        display: grid;
        grid-template-areas:
                "input"
                "small";
        margin-bottom: 33px;
    }

    .selectedTags {
        grid-area: selectedTags;
        min-height: 58px;
        background: #BEE6DC;
        border-radius: 15px;
    }
</style>
