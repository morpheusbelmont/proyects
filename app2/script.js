var preguntas = {
    "INTRODUCCIÓN": ["¿Qué es la lingüística?", "¿Quién es considerado el padre de la lingüística moderna?", "¿Cuál es la diferencia entre lengua y habla?"],
    "FONÉTICA": ["¿Qué estudia la fonética?", "¿Cómo se llama el estudio de los sonidos del habla?", "¿Cuál es la diferencia entre fonética y fonología?"],
    "MORFOLOGÍA": ["¿Qué estudia la morfología?", "¿Cuál es la unidad mínima de significado en morfología?", "¿Qué es un morfema?"],
    "SINTAXIS": ["¿Qué estudia la sintaxis?", "¿Cuál es la función de un verbo en una oración?", "¿Qué es una oración compuesta?"],
    "SEMÁNTICA": ["¿Qué estudia la semántica?", "¿Qué es un sinónimo?", "¿Qué es una antonimia?"],
    "PRAGMÁTICA": ["¿Qué estudia la pragmática?", "¿Cuál es la diferencia entre significado y significante?", "¿Qué son los actos de habla?"],
    "APLICACIONES": ["¿Dónde se aplica la lingüística en la vida cotidiana?", "¿Qué es la lingüística forense?", "¿Cómo se usa la lingüística en la traducción?"],
    "EVALUACIÓN": ["¿Qué es una evaluación lingüística?", "¿Qué se evalúa en una evaluación lingüística?", "¿Cuáles son los métodos de evaluación lingüística más comunes?"]
};

var respuestas = {
    "INTRODUCCIÓN": [
        ["Estudio científico del lenguaje.", "Ciencia que estudia el lenguaje humano.", "Análisis de la estructura del habla."],
        ["Ferdinand de Saussure", "Noam Chomsky", "William Labov"],
        ["Lengua es el sistema abstracto y habla es su realización concreta.", "Lengua es el idioma de un país y habla es la forma en que se pronuncian las palabras.", "Lengua es el estudio de la fonética y habla es el estudio de la morfología."]
    ],
    "FONÉTICA": [
        ["Estudio de los sonidos del habla.", "Ciencia que analiza la fonología de los idiomas.", "Estudio de la entonación."],
        ["Fonética", "Fonología", "Sintaxis"],
        ["La fonética se ocupa de los sonidos en sí mismos y la fonología estudia su función en la lengua.", "La fonética estudia la entonación y la fonología estudia la pronunciación.", "La fonética y la fonología son términos intercambiables."]
    ],
    "MORFOLOGÍA": [
        ["Estudio de la estructura de las palabras.", "Análisis de la sintaxis de las oraciones.", "Estudio de la entonación."],
        ["Morfema", "Lexema", "Sufijo"],
        ["La unidad mínima de significado.", "La parte principal de una palabra.", "La terminación de una palabra."]
    ],
    "SINTAXIS": [
        ["Estudio de la estructura de las oraciones.", "Análisis de la fonología de los idiomas.", "Estudio de la entonación."],
        ["Expresar acciones, estados o relaciones.", "Indicar el significado de una palabra.", "Proporcionar detalles sobre un tema."],
        ["Oración formada por dos o más oraciones simples.", "Oración que contiene un sujeto y un predicado.", "Oración que contiene un verbo y un adjetivo."]
    ],
    "SEMÁNTICA": [
        ["Estudio del significado de las palabras.", "Análisis de la morfología de las palabras.", "Estudio de la entonación."],
        ["Palabra con significado similar a otra.", "Palabra con significado opuesto a otra.", "Palabra con múltiples significados."],
        ["Relación de opuestos entre palabras.", "Relación de similitud entre palabras.", "Relación de asociación entre palabras."]
    ],
    "PRAGMÁTICA": [
        ["Estudio del uso del lenguaje en el contexto.", "Análisis de la fonología de los idiomas.", "Estudio de la entonación."],
        ["Significado es la idea asociada a una palabra, y significante es la forma concreta en que se presenta esa idea.", "Significado es la forma en que se presenta una idea, y significante es la idea asociada a esa forma.", "Significado y significante son términos intercambiables."],
        ["Acciones realizadas a través del lenguaje, como pedir, prometer, etc.", "Acciones realizadas a través de gestos y expresiones faciales.", "Acciones realizadas a través de la escritura y la lectura."]
    ],
    "APLICACIONES": [
        ["En comunicación, educación, traducción, entre otros.", "En el estudio de la historia y la geografía.", "En la tecnología y la informática."],
        ["Aplicación de técnicas lingüísticas en la investigación de crímenes.", "Estudio de los idiomas utilizados en la publicidad.", "Aplicación de técnicas lingüísticas en el análisis literario."],
        ["Para encontrar equivalencias entre diferentes idiomas.", "Para analizar la gramática de diferentes idiomas.", "Para interpretar textos en diferentes idiomas."]
    ],
    "EVALUACIÓN": [
        ["Análisis del lenguaje para determinar su calidad y eficacia.", "Evaluación de la ortografía y la gramática de un texto.", "Análisis de la entonación y el ritmo de un discurso."],
        ["Se evalúa la gramática, la pronunciación, el vocabulario, etc.", "Se evalúa la velocidad de lectura y escritura de un individuo.", "Se evalúa la creatividad y originalidad de un texto."],
        ["Pruebas escritas, entrevistas, análisis de muestras de discurso, etc.", "Exámenes orales y escritos.", "Juegos y actividades lúdicas."]
    ]
};

var respuestasUsuario = {};
var puntaje = 0;
var respuestasCorrectas = 0;
var respuestasIncorrectas = 0;
var temaActual = "";
var indicePregunta = 0;

function comenzarCuestionario() {
    var nombre = document.getElementById('nombre').value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre antes de comenzar el cuestionario.");
    } else {
        document.getElementById('nombreUsuario').textContent = nombre;
        document.getElementById('inicio').classList.add('oculto');
        mostrarPregunta("INTRODUCCIÓN", 0);
    }
}

function mostrarPregunta(tema, indice) {
    temaActual = tema;
    indicePregunta = indice;
    var cuestionario = document.getElementById('cuestionario');
    cuestionario.innerHTML = "";
    cuestionario.classList.remove('oculto');
    var pregunta = document.createElement('h2');
    pregunta.textContent = preguntas[tema][indice];
    cuestionario.appendChild(pregunta);

    var opciones = respuestas[tema][indice];
    opciones.forEach(function(opcion) {
        var opcionInput = document.createElement('input');
        opcionInput.type = "radio";
        opcionInput.name = "respuesta";
        opcionInput.value = opcion;
        cuestionario.appendChild(opcionInput);
        var opcionLabel = document.createElement('label');
        opcionLabel.textContent = opcion;
        cuestionario.appendChild(opcionLabel);
        cuestionario.appendChild(document.createElement('br'));
    });

    var boton = document.createElement('button');
    boton.textContent = "Siguiente";
    boton.onclick = function() {
        var respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        if (respuestaSeleccionada) {
            respuestasUsuario[indicePregunta] = respuestaSeleccionada.value;
            if (respuestasUsuario[indicePregunta] === respuestas[temaActual][indicePregunta][0]) {
                puntaje += 1;
                respuestasCorrectas += 1;
            } else {
                respuestasIncorrectas += 1;
            }
            if (indicePregunta < preguntas[temaActual].length - 1) {
                mostrarPregunta(temaActual, indicePregunta + 1);
            } else {
                mostrarResultados();
            }
        } else {
            alert('Por favor selecciona una respuesta.');
        }
    };
    cuestionario.appendChild(document.createElement('br'));
    cuestionario.appendChild(boton);
}

function mostrarResultados() {
    document.getElementById('cuestionario').classList.add('oculto');
    document.getElementById('resultados').classList.remove('oculto');
    document.getElementById('puntaje').textContent = puntaje + " / " + Object.keys(preguntas).length;
    document.getElementById('respuestasCorrectas').textContent = respuestasCorrectas;
    document.getElementById('respuestasIncorrectas').textContent = respuestasIncorrectas;
}

function reiniciarCuestionario() {
    respuestasUsuario = {};
    puntaje = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    temaActual = "";
    indicePregunta = 0;
    document.getElementById('nombre').value = "";
    document.getElementById('inicio').classList.remove('oculto');
    document.getElementById('resultados').classList.add('oculto');
}
