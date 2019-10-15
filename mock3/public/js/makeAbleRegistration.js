let registrationForm = document.getElementsByClassName("registration-form")[0];

function checkRegistration() {
  let button = registrationForm.querySelector('button');
  if (registrationForm.checkValidity()) {
    button.classList.remove("button_disabled");
  } else {
    button.classList.add("button_disabled")
  }
}
