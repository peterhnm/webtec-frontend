<script lang="ts">
    import type { Concept } from "./types";
    import TextBox from "./TextBox.svelte";
    import copyBtn from "$lib/images/copyBtn.svg";

    export let data: Concept;
    export let loading: boolean;

    let text: HTMLTextAreaElement;

    function copyToClipboard() {
        const range = document.createRange();
        range.selectNode(text);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        navigator.clipboard.writeText(window.getSelection().toString());
    }
</script>

{#if loading}
    <div class="loading-game-desc">
        <span class="pacman" />
    </div>
{:else}
    <div class="game-desc">
        <div class="game-concept">
            <div class="heading">
                <h2>{data.title}</h2>
                <p>{data.genre}</p>
            </div>
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
        grid-area: desc;
        grid-template: "container" 1fr;
        width: 100%;
        overflow: hidden;
    }

    .game-desc > * {
        grid-area: container;
    }

    * {
        box-sizing: border-box;
    }

    .loading-game-desc {
        grid-area: desc;
        display: grid;
        place-items: center;
    }

    .game-concept {
        height: 100%;
    }

    .game-concept .heading {
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

    .game-concept p {
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 24px;
        font-weight: 600;
    }

    .text-box {
        width: 100%;
        height: 338px;
        max-height: 338px;
        margin: 0;
        padding: 0 8px var(--btn-height) 0;

        outline: none;
        border: none;
        overflow: scroll;

        color: var(--text-col);
        line-height: 19px;
    }

    .copy-btn {
        display: grid;
        position: relative;
        grid-template-columns: auto auto;
        grid-gap: 5px;
        place-self: end;
        place-content: center;
        margin-right: 4px;
        padding: 2px 6px;
        height: calc(var(--btn-height) - 2 * 2px);

        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #999;
        cursor: pointer;
        border-radius: 15px;
        background: white;
    }

    @media (max-width: 480px) {
        .game-desc {
            margin-bottom: 32px;
        }
    }

    /* Loading animation */
    .pacman {
        display: inline-grid;
        margin: auto;
        align-self: center;
        justify-self: center;
        position: relative;
        border: 24px solid var(--button-col);
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
