window.addEventListener("load",()=>{
    var playlistName=document.querySelector(".playlist-name")
    //get playlist name from url query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name= urlParams.get('playlist')

       
    //get the playlist from the local storage
    var playlists=window.localStorage.getItem("playlists")
    playlists=JSON.parse(playlists)
    var userLogged=window.sessionStorage.getItem("user")
    var playlist=playlists.find(p=>p.name == name && p.user == userLogged)


    if (playlist!=null){
        //get all the icon and change them
        var playIcon=document.querySelectorAll(".playIcon")


        playIcon.forEach(icon => {
            var searchedSong=icon.nextElementSibling;

            if (playlist.songs.find(s=>s==searchedSong.textContent.toLowerCase())){
                
                icon.classList.remove("fa-plus")
                icon.classList.add("fa-check")
            } else {
                //change icon when icon is clicked and the song
                icon.addEventListener("click",()=>{
                    playlist.songs.push(searchedSong.textContent.toLowerCase())
                    window.localStorage.setItem("playlists",JSON.stringify(playlists))
                    alert("song added")
                    window.location.assign("playlist.html?name="+name+"&user="+userLogged)          
                })
            }
        })
    } 


})