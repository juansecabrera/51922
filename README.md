# Proyecto Final: Analizador Sintáctico

**Alumno:** Juan Sebastián Cabrera  
**Carrera:** Ingenieria en Sistemas de Programacion

**Materia:** Sintaxis y Semántica de los Lenguajes  
**Año:** 2025  

---

##  Descripción

Este proyecto consiste en un **analizador léxico y sintáctico** desarrollado con **ANTLR4 y JavaScript**. El objetivo es analizar estructuras `switch-case` escritas en un subconjunto reducido del lenguaje C.  
El programa también genera:
- Una **tabla de tokens**
- Un **árbol de análisis**
- Una **traducción a JavaScript** con ejecución de instrucciones

---


## Instalación del Proyecto
1. Clona este repositorio desde la terminal:
git clone https://github.com/juansecabrera/51922.git

2. Cambia la direccion al repositorio en el cmd:
cd 51922/Prueba 1

3. Para abrir el proyecto en VS Code escribe esto en la terminal:
code .
---

## Ejecucion 
1. Desde de la terminal ejecuta el comando: npm install antlr4
2. Luego ejecuta el analizador con el comando: node index.js o npm start

## Salida
Tokens generados correctamente.
Árbol de análisis creado.
Traducción a JavaScript ejecutada.
Hola

## 📁 Estructura del Proyecto

51922/
├── .antlr/                          # Archivos internos generados por ANTLR
│   └── (archivos temporales y metadatos)
│
├── generated/                       # Código fuente generado por ANTLR

│   ├── prueba1Lexer.js             # Lexer generado a partir de prueba1.g4

│   ├── prueba1Parser.js            # Parser generado

│   ├── prueba1Listener.js          # Listener base (opcional)

│   ├── prueba1Visitor.js           # Visitor base (opcional)
│
├── Customprueba1Listener.js        # Listener personalizado (si se usa)

├── Customprueba1Visitor.js         # Visitor personalizado para procesar el árbol
│
├── antlr-4.13.2-complete.jar       # JAR de ANTLR necesario para generar el parser/lexer

├── prueba1.g4                      # Archivo de gramática con las reglas del lenguaje

├── index.js                        # Script principal que ejecuta el análisis

├── input.txt                       # Código fuente de entrada en lenguaje tipo C reducido

└──  package.json                    # Dependencias y metadatos del proyecto









