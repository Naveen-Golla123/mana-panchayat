

let postSaveButtonEl = document.getElementById("postSaveButton");
let imageInputEl = document.getElementById("imageInput");
let titleInputEl = document.getElementById("titleInput");
let editor1El = document.getElementById("editor1");
let validationAlertEl = document.getElementById("validationAlert");
let alertMessageEl = document.getElementById("alertMessage");

let uploadedFile = null;
// CK Editor Section
let em_string = "";

CKEDITOR.replace( 'editor1' );

let contentOutput = CKEDITOR.on( 'instanceReady', function( evt )
{
    var editor = evt.editor;

editor.on('change', function (e) {  
    var text =  editor.editable().getData();
    em_string = text;
        
    });
}); ;


imageInputEl.addEventListener('change', function (event) {
  uploadedFile = event.target.files[0];
  // console.log(uploadedFile);

});


postSaveButtonEl.addEventListener("click", function (event) {


  if (titleInputEl.value === "") {
    alertMessageEl.innerHTML = "Pleas give your Title!";
    validationAlertEl.classList.remove('d-none');
  } else if (contentOutput === "") {
    alertMessageEl.innerHTML = "Pleas write something on Post!";
    validationAlertEl.classList.remove('d-none');

  } else {
    validationAlertEl.classList.add('d-none');



  }

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
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdmVlbl9nb2xsYSIsImlhdCI6MTY3NTc1NTc2NSwiZXhwIjoxNjc1OTI4NTY1fQ.3IWdI4BtBze8qcUxDbToX10n5B5adI3DDAl-7qYJV04");

  var formdata = new FormData();
  formdata.append("file", uploadedFile.name);
  formdata.append("title", titleInputEl.value);
  formdata.append("news", em_string);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  fetch("https://mana-panchayat-server.vercel.app/news", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}); 











 