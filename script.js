const images = [
    "./PuzzleImages/image2.png",
    "./PuzzleImages/image3.png",
    "./PuzzleImages/image4.png",
    "./PuzzleImages/image5.png",
    "./PuzzleImages/image6.png",
    "./PuzzleImages/image7.png",
    "./PuzzleImages/image8.png",
    "./PuzzleImages/image9.png"
]
 
const canvas = document.getElementById("puzzle")
const ctx = canvas.getContext("2d")
// sets up canvas

let pieces = []
let selectedPiece = 0
let offsetX, offsetY
let userImage
let pWidth, pHeight
let columns, rows
let difficulty = 1
let theme = document.getElementById("theme")
  

  
function draw() { // draws the pieces on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clears the canvas
    pieces.forEach(p => { 
        pieces.filter(p => p.locked).forEach(p => { // draws locked pieces first 
            ctx.drawImage(userImage,p.correctX, p.correctY, pWidth, pHeight, p.x, p.y, pWidth, pHeight) // draws the image base on the following parameters, the original image, the correct x and y to crop from, the width and height of the crop, location of cropped piece on the canvas, size of the drawn piece 
        })     
        pieces.filter(p => !p.locked).forEach(p => { // draws unlocked pieces second so they appear above the locked correct pieces
            ctx.drawImage(userImage, p.correctX, p.correctY, pWidth, pHeight, p.x, p.y, pWidth, pHeight)
          })
    })
}
  
function Solved() {
    return pieces.every(p => // checks every piece against the below function and returns true or false 
      Math.abs(p.x - p.correctX) < 1 && Math.abs(p.y - p.correctY) < 1 // checks whether the piece is in the right position using the absolute value of x and y
    )
}

function main(difficulty) { // function passes in difficulty
    if (difficulty>7){
      difficulty = 7
    }
    window.difficulty = difficulty // this line fixes a bug from testing where the local variable for difficulty wouldnt be the same as the global variable so this just assigns the local to the global one
    columns = difficulty + 2 // the number of rows and columns is always the difficulty variable +2 e.g. difficulty 1 is 3x3
    rows = difficulty + 2 
    pieces = [] //pieces array is created empty put will have piece objects pushed to it later
    selectedPiece = 0 //selected piece is defaulted to 0 (null)
    userImage = new Image() // creates a new html img tag
    userImage.src = images[Math.floor(Math.random() * images.length)] //assigns the source to a random url from the puzzle images folder
    pWidth = canvas.width / columns //the width of the piece is base on the width of the canvas over the number of columns
    pHeight = canvas.height / rows // the same as the above is applicable for height 
  
    function create() {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) { // loops x and y as incrementally as long as both are smaller than the column and row count
          pieces.push({ // adds a piece object to the pieces array 
            x: x * pWidth, // current x and y of the piece 
            y: y * pHeight, 
            correctX: x * pWidth, // correct x and y of the piece
            correctY: y * pHeight,
            locked: false // locked is used for locking the piece once its in the correct position
          })
        }
      }
    }
  
    function shuffle() {
      pieces.sort(() => Math.random() - 0.5) // ensures the order of pieces being shuffled is random
      pieces.forEach((p, i) => { // loops through each piece with p being the piece and i being the index
        p.x = (i % columns) * pWidth // assigns each piece a new x and y
        p.y = Math.floor(i / columns) * pHeight
      })
    }
  
    userImage.onload = () => { // on the puzzle image being loaded call these functions
      create()
      shuffle()
      draw()
    }
}
  
  
canvas.addEventListener("mousedown", e => {
    const mouseX = e.offsetX //assigns both constants based off of the mouses x and y position relative to the canvas
    const mouseY = e.offsetY
    selectedPiece = pieces.find(p => !p.locked && mouseX > p.x && mouseX < p.x + pWidth && mouseY > p.y && mouseY < p.y + pHeight) // finds an unlocked piece that the mouse is currently inside of
    if (selectedPiece) { // if a piece is found calculate the offset to stop the piece from jumping
      offsetX = mouseX - selectedPiece.x
      offsetY = mouseY - selectedPiece.y
    }
})
  
canvas.addEventListener("mousemove", e => {
    if (!selectedPiece) return // ensure a piece is being dragged and then assigns the pieces x and y values as the mouses position minus the offset then redraws the board
    selectedPiece.x = e.offsetX - offsetX
    selectedPiece.y = e.offsetY - offsetY
    draw()
})
  
canvas.addEventListener("mouseup", () => {
    if (!selectedPiece) return // ensures a piece is being dragged 
    if (Math.abs(selectedPiece.x - selectedPiece.correctX) < 30 && Math.abs(selectedPiece.y - selectedPiece.correctY) < 30) { // if the piece is within a certain tolerance of the correct location set the pieces x and y to the correct x and y then lock the piece
      selectedPiece.x = selectedPiece.correctX 
      selectedPiece.y = selectedPiece.correctY
      selectedPiece.locked = true
    }
    selectedPiece = 0 // sets the selected piece to null
    draw() // redraws the board
  
    if (Solved()) { // if the puzzle is solved reveal the below dom elements by changing the css display property
      document.getElementById("puzzleComplete").style.display = "flex"
      document.getElementById("nextPuzzle").onclick = () => {
        document.getElementById("puzzleComplete").style.display = "none"
        main(++difficulty) // increment has to go before otherwise it doesnt work the first time
      }
    }
})
  

document.getElementById("difficulty1").onclick = () => main(1) // event listeners change difficulty when each button is pressed
document.getElementById("difficulty2").onclick = () => main(2)
document.getElementById("difficulty3").onclick = () => main(3)
document.getElementById("difficulty4").onclick = () => main(4)
document.getElementById("difficulty5").onclick = () => main(5)
document.getElementById("difficulty6").onclick = () => main(6)
document.getElementById("difficulty7").onclick = () => main(7)


theme.onclick = () => { // when the darkmode button is clicked change the css theme to darkmode and change the text in the button using the inline function below
    document.body.classList.toggle("darkMode")
    theme.textContent = document.body.classList.contains("darkMode") ? "Light Mode" : "Dark Mode"
}
  
  
main(difficulty) // calls the main function to start the first puzzle