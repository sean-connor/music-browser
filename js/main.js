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
function playSong(event) {
  var songSrcs = {
    "Love Yourself": "http://res.cloudinary.com/roomieup-com/video/upload/v1460156189/Justin_Bieber_-_Love_Yourself_PURPOSE_-_The_Movement_gvexy7.mp3",
    "Hello": "http://res.cloudinary.com/roomieup-com/video/upload/v1460180617/Adele_-_Hello_Official_Lyrics_Video_HD_ghclvj.mp3",
    "Sorry":  "http://res.cloudinary.com/roomieup-com/video/upload/v1460160685/The_Lumineers_-_Ophelia_ebvijy.mp3",
    "Stressed Out": "http://res.cloudinary.com/roomieup-com/video/upload/v1460156187/twenty_one_pilots-_Stressed_Out_OFFICIAL_VIDEO_omndbd.mp3",
    "Roses (feat. ROZES)": "http://res.cloudinary.com/roomieup-com/video/upload/v1460156184/The_Chainsmokers_-_Roses_ft._ROZES_upcn9d.mp3",
    "Same Old Love": 'http://res.cloudinary.com/roomieup-com/video/upload/v1460159743/Same_old_love_-_Selena_Gomez_lyrics_pvpnyt.mp3' ,
    "Stand By You": 'http://res.cloudinary.com/roomieup-com/video/upload/v1460159743/Stand_By_You_-_Rachel_Platten_Lyrics_dnplyb.mp3'
  }
  var songs = document.getElementsByClassName("aside")[0].children;
  var audio = document.getElementById("audio");
  var target = event.target
  var title = target.parentNode.getElementsByClassName('song-title')[0].children[0].innerHTML;
  for (var i = 2; i < songs.length; i++) {
    if (songs[i].classList[0] === "song-group"){
      if (target != songs[i].children[1]){
        songs[i].children[1].innerHTML = "▶"
      }
    }
  }
  if (target.innerHTML === "▶") {
    audio.src = songSrcs[title];
    audio.play()
    target.innerHTML  = "&#10073;&#10073";
    if(title === "Sorry"){
      alert("Just kidding, no more J-biebs, enjoy Ophelia - The Lumineers.");
    }
  } else {
    audio.pause()
    target.innerHTML  = "▶";
  }

}
