function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 120, 120);

  strokeWeight(2);

  star(80, 80, 150, 15);
  star(200, 200, 100, 5);
  star(430, 200, 200, 10);
  star(250, 400, 60, 10);
}

function draw() {}
