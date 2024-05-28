type a = { a: string, b: never };
type b = { b: string, a: never };
type c = a | b;

const toto: c = { a: "a", b: "b" };