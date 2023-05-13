<script lang="ts">
    import { promptStore, tagsStore } from "../stores";

    class Image {
        title: string;
        url: string;

        constructor(json: any) {
            this.title = json.title;
            this.url = json.url;
        }
    }

    async function getGameIdea(): Promise<Image> {
        // FIXME: replace the url with the real endpoint from our backend
        const url = "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_images";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: $promptStore,
                tags: $tagsStore
            })
        });
        const json = await res.json();
        return new Image(json);
    }

    const resultPromise = getGameIdea();
</script>

<div class="gameDesc">
    {#await resultPromise}
        <p>Rendering Images ..</p>
    {:then image}
        <img src="{image.url}" alt="{image.title}" width="180">
    {/await}
</div>
