// EVENT LISTENERS FOR INPUT FIELDS
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

// VALIDATION FUNCTIONS

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  notifyLabel(re, name);
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^\d{5}(-\d{4})?$/;

  notifyLabel(re, zip);
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z\d?]+)@([\w\.\d\-]+)\.([a-zA-Z]{2,6})(\.[a-zA-Z]{2,6})?$/;

  notifyLabel(re, email);
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^\(?\d{3}\)?[-\.\s]?\d{3}[-\s\.]?\d{4}$/;

  notifyLabel(re, phone);
}

function notifyLabel(regex, str) {
  if (regex.test(str.value)) {
    str.classList.remove("is-invalid");
  } else {
    str.classList.add("is-invalid");
  }
}
