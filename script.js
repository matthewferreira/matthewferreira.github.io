function alertOnPress() {
    alert("you pressed button")
}

function biggerText(){
    document.getElementById("textbox").style.fontSize = "1.5em";
    var text = document.getElementById("textbox").value;
    var parts = text.split(".");
    var newText = parts.join("-Moo.")
    document.getElementById("textbox").value = newText;

}

function toUpper(){
    document.getElementById("textbox").style.textTransform = "uppercase";
}


function fancyShmancy(){
    if(document.getElementById("fancyShmancy").checked){
        //document.getElementById("textbox").style.color = "rgb(255,0,0)";
        //document.getElementById("textbox").style.fontFamily = "fantasy";
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.textDecoration = "underline";
        document.getElementById("textbox").style.animationName = "colorChange";
        document.getElementById("textbox").style.animationDuration = "4s";
        document.getElementById("textbox").style.color = "blue";
        
    }
    
}

function boringBetty(){
    if(document.getElementById("boringBetty").checked){
        //document.getElementById("textbox").style.fontFamily = "";
        document.getElementById("textbox").style.fontWeight = "";
        document.getElementById("textbox").style.textDecoration = "";
        document.getElementById("textbox").style.animationName = "";
        document.getElementById("textbox").style.animationDuration = "";
        document.getElementById("textbox").style.color = "";

    }
}

function changeButton(){
    alert('You are changing buttons')
}

