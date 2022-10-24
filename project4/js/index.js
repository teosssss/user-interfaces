window.addEventListener("load",()=>{
    if (isLogged()){
    }
})
function isLogged() {
    return window.sessionStorage.getItem("user") != null;
}

