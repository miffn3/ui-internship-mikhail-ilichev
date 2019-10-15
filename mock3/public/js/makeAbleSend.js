let sendForm = document.getElementsByClassName("links-section__send-form")[0];

function checkSend() {
  let button = sendForm.querySelector('button');
  if (sendForm.checkValidity()) {
    button.classList.remove("button_disabled");
  } else {
    button.classList.add("button_disabled")
  }
}