function checkMatching() {
    const password = document.querySelector('#password');
    const passwordConfirmation = document.querySelector('#password-confirm');
    const warningMessage = document.querySelector('.warning');

    if (password.value !== passwordConfirmation.value) {
        warningMessage.textContent = 'Passwords do not match.';
    } else {
        warningMessage.textContent = '';
    }
}