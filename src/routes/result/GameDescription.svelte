<script lang="ts">
    import type { Concept } from "./types";

    export let data: Concept;
    export let loading: boolean;

    let text: HTMLTextAreaElement;

    function copyToClipboard() {
        text.select();
        text.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(text.value);
    }
</script>

{#if loading}
    <div class="loading-gameDesc">
        <span class="pacman" />
    </div>
{:else}
    <div class="gameDesc">
        <div class="gameConcept">
            <p>{data.title}</p>
            <textarea bind:this={text} readonly>{data.description}</textarea>
        </div>
        <button class="copyBtn" on:click={copyToClipboard}>
            Copy Text
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="15"
                    cy="15"
                    r="15"
                    transform="rotate(-180 15 15)"
                    fill="white"
                />
                <path
                    d="M16 11H9V22H16V11Z"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linejoin="round"
                />
                <path
                    d="M21 8H14V19H21V8Z"
                    fill="white"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    </div>
{/if}

<style>
    .gameDesc {
        display: grid;
        grid-area: desc;
        grid-template: "container" 1fr;
        width: 100%;
    }

    .gameDesc > * {
        grid-area: container;
    }

    * {
        box-sizing: border-box;
    }

    .loading-gameDesc {
        grid-area: desc;
        display: grid;
        place-items: center;
    }

    .gameDesc p {
        margin: 0 0 18px 0;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;

        color: #333333;
    }

    .gameDesc textarea {
        width: 100%;
        height: 338px;
        max-width: 400px;
        max-height: 338px;
        margin: 0;
        padding: 0;

        outline: none;
        border: none;
        resize: none;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #333333;
    }

    .copyBtn {
        position: relative;
        place-self: end;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 5px;
        place-items: center;

        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #999;
        cursor: pointer;
        border-radius: 15px;
        background: unset;
        padding: 2px;

        transform: translateY(0);
    }

    .copyBtn:active {
        transform: translateY(1px);
    }

    .pacman {
        display: inline-grid;
        margin: auto;
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
