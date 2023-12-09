// let passwordToken = document.getElementById("password-input").value;
// let mitoken = localStorage.getItem("token");

// const login = () => {
//   let passwordToken = document.getElementById("password-input").value;
//   localStorage.setItem("token", passwordToken);
// };

// let logInButton = document.getElementById("logIn-button");
// logInButton.addEventListener("click", login);

let logInButton = document.getElementById("logIn-button");
logInButton.addEventListener("click", async () => {
  const token = await auth();

  if (token.token) {
    console.log(token.token);
    localStorage.setItem("token", token.token);
    window.open("../index.html", "_self");
  } else {
    alert(token.msg);
  }

  console.log(token);
});

const auth = async () => {
  let passwordToken = document.getElementById("password-input").value;
  let userEmail = document.getElementById("email-input").value;
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail, password: passwordToken }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
