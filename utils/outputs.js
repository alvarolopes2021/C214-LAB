const constants = require('./../constants/constants');

module.exports.showOptions = function showOptions(){
    console.log("### Calculator ### \n ");
    console.log("Choose an option to start:");

    for(let i = 1; i <= 6; i++){
        switch(i){
            case 1:
                console.log(constants.constants.OPS.ADD + " - ("+ constants.constants.OPS.ADD + ") ");
                break;
            case 2:
                console.log(constants.constants.OPS.SUB + " - ("+ constants.constants.OPS.SUB + ") ");
                break;
            case 3:
                console.log(constants.constants.OPS.MUL + " - ("+ constants.constants.OPS.MUL + ") ");
                break;
            case 4:
                console.log(constants.constants.OPS.DIV + " - ("+ constants.constants.OPS.DIV + ") ");
                break;
            case 5:
                console.log(constants.constants.OPS.POW + " - ("+ constants.constants.OPS.POW + ") ");
                break;
            case 6:
                console.log(constants.constants.OPS.QUIT + " - ("+ constants.constants.OPS.QUIT_TEXT + ") ");
                break;
            default:
                console.log("error");
                break;
        }
    }
}
