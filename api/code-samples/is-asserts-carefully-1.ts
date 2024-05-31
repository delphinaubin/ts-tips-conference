function assertString(v: unknown): asserts v is string {
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}