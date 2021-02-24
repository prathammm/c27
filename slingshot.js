class slingshot {
  constructor(bodyA , bodyB){
     var options = {
         bodyA : bodyA,
         bodyB : bodyB,
         stiffness : 0.04 , 
         length : 10 
     }
   this.Y =   Matter.Constraint.create(options);
        World.add(world,this.Y) ;
        
}
display (){
    line (this.Y.bodyA.position.x,
             this.Y.bodyA.position.y,
                this.Y.bodyB.position.x,
                    this.Y.bodyB.position.y)
}
}