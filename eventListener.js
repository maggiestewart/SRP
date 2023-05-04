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
    //let cellValue = document.getElementById("input-parsing").rows[nextCount-1].cells[0].textContent;
    let t = translate(findTableValue(stackVal[stackVal.length-1], inputVals[0]));
    let inp = inputVals.join("");

    if (submitCount == 1){
        if (!done) {
            if (t.statement.substring(0, 1) == "S") { // shift!!

                let temp = inputVals.shift();
                insertAction(actionTable, t.statement);
                nextCount++;

                stackVal[stackVal.length] = temp;  // adds first piece of input (token)
                stackVal[stackVal.length] = t.num; // add the number associated with the table value to the stack
                insertStack(stackTable, stackVal.join(""));
                insertInput(inputTable, inputVals.join(""));

            } else if (t.statement.substring(0, 1) == "R") { // reduce!!
                insertAction(actionTable, t.statement);
                nextCount++;

                let r = findReduceGrammar(t.num);
                let valBefore;

                switch (t.num) {
                    case "1":
                        for (let a = stackVal.length; a > 0; a--) {
                            if (stackVal[a] == "E") {
                                reduce13(r, a, inp);
                                break;
                            }
                        }
                        break;
                    case "3":
                        for (let b = stackVal.length; b > 0; b--) {
                            if (stackVal[b] == "T") {
                                reduce13(r, b, inp);
                                break;
                            }
                        }
                        break;
                    case "5":
                        for (let x = stackVal.length; x > 0; x--) {
                            if (stackVal[x] == "(") {
                                stackVal = stackVal.slice(0, x);
                                stackVal[x] = r.grammarToL;
                                valBefore = stackVal[x - 1];
                                console.log(valBefore);

                                stackVal[x + 1] = goTo(valBefore, stackVal[x]);
                                console.log("console: " + stackVal[x + 1]);

                                insertInput(inputTable, inp);
                                insertStack(stackTable, stackVal.join(""));
                                break;
                            }
                        }
                        break;

                    case "2":
                    case "4":
                    case "6":
                        for (let i = stackVal.length; i > 0; i--) {
                            console.log("Stack element " + i + ": " + stackVal[i]);
                            console.log("GR: " + r.grammarFromR);
                            if (stackVal[i] == r.grammarFromR) {
                                stackVal.slice(0, i);
                                stackVal[i] = r.grammarToL;
                                valBefore = stackVal[i - 1];
                                console.log(valBefore);

                                stackVal[i + 1] = goTo(valBefore, stackVal[i]);

                                insertInput(inputTable, inp);
                                insertStack(stackTable, stackVal.join(""));
                                break;
                            }
                        }
                }
            } else if (t.statement == "Accept") {
                done = true;
                insertAction(actionTable, "Accept");
            }
        } else {
            errors.style.color = "green";
            errors.innerHTML = "Done :)))";
        }
    } else {
        console.log("Not yet initialized: Initialize table by typing in input and clicking submit");
        const errors = document.getElementById("error-msg");
        errors.innerHTML = "Not yet initialized";
    }
});