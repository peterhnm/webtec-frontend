import type { PageLoad } from "./$types";

export const prerender = true;
export const ssr = false;

export const load = (async ({ fetch }) => {
    // FIXME: replace the url with the real endpoint from our backend
    const url: string =
        "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/tags";
    const response = await fetch(url);
    const data = await response.json();

    return {
        tags: data
    };
}) satisfies PageLoad;
