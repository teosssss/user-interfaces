var username=window.sessionStorage.getItem("user")

var users=window.sessionStorage.getItem("users")

users=JSON.parse(users)
var playlists=window.localStorage.getItem("playlists")

//var user=users.find(u=>u.username==userLogged);

document.getElementById("userName").innerHTML = username;
document.getElementById()