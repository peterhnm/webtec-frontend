<script lang="ts" xmlns="http://www.w3.org/1999/html">
    import { onMount } from "svelte";

    export let data: string[];
    export let loading: boolean;

    const active = "active";
    let items: HTMLUListElement;
    let dots: HTMLOListElement;
    let prev: HTMLButtonElement;
    let next: HTMLButtonElement;
    let current = 0;

    onMount(() => {
        let total = items.children.length - 1;

        const scrollToCurrent = () => {
            items.style.transform = `translateX(${current * -100}%`;
            setActiveDot();
        };

        const scrollPrev = () => {
            if (current === 0) return;
            current--;
            scrollToCurrent();
        };

        const scrollNext = () => {
            if (current === total) return;
            current++;
            scrollToCurrent();
        };

        prev.addEventListener("click", scrollPrev);
        next.addEventListener("click", scrollNext);
    });

    function setActiveDot() {
        let index = 0;
        dots.childNodes.forEach((el: HTMLElement) => {
            if (el.nodeType === 1) {
                index === current
                    ? el.classList.add(active)
                    : el.classList.remove(active);

                index++;
            }
        });
    }

    async function downloadImg() {
        const href = `data:image/png;base64,${data[current]}`;
        const anchorElement = document.createElement("a");
        anchorElement.href = href;
        anchorElement.download = `jambuddy_image_${current + 1}`;

        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
    }
</script>

<div class="game-image">
    <div class="carousel-viewport">
        <ul bind:this={items} class="items">
            {#if loading}
                {#each { length: 2 } as _}
                    <li class="item">
                        <span class="img-loader" />
                    </li>
                {/each}
            {:else}
                {#each data as img, i}
                    <li class="item">
                        <img src="data:image/png;base64,{img}" alt="Image {i}" />
                    </li>
                {/each}
            {/if}
        </ul>
    </div>
    <button bind:this={prev} class="svg-button carousel-control prev" title="Go to previous item">
        <svg
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="left button">
                <circle
                    cx="20"
                    cy="20"
                    fill="white"
                    id="Ellipse 6"
                    r="20"
                    transform="rotate(-180 20 20)"
                />
                <path
                    d="M22 9L11 20.1034L22 32"
                    id="Vector 3"
                    stroke="#999999"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                />
            </g>
        </svg>
    </button>
    <button bind:this={next} class="svg-button carousel-control next" title="Go to next item">
        <svg
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="right button">
                <circle
                    cx="20"
                    cy="20"
                    fill="white"
                    id="Ellipse 5"
                    r="20"
                    transform="rotate(-180 20 20)"
                />
                <path
                    d="M18 32L29 20.8966L18 9"
                    id="Vector 4"
                    stroke="#999999"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                />
            </g>
        </svg>
    </button>
    {#if !loading}
        <button class="svg-button carousel-download" on:click={downloadImg} title="Download image">
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="download button">
                    <circle
                        id="Ellipse 4"
                        cx="15"
                        cy="15"
                        r="15"
                        transform="rotate(-180 15 15)"
                        fill="white"
                    />
                    <path
                        id="Vector 5"
                        d="M23 16.7143V19H7V16.7143M15 17.2857L12.5385 15M15 17.2857L17.4615 15M15 17.2857V7"
                        stroke="#999999"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </g>
            </svg>
        </button>
    {/if}
    <ol bind:this={dots} class="carousel-dots">
        {#if loading}
            {#each { length: 2 } as _, i}
                {#if i === 0}
                    <li class="dot active">{i + 1}</li>
                {:else}
                    <li class="dot">{i + 1}</li>
                {/if}
            {/each}
        {:else}
            {#each { length: data.length } as _, i}
                {#if i === 0}
                    <li class="dot active">{i + 1}</li>
                {:else}
                    <li class="dot">{i + 1}</li>
                {/if}
            {/each}
        {/if}
    </ol>
</div>

<style>
    .game-image {
        grid-area: image;
        display: grid;
        grid-template-areas: "container";
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;

        width: 400px;
        height: 400px;
        justify-self: end;

        border-radius: 15px;
        overflow: hidden;
    }

    .game-image > * {
        grid-area: container;
    }

    * {
        box-sizing: border-box;
    }

    .carousel-viewport {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .carousel-viewport .items {
        display: flex;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
    }

    .carousel-viewport .item {
        display: flex;
        position: relative;
        min-width: 100%;
        place-items: center;
        justify-content: center;
        overflow: hidden;
        aspect-ratio: 16 / 9;
        transform: translateZ(0);
    }

    .carousel-viewport img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        user-select: none;
    }

    .carousel-control {
        display: flex;
        position: relative;
        align-content: center;
        justify-content: center;
        background: unset;
        touch-action: manipulation;
    }

    .carousel-control svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .carousel-control.prev {
        margin-left: 18px;
        place-self: center left;
    }

    .carousel-control.next {
        margin-right: 18px;
        place-self: center right;
    }

    .carousel-dots {
        display: flex;
        margin: 0 0 9px;
        padding: 2px;
        place-self: end center;
        gap: 2px;
        border-radius: 5px;
        background: #fff;
        z-index: 1;
    }

    .carousel-dots .dot {
        --size: 6px;
        padding: 0;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        color: transparent;
        background-color: #999;
        font-size: 0;
    }

    .carousel-dots .dot.active {
        background-color: #535353;
    }

    .carousel-download {
        display: flex;
        place-self: end;
        margin: 0 16px 9px 0;
        padding: 0;
        background: unset;
        z-index: 1;
    }

    @media (max-width: 480px) {
        .game-image {
            margin-bottom: 64px;
            justify-self: center;
        }
    }

    /* loading animation */
    .img-loader {
        display: inline-block;
        width: 400px;
        height: 400px;
        background: linear-gradient(0.25turn, transparent, #fff, transparent),
        linear-gradient(#ddd, #ddd);
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: -315px 0, 0 0, 15px 140px, 65px 145px;
        animation: img-loading 1.5s infinite;
    }

    @keyframes img-loading {
        to {
            background-position: 315px 0, 0 0, 15px 140px, 65px 145px;
        }
    }
</style>
