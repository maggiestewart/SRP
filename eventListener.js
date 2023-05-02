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
    let done = false;
    if (submitCount == 1 && !done){
        console.log("Next count before: " + nextCount);
        insertStack(stackTable, stackVal);
        insertInput(inputTable, inputFieldVal);
        // let first = st.substring(st.length-1,st.length);
        // let second = inp.substring()
        insertAction(actionTable, compareStackInput("0","("));
        nextCount++;
        console.log("Next count after: " + nextCount);

        /* const action = document.getElementById("action-parsing");
        var x = (action.rows.length)-1;
        var y = x.getElementsByTagName("td");

        for (let i = 0; i < x; i++) {
            console.log("LENGTH: " + x + "VAL: " + i);
            if(action.rows[i].value == "accept"){
                done = true;
            }
        } */
    } else {
        console.log("Not yet initialized: Initialize table by typing in input and clicking submit");
        const errors = document.getElementById("error-msg");
        errors.innerHTML = "Not yet initialized";
    }

});