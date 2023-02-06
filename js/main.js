

var postRequestOptions = {
  method: 'POST',
  redirect: 'follow',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

let imageInputEl = document.getElementById("imageInput");
let uploadedFile = null;
let postSaveButtonEl = document.getElementById("postSaveButton");
let titleInputEl = document.getElementById("titleInput");
let editor1El = document.getElementById("editor1");
let validationAlertEl = document.getElementById("validationAlert");
let alertMessageEl = document.getElementById("alertMessage");

window.onload=function(){

// imageInputEl.addEventListener('change', function (event) {
//   console.log(event);
//   uploadedFile = event.target.files[0];

// });






postSaveButtonEl.addEventListener("click", function (event) {

  console.log(em_string);

  if (titleInputEl.value === "") {
    alertMessageEl.innerHTML = "Pleas give your Title!";
    validationAlertEl.classList.remove('d-none');
  } else if (contentOutput === "") {
    alertMessageEl.innerHTML = "Pleas write something on Post!";

  } else {
    validationAlertEl.classList.add('d-none');
  }

  let textAreaEl = document.getElementById("textArea");



  let payloadBody = {
    'id': '',
    'title': "kkkkk",
    'newsDescription': "textAreaEl.innerHTML",
    'imgUrl': '',
    'location': 'Ongole',
    'MetaDescription': ''
  };


  let formData = new FormData();
  formData.append("file", uploadedFile);
  formData.append("title", titleInputEl.value);
  formData.append("newsDescription", textAreaEl.value);


    fetch("https://mana-panchayat-server.vercel.app/news/", {
      method: 'POST',
      redirect: 'follow',
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo"

      },
      body: formData
    })
      .then(response => response.json())
      .then(result => { })
      .catch(error => console.log('error', error));






//  ------------------

  var myHeaders = new Headers();
  myHeaders.append("authority", "mana-panchayat-server.vercel.app");
  myHeaders.append("accept", "application/json");
  myHeaders.append("accept-language", "en-US,en;q=0.9");
  myHeaders.append("dnt", "1");
  myHeaders.append("origin", "null");
  myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"");
  myHeaders.append("sec-ch-ua-mobile", "?1");
  myHeaders.append("sec-ch-ua-platform", "\"Android\"");
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "no-cors");
  myHeaders.append("sec-fetch-site", "cross-site");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "POST");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
  myHeaders.append("user-agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTQ4NTkwMiwiZXhwIjoxNjc1NjU4NzAyfQ.vrhucJ769Z6i5kRdak04_F_MgrG-BspMI5WPn_VLVjo");

  var formdata = new FormData();
  formdata.append("file", uploadedFile, uploadedFile.name);
  formdata.append("title", titleInputEl.value);
  formdata.append("news", em_string);


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

}










 