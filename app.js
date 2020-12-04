// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1')
const addInput2 = document.getElementById('add-input-2')
const addButton = document.getElementById('add-button')
const addResult = document.getElementById('add-results')

// initialize state


// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result =number1 + number2
    
    addResult.textContent = result;


})

const subtractInput1 = document.getElementById('subtract-input-1')
const subtractInput2 = document.getElementById('subtract-input-2')
const subtractButton = document.getElementById('subtract-button')
const subtractResult = document.getElementById('subtract-results')


subtractButton.addEventListener('click', () => {
    const number1 = Number(subtractInput1.value);
    const number2 = Number(subtractInput2.value);
    const result =number1 - number2
    
    subtractResult.textContent = result;

})

const multiplyInput1 = document.getElementById('multiply-input-1')
const multiplyInput2 = document.getElementById('multiply-input-2')
const multiplyButton = document.getElementById('multiply-button')
const multiplyResult = document.getElementById('multiply-results')


multiplyButton.addEventListener('click', () => {
    const number1 = Number(multiplyInput1.value);
    const number2 = Number(multiplyInput2.value);
    const result =number1 * number2
    
    multiplyResult.textContent = result;

})

const divideInput1 = document.getElementById('divide-input-1')
const divideInput2 = document.getElementById('divide-input-2')
const divideButton = document.getElementById('divide-button')
const divideResult = document.getElementById('divide-results')


divideButton.addEventListener('click', () => {
    const number1 = Number(divideInput1.value);
    const number2 = Number(divideInput2.value);
    const result =number1 / number2
    
    divideResult.textContent = result;

})