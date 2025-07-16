// Enhanced contact form validation with user-friendly experience
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !email || !phone || !message) {
    showAlert("Please fill in all fields.", "error");
    return;
  }

  // Email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showAlert("Enter a valid email address.", "error");
    return;
  }

  // Phone number format check (Indian 10-digit)
  if (!/^\d{10}$/.test(phone)) {
    showAlert("Enter a valid 10-digit mobile number.", "error");
    return;
  }

  // Success
  showAlert(`Thank you ${name}, your message has been sent!`, "success");
  form.reset();
});

// Show user-friendly alert
function showAlert(message, type) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.position = "fixed";
  alertBox.style.bottom = "20px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.padding = "15px 25px";
  alertBox.style.borderRadius = "6px";
  alertBox.style.color = type === "success" ? "#155724" : "#721c24";
  alertBox.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da";
  alertBox.style.border = type === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
  alertBox.style.zIndex = "9999";
  alertBox.style.fontSize = "15px";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}
