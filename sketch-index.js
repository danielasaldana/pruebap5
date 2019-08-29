    
function setup() {
  noCanvas();
}

function cambia(){
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var signo = document.getElementById("signo").value;
	var tamaño;
	if (edad <12 || edad > 60){
		tamaño = "xx-large"; 
	} else { 
		tamaño = "large"}

}
document.getElementById("dirigido").innerText=nombre + ",";
document.getElementById("frase").style.fontSize= tamaño ; 
document.body.style.backgroundColor = signo;
