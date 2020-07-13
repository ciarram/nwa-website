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
