var playlists=window.localStorage.getItem("playlists")

playlists.sort((a, b) => a.likes - b.likes);

var count=1
playlists.forEach(playlist => {
    if (count<=8){
    var parentNode=document.querySelector(".content")
    var playlistDiv=document.createElement("div").classList.add("songdiv")
    var playlistTitle=document.createElement("p").classList.add("songtitle")
    playlistTitle.textContent=playlist.name
    var playlistUser=document.createElement("p").classList.add("songartist")
    playlistUser.textContent=playlist.user

    parentNode.appendChild(playlistDiv)
    playlistDiv.appendChild(count)
    playlistDiv.appendChild(playlistTitle)
    playlistDiv.appendChild(playlistUser)
    count++
    }
});
