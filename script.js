document.addEventListener('DOMContentLoaded', postForm);

// creates the POST for the form
function postForm(){
    document.getElementById("postQuestionForm").addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var printInfo = {name:document.getElementById("userName").value, email:document.getElementById("userEmail").value, 
        originallyFrom:document.getElementById("userOrigin").value, why:document.getElementById("userQuestion").value};

        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');

        console.log(JSON.stringify(printInfo));
        req.send(JSON.stringify(printInfo));

        event.preventDefault();
    });
}

// for the carousel animation
// for the Carousel, I used https://www.w3schools.com/w3css/w3css_slideshow.asp to help me learn how to implement the moving pictures and the buttons
// I also used https://stackoverflow.com/questions/30478992/slideshow-javascript-play-pause-button to help with the AutoScroll

var timer = setInterval(autoMove, 4000);
var i;
// index for manual movement
var btnIndex = 1;

// index for auto movement
var carIndex = 0;
movePics(btnIndex);
autoMove();

function moveBtns(p){
    movePics(btnIndex += p);
}

function movePics(p){
    // creates the method for the left and right arrows to move the pictures manually
    var slideShow = document.getElementsByClassName("carouselPics");
    if (p > slideShow.length){
        btnIndex = 1
    }

    if (p < 1){
        btnIndex = slideShow.length
    };

    for (i = 0; i < slideShow.length; i++){
        slideShow[i].style.display = "none";
    }
    slideShow[btnIndex-1].style.display = "block";

}

//enables the autoscroll to start as soon as the page is loaded
function autoMove(){
    var newSlides = document.getElementsByClassName("carouselPics");
    for (i = 0; i < newSlides.length; i++){
        newSlides[i].style.display = "none";
    }
    carIndex++;

    if (carIndex > newSlides.length){
        carIndex = 1;
    }
    newSlides[carIndex -1].style.display = "block";
    timer;
    
}

// allows the user to stop and start the animation
function stopMove(){
    var stopSlides = document.getElementsByClassName("carouselPics");
    var startSlides = document.getElementById("autoScroll");

    if (timer){
        clearInterval(timer);
        timer = null;
        startSlides.value = "Start the AutoScroll";
    } else {
        autoMove();
        timer = setInterval(autoMove, 4000);
        startSlides.value = "Stop the AutoScroll";
    }
}