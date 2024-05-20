const { Action } = require("actionhero");
const db = require('../../utils/db.ts');

module.exports = class SendString extends Action {
    constructor() {
        super();
        this.name = "sendString";
        this.description = "I will receive a string and process it";
        this.inputs = {
            sequence: { required: true },
        };
        this.outputExample = {
            success: true,
            message: "Your message has been processed",
        };
    }

    async run({ params, response }) {
        const { sequence } = params;
        console.log(`Received sequence: ${sequence}`);
        const isValidSequence = sequence => {
            const validPairs = { 'P': 'A', 'N': 'Y', 'O': 'H', 'W': 'V' };
            const stack = [];

            for (let i = 0; i < sequence.length; i++) {
                const char = sequence[i];
                if (validPairs.hasOwnProperty(char)) {
                    if (i + 1 < sequence.length && sequence[i + 1] === validPairs[char]) {
                        if (i + 2 < sequence.length && sequence[i + 2] === char) {

                            return false;
                        }
                        i++;
                        continue;
                    }
                    stack.push(char);
                }

                if (stack.length === 0 || validPairs[stack.pop()] !== char) {
                    return false;
                }

            }

            return stack.length === 0;
        };

        if (!isValidSequence(sequence)) {
            response.error = 'Invalid DNA sequence';
            response.status = 400;
            return;
        }

        try {
            const dbResponse = await db.storePromise(sequence);
            response.success = true;
            response.message = `The sequence "${sequence}" is valid and stored with ID: ${dbResponse}.`;
            response.status = 200;
        } catch (error) {
            response.error = 'Failed to store the sequence';
            response.status = 500;
        }
    }
}
