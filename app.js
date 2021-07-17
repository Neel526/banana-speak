
var btnTranslate= document.querySelector("#btn-translate");
var textInput = document.querySelector("#text");
var output = document.querySelector("#output");


function callback(){
    var url = "https://api.funtranslations.com/translate/ferb-latin.json?text=" + textInput.value;
    fetch(url)
    .then(Response => Response.json())
    .then(json => {output.innerText = json.contents.translated})
     
    
    // output.innerText =  textInput.value;
    // // console.log(textInput.value);
}

btnTranslate.addEventListener("click", callback)






// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// fetch(url)
//  .then(Response => Response.json())
// .then( json => console.log(json)