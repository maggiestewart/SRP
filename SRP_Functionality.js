
// initial insert for starting values
function insertInitial(table, first, second){
    const row = table.insertRow(1);
    const stack = row.insertCell(0);
    const input = row.insertCell(1);
    const action = row.insertCell(2);
    stack.innerHTML = first;
    input.innerHTML = second;
    action.innerHTML = translate(compareStackInput());
}

//insert for stack values
function insertStack(table, rowNum, stackString){
    const row = table.insertRow(rowNum);
    const stack = row.insertCell(0);
    stack.innerHTML = stackString;
}

//insert for input values
function insertInput(table, rowNum, inputString){
    console.log(rowNum);
    const row = table.insertRow(rowNum);
    const input = row.insertCell(0);
    input.innerHTML = inputString;
}

//insert for action values
function insertAction(table, rowNum, actionString){
    console.log(rowNum);
    const row = table.insertRow(rowNum);
    const action = row.insertCell(0);
    action.innerHTML = translate(compareStackInput());
}

function compareStackInput(stackEndValue, inputFirstValue){

    //console.log(inputVals[0]);
    /*switch(inputVals[0] && stackVal[stackVal.length-1]){
        case 0 && "id":
            console.log("yes");

            break;
        default:
            break;
    }*/
    return "S9";
    // call translate somewhere in here

}

function translate(expression){
    let statement;
    let length = expression.length;
    if (expression.substring(0,1) == "S"){
        statement = "Shift " + expression.substring(1, length);
    } else if (expression.substring(0,1) == "R"){
        statement = "Reduce " + expression.substring(1, length);
    } else if (expression == "accept"){
        statement = "Accept ";
    }

    return statement;

}