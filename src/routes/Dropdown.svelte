<script lang="ts">
    import TagList from "./TagList.svelte";

    export let tags: string[];
</script>

<div class="dropdown">
    {#if tags}
        <TagList {tags} />
    {:else}
        <p>loading ...</p>
    {/if}
</div>

<style>
    .dropdown {
        position: absolute;
        background: darkgray;
    }
</style>
