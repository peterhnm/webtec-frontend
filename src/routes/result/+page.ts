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

    const url: string = `https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io?theme=${prompt}&tags=${tags}`;
    const res = await fetch(url);
    const data = await res.json();

    return {
        description: data.concept,
        images: data.images
    };
}) satisfies PageLoad;
