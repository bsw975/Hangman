//Declarations GLOBAL
var words = ["cuddlesome", "cupidity","cynosure", "ebullient"]
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

//Declarations LOCAL
//PUT THIS ***********ALL************ IN A FUNCTION?!?!?
var wordNumToPlay = 1; // NUMBER DECIDES which word to play with
var word = words[wordNumToPlay]; // get it from WORDS ARRAY


// Write the blank spaces in the word to the page
// ??? - CSS!!!


// After user presses a letter do the following
// 1) Check if letter is pressed. NOT YET DONE
//   a) If yes check if letter is in word
document.onkeyup = function (event) {
// document.onkeyup fires the function, and passes in the event object
    //local variable for letter that was just pressed
    console.log(word + " and key " + event.key + " is " + word.indexOf(event.key) ); //
    document.getElementById("guessThis").textContent = word; //write word to page

    //CHECK if a letter is typed!
    if (isLetter(event.key)) {
    // alert(st?r + " is a letter")    

    //CHECK if it was already guessed once!
        if (word.indexOf(event.key) > -1) { //letterPresent == true
            alert("The letter's in the " + (word.indexOf(event.key) + 1) + "th position");
            //UPDATE CSS
            //ALSO LOOK FOR REPEATS OF THE LETTER
        }
        else { //letterPresent == false, add to missedLetters
            var oldMissedLetter = document.getElementById("missedLetters").textContent; //declare a variable to which we'll add a letter
            event.key;
            document.getElementById("missedLetters").textContent = oldMissedLetter + event.key;
            //UPDATE CSS
        } //end of the if-else to check if letter is in word or not.
    } //end of the if checking if event.key (what was typed) is a letter
    
} //end of the document.onkeyup function, which launches the main operation