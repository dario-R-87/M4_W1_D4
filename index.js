const albums = [
{artist: "eminem",
 albums: [],
},
{artist: "metallica",
 albums: [],
},
{artist: "queen",
 albums: [],
}
];



const fetchSongs = function (artist){
const url="https://striveschool-api.herokuapp.com/api/deezer/search?q="+artist;
fetch(url).then((res)=>{
	return res.json();}).then((items)=>{

const idName = "#"+artist+"Section"
const art = document.querySelector(idName);
const album = [];

for(const item of items.data){
 art.innerHTML += `
  <div class="card text-secondary" style="width: 18rem;">
  <img src="${item.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.album.title}</h5>
    <p class="card-text">${item.title}</p>
<button onclick="modal('${artist}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Crea Lista
</button>
  </div>
</div>
 `;

if(!album.includes((item.album.title).toLowerCase())){
album.push((item.album.title).toLowerCase());
}
}
for(let i=0; i<albums.length; i++){
 if(albums[i].artist===artist)
  albums[i].albums=album;
}
});
}



fetchSongs("eminem");
fetchSongs("queen");
fetchSongs("metallica");

const modal = function(artist){
   document.querySelector(".modal-body").innerHTML=``;
for(let i=0; i<albums.length; i++){
 if(albums[i].artist===artist)
  for(let y=0; y<albums[i].albums.length; y++){
   document.querySelector(".modal-body").innerHTML+=`<div>${albums[i].albums[y]}</div>`;
  }
  document.querySelector("#exampleModalLabel").innerHTML=`${artist}`;
}
}