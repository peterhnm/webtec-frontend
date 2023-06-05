<script lang="ts">
    import TagList from "./TagList.svelte";

    export let tags: string[];
</script>

<div class="dropdown">
    <TagList {tags} />
</div>

<style>
    .dropdown {
        grid-column: 1;
        grid-row: 1 / 3;

        justify-self: start;
        align-self: end;
        max-height: 240px;
        margin: 0 0 2px 0;

        background: #bee6dc;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border: none;
    }
</style>
