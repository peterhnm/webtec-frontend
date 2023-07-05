<script lang="ts">
    import { selectedTagsStore } from "./stores";
    import minusBtn from "$lib/images/minusBtn.svg";
    import plusBtn from "$lib/images/plusBtn.svg";

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
        <img src={minusBtn} alt="Unselect Button" />
    </label>
{:else}
    <label for={id} class="unchecked">
        {id}
        <input {checked} {id} on:click={toggleTag} type="checkbox" />
        <img src={plusBtn} alt="Select Button" />
    </label>
{/if}

<style>
    input[type="checkbox"] {
        display: none;
    }

    label {
        --height: 32px;
        display: inline-grid;
        grid-template-areas: "text icon";
        grid-gap: 8px;
        align-items: center;
        padding: 2px 8px;
        min-height: calc(var(--height) - 2 * 2px);
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

    img {
        grid-area: icon;
        justify-self: end;
    }
</style>
