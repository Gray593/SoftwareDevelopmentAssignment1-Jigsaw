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
// const containing the urls of all the images used in the puzzle

const canvas = document.getElementById("puzzle") // assigns the html canvas as the canvas variable
const ctx = canvas.getContext("2d")
main(1)
function main(difficulty){
    let columns = difficulty+2
    let rows = difficulty+2
    const pieces = []
    const pWidth = canvas.width / columns
    const pHeight = canvas.height / rows
    let selectedPiece = null;
    let offsetX, offsetY

    const userImage = new Image() //creates <img> tag
    userImage.src = images[Math.floor(Math.random() * images.length)] //picks a random url from the images constant



    function create() {
        for (let y = 0; y < rows; y++) { // iterates through both x and y as long as x/y are smaller than the number of rows/collumns 
        for (let x = 0; x < columns; x++) {
            pieces.push({ // adds a piece object to the pieces array 
            x: x * pWidth, //x is determined by multiplying the width of thepiece by the current x co-ordinate the same is done on the next line but with y 
            y: y * pHeight, 
            correctX: x * pWidth, // much like the above but this time it sets the correct x co-ordinate
            correctY: y * pHeight
            })
        }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        pieces.forEach(p => {
        ctx.drawImage(
            userImage,
            p.correctX, p.correctY, pWidth, pHeight, // source
            p.x, p.y, pWidth, pHeight                // destination
        )
        })
    }

    function shuffle() {
        pieces.sort(() => Math.random() - 0.5)
        pieces.forEach((p, i) => {
        p.x = (i % columns) * pWidth
        p.y = Math.floor(i / columns) * pHeight
        })
    }

    function Solved() {
        return pieces.every(p =>
        Math.abs(p.x - p.correctX) < 1 && Math.abs(p.y - p.correctY) < 1
        )
    }

    canvas.addEventListener("mousedown", e => {
        const mouseX = e.offsetX
        const mouseY = e.offsetY
    
        selectedPiece = pieces.find(
        p => mouseX > p.x && mouseX < p.x + pWidth && mouseY > p.y && mouseY < p.y + pHeight
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
    });
    
    canvas.addEventListener("mouseup", () => {
        if (!selectedPiece) return
        if (Math.abs(selectedPiece.x - selectedPiece.correctX) < 30 && Math.abs(selectedPiece.y - selectedPiece.correctY) < 30) {
        selectedPiece.x = selectedPiece.correctX
        selectedPiece.y = selectedPiece.correctY
        }
        selectedPiece = null
        draw()
        if (Solved()){
            document.getElementById("puzzleComplete").style.display="flex"
            document.getElementById("nextPuzzle").onclick = ()=> main(difficulty)
        }
    });

    userImage.onload = () => { //function executes when the img has been loaded
        create()
        shuffle()
        draw()
    }

}
document.getElementById("difficulty1").onclick = () => main(1)
document.getElementById("difficulty2").onclick = () => main(2)
document.getElementById("difficulty3").onclick = () => main(3)
document.getElementById("difficulty4").onclick = () => main(4)
document.getElementById("difficulty5").onclick = () => main(5)
document.getElementById("difficulty6").onclick = () => main(6)
document.getElementById("difficulty7").onclick = () => main(7)