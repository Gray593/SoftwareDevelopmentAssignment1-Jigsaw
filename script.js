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
console.log(images)
const canvas = document.getElementById("puzzle")
const ctx = canvas.getContext("2d")
const userImage = new Image()
userImage.src = images[Math.floor(Math.random() * images.length)]
userImage.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(userImage, 0, 0, 750, 750)
}