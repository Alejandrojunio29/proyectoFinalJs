// alert("Js conectado");

const createPost = () => {
  let postImg = document.getElementById("post-image-input").value;
  let title = document.getElementById("FormControlTextarea1").value;
  let postContent = document.getElementById("FormControlTextarea2").value;
  let timeToRead = document.getElementById("FormControlTextarea3").value;
  let hashtag1 = document.getElementById("FormControlHashtags").value;
  let userName = document.getElementById("post-author-input").value;
  let userImg = document.getElementById("post-author-picture").value;

  let date = new Date().toLocaleDateString();

  let postObject = {
    postImg,
    title,
    postContent,
    timeToRead,
    hashtag1,
    date,
    userName,
    userImg,
  };
  return postObject;
};

const createPostinDB = async (postObject) => {
  let response = await fetch(
    "https://devtodatabase-950dc-default-rtdb.firebaseio.com/posts/post1.json",
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
