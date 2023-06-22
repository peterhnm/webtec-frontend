<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";
    import { stringSimilarity } from "string-similarity-js";

    export let tags: string[];
    export let search: string;
    export let loading: boolean;

    const MIN_ACCURACY = 0.3;

    let displayedTags: string[];
    let displayLength: number;

    $: displayedTags = filterTags($selectedTagsStore, search);
    $: displayLength = getDisplayLength(displayedTags);

    function filterTags(selectedTags: string[], searchTerm: string) {
        if (tags) {
            return tags.filter((tag) => {
                if (searchTerm) {
                    return (
                        !selectedTags.includes(tag) &&
                        (searchFilter(tag, searchTerm) ||
                            tag.toLowerCase().includes(searchTerm.toLowerCase()))
                    );
                } else {
                    return !selectedTags.includes(tag);
                }
            });
        }
    }

    function getDisplayLength(displayedTags: string[]) {
        if (displayedTags) {
            return displayedTags.length > 5 ? 5 : displayedTags.length;
        }
    }

    function searchFilter(tag: string, searchTerm: string): boolean {
        return (
            stringSimilarity(tag.toLowerCase(), searchTerm.toLowerCase(), 1) >=
            MIN_ACCURACY
        );
    }
</script>

<ul>
    {#if loading}
        {#each { length: 5 } as _, i}
            <li>
                <span class="loader-dropdown" />
            </li>
        {/each}
    {:else if displayLength > 0}
        {#each { length: displayLength } as _, i}
            <li>
                <Tag id={displayedTags[i]} checked={false} />
            </li>
        {/each}
    {:else}
        <li><p>Nothing found</p></li>
    {/if}
</ul>

<style>
    ul {
        display: table;
        margin: 17px 19px 11px;
        padding: 0;
        list-style: none;
    }

    li:not(:last-child) {
        margin: 0 0 14px 0;
    }

    li p {
        color: var(--link-col);
        font-weight: 600;
    }

    .loader-dropdown {
        display: flex;
        position: relative;
        height: 32px;
        width: 138px;
        background: var(--button-col);

        border: 8px solid var(--button-col);
        border-radius: 15px;
        box-sizing: border-box;
    }

    .loader-dropdown:before {
        position: absolute;
        width: 20px;
        height: 20px;
        align-self: center;
        background: white;

        content: "";
        border-radius: 50%;
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
