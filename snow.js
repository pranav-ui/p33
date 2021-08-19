class Snow {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("snow4.webp");
        Matter.World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}