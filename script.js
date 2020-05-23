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

var btnIndex = 1;
movePics(btnIndex);

function moveBtns(p){
    movePics(btnIndex += p);
}

function movePics(p){
    //document.getElementById("carouselBtn").addEventListener('click', function(event){
    var i;
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
    //});
}