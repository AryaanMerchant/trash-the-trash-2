
  class PaperBall {
    constructor(x,y){
       var this_options = {
        restitution : 0.3,
        density : 1.2,
        friction : 0.5,
        isStatic : false
        }
        this.body = Bodies.circle(x,y,25,this_options);
        this.radius = 50;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        fill("cyan")
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop()
    }
}