// alert("Js conectado");
const isRelevant = () => {
  let rand = Math.floor(Math.random() * 2 + 1);
  return rand === 1 ? true : false;
};

const createPost = () => {
  let postImg = document.getElementById("post-image-input").value;
  let title = document.getElementById("FormControlTextarea1").value;
  let postContent = document.getElementById("FormControlTextarea2").value;
  let timeToRead = document.getElementById("FormControlTextarea3").value;
  let hashtag1 = document.getElementById("FormControlHashtags1").value;
  let hashtag2 = document.getElementById("FormControlHashtags2").value;
  let hashtag3 = document.getElementById("FormControlHashtags3").value;
  let hashtag4 = document.getElementById("FormControlHashtags4").value;
  let userName = document.getElementById("post-author-input").value;
  let userImg = document.getElementById("post-author-picture").value;
  let date = new Date().toLocaleDateString();
  const resultisRelevant = () => {
    let rand = Math.floor(Math.random() * 2 + 1);
    return rand === 1 ? true : false;
  };
  let isRelevant = resultisRelevant();

  let postObject = {
    postImg,
    title,
    postContent,
    timeToRead,
    hashtag1,
    hashtag2,
    hashtag3,
    hashtag4,
    date,
    userName,
    userImg,
    isRelevant,
  };
  return postObject;
};

const createPostinDB = async (postObject) => {
  let response = await fetch(
    "http://localhost:3001/posts",
    {
      method: "POST",
      body: JSON.stringify(postObject),
    }
  );
  let data = await response.json();
  return data;
};

const savePost = async () => {
  let postObject = createPost();
  console.log(postObject);
  let response = await createPostinDB(postObject);
  console.log(response);
};

let savePostBtn = document.getElementById("publish-btn");

savePostBtn.addEventListener("click", savePost);

const onInputFocus = () => {
  document.getElementById("hashtagText").classList.add("d-none");
};

let hashtagInputs = document.getElementById(
  "FormControlHashtags1",
  "FormControlHashtags2",
  "FormControlHashtags3",
  "FormControlHashtags4"
);

hashtagInputs.addEventListener("click", onInputFocus);

let openMain = document.getElementById("publish-btn");

openMain.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
