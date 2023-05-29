<script lang="ts">
    import { onMount } from "svelte";

    export let data: string[];

    const active = "active";
    let items: HTMLUListElement;
    let dots: HTMLOListElement;
    let prev: HTMLButtonElement;
    let next: HTMLButtonElement;
    let current = 0;

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
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="white" />
            <path
                d="M25 7L10 20.0345L25 34"
                stroke="#999999"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
    <button bind:this={next} class="carousel-control next" title="Go to next item">
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="white" />
            <path
                d="M16 34L31 20.9655L16 7"
                stroke="#999999"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        margin: auto;
        padding: 20px 0;
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
        display: flex;
        align-content: center;
        justify-content: center;
        background: unset;
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
        z-index: 1;
    }

    .carousel-dots .dot {
        --size: 1rem;
        padding: 0;
        font-size: 0;
        color: transparent;
        border: 3px solid #ececec;
        background-color: #ececec;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
    }

    .carousel-dots .dot.active {
        background-color: #44ab9f;
    }
</style>
