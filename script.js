//skriv din kode her.
window.addEventListener("load", start);

//vælg alle blomster og add en click eventlistener til dem.
function start() {
  const roser = document.querySelectorAll("img");
  roser.forEach((rose) => rose.addEventListener("click", pluk));
}

//lav en funktion der tilføjer class'en "pluk" til den blomst der bliver klikket på.
function pluk() {
  //console.log(this);
  this.classList.toggle("pluk");
}
