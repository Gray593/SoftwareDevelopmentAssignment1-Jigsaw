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
  

  
function draw() { //draws the pieces on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas
    pieces.forEach(p => { 
        pieces.filter(p => p.locked).forEach(p => {
            ctx.drawImage(userImage,p.correctX, p.correctY, pWidth, pHeight, p.x, p.y, pWidth, pHeight) // draws the image base on the following parameters, the original image, the correct x and y to crop from, the width and height of the crop, location of cropped piece on the canvas, size of the drawn piece 
        })     
        pieces.filter(p => !p.locked).forEach(p => {
            ctx.drawImage(userImage, p.correctX, p.correctY, pWidth, pHeight, p.x, p.y, pWidth, pHeight)
          })
    })
}
  
function Solved() {
    return pieces.every(p => //checks every piece against the below function and returns true or false 
      Math.abs(p.x - p.correctX) < 1 && Math.abs(p.y - p.correctY) < 1 // checks the 
    )
}

function main(difficulty) {
    if (difficulty>7){
        difficulty = 7
    }
    columns = difficulty + 2
    rows = difficulty + 2
    pieces = []
    selectedPiece = 0
  
    userImage = new Image()
    userImage.src = images[Math.floor(Math.random() * images.length)]
  
    pWidth = canvas.width / columns
    pHeight = canvas.height / rows
  
    function create() {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          pieces.push({
            x: x * pWidth,
            y: y * pHeight,
            correctX: x * pWidth,
            correctY: y * pHeight,
            locked: false
          })
        }
      }
    }
  
    function shuffle() {
      pieces.sort(() => Math.random() - 0.5)
      pieces.forEach((p, i) => {
        p.x = (i % columns) * pWidth
        p.y = Math.floor(i / columns) * pHeight
      })
    }
  
    userImage.onload = () => {
      create()
      shuffle()
      draw()
    }
}
  
  
canvas.addEventListener("mousedown", e => {
    const mouseX = e.offsetX
    const mouseY = e.offsetY
  
    selectedPiece = pieces.find(
      p => !p.locked && mouseX > p.x && mouseX < p.x + pWidth && mouseY > p.y && mouseY < p.y + pHeight
    )
  
    if (selectedPiece) {
      offsetX = mouseX - selectedPiece.x
      offsetY = mouseY - selectedPiece.y
    }
})
  
canvas.addEventListener("mousemove", e => {
    if (!selectedPiece) return
    selectedPiece.x = e.offsetX - offsetX
    selectedPiece.y = e.offsetY - offsetY
    draw()
})
  
canvas.addEventListener("mouseup", () => {
    if (!selectedPiece) return
  
    // Snap to correct position if close enough
    if (
      Math.abs(selectedPiece.x - selectedPiece.correctX) < 30 &&
      Math.abs(selectedPiece.y - selectedPiece.correctY) < 30
    ) {
      selectedPiece.x = selectedPiece.correctX
      selectedPiece.y = selectedPiece.correctY
      selectedPiece.locked = true
    }
  
    selectedPiece = null
    draw()
  
    if (Solved()) {
      document.getElementById("puzzleComplete").style.display = "flex"
      document.getElementById("nextPuzzle").onclick = () => {
        document.getElementById("puzzleComplete").style.display = "none"
        main(++difficulty) // increment has to go before otherwise it doesnt work the first time
    }
    }
})
  
  
document.getElementById("difficulty1").onclick = () => main(1)
document.getElementById("difficulty2").onclick = () => main(2)
document.getElementById("difficulty3").onclick = () => main(3)
document.getElementById("difficulty4").onclick = () => main(4)
document.getElementById("difficulty5").onclick = () => main(5)
document.getElementById("difficulty6").onclick = () => main(6)
document.getElementById("difficulty7").onclick = () => main(7)
theme.onclick = () => {
    document.body.classList.toggle("darkMode")
    theme.textContent = document.body.classList.contains("darkMode") ? "Light Mode" : "Dark Mode"
}
  
  
main(1)