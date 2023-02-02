

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://mana-panchayat-server.vercel.app/news/7", requestOptions)
    .then(response => response.json())
    .then(result => {

        let newsTitleEl = document.getElementById("newsTitle");
        let newContentEl = document.getElementById("newContent");
        let imgContainerEl = document.getElementById("imgContainer");


        newsTitleEl.innerHTML = result[0].title;
        newContentEl.innerHTML = result[0].newsDescription;
        imgContainerEl.setAttribute("src", "https://tikkablob.blob.core.windows.net/tikka-items/Chicken_Leg.png");
        console.log(imgContainerEl);
        
    }

    )
    .catch(error => console.log('error', error));


