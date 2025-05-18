import { prueba1Listener } from './generated/prueba1Listener.js';

class CustomListener extends prueba1Listener {
  constructor() {
    super();
  }

  // Método que se llama cuando se entra al nodo de programas
  enterProgramas(ctx) {
    console.log('Entrando en el nodo de Programas');
  }

  // Método que se llama cuando se entra al nodo de instrucciones
  enterInstrucciones(ctx) {
    console.log('Entrando en el nodo de Instrucciones');
  }

  // Método que se llama cuando se entra al nodo de selección (switch)
  enterSeleccion(ctx) {
    console.log('Entrando en el nodo de Selección (Switch)');
  }

  // Método que se llama cuando se entra al nodo de casos (case / default)
  enterCasos(ctx) {
    console.log('Entrando en el nodo de Casos');
  }

  // Método que se llama cuando se entra al nodo de caso
  enterCaso(ctx) {
    if (ctx.CASE()) {
      console.log(`Entrando en el caso con número: ${ctx.numero().getText()}`);
    } else {
      console.log('Entrando en el caso DEFAULT');
    }
  }

  // Método que se llama cuando se entra al nodo de sentencia
  enterSentencia(ctx) {
    console.log('Entrando en el nodo de Sentencia');
  }

  // Método que se llama cuando se entra al nodo de salida (printf)
  enterSalida(ctx) {
    console.log(`Entrando en Salida (printf) con cadena: ${ctx.cadena().getText()}`);
  }

  // Método que se llama cuando se entra al nodo de terminar (break)
  enterTerminar(ctx) {
    console.log('Entrando en Terminar (break)');
  }

  // Métodos que se llaman cuando se sale de los nodos

  exitProgramas(ctx) {
    console.log('Saliendo del nodo de Programas');
  }

  exitInstrucciones(ctx) {
    console.log('Saliendo del nodo de Instrucciones');
  }

  exitSeleccion(ctx) {
    console.log('Saliendo del nodo de Selección (Switch)');
  }

  exitCasos(ctx) {
    console.log('Saliendo del nodo de Casos');
  }

  exitCaso(ctx) {
    if (ctx.CASE()) {
      console.log(`Saliendo del caso con número: ${ctx.numero().getText()}`);
    } else {
      console.log('Saliendo del caso DEFAULT');
    }
  }

  exitSentencia(ctx) {
    console.log('Saliendo del nodo de Sentencia');
  }

  exitSalida(ctx) {
    console.log('Saliendo de Salida (printf)');
  }

  exitTerminar(ctx) {
    console.log('Saliendo de Terminar (break)');
  }
}

export default CustomListener;
