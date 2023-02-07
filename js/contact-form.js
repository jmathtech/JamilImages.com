document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
    
    Email.send({
      Host : "smtp.dreamhost.com",
      Username : "admin@jamilimages.com",
      Password : "TheFlyEagles24!",
      To : + email,
      From : "admin@jamilimages.com",
      Subject : "New Contact Form Submission",
      Body : "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message
    }).then(function(message) {
      alert("Email sent successfully!");
    });
  });

  window.location.href = "../index.html";
