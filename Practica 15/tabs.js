// Seleccionar todos los botones de pestañas y el contenido asociado
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Agregar un evento de clic a cada botón de pestaña
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remover la clase 'active' de todos los botones
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Agregar la clase 'active' al botón clickeado
    button.classList.add("active");

    // Ocultar todo el contenido de las pestañas
    tabContents.forEach((content) => content.classList.remove("active"));

    // Mostrar el contenido asociado al botón clickeado
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});