alert("javascriot cargadi")
let passwordToken = document.getElementById("password-input").value;
let mitoken =localStorage.getItem(passwordToken)


const login =()=>{
    let passwordToken = document.getElementById("password-input").value;
    localStorage.setItem("token", passwordToken);
}

  let logInButton = document.getElementById("logIn-button");
  logInButton.addEventListener("click", login)
  let logInButtonToMain = document.getElementById("logIn-button");
  logInButton.addEventListener("click", ()=>{
    window.open("../index.html", "_self")
  })



 