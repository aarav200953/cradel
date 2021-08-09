class Rope {
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX=offSetX
		this.offSetY=offSetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetX, y:this.offSetY}
        }
        console.log(options);
        this.Rope = Constraint.create(options)
        World.add(world,this.Rope)
    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x+this.offSetX,pointB.y+this.offSetY);
    }
}