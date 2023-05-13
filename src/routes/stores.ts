import { writable } from "svelte/store";

export const promptStore = writable<string>();
export const tagsStore = writable<[string]>();
