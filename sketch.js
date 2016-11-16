var level;
var objects = [];
var a = 0;
var imag = [];
var rotation;
var mousePX;
var mousePY;
var mp;
var sceneData;
var engine = {};
function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  mousePY = mouseY;
  mousePX = mouseX;
  level = new level();
  rotation = {"x":2.4,"y":0,"z":0}
  sceneData = level.getData(getLevels(0));
  objects = sceneData[0];
  img = sceneData[1];
  for(var i = 0;i<img.length;i++){
    imag.push(loadImage(img[i]));
  }
  engine.objects = objects;
}
function draw() {
  if(mouseIsPressed){
    mouseX = mouseX/50;
    mouseY = mouseY/50;
    rotation.z+=mouseX-mousePX;
    rotation.x-=mouseY-mousePY;
    mousePX = mouseX;
    mousePY = mouseY;
  }else{
    //rotation.z+=0.01;
    //rotation.x+=0.001*PI
  }
  engine.objects[hello_world].pos.x+=sin(frameCount/18)*4;
  engine.objects[hello_world2].pos.x-=sin(frameCount/18)*4;
  background(0);
 
  rotateX(rotation.x);
  rotateY(rotation.y);
  rotateZ(rotation.z);
  for(var i = 0;i<objects.length;i++){
      texture(imag[objects[i].texture])
      engine.objects[i].show();
  }
}
