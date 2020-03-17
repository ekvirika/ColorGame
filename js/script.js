//  variables

let allBoxes = document.querySelectorAll(".box");
let body = document.querySelector('body');
let btn = document.querySelector(".btn");
let randomColor = document.querySelector('.pickColor');
let logic = document.querySelector('.logic');
var cnt = 0;

// LOGIC 

function addPropHeightToBoxes(){
    for(let i = 0; i < allBoxes.length; i++){
        let width = allBoxes[i].clientWidth;
        allBoxes[i].style.height = width + "px";
    }
}

addPropHeightToBoxes();

window.addEventListener("resize",function(){
    addPropHeightToBoxes();
});

//generate random color in rgb value to be used in the css side
function generateRandomColor(){
    return "rgb(" + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' ;
}

btn.addEventListener("click", function(){
    for( let i = 0; i < allBoxes.length; i++){
        allBoxes[i].style.background = generateRandomColor();
    }
    let randomIndex = Math.floor(Math.random() * allBoxes.length);
    randomColor.textContent = allBoxes[randomIndex].style.background;
});


for (let i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener("click",function(){
        if(this.style.background == randomColor.textContent){
            logic.textContent = "You win!";
            alert("You win! Congrats!")
            cnt = 0;
            playAgain();
        }
        else {
            logic.textContent = "Wrong color";
            this.style.background = "#ffe4e1";
            cnt += 1;
            if(cnt == 2){
                logic.textContent = "You lost. Try again."
                alert("You lost! Try again.");
                playAgain();
            }
        }
    })
}


function defaultColor() {
    return "rgb(" + 38 + "," + 38 + "," + 38 + ")";
}

function playAgain() {
    cnt = 0;

    for(let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.background = defaultColor();
    }
    logic.textContent = "";
    randomColor.textContent = "rgb(38,38,38)";

};




