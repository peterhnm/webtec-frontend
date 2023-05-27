<script lang="ts">
    import { onMount } from "svelte";

    export let data: string[];

    let items: HTMLUListElement;
    let dots: HTMLOListElement;
    let prev: HTMLButtonElement;
    let next: HTMLButtonElement;
    const active = "active";
    let current = 0;

    onMount(() => {
        let total = items.children.length - 1;

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
</script>

<div class="gameImage">
    <div class="carousel-viewport">
        <ul bind:this={items} class="items">
            {#each data as img, i}
                <li class="item">
                    <img src={img} alt="Image {i}" />
                </li>
            {/each}
        </ul>
    </div>
    <button bind:this={prev} class="carousel-control prev" title="Go to previous item">
        <svg viewBox="0 0 256 512">
            <path
                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            />
        </svg>
    </button>
    <button bind:this={next} class="carousel-control next" title="Go to next item">
        <svg viewBox="0 0 256 512">
            <path
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            />
        </svg>
    </button>
    <ol bind:this={dots} class="carousel-dots">
        {#each { length: data.length } as _, i}
            {#if i === 0}
                <li class="dot active">{i + 1}</li>
            {:else}
                <li class="dot">{i + 1}</li>
            {/if}
        {/each}
    </ol>
</div>

<style>
    .gameImage {
        grid-area: image;
        display: grid;
        grid-template: "container" 1fr;
        place-items: center;
        place-content: center;
        overflow: hidden;
        max-width: 400px;
        max-height: 400px;

        background: #bee6dc;
        border-radius: 15px;
    }

    .gameImage > * {
        grid-area: container;
        max-width: 380px;
    }

    .carousel-control.prev {
        place-self: center left;
    }

    .carousel-control.next {
        place-self: center right;
    }

    .carousel-dots {
        place-self: end center;
    }

    /* Other element styles */

    * {
        box-sizing: border-box;
    }

    .carousel-viewport {
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }

    .carousel-viewport .items {
        position: relative;
        display: flex;
        padding: 0;
        transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
    }

    .carousel-viewport .item {
        position: relative;
        overflow: hidden;
        aspect-ratio: 16 / 9;
        min-width: 100%;
        transform: translateZ(0);
    }

    .carousel-viewport img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        user-select: none;
    }

    .carousel-control {
        --size: clamp(2.5rem, 8vw, 4rem);

        position: relative;
        cursor: pointer;
        display: flex;
        align-content: center;
        justify-content: center;
        color: white;
        fill: currentcolor;
        background: dodgerblue;
        border: none;
        width: var(--size);
        height: var(--size);
        padding: 0.25rem;
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

    .carousel-dots {
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }

    .carousel-dots .dot {
        --size: 1rem;
        padding: 0;
        font-size: 0;
        color: transparent;
        border: 3px solid white;
        background-color: white;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
    }

    .carousel-dots .dot.active {
        background-color: dodgerblue;
    }
</style>
