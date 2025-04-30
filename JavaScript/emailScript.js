window.onload = function () {
    hideCustomAlert();
  };

function showCustomAlert(message) {
    document.getElementById("custom-alert-message").innerText = message;
    document.getElementById("custom-alert").classList.remove("hidden");
  }
  
  function hideCustomAlert() {
    console.log("Hiding alert...");
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.add("hidden");
  }
  
  function sendMail(event) {
    if (event) event.preventDefault();
  
    showCustomAlert("Sending message...");
  
    let parms = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_mqdxf7n", "template_wmafnkg", parms)
      .then(() => {
          hideCustomAlert();
        showCustomAlert("Email Sent!!");
      })
      .catch((error) => {
        hideCustomAlert();
        showCustomAlert("Failed to send email. Error: " + error);
      });
  }