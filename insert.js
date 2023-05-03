
// initial insert for starting values
function insertInitial(table, first, second){
    const row = table.insertRow(1);
    const stack = row.insertCell(0);
    const input = row.insertCell(0);
    const action = row.insertCell(0);
    stack.innerHTML = first;
    input.innerHTML = second;
    action.innerHTML = translate(findTableValue(first, second.charAt(0)));
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