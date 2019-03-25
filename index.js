/*var texto = document.querySelector('div');
console.log(texto)*/

var contadorLikes = 0;
var click = 0;

function rellenarCorazon()  {
  click++
  if ( click % 2 === 0 ) {
    contadorLikes++
    console.log(contadorLikes)
    var numeroDeLikes = document.querySelector('#likes')
    console.log(numeroDeLikes.innerHTML = contadorLikes)
  } 
  var iconos = document.querySelector('i#corazon')
  iconos.classList.toggle('fas');
}