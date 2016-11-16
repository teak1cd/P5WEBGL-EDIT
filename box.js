function BoxU(x, y, z, sx, sy, sz, img) {
  this.pos = createVector(x, y, z);
  this.r = createVector(sx,sy,sz);
  this.texture = img;
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    box(this.r.x,this.r.y,this.r.z);
    pop();
    return 0;
  }
}

function Box(inp) {
  this.pos = createVector(inp[0], inp[1], inp[2]);
  this.r = createVector(inp[3],inp[4],inp[5]);
  this.texture = inp[6];
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    box(this.r.x,this.r.y,this.r.z);
    pop();
    return 0;
  }
}
