# TheHangedMen
CSCI4250_GroupScrumProject

1. Accomplishments:
    a. got the game logic for easy, medium, hard mode working.
       aa. easy mode uses computing terms consisting of 5-7 letters.
       ab. medium mode uses computing terms consisity of 7-10 letters.
       ac. hard mode uses computing terms consisting of 10-15 letters.
   b. have landing page that conisist of three buttons, one for each mode
       ba. easy button navigates to easyMode.html
       bb. medium button navigates to mediumMode.html
       bc. hard button navigates to hardmode.html
   c. gamelogic.js handles the flow of the game as follows:
       ca. once a user selects a mode the pageHandler function directs them to the proper game page (see 1b)
       cb. once the user is on the appropriate page:
         cba. the guessed word function is used to choose a random word from one of three arrays based off difficulty
         cbb. the generateKeyboard function uses bootstrap to create the keys for the player to tap to select a letter to guess
             cbba. when a button is pressed, the handleGuess function is called and compares the selection to the random word that was generated in step cba.
                 cbbaa. if the guessed letter was correct, the score is increased by 10 points and the letter is displayed in the correct spot
                 cbbab. if the guessed letter is incorrect, the maxWrong variable increments by 1 via the updateMistakes function and the hangman picture is updated via the updateHangmanPicture function.
                 cbbac. the checkIfGameWon function is called and if false, the checkIfGameLost function is called. if false, the game continues


2. Still need to do:
   a. add a system to add user initial for top 10 score
   b. add additional grades to give the user more maxWrong. i.e. A, A-, B, B-, etc.
   c. fix the css so that it is adaptive for different displays.
   d. use an api to generate words for the various difficulty levels. 
   e. optimize game page so it is dynamic to the game mode decreasing games pages from three to one
   f. currenty file size is 14.1 Mb, needs to be 10 Mb or less


3. Recommmendations
   a. completely restart the css and html so that you are able to establish a maintainable structure to the files. (Warning: the JavaScript uses functions that gets IDs from the html items)
   b. We planned to use Random Word API for the generating words for the difficulties.
      
