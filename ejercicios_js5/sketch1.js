function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  background(255);        // Fondo blanco

  // Lado superior: azul agua, grosor 8
  stroke(0, 128, 128);      // Color agua
  strokeWeight(8);        // Grosor de línea 8
  line(100, 100, 300, 100);

  // Lado derecho: azul marino semitransparente, grosor 6
  stroke(0, 0, 128, 90); // Azul marino con transparencia
  strokeWeight(6);        // Grosor de línea 6
  line(300, 100, 300, 300);

  // Lado inferior: rosa, grosor 10
  stroke(255, 0, 255);      // Rosa
  strokeWeight(10);        // Grosor de línea 10
  line(300, 300, 100, 300);

  // Lado izquierdo: gris, grosor 4
  stroke(255, 255, 0);            // Amarillo
  strokeWeight(4);        // Grosor de línea 4
  line(100, 300, 100, 100);
}