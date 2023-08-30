// function getform(params) {
  const nombres = document.querySelector("#nombres");
  const apellidos = document.querySelector("#apellidos_paciente");
  const email_paciente = document.querySelector("#email_paciente");
  const direccion_paciente = document.querySelector("#direccion_paciente");
  const tipo_documento = document.querySelector("#tipo_documento");
  const numero_documento = document.querySelector("#numero_documento");
  const buttom = document.querySelector("#save_form");
// }

buttom.addEventListener("click", function (e) {
  e.preventDefault();
  // Creamos nuestro objeto
  let dataobjet = {
    nombre: nombres.value,
    apellidos: apellidos.value,
    email_paciente: email_paciente.value,
    direccion_paciente: direccion_paciente.value,
    tipo_documento: tipo_documento.value,
    numero_documento: numero_documento.value
  }

  // localStorage.setItem(numero_documento.value, JSON.stringify(dataobjet))

  // nombres.value ="";
  // apellidos.value ="";
  // email_paciente.value ="";
  // direccion_paciente.value ="";
  // tipo_documento.value ="";
  // numero_documento.value ="";

  console.log(dataobjet);
});



// function ListarPacientes(params) {
//   document.querySelector("#listar_pacientes").addEventListener('click', ()=>{
//     const pacientes = JSON.parse(localStorage.getItem('dataobjet'))
//     alert('Presionaste el Botón de listar paciente')
//   }
// }
// console.log('Listar Pacientes')
