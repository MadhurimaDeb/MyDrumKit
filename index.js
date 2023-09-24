
var snd;
let count = document.querySelectorAll(".drum").length;
for( let i = 0 ; i < count ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonHTML = this.innerHTML;

        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

function makeSound(key){
    switch(key){
        case "w":
            var snd0 = new Audio("snd0.mp3");
            snd0.play();
            break;
        case "a":
            var snd1 = new Audio("snd1.mp3");
            snd1.play();
            break;
        case "s":
            var snd2 = new Audio("snd2.mp3");
            snd2.play();
            break;
        case "d":
            var snd3 = new Audio("snd3.mp3");
            snd3.play();
            break;
        case "j":
            var snd4 = new Audio("snd4.mp3");
            snd4.play();
            break;
        case "k":
            var snd5 = new Audio("snd5.mp3");
            snd5.play();
            break;
        case "l":
            var snd6 = new Audio("snd6.mp3");
            snd6.play();
            break;
        
        default: console.log("Enter valid Key");
    }
}