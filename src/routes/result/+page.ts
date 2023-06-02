export const prerender = true;
export const ssr = false;

//export const load = (async ({ fetch }): Promise<AiResponse> => {
//    let prompt = "";
//    promptStore.subscribe((value) => {
//        prompt = value;
//    });
//
//    let tags: string[] = [""];
//    selectedTagsStore.subscribe((value) => {
//        tags = value;
//    });
//
//    const url: string = `https://jambuddyserver.onrender.com?theme=${prompt}&tags=${tags}`;
//    const res = await fetch(url);
//    const data = await res.json();
//
//    return {
//        description: data.concept,
//        images: data.images
//    };
//}) satisfies PageLoad;
