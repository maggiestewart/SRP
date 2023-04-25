//on button click --> add the input field info over into the input side
const submit = document.getElementById('input-submit');

submit.addEventListener("click",function() {
    document.getElementById('input-steps').innerHTML= (document.getElementById('inputg').value);

});

// initialize the stack to 0
document.getElementById('stack-steps').innerHTML = 0;