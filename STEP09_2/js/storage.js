const loginForm = document.getElementById('js-login-form');
const emailInput = document.getElementById('js-login-email');
const passwordInput = document.getElementById('js-login-password');
const signupLink = document.getElementById('js-signup-link');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('saveEmail', emailInput.value);
    localStorage.setItem('savePassword', passwordInput.value);
}, {passive: false});

addEventListener('load', (e) => {
    e.preventDefault();
    emailInput.value = localStorage.getItem('saveEmail');
    passwordInput.value = localStorage.getItem('savePassword');
});