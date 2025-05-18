grammar prueba1;

SWITCH   : 'switch';
CASE     : 'case';
DEFAULT  : 'default';
PRINTF   : 'printf';
BREAK    : 'break';

LPAREN   : '(';
RPAREN   : ')';
LBRACE   : '{';
RBRACE   : '}';
COLON    : ':';
SEMI     : ';';
QUOTE    : '"';

IDENTIFICADOR
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NUMERO
    : [0-9]+
    ;

CADENA
    : '"' (~["\r\n])* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;

COMMENT
    : '/*' .*? '*/' -> skip
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;
programas
    : instrucciones EOF
    ;

instrucciones
    : instruccion+
    ;

instruccion
    : seleccion
    ;

seleccion
    : SWITCH LPAREN identificador RPAREN LBRACE casos RBRACE
    ;

casos
    : caso+
    ;

caso
    : CASE numero COLON sentencia
    | DEFAULT COLON sentencia
    ;

sentencia
    : salida (sentencia)? 
    | terminar
    ;

salida
    : PRINTF LPAREN cadena RPAREN SEMI
    ;

terminar
    : BREAK SEMI
    ;

identificador
    : IDENTIFICADOR
    ;

numero
    : NUMERO
    ;

cadena
    : CADENA
    ;