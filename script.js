function submitEmail() {
    var emailField = document.getElementById('email');
    var emailToSubmit = emailField.value.trim();
    var isValidEmail = checkIsValidEmail(emailToSubmit);

    var errorMessageField = document.getElementById('error-massage');

    if (!isValidEmail || !emailToSubmit) {
        emailField.classList.add('submit-error');
        errorMessageField.style.display = 'flex';

    } else {
        emailField.classList.remove('submit-error');
        errorMessageField.style.display = 'none';
    }

}   

function checkIsValidEmail(email) {
    const regex = /@.*\.com$/;
    return regex.test(email);
  }