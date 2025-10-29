const images = [
    "./PuzzleImages/image2.png",
    "./PuzzleImages/image3.png",
    "./PuzzleImages/image4.png",
    "./PuzzleImages/image5.png",
    "./PuzzleImages/image6.png",
    "./PuzzleImages/image7.png",
    "./PuzzleImages/image8.png",
    "./PuzzleImages/image9.png"
  ];
// const containing the urls of all the images used in the puzzle

const canvas = document.getElementById("puzzle") // assigns the html canvas as the canvas variable
const ctx = canvas.getContext("2d")
const userImage = new Image() //creates <img> tag
userImage.src = images[Math.floor(Math.random() * images.length)] //picks a random url from the images constant
userImage.onload = () => { //function executes when the above img has been loaded
    ctx.clearRect(0, 0, canvas.width, canvas.height)// sets up the canvas by clearing it
    ctx.drawImage(userImage, 0, 0, 750, 750) //draws the image 
}

