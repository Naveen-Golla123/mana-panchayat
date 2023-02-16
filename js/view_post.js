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
let urlCopyEl = document.getElementById("urlCopy"); // Varible to store page url
let postUrlCopyButtonEl = document.getElementById("postUrlCopyButton"); // Button to copy post's URL
let latestPostsEl = document.getElementById("latestPosts"); //Latest Post Container
let whatsappUrlEl = document.getElementById("whatsappUrl");

//Assigning Meta Details
let metaUrlEl = document.getElementById("metaUrl"); // Meta Post Url
let metaTitleEl = document.getElementById("metaTitle"); // Button to copy post's URL
let metaImageEl = document.getElementById("metaImage"); // Button to copy post's URL
let metaDescriptionEl = document.getElementById("metaDescription"); // Button to copy post's URL

//Collecting Url of Page
var mainURL = window.location.href;
var baseURL = mainURL.substring(0, mainURL.lastIndexOf("/")+1);
var postUrlEl = baseURL + "view_post.html";

//Formating Date to "DD MM YYYY" 
function dateToFormat(timeStamp){
  let dateString = timeStamp;
  dateString = dateString.slice(0, -5);
  let date = new Date(dateString);
  let formattedDate = `${("0" + date.getDate()).slice(-2)} ${(date.toLocaleString("en-US", { month: "long" }))} ${date.getFullYear()}`;
  return formattedDate;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

//Fetching data form the API
fetch("https://mana-panchayat-server.vercel.app/news/"+id, requestOptions)
.then(response => response.json())
.then(result => {

console.log(result);
    newsTitleEl.innerHTML = result.title; //Assigning Title to Post
    imgContainerEl.setAttribute("src", result.imgUrl); // Assigning Image to Post
    newsContentEl.innerHTML = result.newsDescription; //Assigning Content or Story to Post
    if(result.author !== null){
      authorNameEl.textContent = result.author.firstname + " " + result.author.lastname; //Assigning Author Name of Story to Post
    }else{
      authorNameEl.textContent= "Admin";
    }


    // // Url of Post
    postUrlEl = window.location.href;
    console.log("post:" + postUrlEl);
    urlCopyEl.value = postUrlEl;

    //Date to HTML Element
    let dateFormat = dateToFormat(result.createdOn);
    publishedDateEl.textContent = dateFormat;

    //WhatsApp Share link
    whatsappUrlEl.href = "https://api.whatsapp.com/send?text=" + postUrlEl;


    //Giving meta details to page
    metaUrlEl.content = postUrlEl;
    metaTitleEl.content = result.title;
    metaImageEl.content = result.imgUrl;
    metaDescriptionEl.content = result.newsDescription ;
    console.log(metaDescriptionEl);

}

)
.catch(error => console.log('error', error));


//Fetching Latest posts
fetch("https://mana-panchayat-server.vercel.app/news/latest/5", requestOptions)
  .then(response => response.json())
  .then(result => {

    var mainURL = window.location.href;
    var baseURL = mainURL.substring(0, mainURL.lastIndexOf("/") + 1);
    var postUrlEl = baseURL + "view_post.html";
    // console.log(postUrlEl);

    for (let each in result) {

      let divTag = document.createElement('div');
      divTag.setAttribute("id", "news_"+ result[each].id);
      divTag.classList.add("row", "mt-0");


      let allPostsCode = `
      <div class="col-12">
        <div class="row cursor-point">
            <div class="col-4">
                <img class="w-100" src="${result[each].imgUrl}" alt="">
            </div>
            <div class="col-8 p-0">
                <small class="">${result[each].title}</small>
            </div>                                 
        </div> 
        <hr class=""> 
      </div>    
  
        `;

      divTag.innerHTML = allPostsCode;
      latestPostsEl.appendChild(divTag);
      document.getElementById("news_" + result[each].id).addEventListener('click', event => {
        window.location.href = postUrlEl + "?id=" + result[each].id;
      })
    }
  }

  )
  .catch(error => console.log('error', error));











//Post's Url coping to Clipboard


// Function to copy To Clipboard
// async function copyToClipboard(text) {
//   try {
//     await navigator.clipboard.writeText(text);
//     console.log("Text copied to clipboard successfully!");
//   } catch (error) {
//     console.error("Failed to copy text to clipboard: ", error);
//   }
// }

// var textToCopy = postUrlEl;
// copyToClipboard(textToCopy);



