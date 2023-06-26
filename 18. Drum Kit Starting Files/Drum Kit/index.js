
var numberOfDrumButtons = document.querySelectorAll(".drum").length

// Button Click
for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        


        document.addEventListener("keydown", function(event){

            playSound(event.key);
            buttonAnimation(event.key);

        })

    });
}



// Play Sound
function playSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio('./sounds/tom-1.mp3');
            audio1.play(); 
            break;
        case "a":
            var audio1 = new Audio('./sounds/tom-2.mp3');
            audio1.play(); 
            break;
        case "s":
            var audio1 = new Audio('./sounds/tom-3.mp3');
            audio1.play(); 
            break;
        case "d":
            var audio1 = new Audio('./sounds/tom-4.mp3');
            audio1.play(); 
            break;
        case "j":
            var audio1 = new Audio('./sounds/snare.mp3');
            audio1.play(); 
            break;
        case "k":
            var audio1 = new Audio('./sounds/crash.mp3');
            audio1.play(); 
            break;
        case "l":
            var audio1 = new Audio('./sounds/kick-bass.mp3');
            audio1.play(); 
            break;
        default:
            break;
    }
}
    

        

// Animation 
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}
        


        