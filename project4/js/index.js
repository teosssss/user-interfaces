window.addEventListener("load",()=>{
    //checking if user is logged
    if (isLogged()){
        document.getElementById("login").style.display="none"
        document.getElementById("register").style.display="none"
        document.querySelector(".user-icon").style.display="block"
        displayPlaylist()
    } 
    
})



function isLogged() {
    return window.sessionStorage.getItem("user") != null;
}


function displayPlaylist(){
    //setting the user playlist in the sidebar
    var playlists=window.localStorage.getItem("playlists")
    if (playlists === null) {
        playlists = []
    } else {
        playlists=JSON.parse(playlists)
    }    

    var userLogged=window.sessionStorage.getItem("user")
    var userPlaylists=playlists.filter(p=>p.user==userLogged)

    var sidebarList=document.getElementById("sidebar-list")
    userPlaylists.forEach(playlist => {
        var el=document.createElement("li")
        var link=document.createElement("a")
        link.href="playlist.html?name="+playlist.name+"&user="+userLogged
        link.textContent=playlist.name
        el.appendChild(link)
        sidebarList.append(el)
    });
}
