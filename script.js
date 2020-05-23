document.addEventListener('DOMContentLoaded', postForm);

function postForm(){
    document.getElementById("postQuestionForm").addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var printInfo = {name:document.getElementById("userName").value, email:document.getElementById("userEmail").value, 
        originallyFrom:document.getElementById("userOrigin").value, why:document.getElementById("userQuestion").value};
        //printInfo.name = document.getElementById("nameForm").value;
        //printInfo.age = document.getElementById("ageForm").value;
        //printInfo.job = document.getElementById("jobForm").value;
        //printInfo.major = document.getElementById("majorForm").value;

        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');

        console.log(JSON.stringify(printInfo));
        req.send(JSON.stringify(printInfo));
        //console.log(JSON.parse(req.resonseText));

        event.preventDefault();
    });
}

console.log("In the post JS file!");