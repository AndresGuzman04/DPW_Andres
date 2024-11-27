// Seleccionar el boton y el cuerpo de la pagina
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Agregar un evento de click al boton
toggleButton.addEventListener('click', () => {
    //verificar la clase  actual y alternarla entre light-theme y dark-theme
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
    }
});