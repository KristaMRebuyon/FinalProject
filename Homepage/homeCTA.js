document.getElementById("cta-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const response = document.getElementById("form-response");

    if (fname && lname && email) {
        response.textContent = `Thanks for subscribing, ${fname}!`;
        response.style.color = "green";
        document.getElementById("cta-form").reset();
    } else {
        response.textContent = "Please fill in all fields.";
        response.style.color = "red";
    }
});
