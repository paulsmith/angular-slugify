"use strict";

describe("slugify-filter", function() {
    beforeEach(module("slugifier"));

    it("should slugify passed in text", inject(function(slugifyFilter) {
        expect(slugifyFilter("My First Slug")).toBe("my-first-slug");
    }));
});
