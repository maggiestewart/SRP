// initialize the input to the user inputted String and stack to 0
submit.addEventListener("click",function() {
    if (submitCount == 0) {
        // if (inputField.value.substring(inputFieldVal.length-1, inputFieldVal.length) == "$") {
            console.log(inputField.value.substring(inputFieldVal.length-1, inputFieldVal.length));
            insertStack(stackTable, 1, 0);
            insertInput(inputTable, 1, inputField.value);
            insertAction(actionTable, 1, translate(compareStackInput(stackVal, inputVals[0])));
            submitCount++;
        // } else {
        //     console.log("Didn't include $ at the end of input string");
        //     console.log(inputField.value.substring(inputFieldVal.length-1, inputFieldVal.length));
        //
        //     const errors = document.getElementById("error-msg");
        //     errors.innerHTML = ("Didn't include $ at the end of input string");
        //
        //     // inputField.value = "";
        // }
    } else {
        console.log("Already initialized");
        const errors = document.getElementById("error-msg");
        errors.innerHTML = ("Already initialized");
    }
});

next.addEventListener("click", function() {
    // if(document.getElementById("action-steps").valueOf() !== "Accept"){
    //     console.log(1);
    // } else {
    //     console.log("FINISHED!!");
    // }

    insertStack(stackTable, nextCount, 3);
    insertInput(inputTable, nextCount, 4);
    insertAction(actionTable, nextCount, 5);
    nextCount++;

});