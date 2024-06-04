type A = { a: "a" };
type B = { b: "b" };

type AorB = A | B;

const a: AorB = { a: "a" }; // ✅
const b: AorB = { b: "b" }; // ✅
const o: AorB = { a: "a", b: "b" }; // 🤯 But TS let me do that 😢

