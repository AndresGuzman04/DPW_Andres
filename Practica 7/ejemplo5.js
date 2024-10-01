//iterar propiedades de un objeto
const producto = {
    nombre: 'Tablet',
    precio: 500,
    disponible: true
};

for (const propiedad in producto) {
    console.log(propiedad, producto[propiedad]);
}