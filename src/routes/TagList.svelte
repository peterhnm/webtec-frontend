<script lang="ts">
    import Tag from "./Tag.svelte";
    import { selectedTagsStore } from "./stores";
    import { stringSimilarity } from "string-similarity-js";

    export let tags: string[];
    export let search: string;
    export let loading: boolean;

    // We have set the filter very generously to get results even for typos
    const MIN_ACCURACY = 0.5;

    let filteredTags: string[];
    let filteredTagsLength: number;

    // Filters tags each time $selectedTagsStore or search is changed
    $: filteredTags = filterTags($selectedTagsStore, search);
    $: filteredTagsLength = getDisplayedTagsLength(filteredTags);

    /**
     * Filter tags by the search term and already selected tags.
     * @param selectedTags Already selected tags
     * @param searchTerm The search term entered by the user
     */
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

    /**
     * Determines the number of tags displayed. We only want to display a maximum of
     * five tags at a time.
     * @param displayedTags All tags after filtering.
     */
    function getDisplayedTagsLength(displayedTags: string[]) {
        if (displayedTags) {
            return displayedTags.length > 5 ? 5 : displayedTags.length;
        }
    }

    /**
     * Filter tags by search term.
     * @param tag
     * @param searchTerm
     */
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
    {:else if filteredTagsLength > 0}
        {#each { length: filteredTagsLength } as _, i}
            <li>
                <Tag id={filteredTags[i]} checked={false} />
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
