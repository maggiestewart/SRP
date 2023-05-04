// initialize the input to the user inputted String and stack to 0
submit.addEventListener("click",function() {
    if (submitCount == 0) {
        if (inputFieldVal.length > 0) {
            console.log("LENGTH: " + inputFieldVal.length);
            console.log("COUNT: " + nextCount);
            insertStack(stackTable, "0");
            insertInput(inputTable, inputFieldVal);
            submitCount++;
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
    let t = translate(findTableValue(stackVal[stackVal.length-1], inputVals[0]));
    let inp = inputVals.join("");

    if (submitCount == 1){
        if(cellValue != "$" && !done) {

            if (t.statement.substring(0,1) == "S") { // shift!!

                let temp = inputVals.shift();


                insertAction(actionTable, t.statement);
                nextCount++;
                // fix the thing where it doesn't remove the first element of input

                stackVal[stackVal.length] = temp;  // adds first piece of input (token)
                stackVal[stackVal.length] = t.num; // add the number associated with the table value to the stack
                insertStack(stackTable, stackVal.join(""));

                insertInput(inputTable, inputVals.join(""));

            } else if (t.statement.substring(0,1) == "R") { // reduce!!
                // account for go to in this case
                console.log("YAAASSSSS");

                insertAction(actionTable, t.statement);
                nextCount++;

                let r = findReduceGrammar(t.num);
                console.log("this is r: " + r);

                let index = 0; // find the index of where this element is
                // start at the end and work your way back into the start to find the thing you need to replace
                // slice from 0 to i
                //stackVal.splice(index + 1, stackVal.length); //stackVal.length - (index + 1)
                let valBefore;
                switch(t.num){
                    case "1":
                    case "3":
                    case "5":
                        stackVal[index + 1] = r.grammarToL;
                        valBefore = 0;
                        goTo(valBefore);
                        break;

                    case "2":
                    case "4":
                    case "6":
                        for (let i = 0; i < stackVal.length; i++) {
                            console.log("Stack element " + i + ": " + stackVal[i]);
                            console.log("GR: " + r.grammarFromR);
                            if (stackVal[i] == r.grammarFromR) {
                                stackVal.slice(0,i);
                                stackVal[i] = r.grammarToL;
                                valBefore = stackVal[i-1];
                                console.log(valBefore);

                                stackVal[i+1] = goTo(valBefore, stackVal[i]);;

                                insertInput(inputTable, inp);
                                insertStack(stackTable, stackVal.join(""));
                                break;
                            }
                        }
                }

            } else if (t.statement == "accept"){
                done = true;
                insertAction(actionTable,"Accept");
                nextCount++;
                errors.innerHTML = "YESSSSSS!! FREEDOM";
            }

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