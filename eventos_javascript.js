const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const input7 = document.querySelector('#calculo7');
const input8 = document.querySelector('#calculo8');

const btn = document.querySelector('#btnCalcular');

const pResultado = document.querySelector('#resultado');
const pResultado2 = document.querySelector('#resultado2');
const pResultado3 = document.querySelector('#resultado3');
const pResultado4 = document.querySelector('#resultado4');

//crear una funcion

function btnSuma() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;

}

//console.log(btnOnClick()); 

function btnResta() {
    const restaInputs = parseInt(input3.value) - parseInt(input4.value);
    pResultado2.innerText = "Resultado: " + restaInputs;

}

function btnMultiplicacion() {
    const multiplicacionInputs = parseInt(input5.value) * parseInt(input6.value);
    pResultado3.innerText = "Resultado: " + multiplicacionInputs;

}

function btnDivision() {
    const divisionInputs = parseInt(input7.value) / parseInt(input8.value);
    pResultado4.innerText = "Resultado: " + divisionInputs;

}