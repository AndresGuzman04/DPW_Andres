var factura = {
    numero: 650,
    cliente: "Transportes Hernandez",
    vencimiento: {
        1:{
            fecha: new Date(2023, 10, 20),
            importe: 216
            },
        2:{
            fecha: new Date(2023, 10, 25),
            importe: 100
            },
        3:{
            fecha: new Date(2023, 10, 30),  
            importe: 500
        }    
    } 
}

var numeroFactura = factura.numero;
var importeTercerVencimiento = factura.vencimiento[3].importe;
console.log("El importe del tercer vencimientoo asciende a " + importeTercerVencimiento);
