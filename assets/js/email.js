(function () {
    emailjs.init("user_HFAbZtQk3xr0kgOSlVrJi");
})();

function sendMail(contactForm) {
    emailjs.send("service_lso3e7r", "kyoto_daynight", {
            "from_firstname": contactForm.firstname.value,
            "from_lastname": contactForm.lastname.value,
            "from_email": contactForm.email.value,
            "request": contactForm.request.value
        })
        .then(
            function (response) {
                let submitButton = document.getElementById('btnSubmit');
                submitButton.innerHTML = "Thank you!";
                submitButton.style.backgroundColor = "rgba(42,94,40,0.9)";
                alert("Your message has been successfully sent! We will get in touch as soon as possible.");
                console.log("SUCCESS", response);
            },
            function (error) {
                alert("Sorry, something went wrong. Please fill out the form and click submit again", error);
                console.log("FAILED", error);
            });

    document.getElementById('fillForm').reset();
    return false; //This is to prevent the page from refreshing when you submit your form    
}