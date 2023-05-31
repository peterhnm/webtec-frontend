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
        margin: 10px;
        padding: 0;
        list-style: none;
    }

    li {
        margin: 0 0 4px 0;
    }
</style>
