<script lang="ts">
    import GameConcept from "./GameConcept.svelte";
    import ImageGallery from "./ImageGallery.svelte";
    import { headingStore, promptStore } from "../stores";
    import { selectedTagsStore } from "../stores.js";
    import type { AiResponse } from "./types";

    async function getData(): Promise<AiResponse> {
        $headingStore = "Your game is being generated...";
        // When developing I mocked the Backend with Postman
        // const url: string = `https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io?theme=${$promptStore}&tags=${$selectedTagsStore}`;
        const url: string = `https://jambuddyserver.onrender.com?theme=${$promptStore}&tags=${$selectedTagsStore}`;
        const res = await fetch(url);
        return await res.json();
    }

    let data = getData();
</script>

<div class="container">
    {#await data}
        <div class="loading-container">
            <span class="pacman" />
        </div>
    {:then res}
        <GameConcept data={res.concept} />
        <ImageGallery data={res.images} />
        <button
            class="app-button"
            on:click={() => {
                data = getData();
            }}
            >Try again
        </button>
        {#if $selectedTagsStore.length > 0}
            <div class="tags">
                <ul class="selected-tags">
                    {#each $selectedTagsStore as tag}
                        <li>{tag}</li>
                    {/each}
                </ul>
                <p>Added Tags</p>
            </div>
        {/if}
    {/await}
</div>

<style>
    .container {
        display: grid;
        grid-template-areas:
            "heading heading"
            "concept image"
            "button button"
            "tags tags";
        grid-template-columns: 400px 400px;
        grid-template-rows: repeat(3, min-content) auto;
        grid-column-gap: 75px;
        margin: 0 auto;
        width: 876px;
    }

    button {
        grid-area: button;
        justify-self: start;
        margin: 0 0 57px;
    }

    .tags {
        grid-area: tags;
    }

    .tags ul {
        list-style: none;
    }

    .tags li {
        --height: 32px;
        padding: 7px 12px;
        min-width: 32px;
        min-height: calc(var(--height) - 2 * 7px);
        border-radius: 15px;
        background: var(--button-col);

        color: var(--link-col);
        font-style: italic;

        float: left;
        text-align: center;
    }

    .tags p {
        color: #4b4b4b;
        font-size: 14px;
        font-weight: 700;
    }

    @media (max-width: 480px) {
        .container {
            grid-template-areas:
                "heading"
                "concept"
                "image"
                "button"
                "tags";
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            width: calc(480px - 2 * 48px);
        }

        button {
            justify-self: center;
            height: 72px;
            width: 100%;
        }
    }

    /* Loading animation */
    .loading-container {
        grid-area: heading;
        display: grid;
        margin: 6px 0 0;
        place-items: center;
    }

    .pacman {
        display: inline-grid;
        margin: auto;
        align-self: center;
        justify-self: center;
        position: relative;
        border: 46px solid var(--button-col);
        border-radius: 50%;
        box-sizing: border-box;
        animation: eat 1s linear infinite;
    }

    .pacman::after,
    .pacman::before {
        content: "";
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        background: #6d6d6d;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        box-sizing: border-box;
        opacity: 0;
        animation: move 2s linear infinite;
    }

    .pacman::before {
        animation-delay: 1s;
    }

    @keyframes eat {
        0%,
        49% {
            border-right-color: var(--button-col);
        }
        50%,
        100% {
            border-right-color: #0000;
        }
    }

    @keyframes move {
        0% {
            left: 75px;
            opacity: 1;
        }
        50% {
            left: 0;
            opacity: 1;
        }
        52%,
        100% {
            left: -5px;
            opacity: 0;
        }
    }
</style>
