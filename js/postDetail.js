// alert("Js cargando");

const DB_ENDPOINT = `http://localhost:3001/posts`;
// console.log("entry detail");

// let queryString = location.search;
// console.log("console log de query string", queryString);

// let params = new URLSearchParams(queryString);
// console.log("console log de params", params);

// let paramsID = params.get("_id");

// let entryKey = params.get("entryKey");
// console.log("console log de entryKey", entryKey);

const getPostById = async (id) => {
  const queryString = window.location.search;
  console.log("quarystring", queryString);
  const params = new URLSearchParams(queryString);
  let savedId = params.get("id");
  let response = await fetch(`${DB_ENDPOINT}/${savedId}`);
  let data = await response.json();

  if (data) {
    let {
      postContent,
      postImg,
      title,
      date,
      hashtag1,
      hashtag2,
      hashtag3,
      hashtag4,
      userName,
      userImg,
    } = data.data;
    document.getElementById("postImg").src = postImg;
    document.getElementById("userImg").src = userImg;
    document.getElementById("userName").textContent = userName;
    document.getElementById("postDate").textContent = date;
    document.getElementById("postTitle").textContent = title;
    document.getElementById("hashtag1").textContent = "#" + hashtag1;
    document.getElementById("hashtag2").textContent = "#" + hashtag2;
    document.getElementById("hashtag3").textContent = "#" + hashtag3;
    document.getElementById("hashtag4").textContent = "#" + hashtag4;
    document.getElementById("postContent").textContent = postContent;
  }
};

getPostById();

let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
  window.open("login.html", "_self");
});

const logout = () => {
  localStorage.removeItem("token");
};

let logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", logout);
logoutButton.addEventListener("click", (_) => {
  location.reload();
});

let token = localStorage.getItem("token");
console.log(token);
if (token) {
  document.getElementById("login-button").classList.add("d-none");
  document.getElementById("login-button").classList.remove("d-lg-block");
  document.getElementById("create-account").classList.add("d-none");
  document.getElementById("create-post").classList.remove("d-none");
  document.getElementById("photo-user").classList.remove("d-none");
  document.getElementById("editButon").classList.remove("d-none");
  document.getElementById("deleteButton").classList.remove("d-none");
  
}

//PARA ELIMINAR POST 

const idPostToDelete = async (id) => {
  const queryString = window.location.search;
  console.log("quarystring", queryString);
  const params = new URLSearchParams(queryString);
  let savedId = params.get("id");
  
return savedId
  
};

const deletePostinDB = async (id) => {
  const queryString = window.location.search;
  console.log("quarystring", queryString);
  const params = new URLSearchParams(queryString);
  let savedId = params.get("id");
  const connection = await fetch((`${DB_ENDPOINT}/${savedId}`), {
     method: "DELETE",
     headers: {
      'Content-Type': 'application/json',
    },
   });
   console.log("Post eliminado:");
};

let deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
  deletePostinDB(idPostToDelete)
} );

let deleteButton2 = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
  window.open("../index.html", "_self");
} );

let createAccountButton = document.getElementById("create-account");
createAccountButton.addEventListener("click", () => {
  window.open("login.html", "_self");
});

let redirectToCreatePost = document.getElementById("create-post");
redirectToCreatePost.addEventListener("click", () => {
  window.open("createPost.html", "_self");
});

const getUserToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = token.split(".")[1];
    const legiblePayload = JSON.parse(atob(payload));
    return legiblePayload.id;
  }
};

const userPermission = () => {};
