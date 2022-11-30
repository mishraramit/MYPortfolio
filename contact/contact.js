function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ramitranjanmishra03@gmail.com",
    Password: "Ramit@890",
    To: "ramitranjanmishra03@gmail.com",
    From: document.getElementById("email").value,
    Subject: "A person wants to contact",
    Body: document.getElementById("message").value
  }).then(
    message => alert(message)
  );
}