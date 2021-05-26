function enviarForm()
{

let usuario = {
  nombre: document.getElementById("Nombre").value,
  apellido: document.getElementById("Apellido").value,
  direccion: document.getElementById("Direccion").value,
  seguridad: document.getElementById('Seguridad').value,
  tarjeta: document.getElementById("Tarjeta").value,
  horarios: document.getElementById("Horarios").value,
  dibujo: signaturePad6.toData()
}
;

alert(JSON.stringify(usuario, null, 4));
console.log(usuario)
}

