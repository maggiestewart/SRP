
// initial insert for starting values
function insertInitial(table, first, second){
    const row = table.insertRow(1);
    const stack = row.insertCell(0);
    const input = row.insertCell(0);
    const action = row.insertCell(0);
    stack.innerHTML = first;
    input.innerHTML = second;
    action.innerHTML = compareStackInput(first, second.charAt(0));
}

//insert for stack values
function insertStack(table, stackString){
    const row = table.insertRow(nextCount);
    const stackCell = row.insertCell(0);
    stackCell.innerHTML = stackString;
}

//insert for input values
function insertInput(table, inputString){
    const row = table.insertRow(nextCount);
    const inputCell = row.insertCell(0);
    inputCell.innerHTML = inputString;
}

//insert for action values
function insertAction(table, actionString){
    const row = table.insertRow(nextCount);
    const actionCell = row.insertCell(0);
    console.log("ACT: " + actionString);
    actionCell.innerHTML = actionString;
}
/*
function list(){
    for (let i = 0; i < inputVals.length;i++){
        console.log("Input element " + i + ": " + inputVals[i]);
    }
}
*/

function compareStackInput(stackEndValue, inputFirstValue){
    let row, col, ret;
    switch (stackEndValue) { //determine row
        case 0:
            row = 2;
            break;
        case 1:
            row = 3;
            break;
        case 2:
            row = 4;
            break;
        case 3:
            row = 5;
            break;
        case 4:
            row = 6;
            break;
        case 5:
            row = 7;
            break;
        case 6:
            row = 8;
            break;
        case 7:
            row = 9;
            break;
        case 8:
            row = 10;
            break;
        case 9:
            row = 11;
            break;
        case 10:
            row = 12;
            break;
        case 11:
            row = 13;
            break;
        default:
            row = 2;
            break;
    }


    switch (inputFirstValue){ //determine column
        case "id":
            col = 1;
            break;
        case "+":
            col = 2;
            break;
        case "*":
            col = 3;
            break;
        case "(":
            col = 4;
            break;
        case ")":
            col = 5;
            break;
        case "$":
            col = 6;
            break;
        default:
            col = 0;
            break;
    }

    console.log(row + " and " + col);
    let table = document.getElementById("table-info");
    let cellValue = table.rows[row].cells[col].textContent;
    //console.log("CV: " + table.rows[3].cells[0].textContent);
    console.log("CV: " + cellValue);
    ret = cellValue;
    //list();

    return translate(ret);

}

function translate(expression){
    let statement;
    let first = expression.charAt(0);
    let length = expression.length;

    if (first == "S"){
        statement = "Shift " + expression.substring(length-1, length);
    } else if (first == "R"){
        statement = "Reduce " + expression.substring(1, length);
    } else if (Number.isInteger(first)) {
        statement = "Change state " + first;
    }else if (expression == "accept"){
        statement = "Accept ";
    } else if (expression == ""){
        statement = "Syntax Error";
        console.log("SYNTAX ERROR!!");
    }
    return statement;

}