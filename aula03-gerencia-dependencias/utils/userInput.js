const prompt = require('prompt');

module.exports.getUserInput = async function getUserInput() {

    prompt.start();

    let input = await prompt.get(['input']);

    return input;

}