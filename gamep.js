var character = document.getElementById("character");
var block = document.getElementById("block");


function jump(){
if(character.classList !="animate"){
    character.classList.add("animate");
}

setTimeout(function(){
    character.classList.remove("animate");
},500);
}


var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if(blockLeft<30 && blockLeft>0 && characterTop>=120){
         block.style.animation = "none";
         block.style.display = "none";
         alert("you loose");
     }
},10);

var score = document.getElementById("score");
score =0;
setInterval(function(){
     score+=1;
     document.getElementById("score").innerHTML=score;
 },1500);
