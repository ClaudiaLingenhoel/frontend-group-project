const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
const submitBtn = form.querySelector("button");

//--> allows JS to interact with the form, message area, submit button

// runs the code whenever the user clicks send message, async allows us to wait for the servers response
form.addEventListener("submit", async (e) => {
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

  // removes old success or error message before sending again
  message.textContent = "";
  message.className = "mt-3 text-center";

  try {
    // await: pauses code until server responds
    // fetch: sends the form data to email
    // POST: sends data securely
    // new FormData(form) collects all form fields automatically
    const response = await fetch("add_email/endpoint_here", {
      method: "POST",
      body: new FormData(form),
    });

    // check if succeeded: if server reports error, JS jumps to the catch block (-> if it goes wrong then do this)
    if (!response.ok) {
      throw new Error("Failed");
    }

    // reset: clears the form
    // success message in green
    form.reset();

    message.textContent = "Your message has been sent successfully!";
    message.classList.add("text-success");

    // if request fails, message in red
  } catch (error) {
    message.textContent = "Something went wrong. Please try again.";
    message.classList.add("text-danger");

    // finally: block runs wether the request succeeds or fails. it re-enables the button and restores its orginal tect, user can submit form again
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});
