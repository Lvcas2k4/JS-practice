

/*function calcPrice(precio,descuento){
    const disc = (precio * descuento)
    const total= precio-descuento
    return total
}
function calcCuotas(precio, cuotas){
    return precio/cuotas
}


}*/

// `let producto1 = {
//     nombre : 'pes 06',
//     precio : '5$'
// }

// let producto2 = {
//     nombre : 'COD BO',
//     precio : '10$'
// }
// let miArray = [producto1,producto2]

// console.log(miArray)

// let array2 = [];
// array2.push(producto1,producto2)
// console.log(array2)`



//ejercio1
/* user-login function */
/*let productos =[]
function crearProd(titulo, desc,precio,imagen){
  let producto ={
    titulo,
    desc,
    precio,
    imagen,
  };
  return producto;
}
function subirProductos(producto, array){
  
  array.push(producto);
  return array
}
let teemo ={
 nombre: 'temo',
 habilidades:['q','w','r'],
 admin: false,
};

function login(usario){
  if (usario.admin){
    subirProductos(
      crearProducto('termo','zzz',123),
      productos
    );
    productos.push(
    crearProducto('mate','32','www')
    );
  } else{
    alert('no es x aca wachin');
  }
}
login(teemo);
console.log(productos)*/


//ejercio 2
// const userAdmin = {
//   username:'admin',
//   password:'1234'
// }

// function sesion(){
//    for (let x=1 ; x<= 3; x++ ){ 
//     const username = prompt('ingrese el usario');
//     const password = prompt('ingrese el usario');
  
//     if(username == userAdmin.username && password==userAdmin.password){
//       console.log('logeado')
//       return true;
//     } else{
//       console.log('no logeado')
//     }
    
//     console.log(username)
//     console.log(password)
  
//   }
// }

// sesion()

// const numeroAIterar = prompt('Mandale un numero rey');
// const salir = Number(prompt('Que numero te gusta pa salir?'));

// for (let i = 1; i <= Number(numeroAIterar); i++) {
//   if (i % 2 === 0) {
//     console.log(`
//             El numero ${i} es par
//         `);
//   }

//   if (i === salir) {
//     console.log(i);
//     break;
//   }
// }
// juego while
// let intentos = 0;
// let numeroUsuario = Number(prompt('Que numero tiras?'));
// const numeroSecreto = 7;

// do {
//   if (numeroUsuario === numeroSecreto) {
//     console.log(`Epa!, le pegaste pa`);
//   } else {
//     numeroUsuario = Number(prompt('Ingresá otro numero'));
//   }

//   intentos++;
// } while (numeroUsuario !== numeroSecreto);




// let intentos = 0;
// let numeroUsuario = Number(prompt('¿Qué número tiras?'));
// const numeroSecreto = 7;

// do {
//   if (numeroUsuario === numeroSecreto) {
//     console.log('¡Epa!, le pegaste pa');
//     break;
//   } else {
//     numeroUsuario = Number(prompt('Ingresá otro número'));
//     intentos++;
//   }

//   if (intentos === 2) {
//     console.log('Limite de intentos superado');
//     break;
//   }
// } while (numeroUsuario !== numeroSecreto);

   

// GUARDAR PRODUCTOS LOCALSTORAGE

function ingresarProducto() {
  var producto = prompt("Ingrese un producto:");
  

  var productosGuardados = localStorage.getItem("productos");
  

  var productos = productosGuardados ? JSON.parse(productosGuardados) : [];
  

  productos.push(producto);
  

  localStorage.setItem("productos", JSON.stringify(productos));
  
  console.log("Producto ingresado: " + producto);
}


function convertirAString() {
  

  var productos = productosGuardados ? JSON.parse(productosGuardados) : [];
  
  var productosString = JSON.stringify(productos);
  
  console.log("Productos como cadena de texto: " + productosString);
}

// Ejecutar el programa
while (true) {
  var opcion = prompt("Ingrese una opción:\n1. Ingresar producto\n2. Convertir a cadena de texto\n3. Salir");
  
  if (opcion === "1") {
    ingresarProducto();
  } else if (opcion === "2") {
    convertirAString();
  } else if (opcion === "3") {
    break;
  } else {
    console.log("Opción inválida. Por favor, ingrese una opción válida.");
  }
}
