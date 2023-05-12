<script lang="ts">
  // Fetch tags from backend
  const getTags = async () => {
    // todo: replace the url with the real endpoint from our backend
    const response = await fetch(
      "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_tags"
    );
    return await response.json();
  };

  const tagsPromise = getTags();
</script>

<div class="tags">
  {#await tagsPromise}
    <p>Loading ...</p>
  {:then tags}
    {#each { length: 5 } as _, i}
      <label>
        <input type="checkbox" />
        {tags.tags[i]}
      </label>
    {/each}
  {/await}
</div>
