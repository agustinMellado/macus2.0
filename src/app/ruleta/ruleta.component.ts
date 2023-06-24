import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.css']
})
export class RuletaComponent implements OnInit {
  options = ["Partes del cuerpo", "Cuidado personal", "Amistad y respeto", "Seguridad", "Amor"];
  startAngle = 0;
  arc = Math.PI / (this.options.length / 2);
  spinTimeout: any;
  spinArcStart = 10;
  spinTime = 0;
  spinTimeTotal = 0;
  // Inicializo ctx como nulo
  ctx: CanvasRenderingContext2D | null = null; 

  constructor(private router: Router) {
    // Constructor de la clase
  }
  ngOnInit() {
    this.drawRouletteWheel();
  }

  byte2Hex(n: number): string {
    const nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
  }

  RGB2Color(r: number, g: number, b: number): string {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item: number, maxitem: number): string {
    const phase = 2;
    // valor para tener los colores mas claros
    const center = 680; 
    // valor para tener colores menos saturados
    const width = 80; 
  
    const frequency = Math.PI * 2 / maxitem;
  
    const red = Math.sin(frequency * item + 0 + phase) * width + center;
    const green = Math.sin(frequency * item + 2 + phase) * width + center;
    const blue = Math.sin(frequency * item + 4 + phase) * width + center;
  
    return this.RGB2Color(red, green, blue);
  }
  
  

  drawRouletteWheel() {
    // Obtenemos la referencia al elemento canvas del DOM
    const canvas = <HTMLCanvasElement>document.getElementById("canvas"); 
    // Verifica si el contexto 2D del canvas es compatible con el navegador
    if (canvas.getContext) { 
      // Define el radio externo de la ruleta
      const outsideRadius = 200; 
       // Define el radio de posición del texto
      const textRadius =160; 
      
      // Define el radio interno de la ruleta
      const insideRadius = 25;

      // Obtiene el contexto 2D del canvas
      this.ctx = canvas.getContext("2d"); 
    
      // Verifica si se pudo obtener el contexto 2D
      if (this.ctx) { 
        // Limpia el canvas
        this.ctx.clearRect(0, 0, 500, 500); 

        // Establece el color de trazo como negro
        this.ctx.strokeStyle = "black";
         // Establece el ancho de línea como 1
        this.ctx.lineWidth = 1; 
       // Establece la fuente y el tamaño de la letra definida TAHOMA 
       this.ctx.font = 'bold 14px Tahoma';

        

        // Itera sobre las opciones de la ruleta
        for (let i = 0; i < this.options.length; i++) { 
          // Calcula el ángulo de cada sección de la ruleta
          const angle = this.startAngle + i * this.arc; 
          // Obtiene el color para la sección actual
          this.ctx.fillStyle = this.getColor(i, this.options.length); 
  
          // Inicia un nuevo trazado
          this.ctx.beginPath(); 
          // Dibuja el arco externo de la sección
          this.ctx.arc(250, 250, outsideRadius, angle, angle + this.arc, false); 
          // Dibuja el arco interno de la sección
          this.ctx.arc(250, 250, insideRadius, angle + this.arc, angle, true); 
          // Realiza el trazado de los arcos
          this.ctx.stroke(); 
           // Rellena la sección con el color correspondiente
          this.ctx.fill();
          // Guarda el estado actual del contexto
          this.ctx.save(); 
  
          // Establece el desplazamiento horizontal de la sombra
          this.ctx.shadowOffsetX = -1; 
          // Establece el desplazamiento vertical de la sombra
          this.ctx.shadowOffsetY = -1; 
          // Establece el desenfoque de la sombra
          this.ctx.shadowBlur = 0; 
          
          // Establece el color de la letra
          this.ctx.fillStyle = "black"; 
          this.ctx.translate(
            // Calcula la posición X del texto en la sección
            250 + Math.cos(angle + this.arc / 6) * textRadius, 
            // Calcula la posición Y del texto en la sección
            250 + Math.sin(angle + this.arc / 6) * textRadius 
          );
          // Rota el contexto para que el texto se muestre correctamente y tenga un formato curvo
          this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
          // Obtiene el texto para la sección actual
          const text = this.options[i]; 
          this.ctx.fillText(
            text,
            // Centra horizontalmente el texto en la sección
            this.ctx.measureText(text).width / 6, 
            1// Alinea verticalmente el texto en el centro de la sección
          );
          // Restauro el estado del contexto guardado 
          this.ctx.restore(); 

        }
    
        // Dibujo de la flecha en la ruleta
          this.ctx.fillStyle = "black";
          this.ctx.beginPath();

          //  dibujamos la forma de la flecha
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.moveTo(250 - 8, 250 - (outsideRadius + 20)); 
           // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 + 8, 250 - (outsideRadius + 20));
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 + 8, 250 - (outsideRadius - 10)); 
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 + 14, 250 - (outsideRadius - 10)); 
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 + 0, 250 - (outsideRadius - 26)); 
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 - 14, 250 - (outsideRadius - 10)); 
          // Ajustamos el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 - 8, 250 - (outsideRadius - 10)); 
          // Ajusta el valor para mover la flecha hacia arriba
          this.ctx.lineTo(250 - 8, 250 - (outsideRadius + 20)); 
          // Relleno de la forma de la flecha
          this.ctx.fill();

      }
    }
  }

  spin() {
    // Genera un valor aleatorio para el ángulo de inicio del giro
    this.spinArcStart = Math.random() * 10 + 10;
    // Reinicia el tiempo de giro a cero
    this.spinTime = 0;
    // Genera un valor aleatorio para el tiempo total de giro entre 4 y 7 segundos
    this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
    // Inicia el giro de la ruleta llamando a rotateWheel()
    this.rotateWheel();
  }
  
  rotateWheel() {
    // Incrementa el tiempo de giro en 30 milisegundos
    this.spinTime += 30;
    // Verifica si se ha alcanzado el tiempo total de giro
    if (this.spinTime >= this.spinTimeTotal) {
      // Detiene el giro de la ruleta llamando a stopRotateWheel()
      this.stopRotateWheel();
      return;
    }
    // Calcula el ángulo de giro actual basado en una función de interpolación
    const spinAngle = this.spinArcStart - this.easeOut(this.spinTime, 0, this.spinArcStart, this.spinTimeTotal);
    // Actualiza el ángulo de inicio sumándole el ángulo de giro actual en radianes
    this.startAngle += spinAngle * Math.PI / 180;
    // Dibuja la ruleta en su estado actual
    this.drawRouletteWheel();
    // Establece un temporizador para llamar a rotateWheel() después de 30 milisegundos, creando la animación de giro
    this.spinTimeout = setTimeout(() => this.rotateWheel(), 30);
  }
  
  stopRotateWheel() {
    // Detiene el temporizador de giro
    clearTimeout(this.spinTimeout);
    // Calcula el ángulo final en grados
    const degrees = this.startAngle * 180 / Math.PI + 90;
    // Calcula el tamaño de cada arco en grados
    const arcd = this.arc * 180 / Math.PI;
    // Calcula el índice de la opción seleccionada en la ruleta
    const index = Math.floor((360 - degrees % 360) / arcd);
    // Guarda el estado actual del contexto del lienzo
    this.ctx?.save();
    // Verifica si el contexto del lienzo existe
    if (this.ctx) {
          // Obtiene el texto de la opción seleccionada
          const text = this.options[index];
          // Redirige a diferentes componentes según la opción seleccionada
          switch (text) {
            case "Partes del cuerpo":
              this.router.navigate(['otrocomponentecomponente']);
              break;
            case "Cuidado personal":
              this.router.navigate(['otrocomponentecomponente']);
              break;
            case "Amistad y respeto":
              this.router.navigate(['otrocomponentecomponente']);
              break;
            case "Seguridad":
              this.router.navigate(['otrocomponentecomponente']);
              break;
            case "Amor":
              this.router.navigate(['otrocomponentecomponente']);
              break;
            default:
              break;
          }
        }
      }
   
  
  easeOut(t: number, b: number, c: number, d: number) {
    // Calculamos una función de interpolación para suavizar el giro de la ruleta
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
}  