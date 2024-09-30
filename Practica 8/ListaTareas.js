var nuevaTareaInput = document.getElementById("nuevaTarea");
var agregarbtn = document.getElementById("agregarbtn");
var listaTareas = document.getElementById("vistaTareas");

//Agregra evento al boton agregar al dar click
agregarbtn.addEventListener("click",function(){
    var textoTarea = nuevaTareaInput.value;

    if (textoTarea !== "") {
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea");

        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto);

        var divBotones = document.createElement("div");

        var eliminarbtn = document.createElement("button");
        eliminarbtn.classList.add("elminarbtn");
        eliminarbtn.textContent = "Eliminar";

        eliminarbtn.addEventListener("click", function(){
            listaTareas.removeChild(nuevaTarea);
        });

       
        var modificarbtn = document.createElement("button");
        modificarbtn.classList.add("modificarbtn");
        modificarbtn.textContent = "Modificar";

        modificarbtn.addEventListener("click", function(){
            if (modificarbtn.textContent == "Modificar") {
                modificarbtn.textContent = "Guardar";

                var inputModificacion = document.createElement("input");
                inputModificacion.type = "text";
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto);
            }else{
                modificarbtn.textContent = "Modificar";

                var nueTexto = nuevaTarea.firstChild.value;

                spanTexto.textContent = nueTexto;

                nuevaTarea.replaceChild(spanTexto, nuevaTarea.firstChild);

            }
        });

        divBotones.appendChild(modificarbtn);
        divBotones.appendChild(eliminarbtn);

        nuevaTarea.appendChild(divBotones);

        listaTareas.appendChild(nuevaTarea);

        nuevaTareaInput.value = "";

    }else{
        alert("No se puede agregar una tarea vacía");
    }
})