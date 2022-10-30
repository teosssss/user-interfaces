window.addEventListener("load",()=>{
    var playlistName=document.querySelector(".playlist-name")
    //get playlist name from url query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    playlistName.textContent=name
    
    var playlists=window.localStorage.getItem("playlists")
    playlists=JSON.parse(playlists)
    var userLogged=window.sessionStorage.getItem("user")
    var userPlaylists=playlists.find(p=>p.user==userLogged)
    var playlist=userPlaylists.playlists.find(p=>p.name==name)

    var songList=document.getElementById("playlist-song")

    playlist.songs.forEach(song => {
        var songEl=document.createElement("li")
        songEl.textContent=song
        songList.appendChild(songEl)
    });

    
})