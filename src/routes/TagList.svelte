<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";

    export let tags: string[];
    export let loading: boolean;

    let displayedTags = tags;
    let displayLength = 5;

    $: (displayedTags = filterSelectedTags($selectedTagsStore));
    $: (displayLength = getDisplayLength(displayedTags));

    //$: (displayLength = displayedTags.length > 5 ? 5 : displayedTags.length);

    function filterSelectedTags(selectedTags: string[]) {
        if (tags) {
            return tags.filter(item => !selectedTags.includes(item));
        }
    }

    function getDisplayLength(displayedTags: string[]) {
        if (displayedTags) {
            return displayedTags.length > 5 ? 5 : displayedTags.length;
        }
    }
</script>

<ul>
    {#each { length: displayLength } as _, i}
        <li>
            {#if loading}
                <span class="dropdownLoader"></span>
            {:else}
                <Tag id={displayedTags[i]} checked={false} />
            {/if}
        </li>
    {/each}
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
        border: 8px solid #70C4B0;
        border-radius: 15px;
        box-sizing: border-box;
        background: #70C4B0;
    }

    .dropdownLoader:before {
        content: '';
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
