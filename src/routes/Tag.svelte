<script lang="ts">
    import { selectedTagsStore } from "./stores";

    export let id: string;
    export let checked: boolean;

    /**
     * Add or remove tag from the store.
     * @param event
     */
    function toggleTag(event) {
        const el = event.srcElement;
        if (el.checked) {
            // add tag to the store
            selectedTagsStore.update((arr: string[]) => {
                if (!arr.includes(el.id)) {
                    arr.push(el.id);
                }
                return arr;
            });
        } else {
            // remove tag from the store
            selectedTagsStore.update((arr: string[]) => {
                arr = arr.filter((item) => item !== el.id);
                return arr;
            });
        }
    }
</script>

{#if checked}
    <label for={id}>
        {id}
        <input {checked} {id} on:click={toggleTag} type="checkbox" />
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="minus button">
                <circle id="Ellipse 4" cx="10" cy="10" r="10" fill="white" />
                <path
                    id="Vector 3"
                    d="M5 10L15 10"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </g>
        </svg>
    </label>
{:else}
    <label for={id} class="unchecked">
        {id}
        <input {checked} {id} on:click={toggleTag} type="checkbox" />
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
                d="M5 10L15 10"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M10 5V15"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    </label>
{/if}

<style>
    input[type="checkbox"] {
        display: none;
    }

    label {
        display: inline-grid;
        grid-template-areas: "text icon";
        grid-gap: 8px;
        align-items: center;
        padding: 2px 0 2px 8px;
        min-height: 28px;
        background: var(--button-col);

        border: none;
        border-radius: 15px;

        color: var(--link-col);
        font-style: italic;
        line-height: 19px;

        cursor: pointer;
    }

    .unchecked {
        width: 130px;
    }

    svg {
        grid-area: icon;
        justify-self: end;
        margin-right: 8px;
    }
</style>
