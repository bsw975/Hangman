///TO DO - single event handler /Jacob
// A single series of games is launched once first key is pressed
// First get main functionality
// Then remove readystate code below

document.onreadystatechange = function () {
    console.log("document is ready");
    if (document.readyState == "complete") {
        // document is ready. Do your stuff here

        //Declarations GLOBAL upon page launch
        function isLetter(str) {
            return str.length === 1 && str.match(/[a-z]/i);
        }

        //Declarations LOCAL
        //PUT THIS ***********ALL************ IN A FUNCTION?!?!?
        //
        // NO, WE HANDLE IT ALL WITHIN THE CLICKHANDLER

        var inGame = false; // This tells whether we're playing or not.
        var words = ["cud", "dap", "bor", "alm"]
        // var words = ["cuddlesome", "cupidity", "cynosure", "ebullient"]
        // maybe later add more words or sth
        var wordNumToPlay = Math.floor(Math.random() * words.length);
        console.log(wordNumToPlay)
        var word = words[wordNumToPlay]; // get it from WORDS ARRAY
        var gameText = document.getElementById("game").textContent;
        var numMissedLetters = 0;
        var allowedMisses = 2;
        var lettersGuessed = [];

        // FUNCTION to show the letter(s) chosen. Called b/c it appears
        function showLetterOrLetters(lett, wrd) {
            for (i=0; i < wrd.length; i++) {
                var lettID = "letter" + i;
                document.getElementById(lettID).textContent = lett;
            } // end for loop updating letter spans
        } // end function

        function emptyMissed () {
            for (i = 0; i < 10; i++) {
                var letterID = "missed" + i;
                document.getElementById(letterID).textContent = "";
            } 
        }
        // FUNCTION to write the blank spaces in the word to the page
        function writeEmptyWordBox(wordToWrite) {
            for (i = 0; i < wordToWrite.length; i++) {
                var letterID = "letter" + i;
                document.getElementById(letterID).textContent = "_";
            } //end for to create _ _ _

            // log numMissedLetters to the missedX spans
            // for (i = 0; i < allowedMisses; allowedMisses.length) {
                // var missedID = "missed" + (i + 1);
                // document.getElementById(missedID).textContent = "_";
            // } //end for to create _ _ _
        } // end of writeEmptyWordBox function

        // ??? - CSS!!!
        // FUNCTION to play a round
        function playRound() {
            writeEmptyWordBox(word);
            // After user presses a letter do the following
            // 1) Check if letter is pressed. NOT YET DONE
            //   a) If yes check if letter is in word
            document.onkeyup = function (event) {
                // document.onkeyup fires the function, and passes in the event object
                inGame = true;
                var gamesWon = 0;
                var gamesLost = 0;

                var wordText = document.getElementById("letter1").textContent;
                //local variable for letter that was just pressed

                document.getElementById("guessThis").textContent = word; //write word to page (now done by writeWord function)

                //CHECK if a letter is typed!
                if (isLetter(event.key)) {
                    // alert(st?r + " is a letter")    

                    //CHECK if it was already guessed once! ***** to code *****
                    if (event.key == "z") { //PRINT INFO TO CONSOLE
                        //WHAT THE HELL IS GOING ON WITH MY CODE!!!
                        console.log("Quick snapshot!");
                        console.log(", gameText is " + gameText + ", word is " + word + ", numMissedLetters is " + numMissedLetters + ", newVar is <SET IT>");
                    }
                    else if (word.indexOf(event.key) > -1) { //letterPresent == true
                        showLetterOrLetters(event.key, word);
                        // UPDATE CSS because the letter is there!
                        // if word finished ***** to code *****
                        gamesWon++;
                    }
                    else if (lettersGuessed.indexOf(event.key) > -1) {
                        //update page instead alert("Letter already guessed");
                    }
                    else { //letterPresent? FALSE, add to missedLetters
                        //add event.key to the lettersGuessed array
                        lettersGuessed.push(event.key);
                        var letterNumToChange = "missed" + (numMissedLetters + 1); // get missed#
                        numMissedLetters++;
                        if (numMissedLetters > allowedMisses) {
                            //end the game
                            gamesLost++;
                            emptyMissed();
                            document.getElementById("LossCount").textContent = gamesLost; //write losses
                        }
                        document.getElementById(letterNumToChange).textContent = event.key; //write missed# to right slot in HTML
                        //UPDATE CSS
                    } //end of the if-else to check if letter is in word or not.
                } //end of the if checking if event.key (what was typed) is a letter

            } //end of the document.onkeyup function, which launches the main evaluation / writing operation

        } //end of the playRound function
        playRound();
    } // end if where document.readystate = complete

} //end function where document is ready