document.addEventListener("DOMContentLoaded", function () {
    // Change h2 color to white
    var h2Element = document.querySelector("h2");
    h2Element.style.color = "#ffffff"; // white color

     // Set height of login box
     var loginBox = document.querySelector(".login-box");
     loginBox.style.height = "580px"; // Change the height as needed

    // Set background color to mediumvioletred
   document.body.style.backgroundColor = "magenta";

    // Set border radius of login button
    var loginButton = document.getElementById("loginButton");
    loginButton.style.borderRadius = "50px";

    // Get all elements with the class "input-box"
const inputBoxes = document.querySelectorAll('.input-box');

// Loop through each input box
inputBoxes.forEach(inputBox => {
    // Apply padding-left and line-height styles
    inputBox.style.paddingLeft = '20px';
    inputBox.style.lineHeight = '1.5';
});


});
