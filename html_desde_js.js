// Escribiendo HTML desde JS

const h1 = document.querySelector('h1'); // es una funcion que queremos seleccionar el elemento de html
// nos pide que etiquetas, id o clases que queremos seleccionar en la hoja de html

const p = document.querySelector('p');

const parrafito = document.querySelector('.parrafito');// colocar tal cual en las clases d css

const pid = document.querySelector('#pid');// colocar tal cual en los ID

const input = document.querySelector('input');// colocar tal cual la etiqueta

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//PROPIRDADES

h1.innerHTML = 'Karen <br> Coimes'; // cambio del titulo por la palabra que se desea - convierte en dcodigo html
h1.innerText = 'Karen <br> Coimes'; // Solo lo reconoce como string el H1. solo se visualiza como texto. - convierte solo en texto

h1.getAttribute('class')// nos ayuda a leer los atributos que tenga el elemento html
// getAttribute() devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "".
console.log(h1.setAttribute('class', 'rojo')); // primero decir la clase que se quiere modificar, posterior dar el valor que modificara el anterior
// Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
h1.classList.add('azul');// Agregar una nueva clase
h1.classList.remove('rojo'); // remover una clase
h1.classList.toggle('verde');// SIrve para eventos de javascript, agregar o quitar dependiendo si tiene la clase o no, al ejecutar el toggle
//*Alterna el valor de la clase si hay un argumento presente si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
h1.classList.contains('verde') // especia de condiconal nos devuelve true o false, dependiendo si el elemneto tiene la clase que se esta preguntando
//Comprueba si la clase indicada existe.
input.value = '456'

// CREAR ELEMENTOS DESDE CERO DESDE JS HACIA HTML

const img = document.createElement('img')// creo una imagen, span o cualquier otra etiqueta de html

img.setAttribute('src', 'https://w7.pngwing.com/pngs/1022/235/png-transparent-pexels-apps-platform-apps-icon-thumbnail.png');

img.setAttribute('alt', 'imagen de prueba')
console.log(img);

pid.innerHTML = ""; // borra todo lo que hay por dentro del parrafo con el ID
pid.append(img); // insertar la imegan en un contenedor dentro de otro elemento que ya existia
//appendChild es similar al append despues del contenido del parrafo


