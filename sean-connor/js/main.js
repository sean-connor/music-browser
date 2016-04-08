function expandMenu() {
    document.getElementsByClassName("nav-list")[0].classList.toggle("display");
}

function expandSongs(event) {
  songs = document.getElementsByClassName("aside")[0].children
  for (var i = 2; i < songs.length; i++) {
    if (songs[i].classList[0] === "song-group" && songs[i].classList[1] !== "top-3"){
    songs[i].classList.toggle("song-display");
    }
  }
  (event.target.innerHTML === "⌄") ? event.target.innerHTML = "^" : event.target.innerHTML = "⌄"
}
