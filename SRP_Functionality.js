/*
function list(){
    for (let i = 0; i < inputVals.length;i++){
        console.log("Input element " + i + ": " + inputVals[i]);
    }
}
*/

function findTableValue(stackEndValue, inputFirstValue){
    let row, col, ret;
    switch (stackEndValue) {     //determine row
        case 0:  row = 2;  break;
        case 1:  row = 3;  break;
        case 2:  row = 4;  break;
        case 3:  row = 5;  break;
        case 4:  row = 6;  break;
        case 5:  row = 7;  break;
        case 6:  row = 8;  break;
        case 7:  row = 9;  break;
        case 8:  row = 10; break;
        case 9:  row = 11; break;
        case 10: row = 12; break;
        case 11: row = 13; break;
        default: row = 2;  break;
    }
    switch (inputFirstValue){     //determine column
        case "id": col = 1; break;
        case "+":  col = 2; break;
        case "*":  col = 3; break;
        case "(":  col = 4; break;
        case ")":  col = 5; break;
        case "$":  col = 6; break;
        case "E":  col = 7; break;
        case "T":  col = 8; break;
        case "F":  col = 9; break;
        default:   col = 0; break;
    }

    console.log(row + " and " + col);
    let table = document.getElementById("table-info");
    let cellValue = table.rows[row].cells[col].textContent;
    let cell = table.rows[row].cells[col];
    cell.style.backgroundColor = "yellow";
    console.log("CV: " + cellValue);
    ret = cellValue;
    //list();

    return ret;
}

function translate(expression){
    let statement;
    let first = expression.charAt(0);
    let length = expression.length;
    let num;

    if (first == "S"){
        num = expression.substring(length-1, length);
        statement = "Shift " + num;
    } else if (first == "R"){
        num = expression.substring(1, length);
        statement = "Reduce " + num;
    } else if (Number.isInteger(first)) {
        statement = "Change state " + first;
    }else if (expression == "accept"){
        statement = "Accept";
    } else if (expression == ""){
        statement = "Syntax Error";
        console.log("SYNTAX ERROR!!");
    }
    return {num, statement};

}

function shift(){

}

function reduce(){

}

function goTo(){

}