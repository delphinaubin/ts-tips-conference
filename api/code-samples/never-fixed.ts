type A = { a: "a", b?: never };
type B = { b: "b", a?: never };

type AorB = A | B;

const a: AorB = { a: "a" }; // ✅
const b: AorB = { b: "b" }; // ✅
const o: AorB = { a: "a", b: "b" }; // ❌ --> 🍾 🎉

