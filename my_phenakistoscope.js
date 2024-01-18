const SLICE_COUNT = 10;
var isjump = 0;
var frame = 0;
var marioframe = [1, 2, 3, 1, 2, 3, 4, 5, 5, 4]

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope) {

  new PLayer(null, 117, 170, 223);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode(RING);
  layer1.set_boundary(400, 1000);

  var layer2 = new PLayer(coin);
  layer2.mode(RING);
  layer2.set_boundary(0, 400);

  var layer3 = new PLayer(squares);
  layer2.mode(RING);
  layer2.set_boundary(0, 400);
}

function faces(x, y, animation, pScope) {
  scale(15);
  noStroke();
  if (frame >= 10) { frame = 0 }
  switch (marioframe[frame]) {
    case 1:
      isjump = 0;
      mariof1();
      break;
    case 2:
      isjump = 0;
      mariof2();
      break;
    case 3:
      isjump = 0;
      mariof3();
      break;
    case 4:
      isjump = 1;
      mariof4();
      break;
    case 5:
      isjump = 2;
      mariof4();
      break;
  }
  frame++;
}

function squares(x, y, animation, pScope) {
  fill(255, 125, 0)
  rect(-60, 290, 180, 180)
  fill(255, 201, 14)
  stroke(0);
  strokeWeight(1);
  scale(10)
  text("?", 0, 35, 1000, 1000)
}

function coin(x, y, animation, pScope) {
  fill(255, 201, 14)
  circle(-10, -180 - animation.wave() * 200, 50, 50) // .wave is a cosine wave btw
  fill(255, 125, 0)
  rect(-15, -190 - animation.wave() * 200, 10, 25)
}

function drawpixel(x, y, color) {//draw pixcels with input color(red,green,orange)
  switch (color) {
    case "red":
      fill(255, 0, 0)
      break;
    case 'green':
      fill(128, 128, 0)
      break;
    case 'orange':
      fill(255, 125, 0)
      break;
  }

  if (isjump == 0) {
    rect(x - 8, y + 50, 1, 1)
  } else if (isjump == 1) {
    rect(x - 8, y + 40, 1, 1)
  } else if (isjump == 2) {
    rect(x - 8, y + 30, 1, 1)
  }

}

function drawline(x1, x2, y, color) {
  for (var i = 0; i < (x2 - x1) + 1; i++) {
    drawpixel(x1 + i, y, color);
  }
}

function mariof1() {//first frame
  drawline(7, 11, 1, "red");
  drawline(6, 14, 2, "red");
  drawline(6, 8, 3, "green");
  drawline(9, 12, 3, 'orange');
  drawpixel(11, 3, 'green');
  drawline(6, 14, 4, 'orange');
  drawpixel(5, 4, 'green');
  drawpixel(7, 4, 'green');
  drawpixel(11, 4, 'green');
  drawline(6, 15, 5, 'orange');
  drawpixel(5, 5, 'green');
  drawpixel(7, 5, 'green');
  drawpixel(8, 5, 'green');
  drawpixel(12, 5, 'green');
  drawline(5, 6, 6, 'green');
  drawline(7, 10, 6, 'orange');
  drawline(11, 14, 6, 'green');
  drawline(7, 13, 7, 'orange');
  drawline(4, 11, 8, 'green');
  drawline(8, 9, 8, 'red');
  drawline(2, 16, 9, 'orange');
  drawline(4, 13, 9, 'green');
  drawline(8, 10, 9, 'red');
  drawline(2, 4, 10, 'orange');
  drawline(6, 7, 10, 'green');
  drawline(8, 12, 10, 'red');
  drawline(13, 14, 10, 'green');
  drawline(15, 16, 10, 'orange');
  drawpixel(9, 10, 'orange');
  drawline(2, 3, 11, 'orange');
  drawline(6, 12, 11, 'red');
  drawpixel(15, 11, 'green');
  drawline(5, 13, 12, 'red');
  drawline(14, 15, 12, 'green');
  drawline(4, 13, 13, 'red');
  drawline(14, 15, 13, 'green');
  drawline(3, 4, 14, 'green');
  drawline(5, 7, 14, 'red');
  drawline(11, 13, 14, 'red');
  drawline(14, 15, 14, 'green');
  drawline(3, 5, 15, 'green');
  drawline(4, 6, 16, 'green');
}

function mariof2() {//first frame
  drawline(6, 10, 1, "red");
  drawline(5, 13, 2, "red");
  drawline(5, 7, 3, "green");
  drawline(8, 11, 3, 'orange');
  drawpixel(10, 3, 'green');
  drawline(5, 13, 4, 'orange');
  drawpixel(4, 4, 'green');
  drawpixel(6, 4, 'green');
  drawpixel(10, 4, 'green');
  drawline(5, 14, 5, 'orange');
  drawpixel(4, 5, 'green');
  drawpixel(6, 5, 'green');
  drawpixel(7, 5, 'green');
  drawpixel(11, 5, 'green');
  drawline(4, 5, 6, 'green');
  drawline(6, 9, 6, 'orange');
  drawline(10, 13, 6, 'green');
  drawline(6, 12, 7, 'orange');
  drawline(5, 10, 8, 'green');
  drawpixel(7, 8, "red");
  drawline(4, 11, 9, 'green');
  drawline(8, 9, 9, 'red');
  drawline(4, 6, 10, 'green');
  drawline(7, 11, 10, 'red');
  drawpixel(9, 10, "orange");
  drawpixel(12, 10, "orange");
  drawline(4, 7, 11, 'green');
  drawline(8, 12, 11, 'red');
  drawpixel(4, 12, "red");
  drawline(5, 6, 12, 'green');
  drawline(7, 9, 12, 'orange');
  drawline(10, 12, 12, 'red');
  drawline(5, 11, 13, 'red');
  drawpixel(6, 13, "green");
  drawline(7, 8, 13, 'orange');
  drawline(6, 8, 14, 'red');
  drawline(9, 11, 14, 'green');
  drawline(6, 12, 15, 'green');
  drawline(6, 9, 16, 'green');
}

function mariof3() {
  drawline(7, 11, 2, "red");
  drawline(6, 14, 3, "red");
  drawline(6, 8, 4, "green");
  drawline(9, 12, 4, 'orange');
  drawpixel(11, 4, 'green');
  drawline(6, 14, 5, 'orange');
  drawpixel(5, 5, 'green');
  drawpixel(7, 5, 'green');
  drawpixel(11, 5, 'green');
  drawline(6, 15, 6, 'orange');
  drawpixel(5, 6, 'green');
  drawpixel(7, 6, 'green');
  drawpixel(8, 6, 'green');
  drawpixel(12, 6, 'green');
  drawline(5, 6, 7, 'green');
  drawline(7, 10, 7, 'orange');
  drawline(11, 14, 7, 'green');
  drawline(7, 13, 8, 'orange');
  drawline(6, 11, 9, 'green');
  drawpixel(10, 9, "red");
  drawpixel(13, 9, "orange");
  drawpixel(5, 10, "orange");
  drawline(6, 11, 10, "green");
  drawline(12, 14, 10, "orange");
  drawline(4, 13, 11, "orange");
  drawline(7, 11, 11, "green");
  drawpixel(6, 11, "red");
  drawline(4, 5, 12, "green");
  drawline(6, 12, 12, "red");
  drawpixel(4, 13, "green");
  drawline(5, 12, 13, "red");
  drawline(3, 4, 14, "green");
  drawline(5, 7, 14, "red");
  drawline(9, 11, 14, "red");
  drawpixel(3, 15, "green");
  drawline(8, 10, 15, "green");
  drawline(8, 11, 16, "green");
}

function mariof4() {
  drawline(14, 16, 1, "orange");
  drawline(7, 11, 2, "red");
  drawline(14, 16, 2, "orange");
  drawline(6, 14, 3, "red");
  drawline(15, 16, 3, "orange");
  drawline(6, 11, 4, "green");
  drawline(14, 16, 4, "green");
  drawline(9, 10, 4, "orange");
  drawpixel(12, 4, "orange");
  drawline(6, 13, 5, "orange");
  drawline(14, 16, 5, "green");
  drawpixel(5, 5, "green");
  drawpixel(7, 5, "green");
  drawpixel(11, 5, "green");
  drawline(6, 15, 6, "orange");
  drawpixel(5, 6, "green");
  drawpixel(7, 6, "green");
  drawpixel(8, 6, "green");
  drawpixel(12, 6, "green");
  drawpixel(16, 6, "green");
  drawline(5, 6, 7, "green");
  drawline(7, 10, 7, "orange");
  drawline(11, 15, 7, "green");
  drawline(7, 13, 8, "orange");
  drawpixel(14, 8, "green");
  drawline(3, 13, 9, "green");
  drawpixel(8, 9, "red");
  drawpixel(12, 9, "red");
  drawline(2, 12, 10, "green");
  drawpixel(9, 10, "red");
  drawpixel(13, 10, "red");
  drawpixel(16, 10, "green");
  drawpixel(16, 11, "green");
  drawline(1, 2, 11, "orange");
  drawline(3, 8, 11, "green");
  drawline(9, 13, 11, "red");
  drawline(1, 3, 12, "orange");
  drawline(5, 14, 12, "red");
  drawline(15, 16, 12, "green");
  drawpixel(7, 12, "green");
  drawpixel(10, 12, "orange");
  drawpixel(13, 12, "orange");
  drawpixel(2, 13, "orange");
  drawpixel(4, 13, "green");
  drawline(5, 14, 13, "red");
  drawline(15, 16, 13, "green");
  drawline(3, 5, 14, "green");
  drawline(6, 14, 14, "red");
  drawline(15, 16, 14, "green");
  drawline(2, 4, 15, "green");
  drawline(5, 14, 15, "red");
  drawpixel(2, 16, "green");
  drawline(5, 8, 16, "red");
}