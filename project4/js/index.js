document.getElementById("logout").style.display="none"
window.addEventListener("load",()=>{
    //checking if user is logged
    if (isLogged()){
        document.getElementById("login").style.display="none"
        document.getElementById("register").style.display="none"
        document.querySelector(".user-icon").style.display="inline"
        document.getElementById("logout").style.display="inline"
        ispremium();
        displayPlaylist()
    } 
    
})

function ispremium(){
    var username= window.sessionStorage.getItem("user")
    var premium = window.localStorage.getItem("user")
}

function userlogout(){
    if(confirm('Are you sure you want to logout?')) {
       window.sessionStorage.removeItem("user")
     }
}

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

const searchBtn=document.getElementById("search");

searchBtn.addEventListener("click",async (e)=>{
  e.preventDefault()
  var url="search.html?name="+document.getElementById("song").value
  location.assign(url)
})


