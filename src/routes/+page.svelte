<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { headingStore, promptStore, selectedTagsStore } from "./stores";
    import { onMount } from "svelte";
    import Dropdown from "./Dropdown.svelte";
    import Tag from "./Tag.svelte";

    $headingStore = "Generate your Game Jam Idea within minutes!";

    let promptField: HTMLInputElement;
    let promptFieldDesc: HTMLParagraphElement;
    let promptLabel = "What is the theme of your Game Jam?";
    let searchBar: HTMLInputElement;
    let visible = false;
    let selectedTags: HTMLDivElement;
    let dropdown: HTMLDivElement;
    let searchTerm: string;

    onMount(() => {
        searchBar.addEventListener("focusin", () => {
            visible = true;
        });

        window.addEventListener("click", (event) => {
            // hide Dropdown if we click outside of it
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
            if (!selectedTags) {
                return;
            }

            // eslint-disable-next-line no-undef
            const selectedBoxes: NodeListOf<HTMLInputElement> =
                selectedTags.querySelectorAll('input[type="checkbox"]');
            for (const box of selectedBoxes) {
                box.checked = true;
            }

            // eslint-disable-next-line no-undef
            const dropdownBoxes: NodeListOf<HTMLInputElement> =
                dropdown.querySelectorAll('input[type="checkbox"]');
            for (const box of dropdownBoxes) {
                box.checked = false;
            }
        });
    });

    function processData() {
        if (!$promptStore) {
            promptField.select();
            promptField.style.outline = "2px solid red";
            promptFieldDesc.style.color = "red";
            promptLabel = "Please enter a prompt!";
            return;
        }

        // Redirect to result page
        goto(`${base}/result`);
    }

    async function getData() {
        // When developing I mocked the Backend with Postman
        // const url: string = "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags";
        const url: string = "https://jambuddyserver.onrender.com/tags";
        const res = await fetch(url);
        return await res.json();
    }

    const data = getData();
</script>

<div class="main">
    <p class="gamejam-desc">
        Having trouble coming up with a Game Jam Idea? Enter your Theme below and let
        ChatGTP and DALL-E help you with that! Optionally, you can add Tags if you
        already know the direction you want your game to take.
    </p>

    <div class="prompt">
        <label bind:this={promptFieldDesc}>
            <input
                bind:this={promptField}
                bind:value={$promptStore}
                placeholder="...enter Game Jam Theme here"
                type="text"
            />
            {promptLabel}
        </label>
        <button class="app-button" on:click={processData}>Generate</button>
    </div>

    <div class="search-container">
        <div bind:this={dropdown}>
            {#if visible}
                {#await data}
                    <Dropdown loading={true} />
                {:then tags}
                    <Dropdown {tags} search={searchTerm} loading={false} />
                {/await}
            {/if}
        </div>

        <div class="search">
            <label>
                <input
                    bind:this={searchBar}
                    bind:value={searchTerm}
                    placeholder="...search for game tags"
                    type="text"
                />
                Add tags to specify what kind of game you want.
            </label>
        </div>
    </div>

    {#if $selectedTagsStore.length > 0}
        <div class="selected-tags-container">
            <div bind:this={selectedTags} class="selected-tags">
                {#if $selectedTagsStore}
                    {#each $selectedTagsStore as tag}
                        <Tag id={tag} checked={true} />
                    {/each}
                {/if}
            </div>
            <p class="selected-tags-desc">Added Tags</p>
        </div>
    {/if}
</div>

<style>
    .main {
        --label-margin: 7px;
        display: grid;
        grid-template-areas:
            "description"
            "prompt"
            "search"
            "selected-tags";
        grid-template-rows: repeat(3, min-content) auto;
        margin: 0 auto;
        width: 533px;
    }

    input[type="text"] {
        margin: 0 0 var(--label-margin);
    }

    .gamejam-desc {
        grid-area: description;
        margin: 0 0 23px;
        min-height: 81px;
        color: var(--text-col);
    }

    .prompt {
        grid-area: prompt;
        margin: 0 0 97px;
        display: flex;
        align-items: baseline;
        gap: 33px;
    }

    .prompt input {
        max-width: calc(358px - 2 * var(--padding));
        width: 100%;
    }

    .search-container {
        grid-area: search;
        position: relative; /* because of the dropdown-menu */
        margin-bottom: 46px;
    }

    .selected-tags-container {
        grid-area: selected-tags;
    }

    .selected-tags-desc {
        width: 100%;
        color: var(--label-col);
        font-size: 14px;
        font-weight: 700;
    }

    @media (max-width: 480px) {
        .main {
            --margin: 48px;
            width: calc(480px - 2 * var(--margin));
        }
    }
</style>
