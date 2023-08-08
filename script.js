

/*function calcPrice(precio,descuento){
    const disc = (precio * descuento)
    const total= precio-descuento
    return total
}
function calcCuotas(precio, cuotas){
    return precio/cuotas
}


}*/

let producto1 = {
    nombre : 'pes 06',
    precio : '5$'
}

let producto2 = {
    nombre : 'COD BO',
    precio : '10$'
}
let miArray = [producto1,producto2]

console.log(miArray)

let array2 = [];
array2.push(producto1,producto2)
console.log(array2)





/* user-login function */
let productos =[]
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
console.log(productos)