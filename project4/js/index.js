window.addEventListener("load",()=>{
    //checking if user is logged
    if (isLogged()){
        document.getElementById("login").style.display="none"
        document.getElementById("register").style.display="none"
        displayPlaylist()
        document.getElementById("ad").innerText="Thank you for using AudioCity!"
    } 
    else {

        document.getElementById("userPhoto").style.display="none"
    }
})



function isLogged() {
    return window.sessionStorage.getItem("user") != null;
}


function displayPlaylist(){
    //setting the user playlist in the sidebar
    var playlists=window.localStorage.getItem("playlists")
    playlists=JSON.parse(playlists)
    var userLogged=window.sessionStorage.getItem("user")
    var userPlaylists=playlists.find(p=>p.user==userLogged)

    var sidebarList=document.getElementById("sidebar-list")
    userPlaylists.playlists.forEach(playlist => {
        var el=document.createElement("li")
        var link=document.createElement("a")
        link.href="playlist.html?name="+playlist.name
        link.textContent=playlist.name
        el.appendChild(link)
        sidebarList.append(el)
    });
}

var releaseDate = new Date("Dec 24, 2022 18:00").getTime();
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = releaseDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  }, 1000);
