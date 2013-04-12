'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});

describe("slugify-directive", function() {
    var elm, scope;

    beforeEach(module("slugifier"));

    beforeEach(inject(function($rootScope, $compile) {
        elm = angular.element('<slugify from="title" to="slug">slug: {{slug}}</slugify>');
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
