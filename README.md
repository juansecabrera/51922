# Proyecto Final: Analizador Sintáctico

**Alumno:** Juan Sebastián Cabrera  
**Carrera:** Ingenieria en Sistemas de Programacion

**Materia:** Sintaxis y Semántica de los Lenguajes  
**Año:** 2025  

---

## 🧠 Descripción

Este proyecto consiste en un **analizador léxico y sintáctico** desarrollado con **ANTLR4 y JavaScript**. El objetivo es analizar estructuras `switch-case` escritas en un subconjunto reducido del lenguaje C.  
El programa también genera:
- Una **tabla de tokens**
- Un **árbol de análisis**
- Una **traducción a JavaScript** con ejecución de instrucciones

---

## 📁 Estructura del proyecto

├── input.txt # Archivo de entrada con el código a analizar

├── Calculator.g4 # Gramática definida en ANTLR

├── index.js # Código principal del analizador

├── package.json # Dependencias de Node.js

├── tokens.json # Salida con tabla de tokens (opcional)

├── arbol.json # Árbol de análisis sintáctico (opcional)

└── README.md # Este archivo

---



---

## ▶️ Ejecución del proyecto

### 🔧 Requisitos

- [Node.js](https://nodejs.org) instalado
- ANTLR4 configurado (descargar de [antlr.org](https://www.antlr.org/))
- Java instalado (ANTLR necesita Java)

### 📌 Pasos para ejecutar

1. Clonar el repositorio:

```bash
git clone https://github.com/juansecabrera/51922.git
cd 51922

Instalar dependencias:
npm install

Generar archivos lexer/parser con ANTLR4:
antlr4 -Dlanguage=JavaScript prueba1.g4

Ejecutar el analizador:
node index.js

Código de entrada (input.txt)
switch(x) {
  case 1: printf("Hola"); break;
  case 2: printf("Mundo"); break;
}

Salida esperada en consola
Tokens generados correctamente.
Árbol de análisis creado.
Traducción a JavaScript ejecutada.
Hola





