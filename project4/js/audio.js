import myJson from '../json/song.json' assert {type: 'json'};
function delay() {
    setTimeout(function() {
        loadSong();
    }, 200);
}

if (document.readyState == 'complete') {
    delay();
} else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            delay();
        }
    }
}

function loadSong() {

    const songLi=document.querySelectorAll(".song-element")

    songLi.forEach(el => {
        var playIcon=el.querySelector(".playIcon")
        var searchedSong=el.querySelector(".songtitle")

        playIcon.addEventListener("click",()=>{
            var song=myJson.find(s=>s.song==searchedSong.textContent)
    
            var audioContainer=document.getElementById("container")
            if (audioContainer.style.display=="none"){
            audioContainer.style.display="inline-flex"
            }
            var image=audioContainer.querySelector(".audio-bar-img")
            var audio=audioContainer.querySelector("audio")
            var source=audioContainer.querySelector("source")
            var title=audioContainer.querySelector(".songtitle")
            var artist=audioContainer.querySelector(".songartist")
        
            //set the new image and audio path
            image.src="../project4/assets/images/"+song.song.replace(/ /g,'')+".jpg"
            source.src=song.path 
            //load the new audio
            audio.load()
            audio.play()
            //set title and author
            title.textContent=song.song
            artist.textContent=song.author
        })
    });
}
