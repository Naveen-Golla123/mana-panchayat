

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
        
        let divTag = document.createElement('div');
        divTag.setAttribute("id",result[each].id);
        divTag.classList.add("row", "border", "mt-3", "py-3");

  
          let allPostsCode = `
            
              <div class="col-3">
                  <img class="w-100 h-auto" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118596058/original/241cc44f7ea8e1b043df8e735c8fdea0975bcb1d/design-catchy-youtube-thumbnail.jpg" alt="" srcset="">
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