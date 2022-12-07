window.addEventListener("load",()=>{
    var playlistName=document.querySelector(".playlist-name")
    //get playlist name from url query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    playlistName.textContent=name
    
    //get the playlist from the local storage
    var playlists=window.localStorage.getItem("playlists")
    playlists=JSON.parse(playlists)
    var userLogged=window.sessionStorage.getItem("user")
    var userPlaylists=playlists.find(p=>p.user==userLogged)
    var playlist=userPlaylists.playlists.find(p=>p.name==name)

    var songList=document.getElementById("playlist-song")

    //set playlist likes
    var likes=document.getElementById("likes")
    likes.innerText=playlist.likes

    //check if the user liked that playlist and load the correct icon
    userLikes=playlist.likedBy.find(u=>u==userLogged)
    if (userLikes!=null){
        const likeIcon=document.querySelector(".fa-heart")
        likeIcon.classList.add("fa-solid")
    }

    //set each song of the playlist
    playlist.songs.forEach(song => {
        var songEl=document.createElement("li")
        var divider=document.createElement("hr")
        songEl.classList.add("song-element")
        var songDiv=document.createElement("div")
        songDiv.classList.add("inline")
        var playIcon=document.createElement("i")
        playIcon.classList.add("playIcon")
        var songText=document.createElement("p")
        songText.classList.add("songtitle")
        playIcon.classList.add("fa-regular")
        playIcon.classList.add("fa-circle-play")
        playIcon.classList.add("fa-xl")

        songText.textContent=song
        songList.appendChild(songEl)
        songList.appendChild(divider)
        songEl.appendChild(songDiv)
        songDiv.appendChild(playIcon)
        songDiv.appendChild(songText)
        
    });

    
})

