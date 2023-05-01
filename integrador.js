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

    //verifico que no haya datos vacíos y con un prompt los completamos.
    
    nombre = (nombre === "") ? prompt("Debe Ingresar su nombre:", "Sin Dato") : nombre;

    apellido = (apellido === "") ? prompt("Debe Ingresar su Apellido:", "Sin Dato") : apellido;
    
    tema = (tema === "") ? prompt("Debe Ingresar el tema del que quiere hablar:", "Sin Dato"): tema;

  // guardo la información obtenida del form
    document.getElementById('nombreModal').innerHTML = nombre;
    document.getElementById('apellidoModal').innerHTML = apellido;
    document.getElementById('temaModal').innerHTML = tema;
}

function limpiar() {
  //obtengo la información del modal y la guardo en respectivas variables
    var nombre = document.getElementById('nombreModal').innerHTML;
    var apellido = document.getElementById('apellidoModal').innerHTML;
    var tema = document.getElementById('temaModal').innerHTML;
    //Compruebo que no haya ni datos vacíos ni canpos con valor "sin dato".
    if ((nombre === "Sin Dato" || nombre === "") || (apellido === "Sin Dato" || apellido === "")|| (tema === "Sin Dato" || tema === "")) {
        alert('Hay información sin completar. Complete el formulario y vuelva a enviarlo.');
        return false;
    }

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('tema').value = '';
    alert('El formulario ha sido enviado');
}