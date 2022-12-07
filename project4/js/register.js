const registerBtn=document.getElementById("register")

registerBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if (validateEmail(document.getElementById("userEmail").value) && validatePassword((document.getElementById("userPassword").value))){
        registerLocal()
    }
})
 


function registerLocal() {
    var users = window.localStorage.getItem("users")

    if (users === null) {
        users = []
    } else {
        users = JSON.parse(users)
    }    

    //create a user
    var user = {
                name:document.getElementById("name").value,
                surname:document.getElementById("surname").value,
                username: document.getElementById("userName").value,
                email: document.getElementById("userEmail").value,
                password: document.getElementById("userPassword").value,
        }    
        

        //check if user exist
        if (users.find(u=>u.email==user.email)){
            addBadge("email already exist","Email")
            
        } else if (users.find(u=> u.username==user.username)){
            addBadge("username already exist","Name")
            
        } else {
            users.push(user)
            localStorage.setItem("users",JSON.stringify(users))
            
            //go to login
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
    password.style.border="3px solid #FF5959"
    alert.textContent=text
}


//regular expressions to check if email and password are correct
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
        addBadge("pw needs a upper case charachter","Password")
        return false
    } 
    let re2=/^.{8,}$/;
    if (!re2.test(password)){
        addBadge("pw too short","Password")
        return false
    } 
    let re3=/^(.*[0-9].*)$/;
    if (!re3.test(password)){
        addBadge("pw needs a number","Password")
        return false
    }
    let re4=/^(.*[a-z].*)$/;
    if (!re4.test(String(password))){
        addBadge("pw needs a lower case charachter","Password")
        return false
    }

    return true

}