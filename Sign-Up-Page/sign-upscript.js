document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fields = ['firstName', 'lastName', 'email', 'password', 'reason'];
    let hasError = false;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorSpan = input.nextElementSibling;
        if (!input.value.trim()) {
            errorSpan.textContent = 'Required';
            errorSpan.style.display = 'inline';
            hasError = true;
        } else {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
    });

    const sex = document.querySelector('input[name="sex"]:checked');
    const sexError = document.getElementById('sexRequired');
    if (!sex) {
        sexError.textContent = 'Required';
        sexError.style.display = 'inline';
        hasError = true;
    } else {
        sexError.textContent = '';
        sexError.style.display = 'none';
    }

    if (!hasError) {
        localStorage.setItem('firstName', document.getElementById('firstName').value);
        localStorage.setItem('lastName', document.getElementById('lastName').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('sex', sex.value);
        localStorage.setItem('reason', document.getElementById('reason').value);
        window.location.href = '../Profile-Page/profile.html';
    }
});
