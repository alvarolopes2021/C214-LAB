const handleInsertion = require("./handleInsertion");
const constants = require('./../constants/constants');

var numbersToOperate = [];

async function add() {

    numbersToOperate = await handleInsertion.handleInsertion(constants.constants.OPS_TRANSLATED.ADDING);

    let result = 0;
    numbersToOperate.forEach((value) => {
        result += value;
    })

    console.log(result + " \n ");
}

async function sub() {

    numbersToOperate = await handleInsertion.handleInsertion(constants.constants.OPS_TRANSLATED.SUBTRACTING);

    let result = 0;
    numbersToOperate.forEach((value) => {
        result = -value - result;
    })

    console.log(result + " \n ");

}

async function mul() {

    numbersToOperate = await handleInsertion.handleInsertion(constants.constants.OPS_TRANSLATED.MULTIPLYING);

    let result = 1;
    numbersToOperate.forEach((value) => {
        result = result * value;
    })

    console.log(result + " \n ");

}

async function div() {

    numbersToOperate = await handleInsertion.handleInsertion(constants.constants.OPS_TRANSLATED.DIVIDING);

    let result = 1;
    let i = 0;
    numbersToOperate.forEach((value) => {
        if (i == 0) {
            result = value;
            i = i + 1;
        }
        else {
            result /= value;
        }

    });
    console.log(result + " \n ");
}

async function pow() {
    numbersToOperate = await handleInsertion.handleInsertion(constants.constants.OPS_TRANSLATED.POTENTIATE);

    let result = 0;
    
    numbersToOperate.forEach((value) => {
        if (i == 0) {
            result = value;
            i = i + 1;
        }
        else {
            result /= value;
        }

    });
    console.log(result + " \n ");
}

module.exports.operations = {
    add: add,
    sub: sub,
    mul: mul,
    div: div,
    pow: pow
}