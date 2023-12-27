fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem").then((res)=>{
	return res.json();}).then((items)=>{
	 
const eminem = document.querySelector("#eminemSection");
for(const item of items.data){
 eminem.innerHTML += `
  <div class="card text-secondary" style="width: 18rem;">
  <img src="${item.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.album.title}</h5>
    <p class="card-text">${item.title}</p>

  </div>
</div>
 `;
}

});

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen").then((res)=>{
	return res.json();}).then((items)=>{
	 
const queen = document.querySelector("#queenSection");
for(const item of items.data){
 queen.innerHTML += `
  <div class="card text-secondary" style="width: 18rem;">
  <img src="${item.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.album.title}</h5>
    <p class="card-text">${item.title}</p>

  </div>
</div>
 `;
}

});

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica").then((res)=>{
	return res.json();}).then((items)=>{
	 
const metallica = document.querySelector("#metallicaSection");
for(const item of items.data){
 metallica.innerHTML += `
  <div class="card text-secondary" style="width: 18rem;">
  <img src="${item.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.album.title}</h5>
    <p class="card-text">${item.title}</p>

  </div>
</div>
 `;
}

});