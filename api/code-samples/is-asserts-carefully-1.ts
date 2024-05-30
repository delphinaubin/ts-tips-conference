function assertString(v: any): asserts v is string {
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}