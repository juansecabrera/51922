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
├── prueba1/                         # Carpeta principal del analizador

│   ├── prueba1.g4                   # Gramática ANTLR4

│   ├── index.js                     # Código principal en JavaScript

│   ├── input.txt                    # Código fuente de entrada

│   ├── package.json                 # Configuración y dependencias Node.js  







