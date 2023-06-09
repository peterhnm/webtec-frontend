<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";

    export let tags: string[];
    export let loading: boolean;

    let displayedTags = tags;
    let displayLength = 5;

    $: displayedTags = filterSelectedTags($selectedTagsStore);
    $: displayLength = getDisplayLength(displayedTags);

    function filterSelectedTags(selectedTags: string[]) {
        if (tags) {
            return tags.filter((item) => !selectedTags.includes(item));
        }
    }

    function getDisplayLength(displayedTags: string[]) {
        if (displayedTags) {
            return displayedTags.length > 5 ? 5 : displayedTags.length;
        }
    }
</script>

<ul>
    {#if loading}
        {#each { length: 5 } as _, i}
            <li>
                <span class="dropdownLoader" />
            </li>
        {/each}
    {:else}
        {#each { length: displayLength } as _, i}
            <li>
                <Tag id={displayedTags[i]} checked={false} />
            </li>
        {/each}
    {/if}
</ul>

<style>
    ul {
        display: table;
        margin: 17px 19px 10px;
        padding: 0;
        list-style: none;
    }

    li:not(:last-child) {
        margin: 0 0 14px 0;
    }

    .dropdownLoader {
        display: flex;
        position: relative;
        height: 32px;
        width: 138px;
        border: 8px solid #70c4b0;
        border-radius: 15px;
        box-sizing: border-box;
        background: #70c4b0;
    }

    .dropdownLoader:before {
        content: "";
        position: absolute;
        align-self: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        animation: ballbns 2s ease-in-out infinite alternate;
    }

    @keyframes ballbns {
        0% {
            left: 0;
            transform: translateX(0%);
        }
        100% {
            left: 100%;
            transform: translateX(-100%);
        }
    }
</style>
