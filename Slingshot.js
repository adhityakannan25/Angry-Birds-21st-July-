class Slingshot {
constructor(bodyA,pointB){
    var slingshot_options={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:20
    }
    this.sling=Matter.Constraint.create(slingshot_options);
    World.add(world,this.sling);
  } 
  display(){

    if(this.sling.bodyA){
      var objA=this.sling.bodyA.position;
      var ptB=this.sling.pointB;

    strokeWeight(3);
    line(objA.x,objA.y,ptB.x,ptB.y)
    }
  }
  fly(){
    this.sling.bodyA=null
  }

}