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

<label for={id}>
    <input {checked} {id} on:click={toggleTag} type="checkbox" />
    {id}
</label>
