"use strict";

var slugTestCases = [
    ["", ""]
    ,[" Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/",
      "jack-jill-like-numbers-123-and-4-and-silly-characters"]
    ,["Un éléphant à l'orée du bois", "un-elephant-a-loree-du-bois"]
    ,["Iñtërnâtiônàlizætiøn", "internationalizaetion"]
];

var asciiTestCases = [
  ["", ""]
    ,[" Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/",
      " Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/"]
    ,["Un éléphant à l'orée du bois", "Un elephant a l'oree du bois"]
    ,["Iñtërnâtiônàlizætiøn", "Internationalizaetion"]
];


var runTestCases = function(testCasess, fn) {
    var input, expected;
    for (var i = 0; i < testCasess.length; i++) {
        input = testCasess[i][0];
        expected = testCasess[i][1];
        expect(fn(input)).toEqual(expected);
    }
}

describe("slugify-service", function() {
    beforeEach(module("slugifier"));

    describe("slugify", function() {
        it("should produce a correct slug from string input", inject(function(Slug) {
            runTestCases(slugTestCases, Slug.slugify);
        }));
    });
    describe("toAscii", function() {
        it("should produce a correct ascii only from string input", inject(function(Slug) {
            runTestCases(asciiTestCases, Slug.toAscii);
        }));
    });
});
