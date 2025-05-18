// Generated from c:/Users/SEBASTIAN/Desktop/ANALIZADOR/Prueba 1/prueba1.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link prueba1Parser}.
 */
public interface prueba1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#programas}.
	 * @param ctx the parse tree
	 */
	void enterProgramas(prueba1Parser.ProgramasContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#programas}.
	 * @param ctx the parse tree
	 */
	void exitProgramas(prueba1Parser.ProgramasContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(prueba1Parser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(prueba1Parser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(prueba1Parser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(prueba1Parser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(prueba1Parser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(prueba1Parser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#casos}.
	 * @param ctx the parse tree
	 */
	void enterCasos(prueba1Parser.CasosContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#casos}.
	 * @param ctx the parse tree
	 */
	void exitCasos(prueba1Parser.CasosContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(prueba1Parser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(prueba1Parser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(prueba1Parser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(prueba1Parser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(prueba1Parser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(prueba1Parser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(prueba1Parser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(prueba1Parser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(prueba1Parser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(prueba1Parser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(prueba1Parser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(prueba1Parser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link prueba1Parser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(prueba1Parser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link prueba1Parser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(prueba1Parser.CadenaContext ctx);
}