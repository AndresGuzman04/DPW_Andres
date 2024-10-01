//Objeto que contiene propiedades con otros objetos
const estudiante = {
    nombre: "Andres",
    edad: 22,
    direccion: {
        calle: "Calle 123",
        ciudad: "Ciudad Barrios"
    },
    materia: ["Matematicas", "Programacion", "Fisica"]
}

//Acceso a las propiedades anidadas
console.log(estudiante.direccion.calle);
console.log(estudiante.materia[0]);