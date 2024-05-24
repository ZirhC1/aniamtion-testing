// Canvas Fishing Scene

// Setup canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Animation variables
let cloud2X = 50;
let cloud1X = 50;
let cloud3X = 50;
let cloud1Y = 50;

let sunY = 50;

let skyR = 173;
let skyG = 216;
let skyB = 230;

let fish1x = 220;
let fish1xspeed = 1;

let poleColor = "gray";
//triggers the start of the animation
requestAnimationFrame(draw);

//put ALL drawing code in this draw function
//this draw function will be animated at 60fps
function draw() {
  //SKY
  //replaced varaibles with the rgb value vairables, to later on animate and change
  ctx.fillStyle = `rgb(${skyR},${skyG} ,${skyB})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(75, sunY, 20, 0, 2 * Math.PI);
  ctx.fill();

  // clouds
  let cloud = document.getElementById("cloud");
  ctx.drawImage(cloud, cloud1X, 40, 75, 50);
  ctx.drawImage(cloud, cloud2X, 10, 75, 50);
  ctx.drawImage(cloud, cloud3X, 50, 75, 50);

  // Water
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 250, cnv.width, 250);

  // fishhead 1
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(fish1x, 300, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishhead 2
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(300, 325, 10, 0, 2 * Math.PI);
  ctx.fill();

  // fishtail 1
  ctx.beginPath();
  ctx.moveTo(220, 300);
  ctx.lineTo(240, 290);
  ctx.lineTo(240, 310);
  ctx.fill();

  // fishtail 2
  ctx.beginPath();
  ctx.moveTo(300, 325);
  ctx.lineTo(320, 315);
  ctx.lineTo(320, 335);
  ctx.fill();

  // Pier and posts
  ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 200, 250, 25);

  // loop the 4 posts
  for (let i = 5; i <= 155; i += 50) {
    ctx.fillRect(i, 150, 10, 350);
  }

  // fisherperson
  // head
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(250, 140, 15, 0, 2 * Math.PI);
  ctx.stroke();

  // torso
  ctx.beginPath();
  ctx.moveTo(248, 155);
  ctx.lineTo(243, 195);
  ctx.stroke();

  // upper leg
  ctx.beginPath();
  ctx.moveTo(243, 195);
  ctx.lineTo(265, 205);
  ctx.stroke();

  // lower leg
  ctx.beginPath();
  ctx.moveTo(265, 205);
  ctx.lineTo(270, 230);
  ctx.stroke();

  // arm
  ctx.beginPath();
  ctx.moveTo(246, 170);
  ctx.lineTo(280, 180);
  ctx.stroke();

  // fishing pole
  ctx.strokeStyle = poleColor;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(275, 190);
  ctx.lineTo(350, 100);
  ctx.stroke();

  // fishing lineTo
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(350, 100);
  ctx.lineTo(350, 300);
  ctx.stroke();

  //ANIMATION
  cloud1X = cloud1X + 0.7;
  cloud2X = cloud2X + 2;
  cloud3X = cloud3X + 1;

  //+ makes the animation go right
  //- makes the animation go left(the other way)

  //when clouds exits the right side of the canvas, move it to the left side of the canvas
  if (cloud1X >= 400) {
    cloud1X = -75;
  }

  if (cloud2X >= 400) {
    cloud2X = -75;
  }

  if (cloud3X >= 400) {
    cloud3X = -75;
  }

  //reappear at a random height
  cloud1Y = Math.random() * 150;

  //sun sets and stops under the pier

  if (sunY <= 250) {
    sunY = sunY + 1; // or sunY--
  }
  //Blue sky color: rgb(173, 216, 230)
  //sunset color: rgb(255,165,0)

  if (skyR <= 255) {
    skyR++; //this allows skyR to start at 173 and add up to 255, then stopping the if statement.
  }

  if (skyG >= 165) {
    skyG--; //this allows skyR to start at 173 and add up to 255, then stopping the if statement.
  }

  if (skyB >= 0) {
    skyB--; //this allows skyR to start at 173 and add up to 255, then stopping the if statement.
  }

  //fishhead back and fourth
  fish1x = fish1x + fish1xspeed;
  if (fish1x >= 350) {
    fish1xspeed = -1;
  }

  if (fish1x <= 150) {
    fish1xspeed = 1;
  }
  requestAnimationFrame(draw);
}

//keyboard handler
document.addEventListener("keypress", keyboardHandler);
//a press count is a press and release on the keyboard. others are more specific.

function keyboardHandler(event) {
  if (event.code == "KeyT") {
    console.log("You pressed the T key");
    poleColor = "purple";
  }
}
