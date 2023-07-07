/**
 * Stores are used in Svelte for global states and to communicate between multiple
 * components {@link https://svelte.dev/tutorial/writable-stores}.
 * To assign a value to a store, you can use the $store = "value" abbreviation.
 * To read the value of a store you can use the $store abbreviation.
 */
import { writable } from "svelte/store";

export const promptStore = writable<string>();
export const selectedTagsStore = writable<string[]>([]);
export const headingStore = writable<string>();
