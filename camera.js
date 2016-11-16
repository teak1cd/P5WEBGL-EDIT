function Camera(px,py,pz,rx,ry,meta){
 this.pos;
 this.rotation;
 this.meta = meta;
 if(typeof px !=="number"){
   this.pos = px;
   this.rotation = py;
 }else{
   this.pos = createVector(px,py,pz);
   this.rotation = createVector(rx,ry,0);
 }
}

Camera.prototype.lerp(Pos,Angle,ammount){
  var lt = this;
  var pd = Pos.remove(this.pos);
  var ad = Angle.remove(this.rotation);
  var pf = lt.pos.add(pd.mult(createVector(ammount,ammount,ammount)));
  var af = lt.rotation.add(pd.mult(createVector(ammount,ammount,ammount)));
  return lt;
}
