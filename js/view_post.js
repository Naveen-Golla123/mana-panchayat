// Get Request Options
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };



// Declaring Variables of HTML elements  

let newsTitleEl = document.getElementById("newsTitle"); //News Post Title
let newsContentEl = document.getElementById("newsContent"); //News Post Content or Story
let imgContainerEl = document.getElementById("imgContainer"); // News Post Image
let authorNameEl = document.getElementById("authorName"); // News Post Image
let publishedDateEl = document.getElementById("publishedDate"); // News Post Image

function dateToFormat(timeStamp){
  let dateString = timeStamp;
  dateString = dateString.slice(0, -5);
  let date = new Date(dateString);
  let formattedDate = `${("0" + date.getDate()).slice(-2)} ${(date.toLocaleString("en-US", { month: "long" }))} ${date.getFullYear()}`;
  return formattedDate;
}


fetch("https://mana-panchayat-server.vercel.app/news/142", requestOptions)
.then(response => response.json())
.then(result => {

    newsTitleEl.innerHTML = result[0].title; //Assigning Title to Post
    imgContainerEl.setAttribute("src", result[0].imgUrl); // Assigning Image to Post
    newsContentEl.innerHTML = result[0].newsDescription; //Assigning Content or Story to Post
    authorNameEl.textContent = result[0].author;

    let dateFormat = dateToFormat(result[0].createdOn);

    publishedDateEl.textContent = dateFormat;

}

)
.catch(error => console.log('error', error));


