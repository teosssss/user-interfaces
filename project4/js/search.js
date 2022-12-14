
import myJson from '../json/song.json' assert {type: 'json'};
const searchBtn=document.getElementById("search");

searchBtn.addEventListener("click",async (e)=>{
  e.preventDefault()
  
  var searchedSong=document.getElementById("song").value
  var searchedSonglower = searchedSong.toLowerCase()
  //search if song exist in json file with all the songs
  var song=myJson.find(s=>s.song.toLowerCase()==searchedSonglower)
  
  var searchGrid=document.querySelector(".search-grid")
  if (searchGrid.style.display=="none"){
    searchGrid.style.display="grid"
  }
  var image=searchGrid.querySelector(".songcover")
  var title=searchGrid.querySelector(".songtitle")
  var artist=searchGrid.querySelector(".songartist")

  //set the new image and audio path
  image.src="../project4/assets/images/"+song.song.replace(/ /g,'')+".jpg"
  //set title and author
  title.textContent=song.song
  artist.textContent=song.author
})

window.addEventListener("load",()=>{
    var playlists=window.localStorage.getItem("playlists")
    var user=window.sessionStorage.getItem("user")
    if (user!=null){
        playlists=JSON.parse(playlists)
        var userPlaylists=playlists.filter(p=>p.user==user)
        var dropdown=document.getElementById("playlist-dropdown")
        userPlaylists.forEach(playlist => {
            var option=document.createElement("option")
            option.value=playlist.name
            option.textContent=playlist.name
            dropdown.appendChild(option)
        });
    }
    
})


const addBtn=document.querySelector(".add-btn")

addBtn.addEventListener("click",()=>{
    //check if user is logged
    var userLogged=window.sessionStorage.getItem("user")
    if (userLogged==null){
        alert("login")
        return
    }
    
    var selectValue=document.getElementById("playlist-dropdown").value
    var songName=document.querySelector(".songtitle").textContent
    //check  if is selected a valid playlist
    if (selectValue=="Select playlist:"){
        alert("Select a playlist")
        return 
    }
    //extract the playlist song
    var playlists=window.localStorage.getItem("playlists")
    playlists=JSON.parse(playlists)
    var playlist=playlists.find(p=>p.name==selectValue && p.user==userLogged)
    //select if song is already in playlist
    if (playlist.songs.find(s=>s==songName)){
        alert("song already exist in playlist")
        return
    } else {
        alert("song added to the playlist")
    }
     
    playlist.songs.push(songName)
    window.localStorage.setItem("playlists",JSON.stringify(playlists))
 })
   


 window.addEventListener("load",()=>{
    //get from the query the artist
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchedSong = urlParams.get('name')
    var searchedSonglower = searchedSong.toLowerCase()


    if (searchedSonglower!=null &&  myJson.find(s=>s.song.toLowerCase()==searchedSonglower) ){
        //search if song exist in json file with all the songs
        var song=myJson.find(s=>s.song.toLowerCase()==searchedSonglower)
        
        var searchGrid=document.querySelector(".search-grid")
        if (searchGrid.style.display=="none"){
          searchGrid.style.display="grid"
        }
        var image=searchGrid.querySelector(".songcover")
        var title=searchGrid.querySelector(".songtitle")
        var artist=searchGrid.querySelector(".songartist")
      
        //set the new image and audio path
        image.src="../project4/assets/images/"+song.song.replace(/ /g,'')+".jpg"
        //set title and author
        title.textContent=song.song
        artist.textContent=song.author
    } else {
        alert("song does not exist")
    }
    
    
 })


