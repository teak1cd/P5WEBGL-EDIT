function SphereU(x, y, z, rad, img) {
  this.pos = createVector(x, y, z);
  this.r = rad;
  this.texture = img;
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    sphere(this.r);
    pop();
    return 0;
  }
}

function Sphere(inp) {
  this.pos = createVector(inp[0], inp[1], inp[2]);
  this.r = inp[3];
  this.texture = inp[4];
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    sphere(this.r);
    pop();
    return 0;
  }
}
