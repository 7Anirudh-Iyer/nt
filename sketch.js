var li
ar=[]
car=[]
var s,c,sub
var shape,cir
let e


function setup(){
  var canvas = createCanvas(windowWidth ,windowHeight)

  s = createButton('←')
  s.position(0, 0)
  s.style('height', '24px')
  c = createButton('👍')
  c.position(30, 0)
}

function draw(){
  if(mouseIsPressed){
    li = new Line(1, 'blue','line')
    ar.push(li)
  }
  
  for(var i in ar){
    ar[i].show()
  }

  let tr = 0
  
  for(let i = 30; i < 600; i+=18){
    push()
    strokeWeight(0.5)
    stroke('black')
    line(0, i, windowWidth, i)
    pop()
  }
  
  // sub.mousePressed(function(){
  //   window.location.reload()
  // })
  
  drawSprites()
}
