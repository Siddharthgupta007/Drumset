var x = document.querySelectorAll(".drum").length;

for(var i=0; i<x; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    //this.style.color= 'white';
    var btn = this.innerHTML;
    animation(btn);
    
    play(btn);

    
    
});
} 

document.addEventListener("keypress", function(event){

    var x = event.key;
    animation(x);
    play(x);
});


function play(btn){
    switch (btn) {
        case "w":
            var music = new Audio("sounds/tom-1.mp3");
            music.play();
            break;
        case 'a':
            var music = new Audio("sounds/tom-2.mp3");
            music.play();
         break;

            case 's':
                var music = new Audio("sounds/tom-3.mp3");
                music.play();
        break;
            case 'd':
                var music = new Audio("sounds/tom-4.mp3");
                music.play();
         break;

             case 'j':
                var music = new Audio("sounds/snare.mp3");
                music.play();
            break;

            case 'k':
                var music = new Audio("sounds/kick-bass.mp3");
                music.play();
            break;

            case 'l':
                var music = new Audio("sounds/mahesh.mp3");
                music.play();
            break;
           
        default:
            break;
    }
}


function animation(currKey){

    var btnanimation   = document.querySelector('.' + currKey);

    btnanimation.classList.add('pressed');

    setTimeout(function(){
        btnanimation.classList.remove('pressed');
    },100);

    
}


// var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3');
//     // audio.play();