const {connection} = require('./mysql');

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const cedula = document.getElementById('cedula')
const fecha = document.getElementById('fecha')
const telefono = document.getElementById('telefono')
const ocupacion = document.getElementById('ocupacion')
const botonRegistrar = document.getElementById('botonRegistrar')
const botonReset = document.getElementById('botonReset')





 botonRegistrar.addEventListener('click',(e)=>{

  let genero

  if(document.getElementById('hombre').checked){
    genero = 'hombre'
  }else if(document.getElementById('mujer').checked){
    genero = 'mujer'
  }

   e.preventDefault()

   const nuevoRegistro = {
     nombre:nombre.value,
     apellido:apellido.value,
     genero:genero,
     cedula:cedula.value,
     fecha:fecha.value,
     telefono:telefono.value,
     ocupacion:ocupacion.value
   }

   connection.query(`INSERT INTO usuarios (nombre,apellido,genero,cedula,fecha_nacimiento,telefono,ocupacion) VALUES ('${nuevoRegistro.nombre}','${nuevoRegistro.apellido}','${nuevoRegistro.genero}','${nuevoRegistro.cedula},'${nuevoRegistro.fecha},'${nuevoRegistro.telefono},'${nuevoRegistro.ocupacion})`);

 })