export const prerender = true;
export const ssr = false;

//export const load = (async ({ fetch }) => {
//    const url: string = "https://jambuddyserver.onrender.com/tags";
//    const response = await fetch(url);
//    const data = await response.json();
//
//    return {
//        tags: data
//    };
//}) satisfies PageLoad;
