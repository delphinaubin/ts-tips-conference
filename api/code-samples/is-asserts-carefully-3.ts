function assertString(v: any): asserts v is string {
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}

describe.each([true, 42, '🦄', {}, undefined])(
    'should not throw an error if not a string %s',
    (value: unknown): void => {
        it(`should return ${value}`, (): void => {
            expect((): void => {
                assertString(value);
            }).not.toThrow('Input must be a string!');
        });
    }
);