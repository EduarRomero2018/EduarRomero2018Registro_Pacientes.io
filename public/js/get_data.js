// llamamos el locaslstorage
let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"))
// mostramos una laerta si no hay registros en el
window.addEventListener('load', function() {
  if (!registrosAlmacenados) {
    Swal.fire(
      'Información',
      'en el momento no tiene registros guardados en el localstorage',
      'warning'
    )
  }
});

const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos_paciente");
const email_paciente = document.querySelector("#email_paciente");
const direccion_paciente = document.querySelector("#direccion_paciente");
const tipo_documento = document.querySelector("#tipo_documento");
const numero_documento = document.querySelector("#numero_documento");
// obtener id de paciente que viene del HTML
const visualizarpacientes = document.querySelector('#date_object')

// obtenemos el id del boton guardar paciente
const button_guardar = document.querySelector("#save_form");
// la vamos a utilizar mas adelante para guardar la posicion

// obtener el id del boton actualizar paciente
const btn_actualizar = document.querySelector("#update_register");

// obtener el id del boton actualizar paciente

// Capturamos el id del boton actualizar
const dtn_delete = document.querySelector("#update_register");


nombres.addEventListener('blur', function(events){

let valor_campo = events.target.value

if (valor_campo.length === 0) {

debugger


}

});



button_guardar.addEventListener('click', (datospacientes));
// Creamos nuestra función
function datospacientes(event) {
  event.preventDefault();

  // Obtenemos los registros existentes del localStorage
  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"))

  // validamos si viene vacio o no
  if (registrosAlmacenados === null) {

    registrosAlmacenados = [];

  }

    // Creamos nuestro objeto
    const nuevoRegistro = {
      nombre: nombres.value,
      apellidos: apellidos.value,
      email_paciente: email_paciente.value,
      direccion_paciente: direccion_paciente.value,
      tipo_documento: tipo_documento.value,
      numero_documento: numero_documento.value
    }

    // Agregar el nuevo registro al arreglo
    registrosAlmacenados.push(nuevoRegistro);

  // Guardar la lista actualizada en el localStorage
  localStorage.setItem("clave", JSON.stringify(registrosAlmacenados));
  // console.log(registrosAlmacenados);


  Swal.fire({
    title: 'Listo',
    text: 'El Paciente fue guardado con Éxito, favor actualice listar pacientes',
    icon: 'success',
    confirmButtonText: '¡Entendido!'
  });

  // vaceamos los valores de los input
  nombres.value = "";
  apellidos.value = "";
  email_paciente.value = "";
  direccion_paciente.value = "";
  tipo_documento.value = "";
  numero_documento.value = "";
}

// obtener id de paciente
const listarpaciente = document.querySelector('#listar_pacientes')
// escuchamos cuando le den clik al boton listar pacientes
listarpaciente.addEventListener('click', ImprimirListado)
// console.log('diste click');


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
                                                <td><button id="update_row" type="button" class="btn btn-outline-secondary btn btn-warning" onClick="GetIndex(${index})">Editar</button></td>
                                                <td>

                                                <button id="delete_register" type="button" value ="delete" class="btn btn-outline-secondary btn btn-danger" onClick="deleteregister(${index})">Eliminar</button>

                                                </td>
                                            </tr>
        `
    }).join('')
  }

}


// declaramos la ariable que va a contener la posicion del elemento
let getposition = '';

// funcion que se ejecuta cuando se le da click al boton editar
function GetIndex(index) {
  // funciona
  // console.log(`editando ${index}`);

  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"));
  // console.log('impresion desde funcion editar');
  // console.log(registrosAlmacenados);

  // Cargamos los valores en el mismo formulario
  nombres.value = registrosAlmacenados[index].nombre;
  apellidos.value = registrosAlmacenados[index].apellidos;
  email_paciente.value = registrosAlmacenados[index].email_paciente;
  direccion_paciente.value = registrosAlmacenados[index].direccion_paciente;
  tipo_documento.value = registrosAlmacenados[index].tipo_documento;
  numero_documento.value = registrosAlmacenados[index].numero_documento;

  Swal.fire({
    title: '¡Información!',
    text: 'Dirigete a la sección REGISTRAR NUEVO PACIENTE para editar los datos',
    icon: 'question',
    confirmButtonText: '!Continuar¡'
  });

  btn_actualizar.style.display = "block";
  button_guardar.style.display = "none";
  // guardamos la psosicion del los item al darle click
  getposition = index

}

// funcion que actualizar los datos en el mismo registro
btn_actualizar.addEventListener('click', UpdateRegister);

function UpdateRegister(params) {
  params.preventDefault()

  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"));

  // Creamos nuevamente el objeto
  const nuevoRegistro = {
    nombre: nombres.value,
    apellidos: apellidos.value,
    email_paciente: email_paciente.value,
    direccion_paciente: direccion_paciente.value,
    tipo_documento: tipo_documento.value,
    numero_documento: numero_documento.value
  }

  registrosAlmacenados.splice(getposition, 1, nuevoRegistro)

  localStorage.setItem("clave", JSON.stringify(registrosAlmacenados))
  // Borramos nuevamente los campos
  nombres.value = "";
  apellidos.value = "";
  email_paciente.value = "";
  direccion_paciente.value = "";
  tipo_documento.value = "";
  numero_documento.value = "";

  Swal.fire({
    title: 'Listo!',
    text: 'Registro Actualizado con Éxito, recuerda actualizar la sección LISTAR PACIENTES',
    icon: 'success',
    confirmButtonText: '!Continuar¡'
  });

  btn_actualizar.style.display = "none";
  button_guardar.style.display = "block";
}

deleteregister(index);
// Agrega una función para eliminar el registro con el índice proporcionado
function deleteregister(index) {

  let registrosAlmacenados = JSON.parse(localStorage.getItem("clave"));

  if (registrosAlmacenados && registrosAlmacenados.length >= index) {
    const registro = registrosAlmacenados[index]; // Obtén el objeto en la posición index
    const numeroDocumento = registro.numero_documento; // Accede a la propiedad numero_documento

    // console.log(documento);

    Swal.fire({
      title: 'Eliminar',
      text: (`Seguro que quiero eliminar este registro con identificación!: ${numeroDocumento}`),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar!'

    }).then((result) => {
      if (result.isConfirmed) {
        // Elimina el registro del arreglo utilizando el índice
        registrosAlmacenados.splice(index, 1);
        Swal.fire(
          'Eliminado!',
          'El registro fue eliminado con éxito',
          'success'
          )

          // Actualiza el localStorage con la tabla actualizada
          localStorage.setItem("clave", JSON.stringify(registrosAlmacenados));

          // Vuelve a imprimir el listado actualizado
          ImprimirListado();
      }
    })

  } else {
    // Manejar el caso en el que el índice no es válido o no hay registros
    Swal.fire({
      title: 'Error',
      text: 'No se pudo encontrar el registro a eliminar',
      icon: 'error',
      confirmButtonText: '¡Entendido!'
    });
  }
}