
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    // Get value from the input
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
    const upperC = /[A-Z]/;
    const lowerC = /[a-z]/;
    const number = /[0-9]/;

    //username validation+
    if (usernamevalue === ""){

        setErrorFor(username, "username can not be blank");

    }else if(usernamevalue.length < 6){
        setErrorFor(username, "username must be atleast 6 characters long")

    } else{
        setSuccessFor(username);
    }

    // email validation

    if(emailvalue === ""){
        setErrorFor(email, "email can not be blank")

    } else{
        setSuccessFor(email);
    }

    // password validation

    if(passwordvalue === ""){
        setErrorFor(password, "password can not be blank")

    } else if(passwordvalue.length < 8){
        setErrorFor(password, "password must be atleast 8 characters long")

    } else if(!upperC.test(passwordvalue)){
        setErrorFor(password, "password must contain a uppercase")
    } else if(!lowerC.test(passwordvalue)){
        setErrorFor(password, "password must contain a lowercase")
    } else if(!number.test(passwordvalue)){
        setErrorFor(password, "password must contain a number")
    } else{
        setSuccessFor(password);
    }

    //comfirm password validation

    if(password2value === ""){
        setErrorFor(password2, "comfirm password can not be blank")

    } else if(passwordvalue !== password2value){
        setErrorFor(password2, "incorrect password")

    } else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;       //.form-control
    const small = formControl.querySelector("small")

    // add error message inside small
    small.innerText = message;

    // add error class

    formControl.className = "form-control error";
}


function setSuccessFor(input){
    const formControl = input.parentElement;       //.form-control

    // add error class

    formControl.className = "form-control success";
}

