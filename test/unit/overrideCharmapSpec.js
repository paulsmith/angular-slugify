"use strict";

describe("slugify-charmap-override", function() {
    var Slug, originalCharmap;

    var slugTestCases = [
        ["hello world", "hillo-world"]
    ];

    beforeEach(module("slugifier"));
    beforeEach(function () {
        module(function (SlugProvider) {
            originalCharmap = originalCharmap || SlugProvider.charmap;
            SlugProvider.charmap["e"] = "i";
        });
    });

    afterAll(function () {
        module(function (SlugProvider) {
            SlugProvider.charmap = originalCharmap;
        });
    });

    describe("slugify", function() {
        it("can override a letter", inject(function(Slug) {
            var input, expected;
            for (var i = 0; i < slugTestCases.length; i++) {
                input = slugTestCases[i][0];
                expected = slugTestCases[i][1];
                expect(Slug.slugify(input)).toEqual(expected);
            }
        }));
    });
});
