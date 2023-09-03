const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos_paciente");
const email_paciente = document.querySelector("#email_paciente");
const direccion_paciente = document.querySelector("#direccion_paciente");
const tipo_documento = document.querySelector("#tipo_documento");
const numero_documento = document.querySelector("#numero_documento");
const buttom = document.querySelector("#save_form");


// obtener id de paciente que viene del HTML
const visualizarpacientes = document.querySelector('#date_object')


buttom.addEventListener('click', datospacientes);

// Creamos nuestra función
function datospacientes(event) {
  event.preventDefault();

  // funciona
  // console.log(nuevoRegistro);

  // Obtenemos los registros existentes del localStorage
  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"))
  if (registrosAlmacenados == null) {
    alert('No hay datos');
  } else {
    alert('Si hay datos');
  }
  console.log(registrosAlmacenados);

  // Creamos nuestro objeto
  const nuevoRegistro = {
    nombre: nombres.value,
    apellidos: apellidos.value,
    email_paciente: email_paciente.value,
    direccion_paciente: direccion_paciente.value,
    tipo_documento: tipo_documento.value,
    numero_documento: numero_documento.value
  }

  // validamos si viene vacio o no
  if (!registrosAlmacenados) {
    registrosAlmacenados = [];
    registrosAlmacenados.push(nuevoRegistro);
  } else {
    // Agregar el nuevo registro al arreglo
    registrosAlmacenados.push(nuevoRegistro);
  }
  // Guardar la lista actualizada en el localStorage
  localStorage.setItem("clave", JSON.stringify(registrosAlmacenados));
  console.log(registrosAlmacenados);


  Swal.fire({
    title: 'listo',
    text: 'El Paciente fue guardado con Éxito',
    icon: 'success',
    confirmButtonText: '¡Entendido!'
  });

  // vaceamos los valores de los input
  nombres.value = "";
  apellidos.value = "";
  email_paciente.value = "";
  direccion_paciente.value = "";
  tipo_documento.value = "Tipo Documento";
  numero_documento.value = "";
}

// obtener id de paciente
const listarpaciente = document.querySelector('#listar_pacientes')
// escuchamos cuando le den clik al boton listar pacientes
listarpaciente.addEventListener('click', ImprimirListado)
console.log('diste click');

// funcion para imprimir el listado que esta guardado
function ImprimirListado() {
  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"))

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

    date_object.innerHTML = registrosAlmacenados.map((registro, index) => {

      // insertamos el html
      return `
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
        `
    }).join('')
  }
}
// https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling
// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
// https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild
// https://www.instagram.com/p/CurOIHCvZrI/?img_index=10
// https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
// https://www.youtube.com/watch?v=zeb5PsxWijY&t=2895s
