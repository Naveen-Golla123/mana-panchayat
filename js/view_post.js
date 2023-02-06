// Get Request Options
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };



// Declaring Variables of HTML elements  

let newsTitleEl = document.getElementById("newsTitle"); //News Post Title
let newsContentEl = document.getElementById("newsContent"); //News Post Content or Story
let imgContainerEl = document.getElementById("imgContainer"); // News Post Image



fetch("https://mana-panchayat-server.vercel.app/news/142", requestOptions)
.then(response => response.json())
.then(result => {

    newsTitleEl.innerHTML = result[0].title; //Assigning Title to Post
    imgContainerEl.setAttribute("src", result[0].imgUrl); // Assigning Image to Post
    newsContentEl.innerHTML = result[0].newsDescription; //Assigning Content or Story to Post

}

)
.catch(error => console.log('error', error));


