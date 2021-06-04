class Line{
    constructor(size,color,shape){
      //properties
      this.x=mouseX
      this.y=mouseY
      
      //past
      this.px= pwinMouseX
      this.py= pwinMouseY 
      
      this.size=size
      this.color=color
      
      this.shape=shape
    }
    
    show(){
      // if(this.shape=='line'){
      strokeWeight(this.size)
      stroke(this.color)
      line(this.px,this.py, this.x,this.y)
      // }
      
      // if(this.shape==='circle'){
      //   strokeWeight(1)
      //   fill(this.color)
      //   ellipse(this.px,this.py,this.size)
      // }
      
      // if(this.shape==='square'){
      //   strokeWeight(1)
      //   fill(this.color)
      //   rect(this.px,this.py,this.size,this.size)
      // }
      
      // if(this.shape==='triangle'){
      //   strokeWeight(1)
      //   fill(this.color)
      //   // triangle(this.px,this.px,this.px-this.size,this.px-this.size,this.py-this.size,this.py-this.size)
      //   push()
      //   translate(this.x,this.y)
      //   beginShape()
      //   for(var i=0;i<360;i=i+120){
      //     var x = this.size*cos(i)
      //     var y = this.size*sin(i)
      //     vertex(x,y)
      //   }
      //   endShape(CLOSE)
      //   pop()
      // }
    }
  }