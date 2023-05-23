<script lang="ts">
    import type { Image } from "./types";

    export let data: [Image];
</script>

<div class="gameDesc">
    {#each data as img}
        <img src={img.url} alt={img.title} width="180" />
    {/each}
</div>
