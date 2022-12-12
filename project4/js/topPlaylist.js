var playlists=window.localStorage.getItem("playlists")
playlists=JSON.parse(playlists)
//sort playlist by descending order
playlists.sort((a, b) => b.likes - a.likes);
//get the logged user
const userLogged=window.sessionStorage.getItem("user")

var count=1
playlists.forEach(playlist => {
    //load just first 8 playlist
    if (count<=8){
    //create the playlist box
    var parentNode=document.querySelector(".content")
    var playlistDiv=document.createElement("div")
    var playlistLink=document.createElement("a")
    var image=document.createElement("img")
    image.classList.add("songcover")
    image.src="../project4/assets/images/podcast"+count+".jpg"
    playlistLink.href="playlist.html?name="+playlist.name+"&user="+playlist.user
    playlistLink.style="text-decoration:none"
    playlistDiv.classList.add("songdiv")
    var playlistTitle=document.createElement("p")
    playlistTitle.classList.add("songtitle")
    playlistTitle.textContent=count+". "+playlist.name+"  "+playlist.likes+"  "
    var likeIcon=document.createElement("i")
    likeIcon.classList.add("fa-heart")
    //check if user liked the song and change the icon
    if (userLogged!=null){
        if (playlist.likedBy.find(u=>u==userLogged)){
            likeIcon.classList.add("fa-solid")

        } else {
            likeIcon.classList.add("fa-regular")

        }
    }else {
        likeIcon.classList.add("fa-regular")

    }


    var playlistUser=document.createElement("p")
    playlistUser.classList.add("songartist")
    playlistUser.textContent=playlist.user

    parentNode.appendChild(playlistDiv)
    playlistDiv.appendChild(image)
    playlistDiv.appendChild(playlistLink)
    playlistLink.appendChild(playlistTitle)
    playlistLink.appendChild(playlistUser)
    

    playlistTitle.appendChild(likeIcon)
    count++
    }
});
