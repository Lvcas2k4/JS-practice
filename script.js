

/*function calcPrice(precio,descuento){
    const disc = (precio * descuento)
    const total= precio-descuento
    return total
}
function calcCuotas(precio, cuotas){
    return precio/cuotas
}

function MakeProd(titulo,precio,descuento,cuotas,descripcion){
return`
Titulo: ${titulo}
Precio: $${precio}
Descuento: el descuento es de ${descuento}
Precio con Descuento: $${calcPrice(precio,descuento)}
Descripcion:${descripcion}
`
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