//import json file 
import myJson from '../json/song.json' assert {type: 'json'};
import myJson2 from '../json/podcast.json' assert {type: 'json'};

//set a delay to make all the other scripts work
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

//load the audio of the song in each song of the playlist
function loadSong() {
    var playIcon=document.querySelectorAll(".playIcon")


    playIcon.forEach(el => {
        var searchedSong=el.nextElementSibling;

        //for each playIcon set the song bar when its clicked
        el.addEventListener("click",(a)=>{
            if (a==1){
                var song=myJson.find(s=>s.song==searchedSong.textContent.toLowerCase())

            } else {
                var song=myJson2.find(s=>s.song==searchedSong.textContent.toLowerCase())

            }
    
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
