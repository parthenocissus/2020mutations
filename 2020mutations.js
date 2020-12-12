document.addEventListener("DOMContentLoaded", function () {

    let mutate = function (p) {

        p5.disableFriendlyErrors = true;

        let dim = 517, xShift = 20;
        let cnvs, m1, m2, msX, msY;

        p.setup = function () {
            cnvs = p.createCanvas(dim, dim / 2);
            cnvs.parent('mutation-parent');
            p.frameRate(60);
            p.background(255);

            m1 = new Mutation(-xShift, 0, dim / 2, 0.3,
                29, 29, 1, 0, 10, 0, 0,
                0, 70, 10, 10, 0, 20,
                false, false, true, true, false, 1);

            m2 = new Mutation(dim / 2 - xShift, 0, dim / 2, 0,
                1, 12, 1, 0, 10, 0, 0,
                0, 60, 10, 10, 0, 10,
                false, false, true, true, false, 2);

        }

        p.draw = function () {
            p.background(255);

            msX = ((p.mouseX > 0) & (p.mouseX <= p.width)) ? p.mouseX : p.width * 0.7;
            msY = ((p.mouseY > 0) & (p.mouseY <= p.height)) ? p.mouseY : p.height / 2;

            m1.update();
            m2.update();

            p.stroke("#ffb901");
            p.strokeWeight(1.5);
            p.noFill();
            let w2 = p.width / 2 - xShift, h2 = p.height - 2, ad = 40;
            let ver = {
                x1: w2,
                y1: h2,
                x2: w2,
                y2: p.map(msY, 0, h2, h2 - ad, h2)
            };
            let hor = {
                x1: w2,
                y1: h2,
                x2: p.map(msX, 0, 2 * w2, w2 - ad, w2 + ad),
                y2: h2
            };
            p.line(ver.x1, ver.y1, ver.x2, ver.y2);
            p.line(hor.x1, hor.y1, hor.x2, hor.y2);
        };

        class Mutation {

            constructor(x, y, dim, sc, n1, n2, td, v1, v2, b1, b2, l1, l2,
                        c1, c2, t1, t2, core, circ, blob, line, tipx, intv) {

                this.dim = dim;
                this.width = dim;
                this.height = dim;
                this.rttAlpha = Math.random(0, p.TWO_PI);
                this.amp = Math.random(0.01, 1);
                this.core = core;
                this.circ = circ;
                this.blob = blob;
                this.line = line;
                this.tipInside = tipx;
                this.pos = {"x": x, "y": y};
                this.rayMax = p.int(n2 + 2);
                this.seeds = [];
                this.rays = [];
                this.rtt = 0;
                this.interactiveVersion = intv;

                this.circleSize = new NoiseSeed(dim * sc, dim, 0.03);
                this.coreSize = new NoiseSeed(c1, c2, 0.06);
                this.rayCount = new NoiseSeed(n1, n2, 0.01);
                this.tipDistr = new NoiseSeed(1, td);
                this.strokeW = new NoiseSeed(1, 1, 0.05);
                this.strokeW2 = new NoiseSeed(1.2, 1.2, 0.05);

                this.seeds = [this.circleSize, this.coreSize, this.rayCount,
                    this.tipDistr, this.strokeW, this.strokeW2];

                for (let r = 0; r < this.rayMax; r++) {
                    let ray = {
                        "valley": new NoiseSeed(v1, v2, Math.random(0.01, 0.07)),
                        "begin": new NoiseSeed(b1, b2, Math.random(0.001, 0.07)),
                        "length": new NoiseSeed(l1, l2, Math.random(0.001, 0.07)),
                        "tip": new NoiseSeed(t1, t2, Math.random(0.001, 0.07))
                    };
                    this.seeds.push(ray.valley, ray.begin, ray.length, ray.tip);
                    this.rays.push(ray);
                }

            }

            update() {

                this.seeds.forEach(function (s) {
                    s.update();
                });

                this.rtt += 0.005;
                let cr = this.circleSize.value() * 0.3;
                let rc = this.rayCount.intValue();

                let coef1 = 0;
                let coef2 = 0;

                if (this.interactiveVersion === 1) {
                    cr = p.map(msX, 0, dim, -p.height * 0.3, p.height * 0.3);
                    rc = p.int(p.map(msY, 0, p.height, 2, this.rayMax - 2));
                } else if (this.interactiveVersion === 2) {
                    coef1 = p.map(msX, 0, dim, -80, 50);
                    coef2 = p.map(msY, 0, p.height, 0, 60);
                }

                p.push();
                p.translate(this.pos.x + this.width / 2, this.pos.y + this.height / 2);

                p.noFill();
                p.stroke(0);
                p.strokeWeight(this.strokeW2.value());
                if (this.core === true) {
                    p.circle(0, 0, this.coreSize.value());
                } else if (this.circ === true) {
                    circle(0, 0, cr * 2);
                }

                p.push();
                p.rotate(this.rtt);
                p.strokeWeight(this.strokeW2.value());

                // Rays and Tips

                for (let i = 0; i < rc; i++) {

                    let r1 = cr - this.rays[i].begin.value();
                    let r2 = cr + this.rays[i].length.value();
                    let alpha = i * (p.TWO_PI / rc);
                    alpha += this.rttAlpha;

                    let x1 = r1 * Math.cos(alpha);
                    let y1 = r1 * Math.sin(alpha);
                    let x2 = r2 * Math.cos(alpha);
                    let y2 = r2 * Math.sin(alpha);

                    if (this.line) {
                        p.line(x1, y1, x2, y2);
                    }

                    let circX = x2, circY = y2;
                    if (this.tipInside) {
                        circX = x1;
                        circY = y1;
                    }
                    if (i % this.tipDistr.intValue() === 0) {
                        p.circle(circX, circY, this.rays[i].tip.value() + coef2);
                    }

                }

                // Bezier Star

                if (this.blob) {

                    p.curveTightness(0);
                    p.beginShape();
                    let angle = p.TWO_PI / rc;
                    let index = 0;
                    for (let a = 0; a <= p.TWO_PI + angle; a += angle) {

                        let alpha = a + this.rttAlpha;
                        let r1 = cr - this.rays[index].valley.value() - coef1;
                        let r2 = cr; // + this.rays[index].length.value();
                        let vrtxOut = {
                            "x": Math.cos(alpha) * r2,
                            "y": Math.sin(alpha) * r2
                        }, vrtxIn = {
                            "x": Math.cos(alpha + angle / 2.0) * r1,
                            "y": Math.sin(alpha + angle / 2.0) * r1
                        };
                        index++;
                        if (a !== 0) p.curveVertex(vrtxOut.x, vrtxOut.y);
                        p.curveVertex(vrtxIn.x, vrtxIn.y);
                    }
                    p.endShape();
                }

                p.pop();
                p.pop();

            }

        }


        class NoiseSeed {

            constructor(min, max, speed = 0.01) {
                this.min = min;
                this.max = max;
                this.speed = speed * 0.1;
                this.seed = Math.random(0, 1000);
            }

            update() {
                this.seed += this.speed;
            }

            value() {
                return p.map(p.noise(this.seed), 0, 1, this.min, this.max);
            }

            intValue() {
                return p.int(this.value());
            }

        }

        p.mousePressed = function () {
            if ((msX === p.mouseX) && (msY === p.mouseY)) {
                let timestamp = (new Date()).toUTCString();
                let fileName = "2020mutations - " + timestamp;
                p.saveCanvas(cnvs, fileName, 'png');
            }
        }

    };

    new p5(mutate, 'mutationCont');

});
