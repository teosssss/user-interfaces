const likeIcon=document.querySelector(".fa-heart")

likeIcon.addEventListener("click",()=>{
    likeIcon.classList.toggle("fa-solid")


    var playlistName=document.querySelector(".playlist-name")
    //get playlist name from url query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    const user=urlParams.get('user')
    playlistName.textContent=name

    //get this playlist
    playlists = window.localStorage.getItem("playlists")
    playlists = JSON.parse(playlists)
    var userLogged = window.sessionStorage.getItem("user")  
    var playlist=playlists.find(p=>p.name==name && p.user==user)

    
    //toggle the like icon
    var likes=playlist.likes

    //check if the user liked the playlist before
    var userLikes=playlist.likedBy.find(u=>u==userLogged)

    var likesNumber=parseInt(likes)
    //add like
    if (likeIcon.classList.contains("fa-solid") && userLikes==null ){
        likesNumber++
        document.getElementById("likes").innerText=likesNumber.toString()
        playlist.likes=likesNumber.toString()
        //push the user in the likes
        playlist.likedBy.push(userLogged)
    } else { 
        likesNumber--
        document.getElementById("likes").innerText=likesNumber.toString()
        playlist.likes=likesNumber.toString()
        //delete the user from the likes
        playlist.likedBy.splice(playlist.likedBy.findIndex(u => u == userLogged),1);

    }

    window.localStorage.setItem("playlists",JSON.stringify(playlists))
    
})



   



