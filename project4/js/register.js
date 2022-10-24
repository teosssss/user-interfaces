const registerBtn=document.getElementById("register")

registerBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    registerLocal()
})

 


function registerLocal() {
    var users = window.localStorage.getItem("users")

    if (users === null) {
        users = []
    } else {
        users = JSON.parse(users)
    }    

    var user = {
                name:document.getElementById("name").value,
                surname:document.getElementById("surname").value,
                username: document.getElementById("userName").value,
                email: document.getElementById("userEmail").value,
                password: document.getElementById("userPassword").value,
        }    
        
    
        if (users.find(u=>u.email==user.email)){
            addBadge("email gia esistente","email")
            
        } else if (users.find(u=> u.username==user.username)){
            addBadge("username gia esistente","username")
            
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



function clearBadge(el){
    var alert = document.getElementById("alert"+el);
    var password=document.getElementById("user"+el)
    password.style.border="2px solid #064663"
    alert.textContent=""
}

function addBadge(text,el){
    var alert = document.getElementById("alert"+el);
    var password=document.getElementById("user"+el)
   // password.style.border="3px solid #FF5959"
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