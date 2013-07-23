"use strict";

describe("slugify-directive", function() {
    var elm, scope;

    beforeEach(module("slugifier"));

    beforeEach(inject(function($rootScope, $compile) {
        elm = angular.element('<slug from="title" to="slug">slug: {{slug}}</slug>');
        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    it("should populate a model with the slugification of another", function() {
        scope.$apply(function() {
            scope.title = "My First Slug";
        });
        expect(elm.text()).toBe("slug: my-first-slug");
        expect(scope.slug).toBe("my-first-slug");
    });
});
