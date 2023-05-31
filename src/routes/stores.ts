import { writable } from "svelte/store";

export const promptStore = writable<string>();
export const selectedTagsStore = writable<string[]>([]);
export const headingStore = writable<string>();
