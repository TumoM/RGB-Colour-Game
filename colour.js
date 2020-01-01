var difficulty = 6;
var colours = [];
var blocks = document.querySelectorAll(".square");
var pickedColour = colours[Math.floor(Math.random() * 7)];
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message")
colourDisplay.textContent = pickedColour;
var h1 = document.querySelector('h1');
var userPick;
var modeButtons = document.querySelectorAll(".mode")
var resetButton = document.getElementById("reset");

init();

function init(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function (item){
            console.log(item);
            
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add("selected")
            this.textContent === "Easy" ? difficulty = 3: difficulty = 6
            resetButton.click();
        })
        
    }
}

resetButton.addEventListener("click", function(){
    // Easy Game
    if (difficulty === 3) {
        colours = colourGen(difficulty)
        pickedColour = colours[Math.floor(Math.random() * 3)]
        for (let i = difficulty; i < difficulty*2; i++) {
            blocks[i].style.display = "none";       
        }
    }
    else{ // Hard Game
        colours = colourGen(difficulty)
        pickedColour = colours[Math.floor(Math.random() * 6)]
        for (let i = difficulty/2; i < difficulty; i++) {
            blocks[i].style.display = "block";       
        }
    }
    resetButton.textContent = "New Colours"
    colourDisplay.textContent = pickedColour
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for (let i = 0; i < difficulty; i++) {
        blocks[i].style.backgroundColor = colours[i];
    
        blocks[i].addEventListener("click", function(){
            userPick = this.style["background-color"];      
            if (userPick === pickedColour) {
                messageDisplay.textContent = "Correct!";
                colourGen(userPick);
                h1.style.backgroundColor = userPick;
                resetButton.textContent = "Play Again?"
                blocks.forEach(function(item){
                    item.style.backgroundColor = pickedColour;
                })
            }
            else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "Try Again";
            }
        })
        
    }
})

resetButton.click();

// easyDifficulty.addEventListener("click", function(){
//     this.classList.add("selected");
//     hardDifficulty.classList.remove("selected");
//     difficulty = 3;
//     resetButton.click();
// })

// hardDifficulty.addEventListener("click", function(){
//     this.classList.add("selected");
//     easyDifficulty.classList.remove("selected");
//     difficulty = 6;
//     resetButton.click();
// })

function colourGen(num){
    var colours = []
    for (let i = 0; i < num; i++) {
        var red = Math.floor(Math.random() * 226);
        var green = Math.floor(Math.random() * 226);
        var blue = Math.floor(Math.random() * 226);
        colours.push(`rgb(${red}, ${green}, ${blue})`)
    }
    return colours;
}
