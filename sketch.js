let AX = 0;
let AY = 0;
let AZ = 0;
let CX = 0;
let CY = 0;
let prevX;
let prevY;
let prevZ;
let curwenfont;
let jsoncounter = 1;
let rotationx = 0;
let rotationy = 0;
let rotationz = 0;

function setup() {
  curwenfont = loadFont('/CURWENFONT.ttf');
  createCanvas(windowWidth, windowHeight, WEBGL);
  jsonpos = loadJSON('/mbposjson.json', posvalues); 
  prevX = 0;
  prevY = 0;
  prevZ = 0;
}

function draw() {
    jsonpos = loadJSON('/mbposjson.json', posvalues);
    frameRate(20);
    angleMode(DEGREES);
    clear();
    background(0);
    textFont(curwenfont);
    textSize(48);
    fill(220, 220, 220);

    ambientLight(255, 255, 255);

    text("ax: " + AX, -((windowWidth/2) - 200), -900);
    text("ay: " + AY, -((windowWidth/2) - 200), -850);
    text("az: " + AZ, -((windowWidth/2) - 200), -800);
    text("cx: " + CX, -((windowWidth/2) - 200), -750);
    text("cy: " + CY, -((windowWidth/2) - 200), -700);

    push();
    let colx = map(AX, -1023, 1023, 0, 255, true);
    let coly = map(AY, -1023, 1023, 0, 255, true);
    let colz = map(AZ, -1023, 1023, 0, 255, true);

    let rotx = map(AX, -1023, 1023, -359, 359, true);
    let roty = map(AY, -1023, 1023, -359, 359, true);
    let rotz = map(AZ, -1023, 1023, -359, 359, true);

    if (AX = prevX){
    jsoncounter=1;
    rotationx = rotx;
    rotationy = roty;
    rotationz = rotz;
    }
    else{
    let rotavx = (AX - (jsoncounter*prevX))*0.25;
    let rotavy = (AY - (jsoncounter*prevY))*0.25; 
    let rotavz = (AZ - (jsoncounter*prevZ))*0.25;
    rotationx = map(rotavx, -1023, 1023, -359, 359, true);
    rotationy = map(rotavy, -1023, 1023, -359, 359, true);
    rotationz = map(rotavz, -1023, 1023, -359, 359, true);
    jsoncounter = jsoncounter + 1;
    }

    rotateX(rotationx);
    rotateY(rotationy);
    rotateZ(rotationz);

    fill(colx, coly, colz);
    sphere(800, 18);
    pop();

    prevx = AX;
    prevy = AY;
    prevz = AZ;
    }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function posvalues(PosJSON){
    AX = PosJSON.Ax;
    AY = PosJSON.Ay;
    AZ = PosJSON.Az;
    CX = PosJSON.Cx;
    CY = PosJSON.Cy;
}
