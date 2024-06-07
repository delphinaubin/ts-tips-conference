function assertStr(v): asserts v is User[] { // 😰
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}