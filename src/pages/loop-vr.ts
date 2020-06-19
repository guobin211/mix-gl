
const CanvasXSize = 800;
const CanvasYSize = 200;
const speed = 30; // lower is faster
const scale = 1.05;
const y = -4.5; // vertical offset
const img = new Image()

// Main program
let dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;
export function loopVR(c: CanvasRenderingContext2D) {
  img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg'
  img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;
    if (imgW > CanvasXSize) {
      // image larger than canvas
      x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
      // image width larger than canvas
      clearX = imgW;
    } else {
      clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
      // image height larger than canvas
      clearY = imgH;
    } else {
      clearY = CanvasYSize;
    }
    ctx = c;
    // set refresh rate
    return setInterval(draw, speed);
  }
}

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // if image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    // reset, start from beginning
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  }

  // image is > Canvas Size
  else {
    // reset, start from beginning
    if (x > (CanvasXSize)) {
      x = CanvasXSize - imgW;
    }
    // draw aditional image
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  // amount to move
  x += dx;
}