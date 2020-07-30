class Slingshot {
constructor(bodyA,pointB){
    var slingshot_options={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10

        
        
    }
    this.sling=Matter.Constraint.create(slingshot_options);
    World.add(world,this.sling);

    this.image1=loadImage("sprites/sling1.png")
    this.image2=loadImage("sprites/sling2.png")
    this.image3=loadImage("sprites/sling3.png")
  } 
  display(){

    image(this.image1,200,20,50,180)
    image(this.image2,165,23,50,100)

    if(this.sling.bodyA){
      var objA=this.sling.bodyA.position;
      var ptB=this.sling.pointB;

      push();

      stroke(48,22,8)

      if(objA.x<220){
        strokeWeight(7);
    line(objA.x-20,objA.y,ptB.x-10,ptB.y)
    line(objA.x+20,objA.y,ptB.x+30,ptB.y)
    image(this.image3,objA.x-20,objA.y-10,15,30)
      }
      else{
        strokeWeight(3);
        line(objA.x+20,objA.y,ptB.x-10,ptB.y)
        line(objA.x+20,objA.y,ptB.x+30,ptB.y-3)
        image(this.image3,objA.x+20,objA.y-10,15,30)
      }
      pop();
    }
  }
  fly(){
    this.sling.bodyA=null
  }

}