document.getElementById("create").onclick=()=>{
    if (window.sessionStorage.getItem("user")!=null){
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

    } else [
        alert("login")
    ]


    
  

    var userPlaylists=playlists.filter(p=>p.user==sessionStorage.getItem("user"))

   //if playlist is correct and is unique push playlist in local storage
    if (userPlaylists.find(p=>p.name==newPlaylist.name)){
        alert("This name already exist")
    } else if(newPlaylist.name==""){
        alert("add a name")
    }else{
        playlists.push(newPlaylist)
        window.localStorage.setItem("playlists",JSON.stringify(playlists))
        
        alert("Playlist created")
    }

}