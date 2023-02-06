// SignUp Related Elements
let signupFormContainerEl = document.getElementById("signupFormContainer");
let signupFormEl = document.getElementById("signupForm");
let signupClickEl = document.getElementById("signupClick");
// SignUp Input Elements
let firstNameEl = document.getElementById("firstName");
let lastNameEl = document.getElementById("lastName");
let signupMailEl = document.getElementById("signupMail");
let signupPasswordEl = document.getElementById("signupPassword");
// SignUp Error Message
let firstNameErrMsgEl = document.getElementById("firstNameErrMsg");
let lastNameErrMsgEl = document.getElementById("lastNameErrMsg");
let signupMailErrMsgEl = document.getElementById("signupMailErrMsg");
let signupPasswordErrMsgEl = document.getElementById("signupPasswordErrMsg");
// SignUp Form Validation
firstNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstNameErrMsgEl.textContent = "Required*";
        firstNameEl.classList.add("border-danger");
    } else {
        firstNameErrMsgEl.textContent = "";
        firstNameEl.classList.remove("border-danger");
    }
});

lastNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameErrMsgEl.textContent = "Required*";
        lastNameEl.classList.add("border-danger");
    } else {
        lastNameErrMsgEl.textContent = "";
        lastNameEl.classList.remove("border-danger");
    }
});

signupMailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        signupMailErrMsgEl.textContent = "Required*";
        signupMailEl.classList.add("border-danger");
    } else {
        signupMailErrMsgEl.textContent = "";
        signupMailEl.classList.remove("border-danger");
    }
});

signupPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        signupPasswordErrMsgEl.textContent = "Required*";
        signupPasswordEl.classList.add("border-danger");
    } else {
        signupPasswordErrMsgEl.textContent = "";
        signupPasswordEl.classList.remove("border-danger");
    }
});
// SignUp Button Submit
let signUpButtonEl = document.getElementById("signUpButton");



// Login Related Elements
let loginFormContainerEl = document.getElementById("loginFormContainer");
let loginFormEl = document.getElementById("loginForm");
let loginClickEl = document.getElementById("loginClick");
// Login Input Elements
let loginMailEl = document.getElementById("loginMail");
let loginPasswordEl = document.getElementById("loginPassword");
// Login Error Message
let loginMailErrMsgEl = document.getElementById("loginMailErrMsg");
let loginPasswordErrMsgEl = document.getElementById("loginPasswordErrMsg");
// Login Form Validation
loginMailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        loginMailErrMsgEl.textContent = "Required*";
        loginMailEl.classList.add("border-danger");
    } else {
        loginMailErrMsgEl.textContent = "";
        loginMailEl.classList.remove("border-danger");
    }
});

loginPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        loginPasswordErrMsgEl.textContent = "Required*";
        loginPasswordEl.classList.add("border-danger");
    } else {
        loginPasswordErrMsgEl.textContent = "";
        loginPasswordEl.classList.remove("border-danger");
    }
});
// Login Button Submit
let logInButtonEl = document.getElementById("logInButton");


// Swapping Login & SignUp
signupClickEl.addEventListener("click", function() {
    signupFormContainerEl.classList.remove("d-none");
    loginFormContainerEl.classList.add("d-none");
});
loginClickEl.addEventListener("click", function() {
    signupFormContainerEl.classList.add("d-none");
    loginFormContainerEl.classList.remove("d-none");
});

// // Get Request Options
// var requestOptions = {
//     method: 'POST',
//     redirect: 'follow'
//   };




let formData = new FormData();
formData.append("username", loginMailEl.value);
formData.append("password", loginPasswordEl.value);

logInButtonEl.addEventListener

//SignUp (Posting Data to Database)
fetch("https://mana-panchayat-server.vercel.app/Auth/signIn", 
{
    method: 'POST',
    redirect: 'follow',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo"

    },
    body: formData
  })
    .then(response => response.json())
    .then(result => { 
        console.log("Hello Loged In");
    })
    .catch(error => console.log('error', error));