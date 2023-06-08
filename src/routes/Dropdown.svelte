<script lang="ts">
    import TagList from "./TagList.svelte";

    async function getData() {
        const url: string =
            "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags";
        const res = await fetch(url);
        return await res.json();
    }

    const data = getData();
</script>

<div class="dropdown">
    {#await data}
        <p>loading ...</p>
    {:then tags}
        <TagList {tags} />
    {/await}
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
