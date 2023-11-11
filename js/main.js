let postArray = [
  {
    date: "Nov 7",
    isRelevant: true,
    tags: {
      tag1: "kodemia",
      tag2: "programming",
      tag3: "computers",
      tag4: "javascript",
    },
    timeToRead: "10 min",
    title: "Testing post",
    userName: "El Pepe",

    postImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--wP48g-um--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zfzl1bmezdynbmhj5smy.png",
    userImg: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
  },
];

const getAllPosts = async () => {
  let response = await fetch(
    "https://devtodatabase-950dc-default-rtdb.firebaseio.com/posts/post1/.json"
  );
  let data = await response.json();
  console.log(data);
  return data;
};

getAllPosts();

const createPostCard = (postData) => {
  let { postimg, date, tags, timetoRead, title, username, userImg } = postData;

  let mainContainer = document.createElement("div");
  mainContainer.classList.add("card", "mb-3");

  let postImg = document.createElement("img");
  postImg.classList.add("card-img-top");
  postImg.src =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--wP48g-um--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zfzl1bmezdynbmhj5smy.png";

  let secondContainer = document.createElement("div");
  secondContainer.classList.add("card-body");

  let thirdContainer = document.createElement("div");
  thirdContainer.classList.add("d-flex", "flex-row", "mb-2", "ms-1");

  let userProfileImg = document.createElement("img");
  userProfileImg.classList.add("rounded-circle", "shadow-4-strong");
  userProfileImg.style.height = "40px";
  userProfileImg.alt = "foto de perfil del usuario";
  userProfileImg.src =
    "https://xsgames.co/randomusers/assets/avatars/male/74.jpg";

  let fourthContainer = document.createElement("div");
  fourthContainer.classList.add("ps-1");

  let userName = document.createElement("h5");
  userName.classList.add("card-title", "m-0");
  userName.innerText = "Nombre del usuario";

  let postDate = document.createElement("p");
  postDate.classList.add("card-text");

  let dateSmall = document.createElement("small");
  dateSmall.classList.add("text-body-secondary");
  dateSmall.innerText = "Nov 7";

  postDate.append(dateSmall);

  let fifthContainer = document.createElement("div");
  fifthContainer.classList.add("ms-5");

  let sixthContainer = document.createElement("div");

  let postTitle = document.createElement("p");
  postTitle.classList.add("card-text", "fs-4", "fw-bolder", "lh-sm", "my-2");
  postTitle.innerText = "Titulo del Post";

  let tagsContainer = document.createElement("div");
  tagsContainer.classList.add("d-flex", "flex-wrap", "gap-2");

  let tag1 = document.createElement("a");
  tag1.classList.add(
    "btn",
    "border-0",
    "text-black",
    "btn-outline-secondary",
    "btn-sm"
  );
  tag1.setAttribute("role", "button");
  tag1.href = "#";
  tag1.innerText = "webdev";

  let tag2 = document.createElement("a");
  tag2.classList.add(
    "btn",
    "border-0",
    "text-black",
    "btn-outline-warning",
    "btn-sm"
  );
  tag2.setAttribute("role", "button");
  tag2.href = "#";
  tag2.innerText = "programming";

  let tag3 = document.createElement("a");
  tag3.classList.add(
    "btn",
    "border-0",
    "text-black",
    "btn-outline-info",
    "btn-sm"
  );
  tag3.setAttribute("role", "button");
  tag3.href = "#";
  tag3.innerText = "productivity";

  let tag4 = document.createElement("a");
  tag4.classList.add(
    "btn",
    "border-0",
    "text-black",
    "btn-outline-success",
    "btn-sm"
  );
  tag4.setAttribute("role", "button");
  tag4.href = "#";
  tag4.innerText = "beginners";

  let seventhContainer = document.createElement("div");
  seventhContainer.classList.add("d-flex", "justify-content-between", "mt-3");

  let postReactions = document.createElement("a");
  postReactions.classList.add("btn", "btn-light", "btn-sm");
  postReactions.href = "#";

  let emojis = document.createElement("small");
  emojis.innerText = "🥸😄🥳😍 Reactions";

  postReactions.append(emojis);

  let postComments = document.createElement("a");
  postComments.classList.add(
    "btn",
    "border-0",
    "text-black",
    "btn-outline-secondary",
    "btn-sm"
  );
  postComments.href = "#";

  let commentsText = document.createElement("small");
  commentsText.innerText = "📩 52 comments";

  postComments.append(commentsText);

  let timeToRead = document.createElement("p");
  timeToRead.classList.add("card-text", "d-flex");

  let timeToReadText = document.createElement("small");
  timeToReadText.classList.add("text-body-secondary");
  timeToReadText.innerText = "3 mins Read ⌛️";

  timeToRead.append(timeToReadText);

  seventhContainer.append(postReactions, postComments, timeToRead);

  tagsContainer.append(tag1, tag2, tag3, tag4);

  sixthContainer.append(postTitle, tagsContainer);

  fifthContainer.append(sixthContainer, seventhContainer);

  //Parte de abajo

  fourthContainer.append(userName, postDate);

  thirdContainer.append(userProfileImg, fourthContainer);

  secondContainer.append(thirdContainer, fifthContainer);

  mainContainer.append(postImg, secondContainer);

  return mainContainer;
};

const printPostCards = (postArray) => {
  let postWrapper = document.getElementById("main-side");
  let postCard = createPostCard(postArray);
  postWrapper.append(postCard);
};

printPostCards(postArray);
