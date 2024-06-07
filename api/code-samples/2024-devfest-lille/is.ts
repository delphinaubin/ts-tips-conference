function isNumber(value: any): value is number {
    return typeof value === 'number';
}

// ✨ Usefull for if condition
if (isNumber(value)) {
    // TS knows value is a number
}

// ✨ Or for filter condition
const values: (string | number)[] = ['a', 1, 'b', 2];
// 👌 number[]
const numbers: number[] = values.filter(isNumber);
