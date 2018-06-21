document.onreadystatechange = function () {
    if (document.readyState == "complete") {
    // document is ready. Do your stuff here

//Declarations GLOBAL
var words = ["cuddlesome", "cupidity","cynosure", "ebullient"]
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

//Declarations LOCAL
//PUT THIS ***********ALL************ IN A FUNCTION?!?!?
var wordNumToPlay = 1; // NUMBER DECIDES which word to play with
var word = words[wordNumToPlay]; // get it from WORDS ARRAY
var wordText = document.getElementById("letter1").textContent;
var gameText = document.getElementById("game").textContent;
console.log(gameText)
// console.log("after decl's, current word is " + word)
console.log("wordText is " + wordText);
console.log("gameText is " + gameText);


    // FUNCTION to write the blank spaces in the word to the page
    function writeWord (writeThis) {
        console.log("starting <i>writeWord</i> function with word " + writeThis);
        // console.log(document.getElementById("guessThis").textContent );  
        console.log("the above is doc.getEl(*for let*).textContent")
        
        document.getElementById("letter1").textContent = word.charAt(0);
        document.getElementById("letter2").textContent = word.charAt(1);
        document.getElementById("letter3").textContent = word.charAt(2);
        document.getElementById("letter4").textContent = word.charAt(3);
        document.getElementById("letter5").textContent = word.charAt(4);
        document.getElementById("letter6").textContent = word.charAt(5);
        document.getElementById("letter7").textContent = word.charAt(6);
        document.getElementById("letter8").textContent = word.charAt(7);
    } // end of writeWord function

    // ??? - CSS!!!
    // FUNCTION to play a round
    function playRound (str) {
    console.log("starting <i>playRound</i> function with word " + str)
    // LET'S PLAY A ROUND

    // console.log("write word to page")
    writeWord(word);
    // After user presses a letter do the following
    // 1) Check if letter is pressed. NOT YET DONE
    //   a) If yes check if letter is in word
    
    console.log("waiting for keyup")
    console.log(document.readyState);
    // console.log(document.getElementById("letter1").textContent);
    document.onkeyup = function (event) {
    // document.onkeyup fires the function, and passes in the event object
        console.log(document.readyState);
        console.log(document.getElementById("letter1"));
        console.log(document.getElementById("letter1").textContent);
        var wordText = document.getElementById("letter1").textContent;
        //local variable for letter that was just pressed
        console.log(word + " and key " + event.key + " is " + word.indexOf(event.key) ); //
        console.log(document.getElementById("game").textContent);
        console.log(wordText);
        // document.getElementById("guessThis").textContent = word; //write word to page (now done by writeWord function)

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
                var oldMissedLetter = document.getElementById("letter1").textContent; //declare a variable to which we'll add a letter
                event.key;
                document.getElementById("letter1").textContent = oldMissedLetter + event.key;
                //UPDATE CSS
            } //end of the if-else to check if letter is in word or not.
        } //end of the if checking if event.key (what was typed) is a letter
        
    } //end of the document.onkeyup function, which launches the main evaluation / writing operation

} //end of the playRound function
playRound();
} // end if where document.readystate = complete

} //end function where document is ready