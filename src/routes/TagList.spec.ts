import type { ComponentProps } from "svelte";
import { describe, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/svelte";
import TagList from "./TagList.svelte";

describe("Tags creation", () => {
    const tags = ["Tag 1", "Tag 2", "Tag 3"];
    // Mocking the global fetch
    it("should show three checkboxes", async () => {
        const prop: ComponentProps<TagList> = { tags };
        const { getAllByLabelText } = render(TagList, prop);

        await waitFor(() => {
            expect(getAllByLabelText(/Tag */)).toHaveLength(3);
        });
    });
});
