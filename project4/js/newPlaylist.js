document.getElementById("create").onclick=()=>{
    var playlists=window.localStorage.getItem("playlists")

    if (playlists === null) {
        playlists = []
    } else {
        playlists=JSON.parse(playlists)
    }    
  
    
    //create  playlist
    var newPlaylist ={
        user: sessionStorage.getItem("user"),
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        likes: 0,
        likedBy:[],
        songs:[]
    }

    
  

    var userPlaylists=playlists.filter(p=>p.user==sessionStorage.getItem("user"))

   //if playlist is correct and is unique push playlist in local storage
    if (userPlaylists.find(p=>p.name==newPlaylist.name)){
        alert("Nome playlist gia esistente")
    } else if(newPlaylist.name==""){
        alert("aggiungere un nome alla playlist")
    }else{
        playlists.push(newPlaylist)
        window.localStorage.setItem("playlists",JSON.stringify(playlists))
        
        alert("playlist creata con successo!")
    }

}