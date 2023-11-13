// alert("Js cargando");

const DB_ENDPOINT =
  "https://devtodatabase-950dc-default-rtdb.firebaseio.com/posts/post1";
console.log("entry detail");

let queryString = location.search;
console.log("console log de query string", queryString);

let params = new URLSearchParams(queryString);
console.log("console log de params", params);

let entryKey = params.get("entryKey");
console.log("console log de entryKey", entryKey);

const getPostById = async (postId) => {
  let response = await fetch(`${DB_ENDPOINT}/${postId}/.json`);
  let data = await response.json();
  console.log(data);
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
    } = data;
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

getPostById(entryKey);

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
}

let createAccountButton = document.getElementById("create-account");
createAccountButton.addEventListener("click", () => {
  window.open("login.html", "_self");
});

let redirectToCreatePost = document.getElementById("create-post");
redirectToCreatePost.addEventListener("click", () => {
  window.open("createPost.html", "_self");
});
