# Software Development Assignment 1 - Jigsaw Website
 
### 1.1 Project Introduction
This project is a jigsaw puzzle website that was made in html, css and javascript utilising html canvas. The jigsaw puzzle consists of multiple dragable pieces that lock into place when placed in the correct location to make a bigger image. There are eight total images that can be used for the puzzle with the infrastructure in place to support future additions to the image pool. The website also contains 7 total difficulties that can be manually selected or automatically ascended through as puzzle are ccompleted. The user is also provided the option of dark mode to reduce eye strain in low light environments. 

Here is the live site: https://gray593.github.io/SoftwareDevelopmentAssignment1-Jigsaw/

### 1.2 Group Contributers

I am the sole contributer for this project. 

### 1.3 Design and Functional Breakdown 

![Design Board](./ReportImages/DesignBoard.png)

Above is the design board that was created throughout the projects development. 

![Design Board](./ReportImages/Flowchart.png)

Above is the flowchart that was created to plan the high level functionality of the project. 

![Pseudocode](./ReportImages/Pseudocode.png)

Above is the Pseudocode that was created based off of the flowchart to map the high level functionality in more detail. It has been created in line with the standards outlined in the referenced document (Cambridge International, 2025).

### 1.3.1 Draw Function Breakdown
![DrawFunction](./ReportImages/DrawFunction.png)
![DrawFunctionSite](./ReportImages/DrawFunctionSite.png)

The draw function when called clears the canvas and then iterates through the pieces list first drawing all the locked pieces that are in the correct location and then drawing the pieces that are unlocked. this is to ensure the moveable pieces are brought to top and can be clearly seen by the user this is necessary because as the puzzles increase in difficulty pieces were getting hidden behind other pieces. All code in this function is original but was helped greatly by the W3Schools html draw on canvas web page (W3Schools, 2025a) 
### 1.3.2 Solved Function Breakdown
![Solved Function](./ReportImages/SolvedFunction.png)
![SolvedFunctionSite](./ReportImages/SolvedFunctionSite.png)

The solved function is relatively simple compared to other functions within this project it ensures that every object in the pieces array is in the correct position. This is achieved by taking the absolute value of the x and y co-ordinates of every piece and then ensuring the result is less than one. All code in this function is original but was greatly helped by the Mdn documents for both .abs(mdn,2023) and .every(mdn,2025a)

### 1.3.3 Main Function Breakdown 
![MainFunction](./ReportImages/MainFunction.png)
![MainFunctionSite](./ReportImages/MainFunctionSite.png)

The main function is the core of this program and will have the child functions of create and shuffle broken down in their own corresponding sections. This function is called when the website loads and is called again whenever the user starts a new puzzle it takes in one parameter which is an integer that indicates the difficulty of the current puzzle it then ensures the global variable is the same as the local variable, as the comment indicates this was a problem encountered in development the resolution of this bug was found on Stack Overflow. Next the columns and rows are set to the difficulty integer plus two, this ensures a healthy increase in difficulty as the integer increases as the columns multiplied by the rows equal the total number of pieces. Then the pieces array is created and the selected piece variable is assigned to null. The next line of code creates a new html image tag assigns it to a variable then in the next line the images source is set to a random image from the list of image URLs at the top of the code. The Image() constructor was a new concept that hadn’t been encountered until now, Mdn documentation was utilised to ensure this function was used correctly (Mdn, 2025b). Next the piece height and width are assigned by dividing the width and height of the canvas by the columns/rows. Finally the onload function at the bottom of the main function ensures that the puzzle is not created until the image has loaded. All code in this function is original unless previously stated otherwise.

### 1.3.4 Create Function Breakdown
![CreateFunction](./ReportImages/CreateFunction.png)
![CreateFunctionSite](./ReportImages/CreateFunctionSite.png)

The create function create a nested for loop that iterates through both axis creating a piece object with every iteration each object has five properties the current x and y co-ordinates the correct x and y co-ordinates and whether the piece is locked or not. After each piece is created, it is added to the pieces array. 

### 1.3.5 Shuffle Function Breakdown 
![ShuffleFunction](./ReportImages/ShuffleFunction.png)
![ShuffleFunctionSite](./ReportImages/ShuffleFunctionSite.png)

The shuffle function shuffles the pieces in the pieces array into a random order and then sets each piece’s x and y to random positions within the canvas.

### 1.3.6 Event Listeners Breakdown 
![EventFunction](./ReportImages/EventListeners.png)
![EventFunctionSite](./ReportImages/EventListenersSite.png)

There are three event listeners needed to allow the code to function mouse down, mouse move and mouse up. mouse down works out if a piece has been clicked on when the users clicks and then if a piece has been clicked calculates the cursor offset from the top left of the piece. The mouse move function returns if a piece is not selected but if a piece is selected the pieces x and y update with the cursor then the piece is redrawn to the canvas. The mouse up event listener returns if a piece isn’t selected. If a piece is selected it calculates if the pieces x and y are within a certain tolerance to the correct x and y and if the piece is, it is snapped into the correct place then the selected piece variable is set back to null and the board is redrawn. The final part of the mouse up event listener checks if the puzzle in its entirety has been solved and if it has displays the puzzle complete screen that allows the user to load a new puzzle. All code in this function is original but was helped greatly by the W3Schools website in regard to mouse event offset x and y (W3Schools, 2025b)
### 1.3.7 Onclick Function Breakdown 
![OnclickFunction](./ReportImages/OnclickFunctions.png)
![OnclickFunctionSite](./ReportImages/OnclickFunctionSite.png)

The onclick functions ensure when a button is clicked the correct outcome is achieved the first seven manage the difficulty buttons. When a difficulty button is pressed the main function is called and the corresponding difficulty integer is passed into it. the last event listener toggles dark mode. When the dark mode button is pressed the body's class is toggled applying a new set of CSS properties and the text within the button changes in accordance with the theme.
 

### 1.4 Target User Profiles

![User Profile 1](./ReportImages/UserProfile1.png)
![User Profile 2](./ReportImages/UserProfile2.png)

The above user profiles outline two users' requirements for the features of the puzzle website. To summarise John and Clare desire a puzzle website that loads quickly has a responsive easy-to-use UI that clearly displays puzzles of varying difficulty that have pleasing background images that are primarily of landscapes and a dark mode to reduce eye strain.

### 1.5 User Requirements
Based on the above user profiles a set of user requirements can be developed as found below.

* The puzzles on the website should vary in difficulty and let the user select the difficulty as both Clare and John have differing needs in this regard
* The website and puzzles should load quickly as Clare is impatient
* The images used for the puzzles should be high quality, visually appeasing and primarily scenic landscapes as both Clare and John emphasised the importance of the quality images used for the puzzle
* The user interface should be responsive and easy to navigate this was emphasised in Clare’s user profile
* Pieces should be reasonably sized and high contrast from the background as John is visually impaired
* Pieces should snap into place as John misses this when completing digital jigsaws and gets frustrated by the lack of feedback
 

### 1.6 System Requirements 
This section contains the system requirements for this project that have been divided into subcategories based on their context:

Hardware Requirements:
* The project will be optimised for computers not for mobile so although it will still function on mobile but there may be some optimisation issues or bugs
* The game is built for modern browsers, it requires JavaScript to be enabled and therefore may not work on older browsers
* The website has been designed for at least 1080p and may be too zoomed in on lower resolutions and too zoomed out on resolutions of a lot larger scale
* An input method that can utilise the mouse pointer is required as the game is designed to be played with the cursor and therefore is unplayable with just a keyboard or game controller

Project Requirements:
* The program must allow users to play a jigsaw puzzle game in the web browser without having to download any resources
* The puzzle will load a random image when the page is loaded and every time a new puzzle is started 
* The user can select a difficulty level that increases the number of puzzle pieces as the difficulty increases
* The program must display a “Puzzle Complete” message when the puzzle is solved
* A “Next Puzzle” button must be displayed to the user after puzzle completion that allows the player to start a new puzzle
* A “Dark Mode” button will toggle between light and dark themes.
* The website will be aesthetically pleasing.

Game rules and mechanical requirements:
* The puzzle will be created by slicing an image into pieces
* The pieces will then be shuffled randomly
* The user can use the cursor to drag pieces around the canvas/puzzle board
* When pieces are approximately in the right position they should snap into place and be locked
* When the puzzle is completed, the program should detect this congratulate the user and prompt them to start a new puzzle
* Multiple difficulty buttons will be available to the user to allow for them to increase the difficulty from the default


### 1.7 System Testing

![Testing page 1](./ReportImages/TestingPart1.png)
![Testing page 2](./ReportImages/TestingPart2.png)

Above is the full system testing log that was completed at the end of development as can be observed the website passed all test this is due to the iterative development style that enabled the program to continually be improved throughout the development process and detailed system requirements that ensured the project always moved in the correct direction. 

### 1.8 Review of the Development Strategy
During the development of this project, iterative development was utilised to ensure the output was of a sufficient quality and didn’t stray from the needs of the user. Iterative development is the process of repeating steps of the development cycle and building up the software piece by piece and learn from every step (Wikipedia, 2025).
This development strategy was implemented constantly throughout the development process this can be observed in the above flowchart which only displays the games basic higher level functionality this logic was then developed into a minimum viable product (MVP) that at first just displayed an image this was then iterated upon to slice the image into pieces and then was further developed to shuffle the pieces. After this pseudocode was then developed to better map out more complex game features. A more specific example of iterative development that was employed in the development process was the discovery of the drawImage function running before the image was loaded this was iterated upon until it was placed within the userImage.onload event, this ensured the image had loaded before being drawn. The main advantages of iterative development are it allows for continuous improvement, it is very flexable (One Beyond, 2017) and is good for projects of a smaller size like this project (Agile Business Consortium, 2025). Unfortunately like all development strategies iterative development does have some disadvantages one of which is the length of time it takes to deliver the final project (Brown, 2023). The iterative process can be very slow and the amount of time required scales exponentially with project scope. Fortunately, this disadvantage was mitigated by the small scope of this project. Another disadvantage of iterative development is the cost of resources consumed by the project can be quite high due to the repetitive nature of each iteration and the amount of time consumed by this process (ProfessionalQa.com, 2019).  

### 1.9 Evaluation
This section will aim to evaluate the project’s success against system and user requirements and then reason whether the project was a success overall

The website does a great job of meeting the user requirements. The website and the puzzles contained within load near instantly. The images used are high resolution and are visually appealing while contributing to the difficulty of the puzzle. They are also high contrast compared to the background to accommodate visually impaired users. The interface is clear and easy to navigate. The pieces snap into place when in the correct position. For the most part pieces are decently sized but as the difficulty increases the pieces get smaller this could negatively impact some users and partially fails to completely meet the user requirement. In future this could be remedied by increasing the game board size with difficulty rather than shrinking the pieces. Overall, the website has met nearly all of the users requirements therefore meeting the needs outlined by clare and john in their user profiles. 

Furthermore, the website also meets all system requirements. The website runs seamlessly when used within the parameters outlined in the hardware requirements. All project requirements have been met. The website allows the user to complete jigsaw within the web browser. The user can select a difficulty; the number of pieces increase with the difficulty. Once the puzzle is complete the puzzle complete screen is displayed, and the user can load a new puzzle. Dark mode has been successfully implemented allowing for the website to be used comfortably in low light environments. The website has successfully matched the aesthetic outlined in the design in an attempt to be aesthetically pleasing. All game rules and mechanical requirements have been met. The website successfully loads an image, slices it into pieces that are draggable and snap into the correct place. when the puzzle is completed, the user is congratulated and prompted to start a new puzzle. The user is also able to select puzzles of varying difficulties as outlined in the requirements.

Overall, the website is a success when measured by its ability to fulfil the requirements set out prior to its development. In future to improve the project the board would increase in size rather than the pieces decrease when playing on higher difficulties. Leaderboards would be introduced to track who completes the most puzzles and more images would be added to the image pool to increase replayability.


## 2.0 References 
Agile Business Consortium (2025). Chapter 11: Iterative Development. [online] www.agilebusiness.org. Available at: https://www.agilebusiness.org/dsdm-project-framework/iterative-development.html [Accessed 2 Nov. 2025].

Brown, L. (2023). Agile Vs. Iterative: Key Differences Explained. [online] Invensis Learning Blog. Available at: https://www.invensislearning.com/blog/agile-vs-iterative-model/ [Accessed 2 Nov. 2025].

Cambridge International (2025). Pseudocode Guide for Teachers Cambridge International AS & A Level Computer Science 9618. [online] cambridge international. Available at: https://www.cambridgeinternational.org/Images/697401-2026-pseudocode-guide-for-teachers.pdf [Accessed 2 Nov. 2025].

Mdn (2023). Math.abs() - JavaScript | MDN. [online] developer.mozilla.org. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs [Accessed 2 Nov. 2025].

Mdn (2025a). Array.prototype.every() - JavaScript | MDN. [online] developer.mozilla.org. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every [Accessed 2 Nov. 2025].

Mdn (2025b). HTMLImageElement: Image() constructor - Web APIs | MDN. [online] Mozilla.org. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image [Accessed 2 Nov. 2025].

One Beyond (2017). The Pros and Cons of Iterative Software Development. [online] One Beyond. Available at: https://one-beyond.com/pros-cons-iterative-software-development/ [Accessed 2 Nov. 2025].

ProfessionalQa.com (2019). Iterative Model: Advantages and Disadvantages |Professionalqa.com. [online] www.professionalqa.com. Available at: https://www.professionalqa.com/iterative-model [Accessed 2 Nov. 2025].

W3Schools (2025a). HTML Canvas Drawing. [online] www.w3schools.com. Available at: https://www.w3schools.com/graphics/canvas_drawing.asp.

W3Schools (2025b). W3Schools.com. [online] W3schools.com. Available at: https://www.w3schools.com/jsref/event_offsetx.asp [Accessed 2 Nov. 2025].

Wikipedia (2025). Iterative and incremental development. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Iterative_and_incremental_development [Accessed 2 Nov. 2025].