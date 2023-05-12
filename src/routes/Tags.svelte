<script lang="ts">
  // Fetch tags from backend
  const getTags = async () => {
    // todo: replace the url with the real endpoint from our backend
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
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
        <input type="checkbox">
        {tags.results[i].name}
      </label>
    {/each}
  {/await}
</div>