window.addEventListener("load",()=>{
    if (isLogged()){
        document.getElementById("login").style.display="none"
        document.getElementById("register").style.display="none"
    } else {
        
    }
})
function isLogged() {
    return window.sessionStorage.getItem("user") != null;
}

