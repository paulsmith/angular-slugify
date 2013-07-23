"use strict";

var slugTestCases = [
    ["", ""]
    ,[" Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/",
      "jack-jill-like-numbers-123-and-4-and-silly-characters"]
    ,["Un éléphant à l'orée du bois", "un-elephant-a-loree-du-bois"]
    ,["Iñtërnâtiônàlizætiøn", "internationalizaetion"]
];

describe("slugify-service", function() {
    beforeEach(module("slugifier"));

    describe("slugify", function() {
        it("should produce a correct slug from string input", inject(function(Slug) {
            var input, expected;
            for (var i = 0; i < slugTestCases.length; i++) {
                input = slugTestCases[i][0];
                expected = slugTestCases[i][1];
                expect(Slug.slugify(input)).toEqual(expected);
            }
        }));
    });
});
