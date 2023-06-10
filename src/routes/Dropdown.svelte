<script lang="ts">
    import TagList from "./TagList.svelte";

    export let tags: string[];
    export let search: string;
    export let loading: boolean;
</script>

<div class="dropdown">
    {#if loading}
        <TagList {loading} />
    {:else}
        <TagList {tags} {search} loading={false} />
    {/if}
</div>

<style>
    .dropdown {
        position: absolute;
        left: 0;
        bottom: 100%;

        background: #bee6dc;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border: none;
    }
</style>
