class Bird extends Parent {
    constructor(x, y) {
     super(x,y,50,50);
      
      this.image=loadImage('sprites/bird.png');
     
    }
    display(){
      var pos=this.body.position;
      pos.y=mouseY;
      pos.x=mouseX;
      super.display();
    }
   
  }
  