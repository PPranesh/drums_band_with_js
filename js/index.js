var sounds_btn_length = document.querySelectorAll("button").length;

// detecting button press
for (var i=0; i<sounds_btn_length;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", someOnePressedMe);

    function someOnePressedMe() {
        var key = this.innerHTML;
        listenToValues(key);
        buttonToAnimate(key);
    }
}

// detecting keyboard press
document.addEventListener("keypress", function(e) {
    listenToValues(e.key);
    buttonToAnimate(e.key);
});

// for finding the exact letter
function listenToValues(key) {

    switch (key) {
        case "w":
            var w_button = new Audio("/drums_band_with_js/sounds/tom-3.mp3").play();
            break;
        case "a":
            var a_button = new Audio("/drums_band_with_js/sounds/snare.mp3").play();
            break;
        case "s":
            var s_button = new Audio("/drums_band_with_js/sounds/tom-1.mp3").play();
            break;
        case "d":
            var d_button = new Audio("/drums_band_with_js/sounds/kick-bass.mp3").play();
            break;
        case "j":
            var j_button = new Audio("/drums_band_with_js/sounds/tom-2.mp3").play();
            break;
        case "k":
            var k_button = new Audio("/drums_band_with_js/sounds/crash.mp3").play();
            break;
        case "l":
            var l_button = new Audio("/drums_band_with_js/sounds/tom-4.mp3").play();
            break;
        default:
            console.log("press the instruments buttom only!!");
            break;
    }
}

// for animating the exact button being pressed
function buttonToAnimate(key) {

    var toAnimate = document.querySelector("."+key);
    toAnimate.classList.add("pressed");

    // timer to wait
    setTimeout(function() {
        toAnimate.classList.remove("pressed");
    },100);
}
