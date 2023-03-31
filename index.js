
 console.log(" rules: answer with the number assosiated with the choice.")

 const readline = require("readline-sync");
 const name = readline.question("What is your name? ");
 console.log ("you are", name + ".", "You are trapped in a room with no real idea how you got there. There is a locked door and a suspicious looking hole in the wall")

var winCon = 0
var key = false
var doorLocked = true
while (winCon === 0){
    var answer = readline.question( "what do you do? 1. attempt to open door 2. shove hand in mysterious hole 3. look for a key ") 
    if( answer === "1" && key == false ) {
        console.log ("door is locked")
    } else if ( answer ==="1" && key == true ) {
        console.log(" you unlock the door and escape.")
        winCon = 1
    } else if (answer == "2") {
        console.log ("your hand is obliterated.")
        winCon = 2
    }else if ( answer == "3" && key == true) {
        console.log("you already have the key.")
    }
     else if ( answer == "3" && key == false){ 
        console.log("you found a key.")
        var key = true
    }

     }
if (winCon == 1 ){
    console.log("you win.")
} else if (winCon == 2) {
    console.log("you lose.")
}

