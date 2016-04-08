function expandMenu(event) {
    document.getElementsByClassName("nav-list")[0].classList.toggle("display");
    event.target.classList.toggle("menu-color");
}

function expandSongs(event) {
  var songs = document.getElementsByClassName("aside")[0].children
  for (var i = 2; i < songs.length; i++) {
    if (songs[i].classList[0] === "song-group" && songs[i].classList[1] !== "top-3"){
    songs[i].classList.toggle("song-display");
    }
  }
  (event.target.innerHTML === "∨") ? event.target.innerHTML = "∧" : event.target.innerHTML = "∨"
}
