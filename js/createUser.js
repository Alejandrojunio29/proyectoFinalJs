const createUser = () => {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let userObject = {
    name,
    lastName,
    email,
    password,
  };
  return userObject;
};

const createUserinDB = async (userObject) => {
  let response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  console.log(("response:", response));

  let data = await response.json();
  console.log("data", data.data);
  return data.data;
};

const saveUser = async () => {
  let userObject = createUser();
  console.log("userObject:", userObject);
  let response = await createUserinDB(userObject);
  console.log("response2:", response);
};

let saveUserBtn = document.getElementById("signInButton");

saveUserBtn.addEventListener("click", saveUser);

let returnToMain = document.getElementById("signInButton");

returnToMain.addEventListener("click", () => {
  window.open("views/newUser.html", "_self");
});
