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
        // FIXME: replace the url with the real endpoint from our backend
        const url =
            "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_result";
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
        return new Result(json);
    }

    const resultPromise = getGameIdea();
</script>

<div class="gameDesc">
    {#await resultPromise}
        <p>Loading ..</p>
    {:then result}
        <input value={result.title} readonly type="text" />
        <textarea readonly>{result.desc}</textarea>
        <input value={result.mechanics} readonly type="text" />
        <input value={result.style} readonly type="text" />
    {/await}
</div>
