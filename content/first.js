var btnInput=document.querySelector("#btn");
var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/groot.json"

function geturl(inputText) {
    return serverurl + "?" + "text=" + inputText
}

function errorhandler(error){
    console.log("error occurred " , error);
    alert("something wrong!! please try again later")
}

function clickEventHandler(){
    var inputText2 = inputText.value;

    fetch(geturl(inputText2))
    .then(response => response.json())
    .then(json =>{
        var translatetext = json.contents.translated;
        outputText.innerText=translatetext;
    })
    .catch(errorhandler)
}

btnInput.addEventListener("click", clickEventHandler)
