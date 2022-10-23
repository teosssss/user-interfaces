const btn=document.getElementById("login")

btn.addEventListener('click',()=>{

  if  (checkLogin()){
    window.location.assign("index.html")
  }
})

function checkLogin(){
  //clearBadge(element)
  var users = window.localStorage.getItem("users")
  users=JSON.parse(users)

  console.log(users)
  var user = {
      username:document.getElementById("userName").value,
      password:document.getElementById("userPassword").value,
  }
  if (users.find(u=>u.username==user.username) && users.find(u=>u.password==user.password)) {
      window.sessionStorage.setItem("user",user.username)
      return true
  } else {
      alert("username o password errati")
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



