// buttons, input, divs, etc. that will be used frequently
const submit = document.getElementById('input-submit');
const next = document.getElementById('next-step');
const inputFieldVal = document.getElementsByTagName("input")[0].value;
const stackTable = document.getElementById('stack-parsing');
const inputTable = document.getElementById('input-parsing');
const actionTable = document.getElementById('action-parsing');
const errors = document.getElementById("error-msg");

let submitCount = 0;
let nextCount = 1;


let stackVal = [0];
let inputVals = inputFieldVal.split(" ");