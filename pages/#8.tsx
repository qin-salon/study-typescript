/*====================================================

【TypeScript入門 #8】Intersection Types（交差型）、Union Types（共用体型・合併型）

====================================================*/

/*====================================================

Intersection Types(交差型)

====================================================*/

// type Foo = {
//   a: number;
//   b: string;
// };

// type Bar = {
//   c: boolean;
// };

// type FooBar = Foo & Bar;

// const Test: FooBar = {
//   a: 1,
//   b: "2",
//   c: true,
// };

/*====================================================

Intersection Typesとプリミティブ型

====================================================*/

// type Foo = string;
// type Bar = number;

// type FooBar = Foo & Bar;

/*====================================================

Union Types（共用体型・合併型）

====================================================*/

// type Foo = {
//   a: number;
//   b: string;
// };

// type Bar = {
//   c: boolean;
// };

// type FooBar = Foo | Bar;

// const test01: FooBar = {
//   c: true,
// };

// const test02: FooBar = {
//   a: 1,
//   b: "2",
//   c: true,
// };

/*====================================================

Union Typesの絞り込み(in演算子)

====================================================*/

// type Foo = {
//   a: number;
//   b: string;
// };

// type Bar = {
//   a: string;
//   c: boolean;
// };

// type FooBar = Foo | Bar;

// const test03: FooBar = {
//   a: 1,
//   b: "2",
//   c: true,
// };

// if ("b" in test03) {
//   test03.a.toFixed();
// } else {
//   test03.a.toString();
// }

/*====================================================

Union Typesとプリミティブ型

====================================================*/

// type Foo = number;
// type Bar = string;

// type FooBar = Foo | Bar;

// type Foo = 0;
// type Bar = "hello";

// type FooBar = Foo | Bar;
