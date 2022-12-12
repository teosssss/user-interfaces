import myJson from '../json/song.json' assert {type: 'json'};


window.addEventListener("load",()=>{
    var artistName=document.getElementById("artistName")
    //get from the query the artist
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    //set the artist name on the page
    artistName.textContent=name;

    //finf the artist song from the json file
    var artistSongs=myJson.filter(a=>a.author==name)

    //for each artist song
    artistSongs.forEach(el => {
        //create a songdiv and attach the artist song
        var songDiv=document.createElement("div")
        songDiv.classList.add("songdiv")
        var image=document.createElement("img")
        image.classList.add("songcover")
        image.src="../project4/assets/images/"+el.song.replace(/ /g,'')+".jpg"
        var icon=document.createElement("i")
        icon.classList.add("playIcon")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-circle-play")
        icon.classList.add("fa-2xl")
        var title=document.createElement("p")
        title.classList.add("songtitle")
        var artist=document.createElement("p")
        artist.classList.add("songartist")
        title.textContent=el.song
        artist.textContent=el.artist
        songDiv.appendChild(image)
        songDiv.appendChild(icon)
        songDiv.appendChild(title)
        songDiv.appendChild(artist)
        var container=document.querySelector(".content")
        container.appendChild(songDiv)
    });


})