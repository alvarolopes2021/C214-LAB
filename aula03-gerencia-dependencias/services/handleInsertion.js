const constants = require('./../constants/constants');
const input = require('./../utils/userInput');  // gets any user input

module.exports.handleInsertion = async function handleInsertion(operating){

    let numbersToOperate = [];

    let eql = constants.constants.OPS.NO;
    let flag = false;  //used for division. If the first number is zero, it is OK, but if it is not, the result can't be devided by zero

    console.log("Type '" + constants.constants.OPS.EQL + "' when you are done " + operating + " numbers");

    while (eql == constants.constants.OPS.NO) {

        let num = 0;
        let userInput;

        do {
            console.log('Type a number: ');

            userInput = await input.getUserInput();

            if (userInput.input == constants.constants.OPS.EQL)
                break;

            num = Number.parseFloat(userInput.input.trim());

            if (isNaN(num)) {
                console.log(userInput.input + ' is not a number');
                num = null;
            }
            else if(operating == constants.constants.OPS_TRANSLATED.DIVIDING && num == 0 && flag){
                console.log("Can't divide by zero");
                num = null;
            }
            else{
                numbersToOperate.push(num);
                flag = true;
            }                

        } while (num == null || num.toString().length <= 0);

        eql = userInput.input;

        if (eql != constants.constants.OPS.EQL)
            eql = constants.constants.OPS.NO;
    }

    return numbersToOperate;
}