var canvas = document.getElementById('canvas');
var context= canvas.getContext('2d');
canvas.width = window.innerWidth;//fullscreen
canvas.height = window.innerHeight;//yeah!
var rVal=parseInt(Math.random(0) * 255);
var gVal=parseInt(Math.random(0) * 255);
var bVal=parseInt(Math.random(0) * 255);
var alphaVal = Math.random();
var randXval = Math.random() * canvas.width;
var randYval = Math.random() * canvas.height;
context.fillStyle = 'rgba('+rVal+','+gVal+','+bVal+','+alphaVal+')';
context.fillRect (10,10,10,10);
var iCount = 0;
var minutesCount = 0;
var alphaVal=Math.random(1);
// function randomXToY(minVal, maxVal, floatVal) {
//     var randVal = minVal + (Math.random() * (maxVal - minVal));
//     return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
// }
function animate(){
context.beginPath(); //clears path, what path? idk tbh =/ 
iCount++;
var radius = Math.random()*200;
var rVal=parseInt(Math.random() * 256);
var gVal=parseInt(Math.random() * 256);
var bVal=parseInt(Math.random() * 256);
var randXpos = Math.random() * canvas.width;
var randYpos = Math.random() * canvas.height;
// context.fillRect (randXval,randYval,100,100); //makes squares
context.arc(randXpos ,randYpos, radius, 0, 6);
context.fillStyle = 'rgba('+rVal+','+gVal+','+bVal+','+alphaVal+')';
context.fill();
};
if (iCount<500){window.setInterval(function (){animate();},1000/60)}
else {window.setInterval(function (){animate();},1000/2)};
window.setInterval(function (){context.clearRect(0,0,canvas.width,canvas.height);context.beginPath(); minutesCount++ ; }
	,60000);

// GUI// GUI// GUI// GUI// GUI// GUI
var GUI = document.getElementById('GUI');
var GUIctx = GUI.getContext('2d');
GUI.width = canvas.width;//fullscreen
GUI.height = canvas.height;//yeah!
GUIctx.font = "bold 20px Arial";
GUIctx.fillStyle='rgba(0,0,0,.5)';
function drawGUIcount() {
GUIctx.clearRect(0, GUI.height-100, 1000, 100 );
GUIctx.fillText(iCount+" iterations", 10, GUI.height);
GUIctx.fill();
};
GUIctx.fillRect(0, GUI.height-20, 250, 100 );

window.setInterval(function (){drawGUIcount();},240);

//LAYER 1 . //LAYER 1 . //LAYER 1 . //LAYER 1 . //LAYER 1 . 
var Layer1 = document.getElementById('Layer1');
var L1ctx = Layer1.getContext('2d');
Layer1.width = window.innerWidth;//fullscreen
Layer1.height = window.innerHeight;//yeah!
var ballX = 2;
var ballY = 2;
function GUIball() {
L1ctx.beginPath();
// to bounce ball must implement speedXY
// or velocity, or acceleration not just position!
if (ballX > Layer1.width){ballX=0} else {ballX+=5;};
if (ballY > Layer1.height){ballY=0} else {ballY+=5;};
L1ctx.fillStyle=context.fillStyle;
L1ctx.closePath();
L1ctx.fill();
L1ctx.beginPath();
L1ctx.arc (ballX, ballY, 10, 0, 6);
L1ctx.closePath();
L1ctx.fill();
};
window.setInterval(function (){GUIball();},1000/60);
window.setInterval(function (){L1ctx.clearRect(0,0,Layer1.width,Layer1.height)},60000);