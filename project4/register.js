

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




const registerBtn=document.getElementById("register")

registerBtn.addEventListener('click',(e)=>{
    registerUser(e)
})


function registerUser(event){
    event.preventDefault()
    let username=document.getElementById("userName").value
    let email=document.getElementById("userEmail").value
    let password=document.getElementById("userPassword").value
    if (validateEmail(email) && validatePassword(password)){
        alert("Ok")
        setCookie(username,password,365)
        location.assign("login.html")
    }
}









function registerLocal() {
    var users = window.localStorage.getItem("users")

    if (users === null) {
        users = []
    } else {
        users = JSON.parse(users)
    }    

    //uso async e await per aspettare il codice asincrono
    var user = {
                name:document.getElementById("name").value,
                name:document.getElementById("name").value,
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
        }    
        
    
        if (users.find(u=>u.email==user.email)){
            addBadge("email già esistente","email")
            
        } else if (users.find(u=> u.username==user.username)){
            addBadge("username già esistente","username")
            
        } else {
            users.push(user)
            localStorage.setItem("users",JSON.stringify(users))
            //setto una playlista vuota per ogni nuovo utente
            let playlists=localStorage.getItem("playlists")
            playlists=JSON.parse(playlists)

            if (playlists===null){
                playlists=[]
            }
            newUserPlaylists={
                user:user.username,
                playlists:[]
            }
            playlists.push(newUserPlaylists)
            window.localStorage.setItem("playlists",JSON.stringify(playlists))
            location.assign("login.html")

            alert("user registered")
        }



            
        
    
}



function checkLogin(element){
    clearBadge(element)
    var users = window.localStorage.getItem("users")
    users=JSON.parse(users)

    console.log(users)
    var user = {
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    }
    console.log(user)
    if (users.find(u=>u.username==user.username) && users.find(u=>u.password==user.password)) {
        //setto npasswordlo session storage l user appena loggato
        window.sessionStorage.setItem("user",user.username)
        return true
    } else {
        addBadge("Username o Password errati",element)
        return false
    }

}



function clearBadge(el){
    var alert = document.getElementById("alert"+el);
    var password=document.getElementById("user"+el)
    password.style.border="2px solid #064663"
    alert.textContent=""
}

function addBadge(text,el){
    var alert = document.getElementById("alert"+el);
    var password=document.getElementById("user"+el)
    password.style.border="3px solid #FF5959"
    alert.textContent=text
}



function validateEmail(email) {

    clearBadge("Email")
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        addBadge("Invalid email","Email")
        return false

    };
    return true
}


function validatePassword(password){
    clearBadge("Password")
    
    
    let re1=/^(.*[A-Z].*)$/;

    if (!re1.test(password) ){
        addBadge("la pw deve avere 1 carattere maiuscolo","Password")
        return false
    } 
    let re2=/^.{8,}$/;
    if (!re2.test(password)){
        addBadge("la pw deve essere lunga almeno 8 caratteri","Password")
        return false
    } 
    let re3=/^(.*[0-9].*)$/;
    if (!re3.test(password)){
        addBadge("la pw deve contenere almeno un numero","Password")
        return false
    }
    let re4=/^(.*[a-z].*)$/;
    if (!re4.test(String(password))){
        addBadge("la pw deve contenere almeno una minuscola","Password")
        return false
    }

    return true

}



  