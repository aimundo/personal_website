
//let  ds, start_time;


//function setup() {
  //change canvas size according to window size

//  if (displayWidth<550) {
//    let canvas=createCanvas(displayWidth/2.5,displayHeight/1.8);
//    canvas.position(displayWidth/10, displayHeight/2,'fixed');
//  } else {
//    let canvas=createCanvas(displayWidth/2.5,displayHeight/2.1);
 //   canvas.position(displayWidth/10, displayHeight/8.5,'inherited');
//    canvas.parent('penrose-holder');
//  }
    //canvas.style('z-index', '1');
 //   init();
//}

//this function implements a timer to track the sketch
//function init () {
 // ds = new PenroseLSystem();
 // frameRate(7);
//    //please, play around with the following line
  ds.simulate(4);
  r=random(250);
  g=random(250);
  b=random(250);
  start_time=millis();
}

function draw() {
  clear(); //transparent background
  ds.render();
  let current_time = millis();
    let timespane = 40 * 1000; // 17 seconds
    if (current_time > start_time + timespane) { //condition to restart the sketch
        init();
    }
  }

function windowResized() {
  resizeCanvas(window.innerWidth/3, window.innerHeight/1.5);
}

function PenroseLSystem() {
    this.steps = 0;

   //these are axiom and rules for the penrose rhombus l-system
   //a reference would be cool, but I couldn't find a good one
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    //please play around with the following two lines
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate(this.production);
  }
}

PenroseLSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

PenroseLSystem.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
PenroseLSystem.prototype.iterate = function() {
    let newProduction = "";

    for(let i=0; i < this.production.length; ++i) {
      let step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      }
      else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      }
      else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      }
      else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      }
      else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }

    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
}

//convert production string to a turtle graphic
PenroseLSystem.prototype.render = function () {
    translate(width / 2, height / 2);

    this.steps += 20;
    if(this.steps > this.production.length) {
      this.steps = this.production.length;
    }


    for(let i=0; i<this.steps; ++i) {
      let step = this.production.charAt(i);


      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if( step == 'F') {
        //stroke(random(3,40),random(255),random(255),80);
        //stroke(88,100,122,80);
        stroke(r,g,b,50);
        //stroke(68, 130, 171,80);
        for(let j=0; j < this.repeats; j++) {
          strokeWeight(3);
          line(0, 0, 0, -this.drawLength);
          noFill();
          translate(0, -this.drawLength);
        }
        this.repeats = 1;
      }
      else if (step == '+') {
        rotate(this.theta);
      }
      else if (step == '-') {
        rotate(-this.theta);
      }
      else if (step == '[') {
        push();
      }
      else if (step == ']') {
        pop();
      }
    }
  }


