/*====================================================

【TypeScript入門 #5】Literal Typesの使い方や使い道、Wideningの概念を解説。

====================================================*/

/*====================================================

Boolean Literal Typesとは

====================================================*/

// const foo: boolean = true;
// const bar: true = true;

/*====================================================

String Literal Typesとは

====================================================*/

// const foo: string = "foo";
// const bar: "bar" = "bar";

/*====================================================

Number Literal Typesとは

====================================================*/

// const foo: number = 0;
// const bar: 1 = 1;

/*====================================================

Literal Typesとメソッド

====================================================*/

// const bar: 1 = 1;
// bar.toFixed();

/*====================================================

Literal Typesの使い所

====================================================*/

// function double(x: 5): number {
//   return x * 2;
// }

// double(5);

// const Home = () => {
//   return <Component type="a" />;
// };

// const Component = (props: { type: "a" }) => {
//   if (props.type === "a") {
//     return <div>a</div>;
//   }
//   return <div>test</div>;
// };

/*====================================================

Literal TypesとReactコンポーネント

====================================================*/

// const Home = () => {
//   return <Component foo />;
// };

// const Component = (props: { foo: true }) => {
//   if (props.foo) {
//     return <div>a</div>;
//   }
//   return <div>test</div>;
// };

/*====================================================

constとletの型推論

====================================================*/

// const foo = "foo";
// let bar = "bar";

/*====================================================

wideningについて解説

====================================================*/

// const foo = "foo";
// let bar = foo;

//widening打開策

// const foo: "foo" = "foo"; //一つ目
// const foo = "foo" as "foo"; //二つ目
// const foo = "foo" as const; //三つ目

// let bar = foo;
