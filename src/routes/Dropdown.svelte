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
        grid-column: 1;
        grid-row: 1 / 3;

        justify-self: start;
        align-self: end;
        max-height: 240px;

        background: #BEE6DC;
        border: solid #000 1px;
        border-radius: 3px;
    }
</style>
