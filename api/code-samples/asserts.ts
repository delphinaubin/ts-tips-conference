function assertString(v: unknown): asserts v is string {
    if (typeof v !== 'string') {
        throw new Error(`${v} must be a string!`);
    }
}

function logUpperCaseValue(input: any) {
    assertString(input); // 🙏🏼

    // input's type is just 'string' here
    console.log(input.toUpperCase()); // ✅
}
