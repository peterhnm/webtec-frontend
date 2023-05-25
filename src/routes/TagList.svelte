<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";

    export let tags: string[];
</script>

<div class="tags">
    <ul>
        {#each tags as tag}
            <li>
                {#if $selectedTagsStore}
                    {#if $selectedTagsStore.includes(tag)}
                        <Tag id={tag} checked={true} />
                    {:else}
                        <Tag id={tag} checked={false} />
                    {/if}
                {:else}
                    <Tag id={tag} checked={false} />
                {/if}
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        width: 100px;
    }
</style>
