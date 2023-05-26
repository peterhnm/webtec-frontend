<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";

    export let tags: string[];
</script>

<div class="tags">
    <ul>
        {#each { length: 5 } as _, i}
            <li>
                {#if $selectedTagsStore}
                    {#if $selectedTagsStore.includes(tags[i])}
                        <Tag id={tags[i]} checked={true} />
                    {:else}
                        <Tag id={tags[i]} checked={false} />
                    {/if}
                {:else}
                    <Tag id={tags[i]} checked={false} />
                {/if}
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        width: 100px;
        list-style: none;
    }
</style>
