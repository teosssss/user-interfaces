var userLogged=window.sessionStorage.getItem("user")

var users=window.localStorage.getItem("users")

users=JSON.parse(users)
var playlists=window.localStorage.getItem("playlists")

var user=users.find(u=>u.username==userLogged);

document.getElementById("userName").textContent = userLogged;
var playlistParent=document.querySelector(".userPlaylist")


var playlists=window.localStorage.getItem("playlists")
playlists=JSON.parse(playlists)
var userPlaylists=playlists.filter(p=>p.user==userLogged)
//setting all the playlist
userPlaylists.forEach(playlist => {
    var p=document.createElement("p")
    p.textContent=playlist.name
    playlistParent.appendChild(p)
    
    
});

var artistParent=document.getElementById("artist")
user.followedArtist.forEach(artist =>{
    var p=document.createElement("p")
    p.textContent=artist
    artistParent.appendChild(p)

}
)

var userEmail=document.querySelector(".userEmail")
userEmail.textContent="Your e-mail: "+user.email