class Monster{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            restitution:0.5,
            friction:1.0
        }
this.body=Bodies.rectangle(x,y,width,hieght,options);
this.width=width;
this.hieght=hieght;
World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        pop();
    }
}