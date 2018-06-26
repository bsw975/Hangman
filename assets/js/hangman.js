//***** to code *****
//***** to code *****
//***** to code *****
//***** to code ***** session with Charles
//***** to code ***** Ctrl-F to navigate
//***** to code ***** magnifying glass to search directories
//***** to code *****
//***** to code ***** how to get organized
//***** to code *****
//***** to code ***** working from unsolved folders
//***** to code *****
//***** to code *****

//after a loss, clear the completed letters, start new word

    //Declarations GLOBAL upon page launch

// var words = ["cuddlesome", "cupidity", "cynosure", "ebullient"]
// maybe later add more words or sth
var inGame = false; // Are we in a game? On load it's a no.
var gamesWon = 0;
var gamesLost = 0;
// var words = ["jazz", "saucer"]
var words = ["cuddlesome", "cupidity", "cynosure", "ebullient"]
// var words = ["cud", "dap", "bor", "alm"]
var wordNumToPlay = Math.floor(Math.random() * words.length);
var word = words[wordNumToPlay]; // get it from WORDS ARRAY
var numMissedLetters = 0;
var allowedMisses = 8;
var lettersGuessed = [];

function emptyMissed() {
    // console.log("emptyMissed is being run");
    for (i = 0; i < 10; i++) {
        var letterID = "missed" + i;
        document.getElementById(letterID).textContent = "";
    }
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
function playNewGame() {
    numMissedLetters = 0;
    lettersGuessed = [];
    wordNumToPlay = Math.floor(Math.random() * words.length);
    word = words[wordNumToPlay]; // get it from WORDS ARRAY
    // document.getElementById("displayWord").textContent = word;
    writeEmptyWordBox(word);
}

function showLetterOrLetters(lett, wrd) { // FUNCTION to show the letter(s) chosen. Called b/c it appears
    // console.log("function showLetterOrLetters is running with variable lett = " + lett + " and variable wrd " + wrd);
    var multipleLetterOffset = 0;
    for (i = 0; i < wrd.length; i++) {
        console.log("Within the 'for', but before the 'if', i=" + i + " and wrd=" + wrd + " and lett=" + lett + " and wrd.length=" + wrd.length);
        console.log("wrd.indexOf(lett)=" + wrd.indexOf(lett) + " and lett=" + lett + " and wrd.length=" + wrd.length);
        var lettID = "letter" + i;
        console.log(multipleLetterOffset + " is the multOffset");
        if (wrd.indexOf(lett, multipleLetterOffset) == i) { // letter belongs in position i, write it to the page
            console.log("Within the if, multOff is " + multipleLetterOffset + "wrd.indexOf(lett, multipleLetterOffset)=" + wrd.indexOf(lett, multipleLetterOffset));
            document.getElementById(lettID).textContent = lett;
            multipleLetterOffset = i+1;
        }
        // document.getElementById(lettID).textContent = lett;
    } // end for loop updating letter spans
} // end function

// function showLetterOrLetters(lett, wrd) { // FUNCTION to show the letter(s) chosen. Called b/c it appears
//     console.log("wrd=" + wrd + " and lett=" + lett + " and wrd.length=" + wrd.length + " and wrd.indexOf(lett)=" + wrd.indexOf(lett));
//     if (wrd.indexOf(lett) == 0) {document.getElementById("letter0").textContent = lett}
//     if (wrd.indexOf(lett) == 1) {document.getElementById("letter1").textContent = lett}
//     if (wrd.indexOf(lett) == 2) {document.getElementById("letter2").textContent = lett}
// }

function wordFilled (wrd) {
    // var isWordFilled = false; //assume false to start
    for (i = 0; i < wrd.length; i++) {
        // console.log("Within the 'for', but before the 'if', i=" + i + " and wrd=" + wrd + " and wrd.length=" + wrd.length);
        var lettID = "letter" + i;
        if (wrd[i] == document.getElementById(lettID).textContent) { // str letter on page matches letter in word
            // console.log("wordFilled if with wrd[i]=" + wrd[i]);
            // document.getElementById(lettID).textContent = lett;           
        }
        else {
            // console.log("returning false *WITHIN* the else");
            return false;
        }
        // document.getElementById(lettID).textContent = lett;
    } // end for loop updating letter spans
    // console.log("returning true *after* the else");
    return true;
}
// FUNCTION to write the blank spaces in the word to the page
function writeEmptyWordBox(wordToWrite) {
    // console.log("running writeEmptyWordBox()");
    for (i = 0; i < 10; i++) {
        var letterID = "letter" + i;
        document.getElementById(letterID).textContent = "";
    }
    for (i = 0; i < wordToWrite.length; i++) {
        var letterID = "letter" + i;
        document.getElementById(letterID).textContent = "_";
    } //end for to createunderscores

    // log numMissedLetters to the missedX spans
    // for (i = 0; i < allowedMisses; allowedMisses.length) {
    // var missedID = "missed" + (i + 1);
    // document.getElementById(missedID).textContent = "_";
    // } //end for to create _ _ _
} // end of writeEmptyWordBox function

// ??? - CSS!!!
// After user presses a letter do the following
// 1) Check if letter is pressed. NOT YET DONE
//   a) If yes check if letter is in word
document.onkeyup = function (event) {
    // document.onkeyup fires the function, and passes in the event object
    showLetterOrLetters(event.key, word);
    if (inGame == false) { //clear the blanks
        setTimeout(writeEmptyWordBox(word), 666); //empty box after 333ms
    }
    var wordText = document.getElementById("letter1").textContent;
    //local variable for letter that was just pressed
    //CHECK if a letter is typed!
    if (isLetter(event.key) && inGame == true) {
        console.log("Letter " + event.key + " pressed. function isLetter returned true.")
        if (event.key == "z") { //PRINT INFO TO CONSOLE
            //WHAT THE HELL IS GOING ON WITH MY CODE!!!
            console.log("Quick snapshot!");
            console.log(", allowedMisses is " + allowedMisses + ", word is " + word + ", numMissedLetters is " + numMissedLetters + ", newVar is <SET IT>");
        }
        else if (word.indexOf(event.key) > -1) { //The letter pressed is in the word
            // letterPresent == true
            // testing with Charlie!! showLetterOrLetters(event.key, word);
            // UPDATE CSS because the letter is there!
            if (wordFilled(word)) {// this is the ***WIN CHECK*** function - returns true when word is finished 
                gamesWon++;
                setTimeout(document.getElementById("WinCount").textContent = gamesWon, 999); //UPDATE WINS: 
                emptyMissed(); 
                setTimeout(alert("You won! Click OK to play a new word. Refresh the page to start over"), 999); //empty box after 999ms
                playNewGame();
            }
        }
        else if (lettersGuessed.indexOf(event.key) > -1) {
            //update page instead alert("Letter already guessed");
            // I DON'T KNOW WHAT THIS ELSE IF IS DOING
        }
        else { //We have a bad guess. Update missed letters array lettersGuessed
            //add event.key to the lettersGuessed array
            lettersGuessed.push(event.key);
            var letterNumToChange = "missed" + (numMissedLetters + 1); // get missed#
            document.getElementById("remaining").textContent =
                "You have only " + (allowedMisses - numMissedLetters) +
                " guesses remaining before you hang your man!!";
            numMissedLetters++;
            var preGuessBadLetters = document.getElementById(letterNumToChange).textContent;
            //Below we update the Missed Letters html
            document.getElementById(letterNumToChange).textContent = event.key;
            if (numMissedLetters > allowedMisses) {
                //end the game
                setTimeout(alert("You lost! The word was, **" + word + "**. Click OK to play a new word. Refresh the page to start over"), 999); //empty box after 333ms
                gamesLost++;
                emptyMissed();
                playNewGame();
                document.getElementById("LossCount").textContent = gamesLost; //write losses
            }
                //UPDATE CSS ***** to code *****
        } //end of the if-else to check if letter is in word or not.
    } //end of the if checking if event.key (what was typed) is a letter
    
    inGame = true;
} //end of the document.onkeyup function, which launches the main evaluation / writing operation

