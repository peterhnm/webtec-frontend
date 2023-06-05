<script lang="ts">
    import { selectedTagsStore } from "./stores";

    export let id: string;
    export let checked: boolean;

    const toggleTag = (event) => {
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
    };
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
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
                d="M3 10L17 10"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    </label>
{:else}
    <label for={id} class="unchecked">
        {id}
        <input {checked} {id} on:click={toggleTag} type="checkbox" />
        <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" fill="white" r="10" />
            <path
                d="M3 10L17 10"
                stroke="#999999"
                stroke-linecap="round"
                stroke-width="2"
            />
            <path
                d="M10 3L10 17"
                stroke="#999999"
                stroke-linecap="round"
                stroke-width="2"
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
        cursor: pointer;

        border: none;
        border-radius: 15px;

        font-family: "Inter", sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        background: #70c4b0;
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
