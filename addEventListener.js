const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

// escuchador de eventos; escucha cierto evento cada vez que susceda (metodo)
form.addEventListener('submit', btnSuma); // 1. nombre del evento 2. nombre de la funcion de js a llamar


function btnSuma(event) { // se ppuede recibir como parametro un evento
    //console.log({ event });
    //event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;

}