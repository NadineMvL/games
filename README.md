# games

Games with React

Getting in started:
This project was built in React, therefore be sure you have Node.js and npm installed correctly. I deleted the node_modules due to size limitations
I would advise to download the project on our pc and open it in an IDE, I built this in Visual Studio Code and highly recommend that. 

Once you have opened the project in your IDE remember to “npm install” in the terminal, this will replace the missing node_modules. Once completed, “npm start” to see the project visually. 

There are 3 activities in this project which you can see in “Home”. 
I used bootstrap and the BrowserRouter to display my project appropriately. 

Magic Mystical Advisor:
Ask the universe a question that you have been struggling with. The question will display in the “crystal ball”, once you click on “Ask” an answer will display. Click on “Ask another question” to reset the “board” and ask another question, or click on “Quit” to go back to the Homepage, game will automatically reset. 
Components Question.js and MagicEight.js are used for this activity
To Do List:
Make a list of all tasks that you have to do, it will “print” on the screen and create a delete button for each task. 
Component ToDo.js is used for this activity

Find Zen
The aim of this game is to guess where the Zen is hidden. There are a few scattered across the board so your chances are good. Once a block is opened the timer will start so keep trying to improve your time. Player keeps clicking until they find a Zen. Once a Zen is found the timer stops and the game is over. 

Components Board.js, BoardHead.js, Cell.js, Guess.js & Row.js are used for this activity
