// buttons that start the parsing process or steps through the process
const submit = document.getElementById('input-submit');
const next = document.getElementById('next-step');

// value of input field (input string)
const inputFieldVal = document.getElementsByTagName("input")[0].value;

// tables that add to stack, input, and action values with next button
const stackTable = document.getElementById('stack-parsing');
const inputTable = document.getElementById('input-parsing');
const actionTable = document.getElementById('action-parsing');

// errors text area --> input validation messages
const errors = document.getElementById("error-msg");

// counter variables
let submitCount = 0;
let nextCount = 1;
let done = false;

// stack and input table values
let stackVal = ["0"];
let inputVals = inputFieldVal.split(" ");