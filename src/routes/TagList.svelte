<script lang="ts">
    import Tag from "./Tag.svelte";

    export let tags: string[];
    export let checkedTags: string[] = [];
</script>

<div class="tags">
    {#each tags as tag}
        {#if checkedTags.includes(tag)}
            <Tag id={tag} checked={true} bind:checkedTags />
        {:else}
            <Tag id={tag} checked={false} bind:checkedTags />
        {/if}
    {/each}
</div>
