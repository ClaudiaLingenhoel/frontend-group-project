const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");

//--> allows JS to interact with the form, message area, submit button

// runs when the user submits form
form.addEventListener("submit", (e) => {
  // stops the page from reloading, JS can handle the submission
  e.preventDefault();

  // check: checks wether all required fields are valid,
  // report: shows browers validation message,
  // return: stops function if form is invalid)
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  // disable button: prevents users from clicking button multiple times while the message is being sent
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(() => {
    // reset: clears the form

    form.reset();

    // success message in green
    message.textContent = "Your message has been sent successfully!";
    message.classList.add("text-success");

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";

    setTimeout(() => {
      message.textContent = "";
      message.className = "mt-3 text-center";
    }, 3000);
  }, 1500);
});
