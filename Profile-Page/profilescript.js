window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('displayFirstName').textContent = localStorage.getItem('firstName') || 'N/A';
    document.getElementById('displayLastName').textContent = localStorage.getItem('lastName') || 'N/A';
    document.getElementById('displayEmail').textContent = localStorage.getItem('email') || 'N/A';
    document.getElementById('displaySex').textContent = localStorage.getItem('sex') || 'N/A';
    document.getElementById('displayReason').textContent = localStorage.getItem('reason') || 'N/A';
});
