<script lang="ts">
    import type { Concept } from "./types";
    import TextBox from "./TextBox.svelte";
    import copyBtn from "$lib/images/copyBtn.svg";
    import { headingStore } from "../stores";

    export let data: Concept;
    export let loading: boolean;

    let text: HTMLTextAreaElement;

    if (loading) {
        $headingStore = "Your game is being generated...";
    } else {
        $headingStore = "Generation complete!\nYour game is:";
    }

    function copyToClipboard() {
        const range = document.createRange();
        range.selectNode(text);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        navigator.clipboard.writeText(window.getSelection().toString());
    }
</script>

{#if loading}
    <div class="loading-container">
        <span class="pacman" />
    </div>
{:else}
    <div class="heading">
        <h2>{data.title}</h2>
        <p>{data.genre}</p>
    </div>
    <div class="game-desc">
        <div class="game-concept">
            <div bind:this={text} class="text-box">
                <TextBox heading={3} label="Key Mechanics" text={data.key_mechanic} />
                <TextBox heading={3} label="Description" text={data.description} />
                <TextBox heading={3} label="Visuals" text={data.visuals} />
                <TextBox heading={3} label="Special" text={data.special} />
            </div>
        </div>
        <button class="svg-button copy-btn" on:click={copyToClipboard}>
            Copy Text
            <img alt="Copy Text" class="svg-button" src={copyBtn} />
        </button>
    </div>
{/if}

<style>
    .game-desc {
        --btn-height: 30px;
        display: grid;
        grid-area: concept;
        grid-template: "container" 1fr;
        width: 400px;
        min-height: 0;
    }

    .game-desc > * {
        grid-area: container;
    }

    * {
        box-sizing: border-box;
    }

    .game-concept {
        min-height: 0;
    }

    .heading {
        grid-area: heading;
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: 12px;
    }

    .heading h2 {
        margin: 0;
        width: 100%;

        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
    }

    .heading p {
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 24px;
        font-weight: 600;
    }

    .text-box {
        --line-height: 19px;
        width: 100%;
        margin: 0 0 calc(var(--line-height) + 6px); /* button should not cover the text */
        padding: 0;

        outline: none;
        border: none;

        color: var(--text-col);
    }

    .copy-btn {
        display: grid;
        position: relative;
        grid-template-columns: auto auto;
        grid-gap: 5px;
        place-self: end;
        place-content: center;
        padding: 2px 6px;
        height: calc(var(--btn-height) - 2 * 2px);
        background: white;

        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #999;
        cursor: pointer;
        border-radius: 15px;
    }

    @media (max-width: 480px) {
        .game-desc {
            margin-bottom: 32px;
        }
    }

    /* Loading animation */
    .loading-container {
        grid-area: heading;
        display: grid;
        margin-top: 6px;
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
