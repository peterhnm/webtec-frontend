import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, waitFor } from "@testing-library/svelte";
import TagList from "./TagList.svelte";

describe("Tags creation", () => {
    // Mocking the global fetch
    beforeEach(() => {
        global.fetch = vi.fn().mockImplementation(() => {
            return Promise.resolve({
                json() {
                    return Promise.resolve({
                        tags: [
                            "Tag 1",
                            "Tag 2",
                            "Tag 3",
                            "Tag 4",
                            "Tag 5",
                            "Tag 6",
                            "Tag 7"
                        ]
                    });
                }
            });
        });
    });

    it("should show five checkboxes", async () => {
        const { getAllByLabelText } = render(TagList);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                "https://d097fa25-5d10-476c-82d0-b8224ef409e9.mock.pstmn.io/get_tags"
            );
            expect(getAllByLabelText(/Tag */)).toHaveLength(7);
        });
    });
});
