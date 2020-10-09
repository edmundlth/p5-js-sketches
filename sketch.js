let setup_config = {
  canvas_size: 830,
  background_color: (100, 100, 100)
}

let walker = {
  x: setup_config.canvas_size / 2,
  y: setup_config.canvas_size / 2,
  s: 10,
  step_size: 50
}

let textCanvas;

function setup() {
  let s = setup_config.canvas_size;
  createCanvas(s, s);
  background(setup_config.background_color);
}

function draw() {
  circle_color = [150, 200, 200, 100];
  draw_walker([walker.x, walker.y], walker.s, circle_color);

  // Frame update
  walker.x += (walker.step_size * (random() - 0.5));
  walker.x %= setup_config.canvas_size;
  if (walker.x < 0) {
    walker.x += setup_config.canvas_size;
  }
  walker.y += walker.step_size * (random() - 0.5);
  walker.y %= setup_config.canvas_size;
  if (walker.y < 0) {
    walker.y += setup_config.canvas_size;
  }
}

function draw_walker(coord, radius, color) {
  noStroke();
  fill(circle_color);
  ellipse(coord[0], coord[1], radius, radius);
}

function mousePressed() {
  background(100);
}