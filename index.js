const outputs = require('./utils/outputs');  // shows the available operations
const input = require('./utils/userInput');  // gets any user input
const constants = require('./constants/constants');  // system constants
const services = require('./services/doMath');  // do the math


async function doMath() {
    let keepAlive = true;

    while (keepAlive) {
        outputs.showOptions();

        let op = await input.getUserInput(); //always returns a string

        switch (op.input.toUpperCase()) {
            case constants.constants.OPS.ADD:
                await services.operations.add();
                break;
            case constants.constants.OPS.SUB:
                await services.operations.sub();
                break;
            case constants.constants.OPS.MUL:
                await services.operations.mul();
                break;
            case constants.constants.OPS.DIV:
                await services.operations.div();
                break;
            case constants.constants.OPS.POW:
                await services.operations.pow();
                break;
            case constants.constants.OPS.QUIT:
                keepAlive = false;
                break;
            default:
                console.log(constants.constants.ERRORS.INVALID_OPTION + " \n");
                break;
        }
    }
}

doMath();
