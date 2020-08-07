class Plinko{
    constructor(x,y,r,options){
    var options = {
            isStatic: true
    }
    this.body = Bodies.circle(x,y,this.r,options);
    this.color=color(random(0,255), random(0,255), random(0,255));
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill(255,0,0);
        rect(0, 0, this.width, this.height);
        pop();
      }
}