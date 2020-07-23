class Chain {
constructor(bodyA,pointB){
    var chain_options={

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.3,
        length:300
    }
    this.chain=Matter.Constraint.create(chain_options);
    World.add(world,this.chain);
  } 
  display(){

    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)

  }

}