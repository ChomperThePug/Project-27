class Bob {
  constructor(x, y) {
    var options = {
      'density': 0.7,
      'friction': 0,
      'restitution': 1
    };
    this.r = 40;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, this.r/2, options);
    World.add(world, this.body);
  };
  display() {
    var pos = this.body.position;
    //var angle = this.body.angle;

    push();
    //rotate(angle);
    translate(pos.x, pos.y);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    //ellipseMode(RADIUS);
    rectMode(CENTER);
    ellipse(0, 0, this.r, this.r);
    pop();
  };
};