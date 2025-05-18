import { prueba1Visitor } from './generated/prueba1Visitor.js';

class CustomVisitor extends prueba1Visitor {
  constructor() {
    super();
  }

  // Entrando en el nodo 'programas'
  visitProgramas(ctx) {
    console.log('Entrando en el nodo de Programas');
    return this.visit(ctx.instrucciones());
  }

  // Entrando en el nodo 'instrucciones'
  visitInstrucciones(ctx) {
    console.log('Entrando en el nodo de Instrucciones');
    return ctx.instruccion().map(instr => this.visit(instr)).join('\n');
  }

  // Entrando en el nodo 'seleccion' (switch)
  visitSeleccion(ctx) {
    console.log('Entrando en el nodo de Selección (Switch)');
    const id = ctx.identificador().getText();
    const casos = this.visit(ctx.casos());
    return `switch (${id}) {\n${casos}\n}`;
  }

  // Entrando en el nodo 'casos' (case / default)
  visitCasos(ctx) {
    console.log('Entrando en el nodo de Casos');
    return ctx.caso().map(c => this.visit(c)).join('\n');
  }

  // Nodo 'caso' (case o default)
  visitCaso(ctx) {
    if (ctx.CASE()) {
      console.log(`Entrando en el caso con número: ${ctx.numero().getText()}`);
      return `case ${ctx.numero().getText()}:\n${this.visit(ctx.sentencia())}`;
    } else {
      console.log('Entrando en el caso DEFAULT');
      return `default:\n${this.visit(ctx.sentencia())}`;
    }
  }

  // Nodo 'sentencia' (salida o terminar)
  visitSentencia(ctx) {
    console.log('Entrando en el nodo de Sentencia');
    if (ctx.salida()) {
      return this.visit(ctx.salida()) + '\n' + (ctx.sentencia(0) ? this.visit(ctx.sentencia(0)) : '');
    } else if (ctx.terminar()) {
      return this.visit(ctx.terminar());
    }
  }

  // Nodo 'salida' (printf)
  visitSalida(ctx) {
    console.log('Entrando en el nodo de Salida (printf)');
    const texto = ctx.cadena().getText();
    return `console.log(${texto});`;
  }

  // Nodo 'terminar' (break)
  visitTerminar(ctx) {
    console.log('Entrando en el nodo de Terminar (break)');
    return 'break;';
  }

  // Hojas
  visitIdentificador(ctx) {
    console.log(`Entrando en Identificador: ${ctx.getText()}`);
    return ctx.getText();
  }

  visitNumero(ctx) {
    console.log(`Entrando en Número: ${ctx.getText()}`);
    return ctx.getText();
  }

  visitCadena(ctx) {
    console.log(`Entrando en Cadena: ${ctx.getText()}`);
    return ctx.getText();
  }
}

export default CustomVisitor;
