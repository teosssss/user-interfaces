
import myJson from '../json/song.json' assert {type: 'json'};
const searchBtn=document.getElementById("search");

searchBtn.addEventListener("click",async (e)=>{
  e.preventDefault()
  
  var searchedSong=document.getElementById("song")
  //search if song exist in json file with all the songs
  var song=myJson.find(s=>s.song==searchedSong.value)
  
  var searchGrid=document.querySelector(".search-grid")
  if (searchGrid.style.display=="none"){
    searchGrid.style.display="grid"
  }
  var image=searchGrid.querySelector(".songcover")
  var audio=searchGrid.querySelector("audio")
  var source=searchGrid.querySelector("source")
  var title=searchGrid.querySelector(".songtitle")
  var artist=searchGrid.querySelector(".songartist")

  //set the new image and audio path
  image.src="../project4/assets/images/"+song.song.replace(/ /g,'')+".jpg"
  source.src=song.path 
  //load the new audio
  audio.load()
  //set title and author
  title.textContent=song.song
  artist.textContent=song.author

})

window.addEventListener("load",()=>{
    var playlists=window.localStorage.getItem("playlists")
    var user=window.sessionStorage.getItem("user")
    if (user!=null){
        playlists=JSON.parse(playlists)
        var userPlaylists=playlists.find(p=>p.user==user)
        var dropdown=document.getElementById("playlist-dropdown")
        userPlaylists.playlists.forEach(playlist => {
            var option=document.createElement("option")
            option.value=playlist.name
            option.textContent=playlist.name
            dropdown.appendChild(option)
        });
    }
    
})


const addBtn=document.querySelector(".add-btn")

addBtn.addEventListener("click",()=>{
    var selectValue=document.getElementById("playlist-dropdown").value
    var songName=document.querySelector(".songtitle").textContent
    //check  if is selected a valid playlist
    if (selectValue=="Select playlist:"){
        alert("Select a playlist")
        return 
    }
    //extract the playlist song
    var playlists=window.localStorage.getItem("playlists")
    var user=window.sessionStorage.getItem("user")
    playlists=JSON.parse(playlists)
    var userPlaylists=playlists.find(p=>p.user==user)
    var playlist=userPlaylists.playlists.find(p=>p.name==selectValue)
    //select if song is already in playlist
    if (playlist.songs.find(s=>s==songName)){
        alert("song already exist in playlist")
        return
    }
     
    playlist.songs.push(songName)
    window.localStorage.setItem("playlists",JSON.stringify(playlists))
 })
   


