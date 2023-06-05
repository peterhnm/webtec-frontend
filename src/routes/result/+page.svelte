<script lang="ts">
    import { invalidate } from "$app/navigation";
    import GameDescription from "./GameDescription.svelte";
    import GameDesign from "./GameDesign.svelte";
    import { headingStore, promptStore } from "../stores";
    import { selectedTagsStore } from "../stores.js";
    import type { AiResponse } from "./types";

    $headingStore = "Generation complete!\nYour game is:";

    async function getData(): Promise<AiResponse> {
        const url: string = `https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io?theme=${$promptStore}&tags=${$selectedTagsStore}`;
        const res = await fetch(url);
        return await res.json();
    }

    function reload() {
        // execute the load function again = new post request
        invalidate((url) => url.pathname === `/`);
    }

    const data = getData();
</script>

{#await data}
    <div class="main-loader">
        <span class="pacman" />
        <span class="loader">Loading</span>
    </div>
{:then res}
    <div class="main">
        <GameDescription data={res.concept} />
        <GameDesign data={res.images} />
        <button on:click={reload}>Try again</button>
    </div>
{/await}

<style>
    .main {
        display: grid;
        grid-template-areas:
            "desc image"
            "button button";
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 72px;
        grid-column-gap: 5px;
        grid-row-gap: 15px;
        width: 100%;
        max-width: 875px;
    }

    .main-loader {
        display: grid;
    }

    button {
        grid-area: button;
        justify-self: start;
    }

    @media (max-width: 480px) {
        .main {
            grid-template-areas:
                "image"
                "desc"
                "button";
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            place-items: center;
            place-content: center;
        }

        button {
            justify-self: center;
            height: 72px;
        }
    }

    /* ------ Pacman -----> */
    .pacman {
        grid-column: 1/2;
        grid-row: 1;
        align-self: center;
        justify-self: center;
        position: relative;
        border: 24px solid #44ab9f;
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
        background: #999;
        width: 15px;
        height: 15px;
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
            border-right-color: #44ab9f;
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
            left: 0px;
            opacity: 1;
        }
        52%,
        100% {
            left: -5px;
            opacity: 0;
        }
    }

    /* <----- Pacman ------ */

    /* ------ Loader -----> */
    .loader {
        grid-column: 1/2;
        grid-row: 2;
        align-self: start;
        justify-self: center;
        color: #999;
        display: inline-block;
        position: relative;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
    }

    .loader::after {
        content: "";
        width: 4px;
        height: 4px;
        background: currentColor;
        position: absolute;
        bottom: 5px;
        right: -8px;
        box-sizing: border-box;
        animation: animloader 1s linear infinite;
    }

    @keyframes animloader {
        0% {
            box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
        }
        50% {
            box-shadow: 10px 0 #999, 20px 0 rgba(255, 255, 255, 0);
        }
        100% {
            box-shadow: 10px 0 #999, 20px 0 #999;
        }
    }

    /* <----- Loader ------ */
</style>
