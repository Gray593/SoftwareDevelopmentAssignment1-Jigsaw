/**
 * upload img
 * draw image onto canvas
 * split canvas into segments
 * ensure segments are draggable
 * correct pieces snap together 
 */

const canvas = document.getElementById("puzzle")
const ctx = canvas.getContext("2d")
const userImage = document.getElementById("puzzleImage")
ctx.drawImage(userImage,10,10)