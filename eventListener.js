// initialize the input to the user inputted String and stack to 0
submit.addEventListener("click",function() {
    if (submitCount == 0) {
        if (inputFieldVal.length > 0) {
            console.log("LENGTH: " + inputFieldVal.length);
            console.log(nextCount);
            insertStack(stackTable, 0);
            insertInput(inputTable, inputFieldVal);
            insertAction(actionTable, translate(compareStackInput(stackVal, inputVals[0])));
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

next.addEventListener("click", function() {
    // const table = document.getElementById("parsing-steps");
    // table.style.backgroundColor = "white";
    let cellValue = document.getElementById("input-parsing").rows[nextCount-1].cells[0].textContent;
    let temp = inputVals.shift();
    stackVal = stackVal + temp;
    if (submitCount == 1){
        if(cellValue != "$") {

            console.log("Next count before: " + nextCount);
            console.log(temp);
            if (temp.value == " ") {
                inputVals.shift();
                console.log(5555);
            } else {
                insertStack(stackTable, stackVal);
                insertInput(inputTable, inputVals.join(""));
                // let first = st.substring(st.length-1,st.length);
                // let second = inp.substring()
                //console.log(stackVal.substring(length-1,length));
                console.log("INP: " + temp);
                console.log(stackVal[length]);
                insertAction(actionTable, compareStackInput(stackVal[length], temp));
                nextCount++;
                console.log("Next count after: " + nextCount);

            }
        } else{
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