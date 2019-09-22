  var r ;

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', -1);
  colorMode(HSB,360,100,100);
  r = random(0,360)
  background(r,100,100);

}

function draw(){
	inventada(random(1, 100));
}
function inventada(diametro){
	colorMode(HSB, 360, 100,100);
        stroke(r,100,75);
	colorMode(RGB);
	fill(255,100);
	ellipse(mouseX, mouseY, diametro, diametro);
}

function pedrito(){
	var adjetivo = document.getElementById("horoscopo").value;
	document.getElementById("cambia").innerText = adjetivo;
	alert("Pero con respeto");
}

