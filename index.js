const form = document.getElementById('my-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submitBtn = document.getElementById('submit-btn');

let emailValidated = false;
let passwordValidated = false;
let confirmPasswordValidated = false;

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

function validateConfirmPassword(confirmPassword, password) {
  return confirmPassword === password;
}

emailInput.addEventListener('input', (event) => {
  const email = event.target.value;
  if (validateEmail(email)) {
    emailInput.classList.add('valid');
    emailError.textContent = '';
    emailValidated = true;
  } else {
    emailInput.classList.remove('valid');
    emailError.textContent = 'Please enter a valid email address.';
    emailValidated = false;
  }
});

passwordInput.addEventListener('input', (event) => {
  const password = event.target.value;
  if (validatePassword(password)) {
    passwordInput.classList.add('valid');
    passwordError.textContent = '';
    passwordValidated = true;
  } else {
    passwordInput.classList.remove('valid');
    passwordError.textContent = 'Please enter a password that is at least 8 characters long.';
    passwordValidated = false;
  }
});

confirmPasswordInput.addEventListener('input', (event) => {
  const confirmPassword = event.target.value;
  const password = passwordInput.value;
  if (validateConfirmPassword(confirmPassword, password)) {
    confirmPasswordInput.classList.add('valid');
    confirmPasswordError.textContent = '';
    confirmPasswordValidated = true;
  } else {
    confirmPasswordInput.classList.remove('valid');
    confirmPasswordError.textContent = 'Please make sure the passwords match.';
    confirmPasswordValidated = false;
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailValidated && passwordValidated && confirmPasswordValidated) {
    alert('Form submitted successfully!');
  } else {
    alert('Can\'t submit the form. Please make sure all inputs are correct.');
  }
});
