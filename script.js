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
function checkEmail(input) {
    const RE =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (RE.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Enter a valid Email');
    }
}

//Check required fieldset
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() == '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//Check input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at lest ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// check Password match

function checkPassMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

//get filed name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event lister
FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([USER_NAME, EMAIL, PASSWORD, PASSWORD_2]);
    checkLength(USER_NAME, 3, 15);
    checkLength(PASSWORD, 4, 16);
    checkEmail(EMAIL);
    checkPassMatch(PASSWORD, PASSWORD_2);
});
