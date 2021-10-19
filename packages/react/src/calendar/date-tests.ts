type TestCase = [(n: number) => boolean, string];

interface TestSuit {
    date: TestCase;
    month: TestCase;
    year: TestCase;
}

const tests: TestSuit = {
    date: [(date) => 1 <= date && date <= 31, 'invalid date, it should be in range [1, 31]'],
    month: [(month) => 0 <= month && month <= 11, 'invalid month, it should be in range [0, 11]'],
    year: [(year) => year > 0, 'invalid year, it should be greater than zero']
};

const validate = (test: TestCase, n: number) => {
    const isValid = test[0](n);
    if (!isValid) {
        throw new Error(test[1]);
    }
};

export const validateDate = (date: number) => validate(tests.date, date);
export const validateMonth = (month: number) => validate(tests.month, month);
export const validateYear = (year: number) => validate(tests.year, year);
