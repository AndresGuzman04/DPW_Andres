var factura = {
    numero: 201,
    cliente: "Libreria Milagrosa",
    divisa: "Dolares",
    total: 600,
    IVA: 78
}

//var factura = {numero: 201, cliente: "Libreria Milagrosa", total: 600, IVA: 78}

var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFac = factura.total;
console.log('La factura ' + numeroFactura + ' es de ' + totalFac + ' ' + monedaFactura)

factura.numero = 201;
numeroFactura = factura.numero;
console.log('La factura ' + numeroFactura + ' es de ' + totalFac + ' ' + monedaFactura)