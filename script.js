

function calcPrice(precio,descuento){
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
}