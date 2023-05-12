<script lang="ts">
    export let prompt: string;
    export let tags: [string];

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

    async function getDescription(prompt: string, tags: [string]): Promise<Result> {
        const url = "";
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt,
                tags
            })
        });
        const json = await res.json();
        return new Result({ json });
    }

    const resultPromise = await getDescription(prompt, tags);
</script>

<div class="gameDesc">
    {#await resultPromise then result}
        <input value={result.title} readonly type="text" />
        <textarea value={result.desc} readonly />
        <input value={result.mechanics} readonly type="text" />
        <input value={result.style} readonly type="text" />
    {/await}
</div>
