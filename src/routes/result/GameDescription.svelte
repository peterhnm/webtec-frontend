<script lang="ts">
    import { promptStore, tagsStore } from "../stores";

    class Result {
        title: string;
        desc: string;
        mechanics: string;
        style: string;

        constructor(json: any) {
            this.title = json.title;
            this.desc = json.desc;
            this.mechanics = json.mechanics;
            this.style = json.style;
        }
    }

    async function getGameIdea(): Promise<Result> {
        console.log(JSON.stringify({
            prompt: $promptStore,
            tags: $tagsStore
        }));
        const url = "";
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
        const { json } = await res.json();
        return new Result(json);
    }

    const resultPromise = getGameIdea();
</script>

<div class="gameDesc">
    {#await resultPromise then result}
        <input value={result.title} readonly type="text" />
        <textarea value={result.desc} readonly />
        <input value={result.mechanics} readonly type="text" />
        <input value={result.style} readonly type="text" />
    {/await}
</div>
