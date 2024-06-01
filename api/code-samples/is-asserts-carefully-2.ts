function assertStr(v): asserts v is number { // 😰
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}