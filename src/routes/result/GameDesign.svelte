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

    const setActiveDot = () => {
        let index = 0;
        dots.childNodes.forEach((el: HTMLElement) => {
            if (el.nodeType === 1) {
                index === current
                    ? el.classList.add(active)
                    : el.classList.remove(active);

                index++;
            }
        });
    };

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
    <button bind:this={prev} class="carousel-control prev" title="Go to previous item">
        <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <g id="left button">
                <circle cx="20" cy="20" fill="white" id="Ellipse 6" r="20" transform="rotate(-180 20 20)" />
                <path d="M20 9L9 20.1034L20 32" id="Vector 3" stroke="#999999" stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3" />
            </g>
        </svg>
    </button>
    <button bind:this={next} class="carousel-control next" title="Go to next item">
        <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <g id="right button">
                <circle cx="20" cy="20" fill="white" id="Ellipse 5" r="20" transform="rotate(-180 20 20)" />
                <path d="M20 32L31 20.8966L20 9" id="Vector 4" stroke="#999999" stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3" />
            </g>
        </svg>
    </button>
    {#if !loading}
        <button class="carousel-download" on:click={downloadImg} title="Download image">
            <svg
                fill="none"
                height="30"
                viewBox="0 0 30 30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="15"
                    cy="15"
                    fill="white"
                    r="15"
                    transform="rotate(-180 15 15)"
                />
                <path
                    d="M23 16.7143V19H7V16.7143M15 17.2857L12.5385 15M15 17.2857L17.4615 15M15 17.2857V7"
                    stroke="#999999"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
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
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .carousel-viewport .items {
        position: relative;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
    }

    .carousel-viewport .item {
        display: flex;
        place-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        aspect-ratio: 16 / 9;
        min-width: 100%;
        transform: translateZ(0);
    }

    .carousel-viewport img {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
        user-select: none;
    }

    .carousel-control {
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
        background: unset;
        touch-action: manipulation;
        transform: translateY(0);
    }

    .carousel-control:active {
        transform: translateY(1px);
    }

    .carousel-control svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .carousel-control.prev {
        place-self: center left;
        margin-left: 18px;
    }

    .carousel-control.next {
        place-self: center right;
        margin-right: 18px;
    }

    .carousel-dots {
        display: flex;
        margin: 0 0 9px;
        padding: 2px;
        place-self: end center;
        gap: 2px;
        background: #fff;
        border-radius: 5px;
        z-index: 1;
    }

    .carousel-dots .dot {
        --size: 6px;
        padding: 0;
        font-size: 0;
        color: transparent;
        background-color: #999;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
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
        transform: translateY(0);
    }

    .carousel-download:active {
        transform: translateY(1px);
    }

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

    @media (max-width: 480px) {
        .game-image {
            margin: 0 0 32px;
            justify-self: center;
        }
    }
</style>
