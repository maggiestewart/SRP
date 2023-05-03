// initialize the input to the user inputted String and stack to 0
submit.addEventListener("click",function() {
    if (submitCount == 0) {
        if (inputFieldVal.length > 0) {
            console.log("LENGTH: " + inputFieldVal.length);
            console.log(nextCount);
            insertStack(stackTable, 0);
            insertInput(inputTable, inputFieldVal);
            let t = translate(findTableValue(stackVal, inputVals[0]));
            insertAction(actionTable, t.statement);
            submitCount++;
            nextCount++;
        } else {
            console.log("Empty input value");
            errors.innerHTML = ("Empty input value");
            window.location.reload();
        }
    } else {
        console.log("Already initialized");
        errors.innerHTML = ("Already initialized");
    }
});

// go through each step of the shift reduce parser
next.addEventListener("click", function() {
    // const table = document.getElementById("parsing-steps");
    // table.style.backgroundColor = "white";
    let cellValue = document.getElementById("input-parsing").rows[nextCount-1].cells[0].textContent;
    let temp = inputVals.shift();
    stackVal = stackVal + temp;
    if (submitCount == 1){
        if(cellValue != "$") {
            let t = translate(findTableValue(stackVal[length], temp));
            if (t.statement.substring(0,1) == "S") { // shift!!

                console.log("Next count before: " + nextCount);
                console.log(temp);

                insertInput(inputTable, inputVals.join(""));

                console.log("INP: " + temp);
                console.log(stackVal[length]);

                insertAction(actionTable, t.statement);
                stackVal = stackVal + t.num;
                insertStack(stackTable, stackVal);
            } else if (t.statement.substring(0,1) == "R") { // reduce!!
                // account for go to in this case
                console.log("YESSSSS");
            }
            nextCount++;
            console.log("Next count after: " + nextCount);
        } else {
            console.log("DONE!");
            const errors = document.getElementById("error-msg");
            errors.innerHTML = "DONE!!";
        }
    } else {
        console.log("Not yet initialized: Initialize table by typing in input and clicking submit");
        const errors = document.getElementById("error-msg");
        errors.innerHTML = "Not yet initialized";
    }

});