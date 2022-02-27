const constants = require('./../constants/constants');
const input = require('./../utils/userInput');  // gets any user input

async function add() {

    let eql = constants.constants.OPS.NO;
    let numbersToSum = [];

    console.log("Type '" + constants.constants.OPS.EQL + "' when you are done adding numbers");

    while (eql == constants.constants.OPS.NO) {

        let num = 0;
        let userInput;

        do {
            console.log('Type a number: ');

            userInput = await input.getUserInput();

            if(userInput.input == constants.constants.OPS.EQL)
                break;

            num = Number.parseFloat(userInput.input.trim());

            if (isNaN(num)) {
                console.log(userInput.input + ' is not a number');
                num = null;
            }
            else if (num.toString().length <= 0)
                console.log('Please, type a number');

        } while (num == null || num.toString().length <= 0);

        numbersToSum.push(num);      

        eql = userInput.input;

        if (eql != constants.constants.OPS.EQL)
            eql = constants.constants.OPS.NO;
    }

    let result = 0;
    numbersToSum.forEach((value) => {
        result += value;
    })

    console.log(result);
}

async function sub() {

}

async function mul() {

}

async function div() {

}

async function pow() {

}

module.exports.operations = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    pow: pow
}