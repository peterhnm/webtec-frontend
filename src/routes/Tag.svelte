<script lang="ts">
    export let id: string;
    export let checked: boolean;
    export let checkedTags: [string];

    const toggleTag = (event) => {
        const el = event.srcElement;
        if (el.checked && !checkedTags.includes(el.id)) {
            checkedTags.push(el.id);
        } else if (!el.checked) {
            checkedTags = checkedTags.filter((item) => item !== el.id);
        }
    };
</script>

<label for={id}>
    <input {checked} {id} on:click={toggleTag} type="checkbox" />
    {id}
</label>
