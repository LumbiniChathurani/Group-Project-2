/*import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Login'; // Import your Login component

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);



function Login(){
  const[email, setEmail]=useState('')
  const[Password, setPassword]=useState('')
  function handleSubmit(event){
    event.preventDefault();
  }
    let e=document.getElementById('e').value;
    let p=document.getElementById('p').value;

    if(e==''||p==''){
        alert('Enter each details correctly!');
    }
    else if(p.length>11||p.length<5){
        alert('Password minimum length is 4 and the maximum length is 10');
    }
    else{
        alert("You`re login successfully!!!");
    }
    
    
}*/

// JavaScript code to modify CSS properties
document.addEventListener("DOMContentLoaded", function () {
    // Change h2 color to white
    var h2Element = document.querySelector("h2");
    h2Element.style.color = "#ffffff"; // white color

    // Set background color to mediumvioletred
    document.body.style.backgroundColor = "magenta";

    // Set border radius of login button
    var loginButton = document.getElementById("loginButton");
    loginButton.style.borderRadius = "50px";
});



