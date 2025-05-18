import fs from 'fs';
import antlr4 from 'antlr4';

import prueba1Lexer from './generated/prueba1Lexer.js';
import prueba1Parser from './generated/prueba1Parser.js';
import prueba1Visitor from './generated/prueba1Visitor.js';

// Leer input.txt
const input = fs.readFileSync('input.txt', 'utf-8');
const chars = new antlr4.InputStream(input);

// Lexer
const lexer = new prueba1Lexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Mostrar tabla de tokens
console.log('📑 Tabla de lexemas y tokens:');
console.log('-----------------------------');
console.log(`| ${'Lexema'.padEnd(20)} | ${'Token'.padEnd(20)} |`);
console.log('-----------------------------');
tokens.tokens.forEach(token => {
  if (token.type !== antlr4.Token.EOF) {
    const tokenName = prueba1Lexer.symbolicNames[token.type] || 'N/A';
    console.log(`| ${token.text.padEnd(20)} | ${tokenName.padEnd(20)} |`);
  }
});
console.log('-----------------------------\n');

// Parser
const parser = new prueba1Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.programas();

// Mostrar árbol sintáctico
console.log('🌳 Árbol de análisis sintáctico:');
console.log(tree.toStringTree(parser.ruleNames));
console.log();

// Validación de errores
if (parser._syntaxErrors > 0) {
  console.error('❌ Se encontraron errores de sintaxis.');
  process.exit(1);
} else {
  console.log('✅ Entrada válida: análisis sintáctico exitoso.\n');
}

// Intérprete JavaScript usando Visitor
class TraductorVisitor extends prueba1Visitor {
  constructor() {
    super();
    this.jsCode = '';
    this.identificadores = new Set(); // Para variables como switch(x)
  }

  visitProgramas(ctx) {
    return this.visit(ctx.instrucciones());
  }

  visitInstrucciones(ctx) {
    return ctx.instruccion().map(instr => this.visit(instr)).join('\n');
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.seleccion());
  }

  visitSeleccion(ctx) {
    const id = ctx.identificador().getText();
    this.identificadores.add(id);
    const casos = this.visit(ctx.casos());
    return `switch (${id}) {\n${casos}\n}`;
  }

  visitCasos(ctx) {
    return ctx.caso().map(c => this.visit(c)).join('\n');
  }

  visitCaso(ctx) {
    if (ctx.CASE()) {
      return `case ${ctx.numero().getText()}:\n${this.visit(ctx.sentencia())}`;
    } else {
      return `default:\n${this.visit(ctx.sentencia())}`;
    }
  }

  visitSentencia(ctx) {
    if (ctx.salida()) {
      return this.visit(ctx.salida()) + '\n' + (ctx.sentencia(0) ? this.visit(ctx.sentencia(0)) : '');
    } else if (ctx.terminar()) {
      return this.visit(ctx.terminar());
    }
  }

  visitSalida(ctx) {
    const texto = ctx.cadena().getText();
    return `console.log(${texto});`;
  }

  visitTerminar(ctx) {
    return 'break;';
  }

  // hojas
  visitIdentificador(ctx) {
    return ctx.getText();
  }

  visitNumero(ctx) {
    return ctx.getText();
  }

  visitCadena(ctx) {
    return ctx.getText();
  }
}

// Ejecutar traducción y resultado
const visitor = new TraductorVisitor();
const jsCode = visitor.visit(tree);

// Mostrar código traducido
console.log('🔁 Código traducido a JavaScript:\n');
console.log(jsCode);
console.log('\n▶️ Resultado de la ejecución:\n');

// Crear una variable para simular switch(x)
let variables = {};
visitor.identificadores.forEach(id => {
  variables[id] = 1; // Puedes personalizar esto según tu input.txt
});

// Evaluar código traducido
try {
  const context = new Function(...Object.keys(variables), jsCode);
  context(...Object.values(variables));
} catch (e) {
  console.error('❌ Error al ejecutar el código traducido:', e);
}