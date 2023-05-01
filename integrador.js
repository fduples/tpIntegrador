// Código de bootstrap para el modal //
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}


function traerDatos() {
    // Obtenemos los valores de los inputs por su id
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var tema = document.getElementById('tema').value;

    if (nombre === "") {
        nombre = "Sin dato";
    } 
    if (apellido === "") {
        apellido = "Sin dato";
    } 
    if (tema === "") {
        tema = "Sin dato";
    }

  // guardo en un diccionario la información obtenida del form
    document.getElementById('nombreModal').innerHTML = nombre;
    document.getElementById('apellidoModal').innerHTML = apellido;
    document.getElementById('temaModal').innerHTML = tema;
}

function limpiar() {
    var nombre = document.getElementById('nombreModal').innerHTML;
    var apellido = document.getElementById('apellidoModal').innerHTML;
    var tema = document.getElementById('temaModal').innerHTML;
    if (nombre === "Sin dato") {
        alert('Hay información sin completar. Complete el formulario y vuelva a enviarlo.');
        return false;
    } else if (apellido === "Sin dato") {
        alert('Hay información sin completar. Complete el formulario y vuelva a enviarlo.');
        return false;
    } else if (tema === "Sin dato") {
        alert('Hay información sin completar. Complete el formulario y vuelva a enviarlo.');
        return false;
    }

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('tema').value = '';
    alert('El formulario ha sido enviado');
}