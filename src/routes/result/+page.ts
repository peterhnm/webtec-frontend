import type { PageLoad } from "./$types";
import type { AiResponse } from "./types";
import { promptStore, selectedTagsStore } from "../stores";

export const prerender = true;
export const ssr = false;

export const load = (async ({ fetch }): Promise<AiResponse> => {
    let prompt = "";
    promptStore.subscribe((value) => {
        prompt = value;
    });

    let tags: string[] = [""];
    selectedTagsStore.subscribe((value) => {
        tags = value;
    });

    const url = "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_result";
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
    const data = await res.json();

    return {
        description: data.description,
        images: data.images
    };
}) satisfies PageLoad;
