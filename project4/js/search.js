
import myJson from '../json/song.json' assert {type: 'json'};
const searchBtn=document.getElementById("search");

searchBtn.addEventListener("click",async (e)=>{
  e.preventDefault()
  
  var searchedSong=document.getElementById("song")
  //search if song exist in json file with all the songs
  var song=myJson.find(s=>s.song==searchedSong.value)
  
  var songdiv=document.getElementById("song1")
  if (songdiv.style.display=="none"){
    songdiv.style.display="block"
  }
  var image=songdiv.querySelector(".songcover")
  var audio=songdiv.querySelector("audio")
  var source=songdiv.querySelector("source")
  var title=songdiv.querySelector(".songtitle")
  var artist=songdiv.querySelector(".songartist")

  //set the new image and audio path
  image.src="../project4/assets/images/"+song.song.replace(/ /g,'')+".jpg"
  source.src=song.path 
  //load the new audio
  audio.load()
  //set title and author
  title.textContent=song.song
  artist.textContent=song.author


})