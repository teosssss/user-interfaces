const likeIcon=document.querySelector(".fa-heart")

likeIcon.addEventListener("click",()=>{
    likeIcon.classList.toggle("fa-solid")
    var likes=document.getElementById("likes").innerText
    var likesNumber=parseInt(likes)

    if (likeIcon.classList.contains("fa-solid")){
        likesNumber++
        document.getElementById("likes").innerText=likesNumber.toString()
    } else {
        likesNumber--
        document.getElementById("likes").innerText=likesNumber.toString()
    }
    
})
