<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { headingStore, promptStore, selectedTagsStore } from "./stores";
    import { onMount } from "svelte";
    import Dropdown from "./Dropdown.svelte";
    import Tag from "./Tag.svelte";

    $headingStore = "Generate your Game Jam Idea within minutes!";

    let searchBar: HTMLInputElement;
    let visible = false;
    let selectedTags: HTMLDivElement;
    let dropdown: HTMLDivElement;

    onMount(() => {
        searchBar.addEventListener("focusin", () => {
            visible = true;
        });

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
            }
        });

        // Workaround
        selectedTagsStore.subscribe(() => {
            // eslint-disable-next-line no-undef
            const selectedBoxes: NodeListOf<HTMLInputElement> = selectedTags.querySelectorAll(
                "input[type=\"checkbox\"]"
            );
            for (const box of selectedBoxes) {
                box.checked = true;
            }

            // eslint-disable-next-line no-undef
            const dropdownBoxes: NodeListOf<HTMLInputElement> = dropdown.querySelectorAll(
                "input[type=\"checkbox\"]"
            );
            for (const box of dropdownBoxes) {
                box.checked = false;
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

    async function getData() {
        const url: string =
            "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags";
        const res = await fetch(url);
        return await res.json();
    }

    const data = getData();

</script>

<div class="main">
    <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
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
        <div bind:this={dropdown}>
            {#if visible}
                {#await data}
                    <Dropdown loading={true} />
                {:then tags}
                    <Dropdown {tags} loading={false} />
                {/await}
            {/if}
        </div>

        <div class="search">
            <input
                bind:this={searchBar}
                placeholder="...search for game tags"
                type="text"
            />
            <small>Add tags to specify what kind of game you want</small>
        </div>

        <div bind:this={selectedTags} class="selectedTags">
            {#if $selectedTagsStore}
                {#each $selectedTagsStore as tag}
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

        border: none;
        border-radius: 3px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
        background: #bee6dc;
    }

    input[type="text"]:placeholder-shown {
        font-style: italic;
    }

    p {
        height: 81px;
    }

    small {
        margin-top: 6px;
        width: 100%;

        font-family: "Inter", sans-serif;
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
        padding: 6px;
    }

    .main p {
        grid-area: desc;
        margin: 0 0 37px 0;

        font-family: "Inter", sans-serif;
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
        position: relative;
    }

    .search {
        grid-area: search;
        display: grid;
        grid-template-areas:
            "input"
            "small";
        margin-bottom: 33px;
        z-index: 1; /* otherwise the dropdown will interrupt the selection marker */
    }

    .selectedTags {
        display: flex;
        flex-wrap: wrap;
        gap: 13px;
        grid-area: selectedTags;
        min-height: 32px;

        border-radius: 15px;
    }
</style>
