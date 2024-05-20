module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.(test|spec).+(ts|js)', // Looks for any files ending in .test.ts, .test.js, .spec.ts, or .spec.js in __tests__ folders
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
};