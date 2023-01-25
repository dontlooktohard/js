const form = document.querySelector("#form");
// Node list (not an array but alike) of 6 numbers
// [type='text'] takes only numbers inside the form
const numList = document.querySelectorAll("#form > *[type='text']");
// hidden input in the form to send and to store the current input
const hidCode = document.querySelector("#hid-code");
// visible input to display the correct code "from SMS"
const visCode = document.querySelector("#vis-code");
// from stack overflow - create 6 random letter+numbers
const sms = Math.random().toString(36).slice(2, 8).toLowerCase();

// show the SMS code to user
visCode.value = sms;
// make the first input active
numList[0].focus();

// checks every input, if its incorrect clears it
// if it is ok, adds all 6 input to the hidden input
const fillCode = (el) => {
    // check for (1 digit or 1 letter) only
    if (/^[a-zA-Z0-9]$/.test(el.value)) {
        // add all number to the hidden code
        hidCode.value = Array.from(numList)
            .reduce((add, n) => add + n.value, "")
            .toLowerCase();
        // if element has next sibling activate it (focus on it)
        // "?." optional chaining operator:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        el.nextElementSibling?.focus();
    } else {
        // clear the cell if it has wrong input
        el.value = "";
    }
};

// pasting to a cell
const fillFromClipboard = (event) => {
    // stop any standard pasting functionality
    event.preventDefault();
    // get text from clipboard in lowercase
    // chaining methods: https://www.geeksforgeeks.org/method-chaining-in-javascript/
    let paste = (event.clipboardData || window.clipboardData)
        .getData("text/plain")
        .toLowerCase();
    // if paste text is too short or includes illegal characters, stop
    if (paste.length < numList.length || !/^[a-zA-Z0-9]+$/.test(paste)) {
        return false;
    }
    // [...string] is the same is string.split("")
    // add each characted from paste to a corresponding input
    // ind is index, ch is character
    // foreach( (element, index, array) => {} )
    [...paste].forEach((ch, ind) => (numList[ind].value = ch));
};

// check if the code is correct to sumbit
const checkAndSubmit = () => {
    // if incorrect, stop
    if (visCode.value !== hidCode.value) return false;
    form.submit();
};

// design changes is error occurs
const checkValue = (el) => {
    // check if only a valid characters is entered
    // if yes - remove class "error"
    // if not - add class "error"
    /^[a-zA-Z0-9]$/.test(el.value)
        ? el.classList.remove("error")
        : el.classList.add("error");
};

// adding event listeners
// https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/
// keyup , paste is optimal for me
// addEventListener('eventName', (event) => functionToCall(params) )
// event.target - the element from which an event occurred
numList.forEach((el) => {
    el.addEventListener("keyup", (event) => fillCode(el));
    el.addEventListener("keyup", (event) => checkValue(el));
    el.addEventListener("paste", (event) => fillFromClipboard(event));
    el.addEventListener("keyup", (event) => checkAndSubmit());
});