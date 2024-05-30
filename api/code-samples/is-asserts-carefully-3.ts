function assertString(v: any): asserts v is string {
    if (typeof v !== 'string') {
        throw new Error('Input must be a string!');
    }
}

describe.each([true, 42, {}, undefined])(
    'should throw an error',
    (value: unknown): void => {
        it(`with ${value} as input`, (): void => {
            expect((): void => {
                assertString(value);
            }).not.toThrow('Input must be a string!');
        });
    }
);