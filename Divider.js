class Divider{
    constructor(x,y){
        this.width = 10
        this.height = 250
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
        
    }

    display(){
        rectMode(CENTER);
        fill(220)
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        //console.log(this.height)
    }
}