class Bob {
  constructor(x, y) {
    var options = {
      'density': 1.2,
      'friction': 1.0,
      'restitution': 0.5
    };
    this.r = 40;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);
  };
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    //translate(pos.x, pos.y);
    rotate(angle);
    translate(pos.x, pos.y);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r);
    pop();
  };
};