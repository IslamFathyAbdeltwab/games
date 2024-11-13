


let navLink = document.querySelectorAll(".nav-link");
let row=document.querySelector(".row")
let firstSection=document.querySelector(".first-section")
let nav=document.querySelector("nav")
let load=document.querySelector(".load")
async function defult() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bbf94edd26msh905e2fd3b3bb55ep146e2bjsnb14f93180d18',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg", options)
    let data = await req.json()

     console.log(data)
    display(data)
    load.classList.add("d-none")

}defult()



let allCatogry={
    0:"mmorpg",
    1:"shooter",
    2:"sailing",
    3:"permadeath",
    4:"superhero",
    5:"pixel"
}

for(let i=0;i<=5;i++){
    navLink[i].addEventListener("click",async function(e){
        load.classList.remove("d-none")
        console.log(allCatogry[i])

        const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'bbf94edd26msh905e2fd3b3bb55ep146e2bjsnb14f93180d18',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
                let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${allCatogry[i]}`, options)
                let data = await req.json()
                // console.log(data)
                for(let i=0;i<6;i++){
                    navLink[i].classList.remove("active")
                }
                e.target.classList.add("active")
                display(data,allCatogry[i])
        load.classList.add("d-none")

            })

    }


function display(data,x) {
    cartoona = ``
    for (let i = 0; i < data.length; i++) {
        cartoona +=
            `
             <div class="col-xl-3 col-lg-4 mb-3 col-md-6  position-relative">
                    <div class="card  layer p-3 bg-card">
                        <img src="${data[i].thumbnail}" alt="">
                        <div class="d-flex mt-2 justify-content-between align-items-center">
                            <h6>"${data[i].title.split().join().slice(0, 24)}"</h6>
                            <span class="btn button px-2 py-1 text-white">Free</span>
                        </div>
                        <p class="text-center hai py-2 txt">${data[i].short_description.split().join().slice(0, 70)}</p>
                        <div class="d-flex align-align-items-center justify-content-between ">

                            <p class="p shadow   fs-p">${data[i].genre}</p>
                            <p class="p shadow  fs-p">PC (Windows)</p>

                        </div>

                    </div>
           </div>`

    }

    row.innerHTML = cartoona

    let allCard = document.querySelectorAll(".card")
    
    for (let i = 0; i < allCard.length; i++) {
        allCard[i].addEventListener("click", function () {
        

            detiles(data[i].id,x)


            
        })
    }

}

async function detiles(id,x) {
    load.classList.remove("d-none")
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bbf94edd26msh905e2fd3b3bb55ep146e2bjsnb14f93180d18',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    const response = await fetch(url, options);
    const result = await response.json();
    displayInfo(result,x)
    load.classList.add("d-none")

   

}

function displayInfo(cardInfo,x) {
    console.log(cardInfo)
    cartoona = `
     
      <div class="header  d-flex pt-5 pb-3 justify-content-between align-items-center">
            <h3>Details Game</h3>
            <i class="fa-solid fa-x"></i>
        </div>

        <div class="row">
            <div class="col-md-4 mb-3 col-12">
                <img src="${cardInfo.thumbnail}" class="w-100" alt="wraper">

            </div>
            <div class="col-md-8 px-3 col-12">
                <h3>Title: <span class="h3">${cardInfo.title} </span></p>
                <p class="para">Category: <span >${cardInfo.genre}</span></p>
                <p class="para">Platform: <span >${cardInfo.platform}</span></p>
                <p class="para">Status: <span >${cardInfo.status}</span></p>
                <p class="sf lineH">${cardInfo.description}</p>
                <button class="btn btn-outline-warning"><a href="${cardInfo.game_url}" target="_blank" class="text-white text-decoration-none">shaw games</a></button>
            </div>
        </div>
    `
    firstSection.classList.add("d-none")
    nav.classList.add("d-none")
    row.innerHTML=cartoona
    let closeIcon=document.querySelector(".fa-x")
    disapperDetiles(closeIcon,x)

    
}

function disapperDetiles(closeIcon,x){
    closeIcon.addEventListener("click",function(){
    load.classList.remove("d-none")

    firstSection.classList.remove("d-none")
    nav.classList.remove("d-none")
    lastDisplay(x)
    


    })


    

}

async function lastDisplay(x) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bbf94edd26msh905e2fd3b3bb55ep146e2bjsnb14f93180d18',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${x ?x :"mmorpg"}`, options)
    let data = await req.json()

     console.log(data)
    display(data)
    load.classList.add("d-none")    
}



























// data[i].short_description





// test()
// let allCard = document.querySelectorAll(".card")
  
//     for (let i = 0; i < allCard.length; i++) {
//         allCard[i].addEventListener("click", function (e) {
//             console.log(data[i])

//             data[i].

//             document.querySelector(".row").classList.add("d-none")
//         })









