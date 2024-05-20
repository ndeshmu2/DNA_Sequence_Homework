module.exports = {
    rootDir: './',
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest'
    },
    testMatch: [
        '<rootDir>/tests/**/*.spec.js' // Adjust this if your test files follow a different pattern or are in a different directory
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
};
