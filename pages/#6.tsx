/*====================================================

【TypeScript入門 #6】色んな型を一挙紹介 → Array, Tuple, Any, Unknown, Void, Never

====================================================*/

/*====================================================

Array(配列)

====================================================*/

// const foo: number[] = [1, 2, 3];
// const bar: Array<number> = [1, 2, 3];
// const baz: (number | string | boolean)[] = [1, "2", true];

/*====================================================

Tuple(タプル)

====================================================*/

// const foo: [string, number] = ["foo", 1]; //Tuple
// const foo: (string | number)[] = ["foo", 1]; //Union

// foo[0].substring(0);
// foo[1].toFixed(2);

/*====================================================

Any

====================================================*/

// const foo: any = "foo";
// const bar: any = boolean;
// const abz: any = 0;

/*====================================================

Unknown

====================================================*/

// const foo: unknown = "foo"; //Unknown
// const foo: any = "foo"; //Any

// if (typeof foo === "string") {
//   foo.substring(2);
// }

/*====================================================

Void

====================================================*/

// function foo(): void {
//   alert("hello");
//   return "";
// }

// const foo = (): void => {
//   alert("hello");
// };

// const bar: () => void = () => {
//   alert("hello");
// };

/*====================================================

Never

====================================================*/

// const foo = (bar: "a" | "b") => {
//   switch (bar) {
//     case "a":
//       return;

//     case "b":
//       return;

//     default:
//       bar;
//       break;
//   }
// };
