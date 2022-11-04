document.getElementById("create").onclick=()=>{
    var playlists=window.localStorage.getItem("playlists")
  
    playlists=JSON.parse(playlists)
    
    //get user playlist
    let UserPlaylists=playlists.find(playlist=> playlist.user==sessionStorage.getItem("user"))
    var newPlaylist ={
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        songs:[]
    }
  


   console.log(playlists.find(p=>p.name==newPlaylist.name))
   //if playlist is correct and is unique push playlist in local storage
    if (UserPlaylists.playlists.find(p=>p.name==newPlaylist.name)){
        alert("Nome playlist gia esistente")
    } else if(newPlaylist.name==""){
        alert("aggiungere un nome alla playlist")
    }else{
        UserPlaylists.playlists.push(newPlaylist)
        window.localStorage.setItem("playlists",JSON.stringify(playlists))
        
        alert("playlist creata con successo!")
    }

}