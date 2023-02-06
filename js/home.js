

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  
fetch("https://mana-panchayat-server.vercel.app/news/", requestOptions)
.then(response => response.json())
.then(result => {


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



}

)
.catch(error => console.log('error', error));
