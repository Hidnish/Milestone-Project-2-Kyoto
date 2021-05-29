(function () {
    emailjs.init("user_HFAbZtQk3xr0kgOSlVrJi");
})();

// Functions based on the Code Institute tutorial: Rosie - Resume Project
function sendMail(contactForm) {
    emailjs.send("service_lso3e7r", "kyoto_daynight", {
            "from_firstname": contactForm.firstname.value,
            "from_lastname": contactForm.lastname.value,
            "from_email": contactForm.email.value,
            "request": contactForm.request.value
        })
        .then(
            // If the message is successfully sent 
            function (response) {
                let submitButton = document.getElementById('btnSubmit');
                submitButton.innerHTML = "Thank you!";
                submitButton.style.backgroundColor = "rgba(42,94,40,0.9)";
                alert("Your message has been successfully sent! We will get in touch as soon as possible.");
                console.log("SUCCESS", response);
            },
            // If the message does not send
            function (error) {
                alert("Sorry, something went wrong. Please fill out the form and click submit again", error);
                console.log("FAILED", error);
            });

    document.getElementById('fillForm').reset(); //Reset form once the message has been sent
    return false; //This is to prevent the page from refreshing when you submit your form    
}