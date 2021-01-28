var d= document.getElementById("canvas");
var lienzo= d.getContext("2d");

document.addEventListener("click", dibujaDown);

document.addEventListener("mousemove", dibujaMove);

var dibujando= false;  /* Entra en falso, no se ha 
empezado a dibujar! */

var espesor= 5;

function dibujaDown(){

  dibujando= !dibujando; /* para cambiar con cada 'click' 
  el valor de dibujando por el opuesto a este */

}

function dibujaMove(e) {

  if(dibujando){ 

    /* Esto solo se activará si dibujando es true... 
    es decir si el canvas detecta un 'click' como lo especificamos en
    la función y dejará de dibujar cuando sea false! */
  
    var x= e.offsetX;
    var y= e.offsetY;
    
    linea("purple", x, y, x+espesor, y+espesor, espesor); 
      
  }
       
}    
 
function linea(color, xi, yi, xf, yf, espesor){

  lienzo.beginPath();
  lienzo.strokeStyle= color;    
  lienzo.lineWidth= espesor; 
  lienzo.moveTo(xi, yi); 
  lienzo.lineTo(xf, yf);  
  lienzo.stroke();
  lienzo.closePath();

}













