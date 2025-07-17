function showMoreInfo() {
    const info = document.getElementById("more-info");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        status.textContent = "Thank you! Your message has been sent successfully.";
        form.reset();
    });
}); 

function showMoreInfo() {
    const info = document.getElementById("more-info");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
 
        status.textContent = "";
        status.style.color = "red";

         if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
            status.textContent = "Please enter a valid name (letters only).";
            return;
        }

         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            status.textContent = "Please enter a valid email address.";
            return;
        }

         if (message === "") {
            status.textContent = "Please enter your message.";
            return;
        }

         status.style.color = "green";
        status.textContent = "Thank you! Your message has been sent successfully.";
        form.reset();
    });
});

