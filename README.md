## Shift Reduce Parser (SRP) 
CSC 4101 Honors Option | Spring 2023

### What is <a href="https://en.wikipedia.org/wiki/Shift-reduce_parser"> Shift Reduce Parsing</a>?
* Form of bottom-up parsing where a stack holds grammar symbols and input buffer holds the rest of the tokens to be parsed

### Requirements for this assignment
* Clear implementation
* Program shows the individual parsing steps.
* Table can be hard-coded
* Program should be able to parse any input expression based on the grammar

### When using this implementation:
* Please separate each value of the input string with a space 
  * i.e. id + ( id * id ) $
* There is input validation so that you cannot proceed without first putting in an input string
  * Type your input string in the box at the top left
  * You will need to click the SUBMIT button twice (this sends the input over to the table)
  * You can go through the steps using the NEXT button until you reach the $ or accept token that announces successful completion of parsing
