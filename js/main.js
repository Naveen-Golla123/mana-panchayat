

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
  body: {
    "id": 2,
    "title": "Stock Market: మార్కెట్ల బడ్జెట్ దూకుడు.. నష్టపోయిన స్టాక్స్.. లాభపడిన స్టాక్స్ ఇవే..",
    "news": "Hello",
    "imgUrl": "",
    "location": "pamur",
    "MetaDescription": ""
  }
};
  
  fetch("https://mana-panchayat-server.vercel.app/news/", requestOptions)
    .then(response => response.json())
    .then(result => {

        let newsTitleEl = document.getElementById("newsTitle");
        let newContentEl = document.getElementById("newContent");
        let imgContainerEl = document.getElementById("imgContainer");
        let allPostsEl = document.getElementById("allPosts");
        let holderEl = document.getElementById("holder");


      for (let each in result){
        console.log(result[each].title);

        let allPostsCode = `
            <div class="row">
                <div class="col-3">
                    <img class="w-100" src="${result[each].imgUrl}" alt="" srcset="">
                </div>
                <div class="col-9">
                    <p class="">${result[each].title}</p>
                    <p class="">${result[each].newsDescription}</p>
                    <p class="">${result[each].location}</p>
                </div>

            </div>          
        `;

        
        holderEl.innerHTML = allPostsCode;       
        allPostsEl.appendChild(allPostsEl);         
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

postSaveButtonEl.addEventListener("click", function(event){

  if(titleInputEl.value === ""){
      alertMessageEl.innerHTML = "Pleas give your Title!";
      validationAlertEl.classList.remove('d-none');    
  }else if(contentOutput === ""){
    alertMessageEl.innerHTML = "Pleas write something on Post!";
    
  }else{
    validationAlertEl.classList.add('d-none');
  }

  let textAreaEl = document.getElementById("textArea");

  console.log(textAreaEl.innerHTML);
  console.log(titleInputEl.value);
  
  let payloadBody = {
    'id': '',
    'title': "kkkkk",
    'newsDescription': "textAreaEl.innerHTML",
    'imgUrl': '',
    'location': 'Ongole',
    'MetaDescription': ''
  };


  fetch("https://mana-panchayat-server.vercel.app/news/", {
    method: 'POST',
    redirect: 'follow',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(payloadBody)
  })
    .then(response => response.json())
    .then(result => {})
    .catch(error => console.log('error', error));  
});