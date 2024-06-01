describe.each([true, 42, {}, undefined])
    ('should throw an error', (value) => {
        it(`with ${value} as input`, () => {
            expect(() => {
                assertStr(value);
            }).toThrow('Input must be a string!');
        });
    }
);