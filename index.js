const fetchSongs = function (artist){
const url="https://striveschool-api.herokuapp.com/api/deezer/search?q="+artist;
fetch(url).then((res)=>{
	return res.json();}).then((items)=>{

const idName = "#"+artist+"Section"
const art = document.querySelector(idName);
const album = [];
document.querySelector(".modal-body").innerHTML=``;
for(const item of items.data){
 art.innerHTML += `
  <div class="card text-secondary" style="width: 18rem;">
  <img src="${item.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.album.title}</h5>
    <p class="card-text">${item.title}</p>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Crea Lista
</button>
  </div>
</div>
 `;
document.querySelector("#exampleModalLabel").innerHTML=`${item.artist.name}`;
if(!album.includes((item.album.title).toLowerCase())){
album.push((item.album.title).toLowerCase());
document.querySelector(".modal-body").innerHTML+=`<div>${item.album.title}</div>`;
}
}

});
}

fetchSongs("eminem");
fetchSongs("queen");
fetchSongs("metallica");

const modal = function(a){alert(a);}

