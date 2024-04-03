// tests/index.test.js

test('Execute SQL Query with Greater Than', async () => {
    const queryWithGT = 'SELECT id FROM sample WHERE age > 22';
    const result = await executeSELECTQuery(queryWithGT);
    expect(result.length).toEqual(2);
    expect(result[0]).toHaveProperty('id');
});

test('Execute SQL Query with Not Equal to', async () => {
    const queryWithNEQ = 'SELECT name FROM sample WHERE age != 25';
    const result = await executeSELECTQuery(queryWithNEQ);
    expect(result.length).toEqual(2);
    expect(result[0]).toHaveProperty('name');
});

// Add more test cases as needed for other comparison operators
