// Generated from c:/Users/SEBASTIAN/Desktop/ANALIZADOR/Prueba 1/prueba1.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class prueba1Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SWITCH=1, CASE=2, DEFAULT=3, PRINTF=4, BREAK=5, LPAREN=6, RPAREN=7, LBRACE=8, 
		RBRACE=9, COLON=10, SEMI=11, QUOTE=12, IDENTIFICADOR=13, NUMERO=14, CADENA=15, 
		WS=16, COMMENT=17, LINE_COMMENT=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SWITCH", "CASE", "DEFAULT", "PRINTF", "BREAK", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "COLON", "SEMI", "QUOTE", "IDENTIFICADOR", "NUMERO", "CADENA", 
			"WS", "COMMENT", "LINE_COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'switch'", "'case'", "'default'", "'printf'", "'break'", "'('", 
			"')'", "'{'", "'}'", "':'", "';'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SWITCH", "CASE", "DEFAULT", "PRINTF", "BREAK", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "COLON", "SEMI", "QUOTE", "IDENTIFICADOR", "NUMERO", 
			"CADENA", "WS", "COMMENT", "LINE_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public prueba1Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "prueba1.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012\u0089\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0005\fW\b\f\n\f\f"+
		"\fZ\t\f\u0001\r\u0004\r]\b\r\u000b\r\f\r^\u0001\u000e\u0001\u000e\u0005"+
		"\u000ec\b\u000e\n\u000e\f\u000ef\t\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0004\u000fk\b\u000f\u000b\u000f\f\u000fl\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010u\b\u0010"+
		"\n\u0010\f\u0010x\t\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0005\u0011"+
		"\u0083\b\u0011\n\u0011\f\u0011\u0086\t\u0011\u0001\u0011\u0001\u0011\u0001"+
		"v\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0006"+
		"\u0003\u0000AZ__az\u0004\u000009AZ__az\u0001\u000009\u0003\u0000\n\n\r"+
		"\r\"\"\u0003\u0000\t\n\r\r  \u0002\u0000\n\n\r\r\u008e\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003,"+
		"\u0001\u0000\u0000\u0000\u00051\u0001\u0000\u0000\u0000\u00079\u0001\u0000"+
		"\u0000\u0000\t@\u0001\u0000\u0000\u0000\u000bF\u0001\u0000\u0000\u0000"+
		"\rH\u0001\u0000\u0000\u0000\u000fJ\u0001\u0000\u0000\u0000\u0011L\u0001"+
		"\u0000\u0000\u0000\u0013N\u0001\u0000\u0000\u0000\u0015P\u0001\u0000\u0000"+
		"\u0000\u0017R\u0001\u0000\u0000\u0000\u0019T\u0001\u0000\u0000\u0000\u001b"+
		"\\\u0001\u0000\u0000\u0000\u001d`\u0001\u0000\u0000\u0000\u001fj\u0001"+
		"\u0000\u0000\u0000!p\u0001\u0000\u0000\u0000#~\u0001\u0000\u0000\u0000"+
		"%&\u0005s\u0000\u0000&\'\u0005w\u0000\u0000\'(\u0005i\u0000\u0000()\u0005"+
		"t\u0000\u0000)*\u0005c\u0000\u0000*+\u0005h\u0000\u0000+\u0002\u0001\u0000"+
		"\u0000\u0000,-\u0005c\u0000\u0000-.\u0005a\u0000\u0000./\u0005s\u0000"+
		"\u0000/0\u0005e\u0000\u00000\u0004\u0001\u0000\u0000\u000012\u0005d\u0000"+
		"\u000023\u0005e\u0000\u000034\u0005f\u0000\u000045\u0005a\u0000\u0000"+
		"56\u0005u\u0000\u000067\u0005l\u0000\u000078\u0005t\u0000\u00008\u0006"+
		"\u0001\u0000\u0000\u00009:\u0005p\u0000\u0000:;\u0005r\u0000\u0000;<\u0005"+
		"i\u0000\u0000<=\u0005n\u0000\u0000=>\u0005t\u0000\u0000>?\u0005f\u0000"+
		"\u0000?\b\u0001\u0000\u0000\u0000@A\u0005b\u0000\u0000AB\u0005r\u0000"+
		"\u0000BC\u0005e\u0000\u0000CD\u0005a\u0000\u0000DE\u0005k\u0000\u0000"+
		"E\n\u0001\u0000\u0000\u0000FG\u0005(\u0000\u0000G\f\u0001\u0000\u0000"+
		"\u0000HI\u0005)\u0000\u0000I\u000e\u0001\u0000\u0000\u0000JK\u0005{\u0000"+
		"\u0000K\u0010\u0001\u0000\u0000\u0000LM\u0005}\u0000\u0000M\u0012\u0001"+
		"\u0000\u0000\u0000NO\u0005:\u0000\u0000O\u0014\u0001\u0000\u0000\u0000"+
		"PQ\u0005;\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000RS\u0005\"\u0000\u0000"+
		"S\u0018\u0001\u0000\u0000\u0000TX\u0007\u0000\u0000\u0000UW\u0007\u0001"+
		"\u0000\u0000VU\u0001\u0000\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001"+
		"\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000Y\u001a\u0001\u0000\u0000"+
		"\u0000ZX\u0001\u0000\u0000\u0000[]\u0007\u0002\u0000\u0000\\[\u0001\u0000"+
		"\u0000\u0000]^\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001"+
		"\u0000\u0000\u0000_\u001c\u0001\u0000\u0000\u0000`d\u0005\"\u0000\u0000"+
		"ac\b\u0003\u0000\u0000ba\u0001\u0000\u0000\u0000cf\u0001\u0000\u0000\u0000"+
		"db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000eg\u0001\u0000\u0000"+
		"\u0000fd\u0001\u0000\u0000\u0000gh\u0005\"\u0000\u0000h\u001e\u0001\u0000"+
		"\u0000\u0000ik\u0007\u0004\u0000\u0000ji\u0001\u0000\u0000\u0000kl\u0001"+
		"\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000"+
		"mn\u0001\u0000\u0000\u0000no\u0006\u000f\u0000\u0000o \u0001\u0000\u0000"+
		"\u0000pq\u0005/\u0000\u0000qr\u0005*\u0000\u0000rv\u0001\u0000\u0000\u0000"+
		"su\t\u0000\u0000\u0000ts\u0001\u0000\u0000\u0000ux\u0001\u0000\u0000\u0000"+
		"vw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000wy\u0001\u0000\u0000"+
		"\u0000xv\u0001\u0000\u0000\u0000yz\u0005*\u0000\u0000z{\u0005/\u0000\u0000"+
		"{|\u0001\u0000\u0000\u0000|}\u0006\u0010\u0000\u0000}\"\u0001\u0000\u0000"+
		"\u0000~\u007f\u0005/\u0000\u0000\u007f\u0080\u0005/\u0000\u0000\u0080"+
		"\u0084\u0001\u0000\u0000\u0000\u0081\u0083\b\u0005\u0000\u0000\u0082\u0081"+
		"\u0001\u0000\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000\u0084\u0082"+
		"\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0087"+
		"\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0087\u0088"+
		"\u0006\u0011\u0000\u0000\u0088$\u0001\u0000\u0000\u0000\u0007\u0000X^"+
		"dlv\u0084\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}