import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, waitFor } from "@testing-library/svelte";
import Tags from "./Tags.svelte";

describe("Tags creation", () => {
    // Mocking the global fetch
    beforeEach(() => {
        global.fetch = vi.fn().mockImplementation(() => {
            return Promise.resolve({
                json() {
                    return Promise.resolve({
                        results: [
                            { name: "Tag 1" },
                            { name: "Tag 2" },
                            { name: "Tag 3" },
                            { name: "Tag 4" },
                            { name: "Tag 5" },
                            { name: "Tag 6" },
                            { name: "Tag 7" }
                        ]
                    });
                }
            });
        });
    });

    it("should show five checkboxes", async () => {
        const { getAllByLabelText } = render(Tags);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
            );
            expect(getAllByLabelText(/Tag */)).toHaveLength(5);
        });
    });
});
