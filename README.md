<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="300" alt="Angular Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Works using <a href="https://angular.io/" target="_blank">Angular</a> framework.</p>

# Installation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.
```bash
$ npm install
```

# Running the app

```bash
$ npm run start
```
# Documentation

## File Naming for Class

```ts
export class UsersController {} // users.controller.ts
class PremiumFeaturesService {} // premium-features.service.ts
class CreateProductDto {} // create-product.dto.ts
```

## Index Exporting

```diff
- import { FooController } from './controllers/foo.controller';
+ import { FooController, BarController } from './controllers';
```

Don't use a path that ends with a dot.

```diff
- import { BarService } from '..';
+ import { BarService } from '../providers';
```

## Variables naming

```diff
# Bad
- const MyVariable;

# Good
+ let myVariable;
# Use const when it's possible
+ const myVariable;
```

Don't use var when it possible

```diff
# Bad
- var myVariable;
```

## Class naming

```diff
# Bad
- class foo {}

# Good
+ class Foo {}
```
Class members and methods

```diff
class Foo {
  # Bad
- Bar: number;
- Baz() { }

# Good
+ bar: number;
+ baz() { }
}
```

## Interface Naming

```diff
# Bad
- interface user {}
- interface User {}

# Good
+ interface IUser {}
```

## Type Naming

```diff
# Bad
- type foo = Smth;

# Good
+ type Foo = Smth;
```

## Namespace Naming

```diff
# Bad
- namespace foo {}

# Good
+ namespace Foo {}
```

## Enum Naming

```diff
# Bad
- enum color {}

# Good
+ enum Color {}
```

Enum members

```diff
enum color {
# Bad
- red
- Red
# Good
+ RED
}
```

## Formatting

Use `;`

```diff
# Bad
- const foo = 'foo'

# Good
+ const foo = 'foo';
```

Use `{}`

```diff
# Bad
- if (foo) return true;
- if (foo)
-   return true;

# Good
+ if (foo) {
+   return true;
+ }

+ if (foo) {
+   doo++;
+ } else {
+   goo();
+   doo--;
+ }
```

Space before type

```diff
# Bad
- const foo:Foo = {};

# Good
+ const foo: Foo = {};
```

Use access modificators inside class

```diff
class Foo {
# Bad
- doo: Doo;

# Good
+ public doo: Doo;
+ private goo: Goo;
}
```

Annotate types

```diff
class Foo {
# Bad
- public doo = '';
- public goo() {}
  
# Good
+ public doo: string = '';
+ public goo(): void {}
}
```

Prefer single quotes `'`

```diff
# Bad
- "string"

# Good
+ 'string'
```
Prefer `${}`

```diff
# Bad
- 'point: ' + x;

# Good
+ `point: ${x}`;
```

Tabulation `2` spaces
```ts
export class Foo {
  public doo(): boolean {
    return true;
  }
}
```

Annotate arrays

```ts
class Doo {
  public foos: Foo[] ;
}
```

Truthy check

```diff
# Bad
- if (error === true)

# Good
+ if (error)
```

Use `type` when you might need a union or intersection

```ts
type Foo = number | { someProperty: number }
```

Use interface when you want extends or implements

```ts
interface IFoo {
  foo: string;
}
interface IFooBar extends IFoo {
  bar: string;
}
class X implements IFooBar {
  foo: string;
  bar: string;
}
```

Use conditional ternary operator

```diff
# Bad
- if (foo) {
-   doo = 1;
- } else {
-   doo = 2;
- }

# Good
+ doo = foo ? 1 : 2;
```

Use JS methods when it's possible

```diff
# Bad
- for (let i = 0; i < array.length; ++i) {
-   newArray.push(array[i]);
- }

- for (let item of array) {
-   newArray.push(item);
- }

# Good
+ newArray = array.map((item) => item);
```
