import type { ComponentProps } from "svelte";
import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/svelte";
import TagList from "./TagList.svelte";

describe("Test displayed tags", () => {
    const tags = ["Tag 1", "Tag 2", "Shooter"];
    it("should show three checkboxes", async () => {
        const prop: ComponentProps<TagList> = { tags, search: "", loading: false };
        const { getAllByLabelText } = render(TagList, prop);

        await waitFor(() => {
            expect(getAllByLabelText(/.*/)).toHaveLength(3);
        });
    });
    it("should show one checkboxes", async () => {
        const prop: ComponentProps<TagList> = { tags, search: "Shoo", loading: false };
        const { getAllByLabelText } = render(TagList, prop);

        await waitFor(() => {
            expect(getAllByLabelText(/.*/)).toHaveLength(1);
        });
    });
});
