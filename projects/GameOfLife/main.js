// public/projects/GameOfLife/main.js
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
document.getElementById("app").appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(50, 50, 200, 200);