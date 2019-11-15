let data = '{"results":[{"youtube":{"music":"https://www.youtube.com/embed/s4iLX7eWwmE"}}, {"youtube":{"music":"https://www.youtube.com/embed/HUKsUtHx4QU"}}, {"youtube":{"music":"https://www.youtube.com/embed/TvZskcqdYcE"}}, {"youtube":{"music":"https://www.youtube.com/embed/EAYfJckSEN0"}}, {"youtube":{"music":"https://www.youtube.com/embed/5E_8aSG1By4"}}]}'
let parsedData = JSON.parse(data)

function formatName(song){
        return song
}

let users = parsedData.results
let currentIndex = 0
let currentUser = users[currentIndex]



function update(){
    let video = document.querySelector(".videoPlayer"); 
    video.setAttribute("src", currentUser.youtube.music)
}

let button1 = document.querySelector(".previous")
let button2 = document.querySelector(".next")

function previous(){
    currentIndex--
    if(currentIndex < 0) {
        currentIndex = users.length -1;
    }
    currentUser = users[currentIndex]
    update()
}

function next(){
    currentIndex++
    if(currentIndex >= users.length) {
        currentIndex = 0;
    }
    currentUser = users[currentIndex]
    update()
}

button1.addEventListener("click", function() {
    previous()
});

update();

button2.addEventListener("click", function() {
    next()
});

update();