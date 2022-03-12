/*====================================================

【TypeScript入門 #20】Genericsの型引数が複数あるパターンやLookup Typesとの併用について解説！Genericsが使われているシーンも紹介！

====================================================*/
/*====================================================

複数の型引数を持つGenerics

====================================================*/

// const foo = <T extends string, K extends number, U = boolean>(
//   foo: T,
//   bar: K,
//   baz: U
// ) => {
//   return {};
// };

/*====================================================

Lookup Typesとは

====================================================*/

// type Obj = {
//   a: string;
//   b: boolean;
// };

// type Foo = Obj["a"];

/*====================================================

Lookup TypesとGenericsの組み合わせ

====================================================*/

// const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
//   return obj[key];
// };

// const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
//   obj[key] = value;
// };

// const obj = {
//   foo: 1,
//   bar: 2,
//   baz: 3,
// };

// const hoge = getProperty(obj, "baz");

// setProperty(obj, "bar", 11);

/*====================================================

JSメソッドで用いられるGenerics

====================================================*/

// const foo = [1, 2, 3].map<string>((v) => v.toString());
