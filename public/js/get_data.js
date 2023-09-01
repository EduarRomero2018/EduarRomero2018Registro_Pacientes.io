const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos_paciente");
const email_paciente = document.querySelector("#email_paciente");
const direccion_paciente = document.querySelector("#direccion_paciente");
const tipo_documento = document.querySelector("#tipo_documento");
const numero_documento = document.querySelector("#numero_documento");
const buttom = document.querySelector("#save_form");
// obtener id de paciente
const listarpaciente = document.querySelector('#listar_pacientes')

// obtener id de paciente que viene del HTML
const visualizarpacientes = document.querySelector('#visualizarpacientes')


buttom.addEventListener('click', datospacientes)


function validar(params) {

  if (buttom) {

  } else {

  }
}

// Creamos nuestra función
function datospacientes(params) {

  params.preventDefault();

  // Creamos nuestro objeto
  let nuevoRegistro = {
    nombre: nombres.value,
    apellidos: apellidos.value,
    email_paciente: email_paciente.value,
    direccion_paciente: direccion_paciente.value,
    tipo_documento: tipo_documento.value,
    numero_documento: numero_documento.value
  }

  // Obtenemos los registros existentes del localStorage
  let registrosAlmacenados = JSON.parse(localStorage.getItem("registros"))

  // validamos si viene vacio o no
  if (!registrosAlmacenados) {
    registrosAlmacenados = [];

  } else {
    // Agregar el nuevo registro al arreglo
    registrosAlmacenados.push(nuevoRegistro);
    // Guardar los registros actualizados en el localStorage
    localStorage.setItem("registros", JSON.stringify(registrosAlmacenados));
    // vaceamos los valores de los input
    nombres.value = "";
    apellidos.value = "";
    email_paciente.value = "";
    direccion_paciente.value = "";
    tipo_documento.value = "";
    numero_documento.value = "";

    // enviamos si fue guardado con exito
    Swal.fire({
      title: 'listo',
      text: 'El Paciente fue guardado con Éxito',
      icon: 'success',
      confirmButtonText: '¡Entendido!'
    });
  }


}

// escuchamos cuando le den clik al boton listar pacientes
listarpaciente.addEventListener('click', ImprimirListado)
function ImprimirListado() {

  let registrosAlmacenados = JSON.parse(localStorage.getItem("registros"))

  if (!registrosAlmacenados) {
    Swal.fire({
      title: '¡Ups!',
      text: 'En el momento no tienes información guardada en tu LocalStorage',
      icon: 'warning',
      confirmButtonText: '¡Entendido!'
    });
    nombres.value = "";
    apellidos.value = "";
    email_paciente.value = "";
    direccion_paciente.value = "";
    tipo_documento.value = "";
    numero_documento.value = "";

  } else {
    console.log(registrosAlmacenados);

    visualizarpacientes.innerHTML = registrosAlmacenados.map((registro, index) => {

      // insertamos el html
      return `
        <div class='card'>
                                    <table class="table table-light">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombres</th>
                                                <th scope="col">Apellidos</th>
                                                <th scope="col">Correo</th>
                                                <th scope="col">Direccion Paciente</th>
                                                <th scope="col">Tipo Documento</th>
                                                <th scope="col">Numero Documento</th>
                                                <th scope="col">Editar</th>
                                                <th scope="col">Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="">
                                                <td scope="row">${registro.nombre}</td>
                                                <td>${registro.apellidos}</td>
                                                <td>${registro.email_paciente}</td>
                                                <td>${registro.direccion_paciente}</td>
                                                <td>${registro.tipo_documento}</td>
                                                <td>${registro.numero_documento}</td>
                                                <td><button type="button" class="btn btn-outline-secondary" onClick="editar(${index})">Editar</button></td>
                                                <td> <button type="button" class="btn btn-outline-secondary" onClick="editar(${index})">Eliminar</button></td>
                                            </tr>
                                        </tbody>
                                    </table
        </div>
        </div>
        `
    }).join('<hr />')
  }
}


// https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
// https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild
// https://www.instagram.com/p/CurOIHCvZrI/?img_index=10
// https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
// https://www.youtube.com/watch?v=zeb5PsxWijY&t=2895s
