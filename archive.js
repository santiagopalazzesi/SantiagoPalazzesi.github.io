/*MODAL*/

var btn = document.getElementById('btn');
var modal = document.querySelector('.modal');
var cancelar = document.getElementById('cancelar');

btn.addEventListener('click', function () {
  btn.onclick = function () {
    modal.style.display = 'block';
    cancelar.onclick = function () {
      modal.style.display = 'none';
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  };
});

/*MODELO LISTA*/

let añadir = document.getElementById('añadir');
let modelo = document.getElementById('modelo');
let textarea1 = document.getElementById('textarea1');
let textareainicial = document.getElementById('textareainicial');

let colorcito = 'white';

modelo = añadir.addEventListener('click', function () {
  let txt = textarea1.value;
  let nombredetarea = textareainicial.value;
  let tipodetarea = input.value;
  let srctipotarea = null;

  switch (tipodetarea) {
    case 'Personal':
      srctipotarea = 'images/man.png';
      break;

    case 'Doméstica':
      srctipotarea = 'images/casa.png';
      break;

    case 'Entretenimiento':
      srctipotarea = 'images/joystick.png';
      break;

    default:
      srctipotarea = 'images/carpetita.png';

      break;
  }

  modelo = ` 
  
  <li id="modelo" class="list-group" style="background-color:${colorcito}">
  <div class="classlista2">
  <div class="tipodetarea"><img src=${srctipotarea} width="37" height="37"
  >
  </div>
  <div class="nombredetarea">${nombredetarea}</div>
  ${txt}
  <div class="col-4">
  <div id="father">
  <input type="checkbox" id="check"></input>
   <button class="tachito" style="background-color: #f8dd98d8" ><img  class="loguito fw-bold delete" src="images/tachito.png"></button>
   <div class="colorcito"></div>
   </div> 
</li> 
`;

  if (
    input.value != 'Seleccionar tipo de tarea' &&
    textarea1.value != '' &&
    textareainicial.value != ''
  ) {
    contenedorlista.innerHTML += modelo;
    centro.style.display = 'none';
  } else {
    alert('Por favor, complete todos los campos');
  }
});

/*TIPOS DE TAREA*/

let tipodetarea = document.getElementsByClassName('tipodetarea');

let personal = document.getElementById('personal');
let domestica = document.getElementById('domestica');
let entretenimiento = document.getElementById('entretenimiento');
let laboral = document.getElementById('laboral');

personal.onclick = function () {
  image.innerHTML = document.write('<img src="images/man.png>"');
};

/*CIRCULITO Y TACHITO*/

let tachito = document.getElementById('tachito');

document.addEventListener('click', function (event) {
  if (event.target.classList == 'loguito fw-bold delete') {
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
});

function colorPrioridad(color) {
  colorcito = color;
}

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="contenedor"></div>
    <input type="text" id="tit" />
    <input type="text" id="txt" />
    <button id="add">Add</button>
    <script>
      let contenedor = document.getElementById("contenedor");
      let add = document.getElementById("add");
      let txt = document.getElementById("txt");
      let tit = document.getElementById("tit");
      add.addEventListener("click", () => {
        let modelo = <div>
        <p>${txt.value}</p>
        onClick="borrame"
      </div>;
        contenedor.innerHTML += modelo;
        tit.value = "";
        txt.value = "";
      });
    </script>
  </body>
</html>*/
