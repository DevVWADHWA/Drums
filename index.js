for (i = 0; i < document.querySelectorAll('button').length; i++) {

    document.querySelectorAll('button')[i].addEventListener('click', function () {
        let buttonClick = this.innerHTML;
        makeSound(buttonClick);
        activeButtonAnimation(buttonClick);
    });
}

document.addEventListener('keydown', function (pressedKey) {
    makeSound(pressedKey.key);
    activeButtonAnimation(pressedKey.key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            let crashSound = new Audio('sounds/crash.mp3');
            crashSound.play();
            break;
        case 'a':
            let tom1Sound = new Audio('sounds/tom-1.mp3');
            tom1Sound.play();
            break;
        case 's':
            let kickSound = new Audio('sounds/kickdrum.mp3');
            kickSound.play();
            break;
        case 'k':
            let tom2Sound = new Audio('sounds/tom-2.mp3');
            tom2Sound.play();
            break;
        case 'j':
            let tom3Sound = new Audio('sounds/dampened-pedal-hi-hat-sample-a-key-01-hOS.mp3');
            tom3Sound.play();
            break;
        case 'd':
            let snareSound = new Audio('sounds/snare.mp3');
            snareSound.play();
            break;
        case 'l':
            let tom4Sound = new Audio('sounds/tom-4.mp3');
            tom4Sound.play();
            break;


        default:
            console.log();
            break;
    }
}

function activeButtonAnimation(pressedKey) {
    let activeKey = document.querySelector("." + pressedKey);
    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 70);
}