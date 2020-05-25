document.addEventListener('DOMContentLoaded', postForm);

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

// allows the user to stop the animation
function stopMove(){
    var stopSlides = document.getElementsByClassName("carouselPics");
    clearInterval(timer);
}