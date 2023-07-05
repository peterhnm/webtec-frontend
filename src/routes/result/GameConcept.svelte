<script lang="ts">
    import type { Concept } from "./types";
    import TextBox from "./TextBox.svelte";
    import copyBtn from "$lib/images/copyBtn.svg";
    import { headingStore } from "../stores";

    export let data: Concept;

    let heading: HTMLDivElement;
    let text: HTMLDivElement;

    $headingStore = "Generation complete!\nYour game is:";

    function copyToClipboard() {
        // select text
        const range = document.createRange();
        range.setStart(heading, 0);
        range.setEnd(text, 1);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        // copy to clipboard
        navigator.clipboard.writeText(window.getSelection().toString());
    }
</script>

<div bind:this={heading} class="heading">
    <h2>{data.title}</h2>
    <p>{data.genre}</p>
</div>
<div class="concept-container">
    <div bind:this={text} class="game-concept">
        <div class="text-box">
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

<style>
    .concept-container {
        --btn-height: 30px;
        display: grid;
        grid-area: concept;
        grid-template: "container" 1fr;
        margin-bottom: 20px;
        width: 400px;
        min-height: 400px;
        height: min-content;
    }

    .concept-container > * {
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
        margin-bottom: calc(
            2 * var(--line-height) + 4px
        ); /* button should not cover the text */
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
        padding: 2px;
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
        .concept-container {
            margin-bottom: 32px;
        }
    }
</style>
