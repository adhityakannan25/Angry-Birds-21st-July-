class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visibility=255

  }
  display(){

    if(this.body.speed < 5){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visibility = this.Visibility - 2;
       tint(255,this.Visibility);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    
  }
  score(){
    if (this.Visibility < 0 && this.Visibliity > -1005){
      score++;
    }
  }

}