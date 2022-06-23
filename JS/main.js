//Simulador compra de productos


function saludo() {
  alert("¡Hola!, Bienvenido a la tienda de Musa Acuarelas!");
  let registro = prompt("Ya estás Registrado?\n\n◉ si\n◉ no");
  registro = registro.toLowerCase();
  while (registro !== "si" && registro !== "no") {
    alert("Ingresaste un dato Incorrecto");
    registro = prompt("Ya estas Registrado?");
  }
  if (registro === "si") {
    let nombreUsuario = prompt("Ingresa tu nombre de usuario");
    alert("Hola " + nombreUsuario + " ¡Bienvenido!")
  } else if (registro === "no") {
    alert("Puedes continuar sin registrarte, pero si quieres acceder a promociones debes estar registrado");
    confirmarRegistro();
  }
}

function confirmarRegistro() {
  let confirmarRegistro = prompt("Deseas Registrarte?\n\n◉ si\n◉ no");
  confirmarRegistro = confirmarRegistro.toLowerCase();
  while (confirmarRegistro !== "si" && confirmarRegistro !== "no") {
    alert("Ingresa un dato valido");
    confirmarRegistro = prompt("¿Deseas Registrarte?");
  }
  if (confirmarRegistro === "no") {
    confirmarRegistro = true;
  } else if (confirmarRegistro === "si") {
    registroDatos();
  }
}

function registroDatos() {
  let nombre = prompt("Ingresa tu Nombre");
  let apellido = prompt("Ingresa tu Apellido");
  let direccion = prompt("Ingresa tu dirección (Calle/Número)");
  let confDatos = prompt("Los datos ingresados son correctos? \n- Nombre: " + nombre + "\n- Apellido: " + apellido + "\n- Dirección: " + direccion + "\n◉ si\n◉ no");
  confDatos = confDatos.toLocaleLowerCase();
  if (confDatos === "si") {
    alert("Registrado Correctamente");
  } else if (confDatos = "no") {
    registroDatos();
  }
}


function seleccionarProducto() {
  let producto = prompt("Selecciona el producto que quieres comprar:\n\n◉ Producto 1 $300  (1)\n◉ Producto 2 $200  (2)\n◉ Producto 3 $100  (3)\n◉ Producto 4 $250  (4)\n◉ Producto 5 $180  (5)");
  while (producto !== "1" && producto !== "2" && producto !== "3" && producto !== "4" && producto !== "5") {
    producto = prompt("Selecciona el producto que quieres comprar:\n\n◉ Producto 1 $300  (1)\n◉ Producto 2 $200  (2)\n◉ Producto 3 $100  (3)\n◉ Producto 4 $250  (4)\n◉ Producto 5 $180  (5)");
  }
  switch (producto) {
    case "1":
      return 300;
    case "2":
      return 200;
    case "3":
      return 100;
    case "4":
      return 250;
    case "5":
      return 180;
  }
}

function cantidadProductos() {
  let cantidadProductos = parseInt(prompt("Ingresa la cantidad de unidades que quieres comprar:"));
  return cantidadProductos;
}

function cupon() {
  let numeroCupon;
  let cupon = prompt("Tienes un cupon de descuento?\n\n◉ si\n◉ no");
  cupon = cupon.toLowerCase();
  while (cupon !== "si" && cupon !== "no") {
    cupon = prompt("¿Tienes un cupón de descuento?\n\n◉ si\n◉ no");
  }
  if (cupon === "si") {
    numeroCupon = parseInt(prompt("Ingresa tu Número de Cupón\n\n"));
    alert("Tu cupón es de un 5% de descuento!\n\nEl monto total de tu compra es $ " + precioConDescuento);
  } else if (cupon === "no") {
    alert("El monto total de tu compra es: $ " + precioSinDescuento)
  }
  return numeroCupon;
}


function multiplicacion() {
  return precioProducto * cantidadProductos1;
}

function descuento() {
  return precioSinDescuento - (precioSinDescuento * 0.05);
}

function datosEnvio() {
  alert("Confirme sus datos para terminar la compra")
  let nombre = prompt("Ingresa tu Nombre");
  let telefono = parseInt(prompt("Ingresa tu Teléfono"));
  let direccion = prompt("Ingresa tu dirección (Calle/Número)");
  alert("Los datos ingresdos son: \n\n◉ Nombre: " + nombre + "\n◉ Dirección: " + direccion + "\n◉ Teléfono: " + telefono);
}

function envio() {
  let envio = prompt("Desea envío a Domicilio?\n\n◉ si\n◉ no");
  envio = envio.toLowerCase();
  while (envio !== "si" && envio !== "no") {
    envio = prompt("Ingrese un dato valido");
  }
  if (envio === "si") {
    datosEnvio();
    alert("¡El producto será enviado a su Domicilio\n\nMuchas Gracias por su compra!")
  } else if (envio === "no") {
    datosEnvio();
    alert("¡Puede pasar a retirar el producto reservado por nuestra tienda de 9 a 18 hs\n\nMuchas Gracias por su compra!");
  }
}




saludo();
let precioProducto = seleccionarProducto();
let cantidadProductos1 = cantidadProductos();
let precioSinDescuento = multiplicacion();
let precioConDescuento = descuento();
let numeroCupon = cupon();
envio();