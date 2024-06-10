const FORM = document.getElementById('form');
const USER_NAME = document.getElementById('username');
const EMAIL = document.getElementById('email');
const PASSWORD = document.getElementById('password');
const PASSWORD_2 = document.getElementById('password-2');

//Success Border
function showSuccess(input) {
    const FORM_CONTROL = input.parentElement;
    FORM_CONTROL.className = 'form-control success';
}
//Error msg func
function showError(input, message) {
    const FORM_CONTROL = input.parentElement;
    FORM_CONTROL.className = 'form-control error';
    const SMALL = FORM_CONTROL.querySelector('small');
    SMALL.innerText = message;
}

// Email Validation
function isValidEmail(EMAIL) {
    const RE =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return RE.test(String(EMAIL).toLowerCase());
}

//Check required fieldset
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() == '') {
            showError(input, `${getFieldName(input)} is required`);
        }
    });
}

//get filed name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event lister
FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([USER_NAME, EMAIL, PASSWORD, PASSWORD_2]);
});
