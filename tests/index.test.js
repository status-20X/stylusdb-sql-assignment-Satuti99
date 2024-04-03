test('Execute SQL Query with INNER JOIN', async () => {
    // Ensure that student.csv and enrollment.csv exist
    expect(fs.existsSync(studentCSV)).toBe(true);
    expect(fs.existsSync(enrollmentCSV)).toBe(true);

    const query = 'SELECT student.id, student.name, enrollment.course FROM student INNER JOIN enrollment ON student.id = enrollment.student_id';
    const result = await executeSELECTQuery(query);

    // Write assertions based on the expected data in your CSV files
    expect(result.length).toEqual(4); // Assuming there are 4 records in the joined data
    expect(result[0]).toHaveProperty('student.id');
    expect(result[0]).toHaveProperty('student.name');
    expect(result[0]).toHaveProperty('enrollment.course');
});

test('Execute SQL Query with INNER JOIN and a WHERE Clause', async () => {
    // Ensure that student.csv and enrollment.csv exist
    expect(fs.existsSync(studentCSV)).toBe(true);
    expect(fs.existsSync(enrollmentCSV)).toBe(true);

    const query = 'SELECT student.name, enrollment.course FROM student INNER JOIN enrollment ON student.id = enrollment.student_id WHERE student.name = "John"';
    const result = await executeSELECTQuery(query);

    // Write assertions based on the expected filtered data
    expect(result.length).toEqual(2); // Assuming there are 2 records matching the WHERE clause
    expect(result[0]).toHaveProperty('student.name', 'John');
});
