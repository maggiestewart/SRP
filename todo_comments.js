/*
    TO DO:
    - make sure comparison of the last character of stack and first character of input is good
    - get the table value to be correct and to correctly show the action
    - implement the
        a. shift function --> IP
        b. reduce function
        c. go to function
        d. accept function --> DONE

     DONE:
     - move over first character of input to back of stack
     - how to account for spaces in input string --> can split the string
     - highlight box locations on the table & remove it when done

     SHIFT:
     - look at the last element of the stack and first element of the input --> DONE
     - push first of the input on the stack --> DONE
     - find value on table --> DONE
     - determine the action --> DONE
     - push the number associated with the action on the stack --> DONE
     - write the action in the cell -- > DONE

     ok new steps lol:
     - look at the last element in stack and first element in input
     - find the value in the table
     - write that value into the action table
     - put the first element in input and number in the stack
     - remove the first element of input
     - repeat!!

     REDUCE:
     - grammar replacement for the stack
     - replace the number on the right-hand side of the replaced token

     new steps lol:
     - look at the last element in stack and first element in input
     - find the value in the table
     - write the value to action table
     - find the associated grammar (based on number part of value)
     - find the token (whatever it might be on the right side of arrow)
        - maybe use switch? to set the left and right side of arrow
     - replace the token (left side of the arrow) with the token (right side of arrow)
        and ignore things to the right
     - go to method

     ** add things to stack (Replace)
     ** don't really touch the input string

     GOTO:
     - in the reduce steps
     - get the number
     - find the number in front of the replaced token (maybe keep a counter or something)
     - go to that state and find the respective value (E, T, F)


    Code segment from eventListener.js for next button click
        if statement inside the submit count


        if(cellValue != "$" && !done) {
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


 */