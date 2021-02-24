class Particle {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 0.8
        }
        this.radius = random(7,15)
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
        this.color = color(random(0,255),random(0,255),random(0,255),150)
    }

    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        if(pos.x>0 && pos.x < 600){
            push();
            fill(this.color)
            angleMode(RADIANS)
            rectMode(CENTER)
            translate(pos.x,pos.y)
            rotate(angle)
            circle(0,0,this.radius*2)
            noStroke()
            fill(100)
            rect(0,0,this.radius*2,1)
            pop();
        }
        else {
            World.remove(world,this.body)
        }
    }
}

