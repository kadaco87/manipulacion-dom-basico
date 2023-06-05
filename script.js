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


console.log(document.getElementsByTagName('li'));// Accede al elemento por medio de la etiquete 'li'
//
console.log(document.getElementsByClassName('card')); // Accede al elemento por medio de la clase
// Retorna un objeto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados.
console.log(document.getElementsByName('nombre')); //Accede a los elementos por medio del atributo 'name' del docuemnto, name se utiliza en los formularios
//Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.
console.log(document.getElementsById('menu')); // Accede a los elementos por medio del identificador 'menu'
console.log(document.querySelector('a')); // Accede al elemento por medio de la etiqueta 'a'. selecciona todos los elementos de tipo 'a' del documento
console.log(document.querySelectorAll('a')); // Accede al elemento por medio de la etiqueta 'a'. selecciona a todos los elementos de tipo 'a' del docuemnto.
// commit