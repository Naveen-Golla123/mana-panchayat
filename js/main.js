

let imageInputEl = document.getElementById("imageInput");
let uploadedFile = null;

imageInputEl.addEventListener('change', function (event) {
  console.log(event);
  uploadedFile = event.target.files[0];

});




var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var postRequestOptions = {
  method: 'POST',
  redirect: 'follow',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  // body: {
  //   "id": 2,
  //   "title": "Stock Market: మార్కెట్ల బడ్జెట్ దూకుడు.. నష్టపోయిన స్టాక్స్.. లాభపడిన స్టాక్స్ ఇవే..",
  //   "news": "Hello",
  //   "imgUrl": "",
  //   "location": "pamur",
  //   "MetaDescription": ""
  // }
};

fetch("https://mana-panchayat-server.vercel.app/news/", requestOptions)
  .then(response => response.json())
  .then(result => {

    let newsTitleEl = document.getElementById("newsTitle");
    let newContentEl = document.getElementById("newContent");
    let imgContainerEl = document.getElementById("imgContainer");
    let allPostsEl = document.getElementById("allPosts");
    let holderEl = document.getElementById("holder");


    for (let each in result) {

      let divTag = document.createElement('div');
      divTag.setAttribute("id", result[each].id);
      divTag.classList.add("row", "border", "mt-3", "py-3");


      let allPostsCode = `
            
              <div class="col-3">
                  <img class="w-100 h-auto" src="${result[each].imgUrl}" alt="" srcset="">
              </div>
              <div class="col-9">
                  <h5 class="font-weight-bold">${result[each].title}</h5>
                  <div class="mt-3" style="max-height:50px; overflow:hidden;">
                    <p class="" >${result[each].newsDescription}</p>
                  </div>
                  
                  <div class="d-flex justify-content-between mt-3">
                    <p class="text-primary p-0">Read More</p>

                    <div class="d-flex justify-content-between">
                      <p class="text-secondary mr-3"><i class="fa-solid fa-location-dot mr-2"></i>${result[each].location}</p>
                      <p class="text-secondary"><i class="fa-regular fa-clock mr-2"></i>${result[each].createdOn}</p>                    
                    </div>

                  </div>
              </div>           
          `;

      divTag.innerHTML = allPostsCode;
      allPostsEl.appendChild(divTag);



    }

    // newsTitleEl.innerHTML = result[0].title;
    // newContentEl.innerHTML = result[0].newsDescription;
    // imgContainerEl.setAttribute("src", "https://tikkablob.blob.core.windows.net/tikka-items/Chicken_Leg.png");
    // console.log(imgContainerEl);

  }

  )
  .catch(error => console.log('error', error));




let postSaveButtonEl = document.getElementById("postSaveButton");
let titleInputEl = document.getElementById("titleInput");
let validationAlertEl = document.getElementById("validationAlert");
let alertMessageEl = document.getElementById("alertMessage");

postSaveButtonEl.addEventListener("click", function (event) {

  if (titleInputEl.value === "") {
    alertMessageEl.innerHTML = "Pleas give your Title!";
    validationAlertEl.classList.remove('d-none');
  } else if (contentOutput === "") {
    alertMessageEl.innerHTML = "Pleas write something on Post!";

  } else {
    validationAlertEl.classList.add('d-none');
  }

  let textAreaEl = document.getElementById("textArea");

  console.log(textAreaEl.innerHTML);
  console.log(titleInputEl.value);

  // let payloadBody = {
  //   'id': '',
  //   'title': "kkkkk",
  //   'newsDescription': "textAreaEl.innerHTML",
  //   'imgUrl': '',
  //   'location': 'Ongole',
  //   'MetaDescription': ''
  // };


  // let formData = new FormData();
  // formData.append("file", uploadedFile);
  // formData.append("title", titleInputEl.value);
  // formData.append("newsDescription", textAreaEl.value);


  //   fetch("https://mana-panchayat-server.vercel.app/news/", {
  //     method: 'POST',
  //     redirect: 'follow',
  //     mode: 'no-cors',
  //     headers: {
  //       'content-type': 'application/json',
  //       'accept': 'application/json',
  //       'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo"

  //     },
  //     body: formData
  //   })
  //     .then(response => response.json())
  //     .then(result => { })
  //     .catch(error => console.log('error', error));






  // ------------------

  var myHeaders = new Headers();
  // myHeaders.append("authority", "mana-panchayat-server.vercel.app");
  // myHeaders.append("accept", "application/json");
  // myHeaders.append("accept-language", "en-US,en;q=0.9");
  // myHeaders.append("dnt", "1");
  // myHeaders.append("origin", "null");
  // myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"");
  // myHeaders.append("sec-ch-ua-mobile", "?1");
  // myHeaders.append("sec-ch-ua-platform", "\"Android\"");
  // myHeaders.append("sec-fetch-dest", "empty");
  // myHeaders.append("sec-fetch-mode", "no-cors");
  // myHeaders.append("sec-fetch-site", "cross-site");
  //myHeaders.append("Access-Control-Allow-Origin", "*");
  // myHeaders.append("Access-Control-Allow-Methods", "POST");
  // myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
  // myHeaders.append("user-agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo");

  var formdata = new FormData();
  formdata.append("file", uploadedFile, "How to earn money online without investment in 2023.jpg");
  formdata.append("title", titleInputEl.value);
  formdata.append("newsDescription", textAreaEl.value);

  var requestOptions = {
    method: 'POST',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo",
      // "Content-type": "multipart/form-data"
    },
    body: formdata,
    redirect: 'follow',
    // mode: 'no-cors'
  };

  fetch("https://mana-panchayat-server.vercel.app/news/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});  