function doSomething(input: string | number) {
    console.log(input.toUpperCase()); // ❌
}

function assertString(input: any): asserts input is string {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string!');
    }
}

function doSomethingV2(input: string | number) {
    assertString(input); // 🙏🏼

    // input's type is just 'string' here
    console.log(input.toUpperCase()); // ✅
}
