const titulo_id = document.getElementById('titulo_id');
const titulo_name = document.getElementByName('titulo_name');
const titulo_h3 = document.getElementsByTagName('h3');
const boton = document.getElementById('botonMensaje');

boton.addEventListener('click', function(){
    titulo_id.textContent = 'Click';
    titulo_name[0] = 'Click';
    titulo_h3[0].textContent = 'Click';
    titulo_h3[1].textContent = 'Click';
});