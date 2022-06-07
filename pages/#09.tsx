/*====================================================

【TypeScript入門 #9】InterfaceとType Aliasの違いは？どっち使えばいいの？

====================================================*/

/*====================================================

Type AliasとInterfaceの書き方

====================================================*/

// type Foo = {
//   a: number;
// };

// interface Foo {
//   a: number;
// }

// const foo: Foo = {
//   a: 1,
// };

/*====================================================

違い①宣言できるものが違う

====================================================*/

// type Foo = number;

// interface Foo {
//   a: number;
// }

// const foo: Foo = 1;

/*====================================================

違い②open-endedの準拠してるか

====================================================*/

// interface Foo {
//   a: number;
// }

// interface Foo {
//   b: number;
// }

// type Foo = {
//   a: number;
// };

// type Foo = {
//   b: number;
// };

// const foo: Foo = {
//   a: 1,
//   b: 2,
// };

/*====================================================

違い③継承(型の拡張)方法が違う

====================================================*/

// interface Foo {
//   a: number;
// }

// interface Bar extends Foo {
//   b: number;
// }

// type Foo = {
//   a: number;
// };

// type Bar = Foo & {
//   b: number;
// };

// const foo: Bar = {
//   a: 1,
//   b: 2,
// };

/*====================================================

違い④プロパティーのオーバーライドの挙動

====================================================*/

// interface Foo {
//   a: number;
// }

// interface Bar extends Foo {
//   a: string;
// }

// type Foo = {
//   a: number;
// };

// type Bar = Foo & {
//   a: string;
// };

// const foo: Bar = {
//   a: 1,
// };

/*====================================================

違い⑤Mapped Typesの使用可否

====================================================*/

// type Aniamals = "dog" | "cat";

// type Foo = {
//   [key in Aniamals]: number;
// };

// interface Foo {
//   [key in Aniamals]: number;
// }

// const foo: Foo = {
//   dog: 1,
//   cat: 2,
// };
