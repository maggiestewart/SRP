// initialize the input to the user inputted String and stack to 0
submit.addEventListener("click",function() {
    if (submitCount == 0) {
        console.log(inputFieldVal.length);
        // if (inputFieldVal.length > 0) {

        console.log(nextCount);
        //     if (inputFieldVal.substring(inputFieldVal.length-1, inputFieldVal.length) == "$") {
                console.log("Last element: " + inputFieldVal.substring(inputFieldVal.length - 1, inputFieldVal.length));
                insertStack(stackTable, 0);
                insertInput(inputTable, inputFieldVal);
                insertAction(actionTable, translate(compareStackInput(stackVal, inputVals[0])));
                submitCount++;
                nextCount++;
            // } else {
            //     console.log("Didn't include $ at the end of input string");
            //     console.log(inputFieldVal.substring(inputFieldVal.length - 1, inputFieldVal.length));
            //
            //     const errors = document.getElementById("error-msg");
            //     errors.innerHTML = ("Didn't include $ at the end of input string");
            //
            //     inputFieldVal = " ";
            // }
        // } else {
    //         console.log("Empty input");
    //         const errors = document.getElementById("error-msg");
    //         errors.innerHTML = ("Empty input");
    //     }
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