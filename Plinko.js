class Plinko{
    constructor(x, y) {
        var options = {
          isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 10
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
  }