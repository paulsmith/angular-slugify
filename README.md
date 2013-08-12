# angular-slugify

Provides “slugification” for AngularJS in the form of a service, filter, and
a directive.

## What is a slug?

A slug is that final portion of a URL which is derived from some other piece of
information, usually the title of a page.

For example, “Man Bites Dog” might produce the slug `man-bites-dog` for the URL:

`http://example.com/2013/04/man-bites-dog.html`

## Demo

[Click here for demo](http://paulsmith.github.io/angular-slugify/).

## Usage

Include `angular-slugify.js` in your HTML document somewhere after you have set
up AngularJS.

```html
<script src="angular-slugify.js">`
```

Make `slugifier` a dependency in your AngularJS app.

```js
angular.module("myApp", ["slugifier"]);
```

### Service

The `Slug` service provides a single function `slugify` that takes a string
input as argument and returns the slugified string.

```js
function MyCtrl($scope, Slug) {
    $scope.slugify = function(input) {
        $scope.mySlug = Slug.slugify(input);
    };
}
```

### Filter

The `slugify` filter slugifies any text passed to it in an AngularJS curly-brace
expression.

```html
<input type="text" ng-model="title">
<p>Slug: {{title | slugify}}</p>
```

### Directive

The `slug` directive is a way to declaratively say one model is the
slugification of another.

```html
<slug from="post.title" to="post.slug">My slug is {{post.slug}}</slug>
<p>It also works out here: {{post.slug}}</p>
```

The `from` attribute is the name of the model in the current scope you want to
slugify. The `to` attribute is the name of the model you want to be
automatically updated with the slugification whenever `from` changes.

## Tests

```bash
$ npm -g install karma
$ ./test/run-tests.sh
```

## License

Copyright © 2013 Paul Smith <paulsmith@pobox.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
