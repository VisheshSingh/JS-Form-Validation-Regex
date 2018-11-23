// EVENT LISTENERS FOR INPUT FIELDS
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

// VALIDATION FUNCTIONS

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  if (re.test(name.value)) {
    name.classList.remove("is-invalid");
  } else {
    name.classList.add("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^\d{5}(-\d{4})?$/;

  if (re.test(zip.value)) {
    zip.classList.remove("is-invalid");
  } else {
    zip.classList.add("is-invalid");
  }
}

function validateEmail() {}

function validatePhone() {}
