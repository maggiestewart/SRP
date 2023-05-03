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

     REDUCE:
     - grammar replacement for the stack
     - replace the number on the right-hand side of the replaced token

     GOTO:
     -
 */