
var botonDialog = document.getElementById('contactoDialog');
var form = document.getElementById('contacto');

botonDialog.addEventListener('click', function(){
    form.showModal();
});

function salir(){
    this.window.close();
}
