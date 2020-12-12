p5.disableFriendlyErrors = true;

let m = [];
let w = 10;
let h = 5;
let dim = 94;
let rotationAlpha = 0;
let rotationIter;

let p = [
  
  // row 1
  
  {sc: 0.2, n1: 6, n2: 7, td: 3, v1: 0, v2: 10, b1: 0, b2: 3, 
   l1: 0, l2: 20, c1: 10, c2: 10, t1: 0, t2: 0,
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.6, n1: 33, n2: 33, td: 1, v1: 3, v2: 3, b1: 0, b2: 20, 
   l1: 0, l2: 5, c1: 10, c2: 10, t1: 0, t2: 0, 
   core: false, circ: true, blob: false, line: true, tipx: false},
  
  {sc: 0.8, n1: 30, n2: 30, td: 1, v1: 0, v2: 10, b1: 0, b2: 10, 
   l1: 0, l2: 5, c1: 0, c2: 20, t1: 0, t2: 15,
   core: false, circ: false, blob: false, line: false, tipx: true},
  
  {sc: 0.3, n1: 5, n2: 33, td: 1, v1: 3, v2: 3, b1: 0, b2: 14, 
   l1: 0, l2: 20, c1: 0, c2: 5, t1: 0, t2: 5, 
   core: false, circ: false, blob: false, line: true, tipx: true},
  
  {sc: 0.8, n1: 10, n2: 10, td: 1, v1: 0, v2: 6, b1: 10, b2: 30, 
   l1: 0, l2: 5, c1: 0, c2: 20, t1: 0, t2: 15,
   core: false, circ: false, blob: true, line: false, tipx: true},
  
  // row 2
  
  {sc: 0.3, n1: 10, n2: 10, td: 1, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: 0, l2: 8, c1: 0, c2: 20, t1: 0, t2: 14,
   core: false, circ: true, blob: false, line: false, tipx: false},
  
  {sc: 0, n1: 3, n2: 3, td: 2, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: 7, l2: 14, c1: 10, c2: 10, t1: 2, t2: 40,
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.3, n1: 10, n2: 10, td: 1, v1: 0, v2: 10, b1: 0, b2: 5, 
   l1: 5, l2: 10, c1: 0, c2: 20, t1: 1, t2: 1,
   core: true, circ: false, blob: true, line: false, tipx: false},
  
  {sc: 0.3, n1: 23, n2: 23, td: 2, v1: 0, v2: 10, b1: 0, b2: 10, 
   l1: 0, l2: 0, c1: 10, c2: 10, t1: 0, t2: 0,
   core: false, circ: false, blob: true, line: false, tipx: false},
  
  {sc: 0.7, n1: 8, n2: 8, td: 1, v1: 0, v2: 20, b1: 10, b2: 16, 
   l1: 0, l2: 0, c1: 0, c2: 5, t1: 1, t2: 1,
   core: true, circ: false, blob: true, line: true, tipx: false},
  
  // row 3
  
  {sc: 0.2, n1: 40, n2: 40, td: 3, v1: 0, v2: 10, b1: 0, b2: 13, 
   l1: 0, l2: 20, c1: 10, c2: 10, t1: 0, t2: 0,
   core: false, circ: false, blob: false, line: true, tipx: false},
  
  {sc: 0.4, n1: 10, n2: 10, td: 1, v1: 3, v2: 3, b1: 0, b2: 20, 
   l1: 0, l2: 20, c1: 10, c2: 10, t1: 0, t2: 4, 
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.2, n1: 3, n2: 3, td: 1, v1: 0, v2: 10, b1: 17, b2: 17, 
   l1: 0, l2: 0, c1: 0, c2: 20, t1: 0, t2: 45,
   core: false, circ: false, blob: false, line: true, tipx: true},
  
  {sc: 0, n1: 8, n2: 8, td: 1, v1: 3, v2: 3, b1: 0, b2: 4, 
   l1: 0, l2: 20, c1: 0, c2: 5, t1: 0, t2: 15, 
   core: false, circ: false, blob: false, line: false, tipx: false},
  
  {sc: 0, n1: 11, n2: 11, td: 1, v1: 0, v2: 6, b1: 0, b2: 0, 
   l1: 10, l2: 20, c1: 0, c2: 20, t1: 0, t2: 15,
   core: false, circ: true, blob: false, line: true, tipx: false},
  
  // row 4
  
  {sc: 0.3, n1: 9, n2: 9, td: 1, v1: 0, v2: -10, b1: 0, b2: 80, 
   l1: 5, l2: 10, c1: 0, c2: 13, t1: 3, t2: 3,
   core: false, circ: false, blob: true, line: false, tipx: true},
  
  {sc: 0, n1: 5, n2: 5, td: 2, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: 7, l2: 14, c1: 10, c2: 10, t1: 4, t2: 4,
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.3, n1: 5, n2: 5, td: 1, v1: 0, v2: 10, b1: 0, b2: 5, 
   l1: 5, l2: 10, c1: 0, c2: 13, t1: 0, t2: 13,
   core: true, circ: true, blob: true, line: false, tipx: false},
  
  {sc: 0.3, n1: 13, n2: 13, td: 2, v1: 5, v2: 10, b1: 0, b2: 0, 
   l1: 10, l2: 10, c1: 10, c2: 10, t1: 0, t2: 0,
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.5, n1: 10, n2: 10, td: 1, v1: 0, v2: 20, b1: 10, b2: 16, 
   l1: 0, l2: 0, c1: 0, c2: 5, t1: 2, t2: 2,
   core: false, circ: false, blob: false, line: true, tipx: false},
  
  // row 5
  
  {sc: 0.2, n1: 3, n2: 20, td: 3, v1: 0, v2: 10, b1: 0, b2: 3, 
   l1: 0, l2: 20, c1: 10, c2: 10, t1: 0, t2: 0,
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.6, n1: 23, n2: 23, td: 1, v1: 3, v2: 3, b1: 0, b2: 20, 
   l1: 0, l2: 0, c1: 4, c2: 14, t1: 0, t2: 0, 
   core: true, circ: false, blob: false, line: true, tipx: false},
  
  {sc: 0.8, n1: 12, n2: 12, td: 1, v1: 0, v2: 10, b1: 0, b2: 10, 
   l1: 0, l2: 5, c1: 0, c2: 20, t1: 0, t2: 8,
   core: true, circ: false, blob: false, line: false, tipx: true},
  
  {sc: 0.3, n1: 10, n2: 10, td: 1, v1: 3, v2: 3, b1: 0, b2: 24, 
   l1: 0, l2: 20, c1: 0, c2: 5, t1: 0, t2: 0, 
   core: false, circ: false, blob: false, line: true, tipx: true},
  
  {sc: 0.5, n1: 10, n2: 10, td: 1, v1: 0, v2: 28, b1: 0, b2: 0, 
   l1: 0, l2: 10, c1: 0, c2: 20, t1: 0, t2: 0,
   core: false, circ: false, blob: true, line: true, tipx: true},
  
  // row 6
  
  {sc: 0.1, n1: 10, n2: 10, td: 1, v1: 0, v2: 10, b1: 8, b2: 12, 
   l1: 0, l2: 8, c1: 0, c2: 20, t1: 1, t2: 1,
   core: false, circ: true, blob: false, line: false, tipx: true},
  
  {sc: 0, n1: 14, n2: 14, td: 3, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: 7, l2: 24, c1: 10, c2: 10, t1: 2, t2: 10,
   core: false, circ: false, blob: false, line: true, tipx: true},
  
  {sc: 0.3, n1: 10, n2: 10, td: 1, v1: 0, v2: 30, b1: 0, b2: 0, 
   l1: 0, l2: 0, c1: 0, c2: 20, t1: 0, t2: 0,
   core: false, circ: true, blob: true, line: false, tipx: false},
  
  {sc: 0.3, n1: 4, n2: 4, td: 2, v1: 0, v2: 10, b1: 0, b2: 10, 
   l1: 0, l2: 0, c1: 10, c2: 10, t1: 10, t2: 10,
   core: false, circ: false, blob: true, line: false, tipx: false},
  
  {sc: 0.1, n1: 3, n2: 3, td: 1, v1: 1, v2: 5, b1: 10, b2: 16, 
   l1: 10, l2: 10, c1: 0, c2: 15, t1: 1, t2: 1,
   core: true, circ: false, blob: true, line: true, tipx: false},
  
  // row 7
  
  {sc: 0.2, n1: 5, n2: 5, td: 5, v1: 0, v2: 10, b1: 0, b2: 13, 
   l1: 0, l2: 0, c1: 10, c2: 10, t1: 20, t2: 20,
   core: false, circ: false, blob: false, line: true, tipx: false},
  
  {sc: 0.4, n1: 7, n2: 7, td: 1, v1: 3, v2: 3, b1: 0, b2: 20, 
   l1: 0, l2: 20, c1: 0, c2: 15, t1: 0, t2: 10, 
   core: true, circ: false, blob: false, line: true, tipx: false},
  
  {sc: 0.6, n1: 4, n2: 4, td: 1, v1: 0, v2: 10, b1: 17, b2: 17, 
   l1: 0, l2: 0, c1: 0, c2: 20, t1: 0, t2: 45,
   core: false, circ: false, blob: false, line: false, tipx: true},
  
  {sc: 0.4, n1: 5, n2: 5, td: 1, v1: 3, v2: 60, b1: 0, b2: 4, 
   l1: 0, l2: 20, c1: 0, c2: 5, t1: 1, t2: 1, 
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0, n1: 2, n2: 2, td: 1, v1: 0, v2: 6, b1: 0, b2: 0, 
   l1: 10, l2: 20, c1: 0, c2: 20, t1: 0, t2: 25,
   core: false, circ: true, blob: false, line: true, tipx: false},
  
  // row 8
  
  {sc: 0.1, n1: 15, n2: 15, td: 1, v1: 0, v2: 10, b1: 10, b2: 10, 
   l1: 5, l2: 10, c1: 0, c2: 13, t1: 0, t2: 13,
   core: false, circ: false, blob: false, line: true, tipx: false},
  
  {sc: 0, n1: 30, n2: 30, td: 2, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: 7, l2: 14, c1: 10, c2: 10, t1: 0, t2: 4,
   core: false, circ: false, blob: false, line: false, tipx: false},
  
  {sc: 0.3, n1: 3, n2: 3, td: 1, v1: 0, v2: 10, b1: 0, b2: 100, 
   l1: 5, l2: 10, c1: 0, c2: 13, t1: 0, t2: 13,
   core: false, circ: false, blob: true, line: true, tipx: true},
  
  {sc: 0.2, n1: 7, n2: 7, td: 2, v1: 0, v2: -20, b1: 0, b2: 0, 
   l1: 10, l2: 10, c1: 5, c2: 13, t1: 0, t2: 0,
   core: true, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0.5, n1: 20, n2: 20, td: 1, v1: 0, v2: 20, b1: 10, b2: 16, 
   l1: 0, l2: 0, c1: 0, c2: 5, t1: 2, t2: 2,
   core: true, circ: false, blob: false, line: true, tipx: true},
  
  // row 9
  
  {sc: 0.2, n1: 4, n2: 4, td: 1, v1: 0, v2: -15, b1: 0, b2: 93, 
   l1: 0, l2: 0, c1: 10, c2: 10, t1: 0, t2: 20,
   core: true, circ: false, blob: true, line: false, tipx: true},
  
  {sc: 0.2, n1: 7, n2: 7, td: 1, v1: 3, v2: 3, b1: 0, b2: 0, 
   l1: 0, l2: 15, c1: 0, c2: 15, t1: 0, t2: 10, 
   core: false, circ: true, blob: false, line: true, tipx: false},
  
  {sc: 0, n1: 14, n2: 14, td: 1, v1: 0, v2: 2, b1: 0, b2: 117, 
   l1: 0, l2: 0, c1: 0, c2: 20, t1: 2, t2: 2,
   core: false, circ: false, blob: true, line: false, tipx: true},
  
  {sc: 0.2, n1: 15, n2: 15, td: 1, v1: 0, v2: -20, b1: 0, b2: 0, 
   l1: 0, l2: 20, c1: 0, c2: 5, t1: 0, t2: 0, 
   core: false, circ: false, blob: true, line: true, tipx: false},
  
  {sc: 0, n1: 2, n2: 2, td: 1, v1: 0, v2: 6, b1: 0, b2: 50, 
   l1: 10, l2: 20, c1: 0, c2: 20, t1: 0, t2: 100,
   core: false, circ: false, blob: false, line: true, tipx: true},
  
  // row 10
  
  {sc: 0, n1: 7, n2: 7, td: 1, v1: 0, v2: -30, b1: 10, b2: 10, 
   l1: 5, l2: 5, c1: 0, c2: 13, t1: 1, t2: 1,
   core: false, circ: false, blob: true, line: false, tipx: false},
  
  {sc: 0, n1: 10, n2: 10, td: 2, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: -10, l2: 10, c1: 10, c2: 10, t1: 10, t2: 10,
   core: false, circ: false, blob: false, line: false, tipx: false},
  
  {sc: 0.3, n1: 14, n2: 14, td: 1, v1: 0, v2: 10, b1: 0, b2: 0, 
   l1: -25, l2: 25, c1: 0, c2: 13, t1: 1, t2: 1,
   core: false, circ: false, blob: true, line: true, tipx: true},
  
  {sc: 0, n1: 8, n2: 8, td: 1, v1: 0, v2: 20, b1: 0, b2: 80, 
   l1: 0, l2: 0, c1: 10, c2: 50, t1: 2, t2: 2,
   core: true, circ: false, blob: false, line: true, tipx: true},
  
  {sc: 0.2, n1: 10, n2: 10, td: 2, v1: 0, v2: -20, b1: 0, b2: 0, 
   l1: -10, l2: 15, c1: 5, c2: 13, t1: 0, t2: 14,
   core: false, circ: true, blob: false, line: true, tipx: false}
  
];

function setup() {
  cnvs = createCanvas(w * dim, h * dim);
  rotationIter = TWO_PI / 60;
  frameRate(30);
  background(255);  

  let x = 0;
  for (let i = 0; i < w; i++) {
    m[i] = [];
    for (let j = 0; j < h; j++) {
      m[i][j] = new Mutation(i * dim, j * dim, dim, p[x].sc, 
        p[x].n1, p[x].n2, p[x].td, p[x].v1, p[x].v2, p[x].b1, p[x].b2,
        p[x].l1, p[x].l2, p[x].c1, p[x].c2, p[x].t1, p[x].t2, 
        p[x].core, p[x].circ, p[x].blob, p[x].line, p[x].tipx);
      x++;
    }
  }
  
  createLoop({ duration: 2, gif: true });
}

function draw() {
  background(255);
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      m[i][j].update();
    }
  }
  rotationAlpha += rotationIter;
}

class Mutation {
  
  constructor(x, y, dim, sc, n1, n2, td, v1, v2, b1, b2, l1, l2,
              c1, c2, t1, t2, core, circ, blob, line, tipx) {
    
    this.dim = dim;
    this.width = dim;
    this.height = dim;
    this.rttAlpha = random(0, TWO_PI);
    this.amp = random(0.01, 1);
    
    this.core = core;
    this.circ = circ;
    this.blob = blob;
    this.line = line;
    this.tipInside = tipx;
    
    this.pos = {
      "x": x,
      "y": y
    }    
    this.rayMax = int(n2 + 2);
    this.seeds = [];
    this.rays = [];
    this.rtt = 0;
    
    this.circleSize = new NoiseSeed(dim*sc, dim*0.8, 0.03);
    this.coreSize   = new NoiseSeed(c1, c2, 0.06)
    this.rayCount   = new NoiseSeed(n1, n2, 0.01);
    this.tipDistr   = new NoiseSeed(1, td);
    this.strokeW    = new NoiseSeed(2, 4, 0.05);
    this.strokeW2   = new NoiseSeed(1, 2, 0.05);
  
    this.seeds = [this.circleSize, this.coreSize, this.rayCount, this.tipDistr, this.strokeW, this.strokeW2];
  
    for (let r = 0; r < this.rayMax; r++) {
      let ray = {
        "valley": new NoiseSeed(v1, v2,  random(0.05, 0.1)),
        "begin":  new NoiseSeed(b1, b2,  random(0.001, 0.07)),
        "length": new NoiseSeed(l1, l2, random(0.001, 0.07)),
        "tip":    new NoiseSeed(t1, t2,  random(0.001, 0.07))
      }
      this.seeds.push(ray.valley, ray.begin, ray.length, ray.tip);
      this.rays.push(ray);
    }
    
  }
    
  update() {

    this.seeds.forEach(function(s) {
      s.update();
    });

    this.rtt += 0.01;
    let cr = this.circleSize.value() / 2;
    let rc = this.rayCount.intValue();

    push();
    translate(this.pos.x + this.width/2, this.pos.y + this.height/2);

    noFill();
    stroke(0);
    strokeWeight(this.strokeW2.value());
    if (this.core === true) {
      circle(0, 0, this.coreSize.value());  
    } else if (this.circ === true) {
      circle(0, 0, cr * 2);
    }
    

    push();
    // rotate(this.rtt);
    let rotAngle = sin(rotationAlpha + this.rttAlpha) * this.amp;
    rotate(rotAngle);
    strokeWeight(this.strokeW2.value());

    // Rays and Tips

    for (let i = 0; i < rc; i++) {

      let r1 = cr - this.rays[i].begin.value();
      let r2 = cr + this.rays[i].length.value();
      let alpha = i * (TWO_PI / rc);
      alpha += this.rttAlpha;

      let x1 = r1 * Math.cos(alpha);
      let y1 = r1 * Math.sin(alpha);
      let x2 = r2 * Math.cos(alpha);
      let y2 = r2 * Math.sin(alpha);

      if (this.line) {
        line(x1, y1, x2, y2);  
      }
  
      let circX = x2, circY = y2;
      if (this.tipInside) {
        circX = x1;
        circY = y1;
      }
      if (i % this.tipDistr.intValue() === 0) {
        circle(circX, circY, this.rays[i].tip.value());
      }
        
    }

    // Bezier Star

    if (this.blob) {
      curveTightness(0);
      beginShape();
      let angle = TWO_PI / rc;
      let index = 0;
      for (let a = 0; a <= TWO_PI + angle; a += angle) {    
        let alpha = a + this.rttAlpha;
        let r1 = cr - this.rays[index].valley.value();
        let r2 = cr; // + this.rays[index].length.value();
        let vrtxOut = {
          "x": Math.cos(alpha) * r2,
          "y": Math.sin(alpha) * r2
        }, vrtxIn = {
          "x": Math.cos(alpha + angle/2.0) * r1,
          "y": Math.sin(alpha + angle/2.0) * r1
        };    
        index++;
        if (a != 0) curveVertex(vrtxOut.x, vrtxOut.y);
        curveVertex(vrtxIn.x, vrtxIn.y);    
      }
      endShape();
    }

    pop();
    pop();

  }
  
}


class NoiseSeed {
  
  constructor(min, max, speed = 0.01) {
    this.min = min;
    this.max = max;
    this.speed = speed;    
    this.seed = random(0, 1000);
  }
  
  update() {
    if (frameCount === 31) {
        this.speed = -this.speed;
    }
    this.seed += this.speed;
  }
  
  value() {
    return map(noise(this.seed), 0, 1, this.min, this.max);
  }
  
  intValue() {
    return int(this.value());
  }
  
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    let f = "corona_" + frameCount;
    saveCanvas(cnvs, f, 'png');
  }
}
