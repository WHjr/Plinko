class Plinko {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 0.5,
            density : 1.2
        }
        this.radius = 10
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }

    display(){
        fill(255)
        var pos = this.body.position
        circle(pos.x,pos.y,this.radius*2)
    }
}

