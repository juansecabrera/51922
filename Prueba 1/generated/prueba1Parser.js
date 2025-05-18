// Generated from prueba1.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import prueba1Listener from './prueba1Listener.js';
import prueba1Visitor from './prueba1Visitor.js';

const serializedATN = [4,1,18,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,1,4,1,29,8,1,11,1,12,1,30,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,
4,4,44,8,4,11,4,12,4,45,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,56,8,5,1,6,1,
6,3,6,60,8,6,1,6,3,6,63,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,
1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,0,72,0,
24,1,0,0,0,2,28,1,0,0,0,4,32,1,0,0,0,6,34,1,0,0,0,8,43,1,0,0,0,10,55,1,0,
0,0,12,62,1,0,0,0,14,64,1,0,0,0,16,70,1,0,0,0,18,73,1,0,0,0,20,75,1,0,0,
0,22,77,1,0,0,0,24,25,3,2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,29,3,4,2,0,28,
27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,33,
3,6,3,0,33,5,1,0,0,0,34,35,5,1,0,0,35,36,5,6,0,0,36,37,3,18,9,0,37,38,5,
7,0,0,38,39,5,8,0,0,39,40,3,8,4,0,40,41,5,9,0,0,41,7,1,0,0,0,42,44,3,10,
5,0,43,42,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,9,1,0,0,0,
47,48,5,2,0,0,48,49,3,20,10,0,49,50,5,10,0,0,50,51,3,12,6,0,51,56,1,0,0,
0,52,53,5,3,0,0,53,54,5,10,0,0,54,56,3,12,6,0,55,47,1,0,0,0,55,52,1,0,0,
0,56,11,1,0,0,0,57,59,3,14,7,0,58,60,3,12,6,0,59,58,1,0,0,0,59,60,1,0,0,
0,60,63,1,0,0,0,61,63,3,16,8,0,62,57,1,0,0,0,62,61,1,0,0,0,63,13,1,0,0,0,
64,65,5,4,0,0,65,66,5,6,0,0,66,67,3,22,11,0,67,68,5,7,0,0,68,69,5,11,0,0,
69,15,1,0,0,0,70,71,5,5,0,0,71,72,5,11,0,0,72,17,1,0,0,0,73,74,5,13,0,0,
74,19,1,0,0,0,75,76,5,14,0,0,76,21,1,0,0,0,77,78,5,15,0,0,78,23,1,0,0,0,
5,30,45,55,59,62];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class prueba1Parser extends antlr4.Parser {

    static grammarFileName = "prueba1.g4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'printf'", 
                            "'break'", "'('", "')'", "'{'", "'}'", "':'", 
                            "';'", "'\"'" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "PRINTF", 
                             "BREAK", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "COLON", "SEMI", "QUOTE", "IDENTIFICADOR", 
                             "NUMERO", "CADENA", "WS", "COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "programas", "instrucciones", "instruccion", "seleccion", 
                         "casos", "caso", "sentencia", "salida", "terminar", 
                         "identificador", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = prueba1Parser.ruleNames;
        this.literalNames = prueba1Parser.literalNames;
        this.symbolicNames = prueba1Parser.symbolicNames;
    }



	programas() {
	    let localctx = new ProgramasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, prueba1Parser.RULE_programas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.instrucciones();
	        this.state = 25;
	        this.match(prueba1Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, prueba1Parser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.instruccion();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, prueba1Parser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, prueba1Parser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(prueba1Parser.SWITCH);
	        this.state = 35;
	        this.match(prueba1Parser.LPAREN);
	        this.state = 36;
	        this.identificador();
	        this.state = 37;
	        this.match(prueba1Parser.RPAREN);
	        this.state = 38;
	        this.match(prueba1Parser.LBRACE);
	        this.state = 39;
	        this.casos();
	        this.state = 40;
	        this.match(prueba1Parser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	casos() {
	    let localctx = new CasosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, prueba1Parser.RULE_casos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 42;
	            this.caso();
	            this.state = 45; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2 || _la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, prueba1Parser.RULE_caso);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.match(prueba1Parser.CASE);
	            this.state = 48;
	            this.numero();
	            this.state = 49;
	            this.match(prueba1Parser.COLON);
	            this.state = 50;
	            this.sentencia();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(prueba1Parser.DEFAULT);
	            this.state = 53;
	            this.match(prueba1Parser.COLON);
	            this.state = 54;
	            this.sentencia();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, prueba1Parser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.salida();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===5) {
	                this.state = 58;
	                this.sentencia();
	            }

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, prueba1Parser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(prueba1Parser.PRINTF);
	        this.state = 65;
	        this.match(prueba1Parser.LPAREN);
	        this.state = 66;
	        this.cadena();
	        this.state = 67;
	        this.match(prueba1Parser.RPAREN);
	        this.state = 68;
	        this.match(prueba1Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, prueba1Parser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(prueba1Parser.BREAK);
	        this.state = 71;
	        this.match(prueba1Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, prueba1Parser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(prueba1Parser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, prueba1Parser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(prueba1Parser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, prueba1Parser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(prueba1Parser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

prueba1Parser.EOF = antlr4.Token.EOF;
prueba1Parser.SWITCH = 1;
prueba1Parser.CASE = 2;
prueba1Parser.DEFAULT = 3;
prueba1Parser.PRINTF = 4;
prueba1Parser.BREAK = 5;
prueba1Parser.LPAREN = 6;
prueba1Parser.RPAREN = 7;
prueba1Parser.LBRACE = 8;
prueba1Parser.RBRACE = 9;
prueba1Parser.COLON = 10;
prueba1Parser.SEMI = 11;
prueba1Parser.QUOTE = 12;
prueba1Parser.IDENTIFICADOR = 13;
prueba1Parser.NUMERO = 14;
prueba1Parser.CADENA = 15;
prueba1Parser.WS = 16;
prueba1Parser.COMMENT = 17;
prueba1Parser.LINE_COMMENT = 18;

prueba1Parser.RULE_programas = 0;
prueba1Parser.RULE_instrucciones = 1;
prueba1Parser.RULE_instruccion = 2;
prueba1Parser.RULE_seleccion = 3;
prueba1Parser.RULE_casos = 4;
prueba1Parser.RULE_caso = 5;
prueba1Parser.RULE_sentencia = 6;
prueba1Parser.RULE_salida = 7;
prueba1Parser.RULE_terminar = 8;
prueba1Parser.RULE_identificador = 9;
prueba1Parser.RULE_numero = 10;
prueba1Parser.RULE_cadena = 11;

class ProgramasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_programas;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(prueba1Parser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterProgramas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitProgramas(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitProgramas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_seleccion;
    }

	SWITCH() {
	    return this.getToken(prueba1Parser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(prueba1Parser.LPAREN, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	RPAREN() {
	    return this.getToken(prueba1Parser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(prueba1Parser.LBRACE, 0);
	};

	casos() {
	    return this.getTypedRuleContext(CasosContext,0);
	};

	RBRACE() {
	    return this.getToken(prueba1Parser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_casos;
    }

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterCasos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitCasos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitCasos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_caso;
    }

	CASE() {
	    return this.getToken(prueba1Parser.CASE, 0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	COLON() {
	    return this.getToken(prueba1Parser.COLON, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	DEFAULT() {
	    return this.getToken(prueba1Parser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(prueba1Parser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(prueba1Parser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(prueba1Parser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(prueba1Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(prueba1Parser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(prueba1Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_identificador;
    }

	IDENTIFICADOR() {
	    return this.getToken(prueba1Parser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(prueba1Parser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = prueba1Parser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(prueba1Parser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof prueba1Listener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof prueba1Visitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




prueba1Parser.ProgramasContext = ProgramasContext; 
prueba1Parser.InstruccionesContext = InstruccionesContext; 
prueba1Parser.InstruccionContext = InstruccionContext; 
prueba1Parser.SeleccionContext = SeleccionContext; 
prueba1Parser.CasosContext = CasosContext; 
prueba1Parser.CasoContext = CasoContext; 
prueba1Parser.SentenciaContext = SentenciaContext; 
prueba1Parser.SalidaContext = SalidaContext; 
prueba1Parser.TerminarContext = TerminarContext; 
prueba1Parser.IdentificadorContext = IdentificadorContext; 
prueba1Parser.NumeroContext = NumeroContext; 
prueba1Parser.CadenaContext = CadenaContext; 
