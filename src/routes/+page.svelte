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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
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

    <div class="tags">
        <div class="search">
            {#if visible}
                <Dropdown {tags} />
            {/if}

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
    </div>
</div>

<style>
    input[type="text"] {
        font-size: 16pt;
    }

    small {
        width: 100%;
        color: gray;
        font-size: 14px;
    }

    .prompt,
    .search {
        margin: 60px 0 60px 0;
    }

    .prompt {
        display: flex;
        flex-wrap: wrap;
        column-gap: 10px;
        justify-content: flex-start;
    }

    .prompt input {
        flex-grow: 1;
    }

    .prompt small {
        order: 3;
    }

    .tags .search {
        display: flex;
        flex-wrap: wrap;
    }

    .tags .search input {
        width: 100%;
    }

    .tags .selectedTags {
        padding: 10px 5px 10px 5px;
        border: solid black 2px;
        border-radius: 4px;
    }
</style>
