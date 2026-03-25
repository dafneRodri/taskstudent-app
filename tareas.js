let tareas = [];
let filtroActual = "todas";

function agregar() {
    const input = document.getElementById("inputTarea");
    const texto = input.value.trim();

    if (texto === "") return;

    tareas.push({ texto, hecho: false });
    input.value = "";

    render();
}

function render() {
    const lista = document.getElementById("lista");
    const vacio = document.getElementById("vacio");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";

    let tareasFiltradas = tareas;

    if (filtroActual === "pendientes") {
        tareasFiltradas = tareas.filter(t => !t.hecho);
    } else if (filtroActual === "completadas") {
        tareasFiltradas = tareas.filter(t => t.hecho);
    }

    if (tareasFiltradas.length === 0) {
        vacio.style.display = "block";
    } else {
        vacio.style.display = "none";
    }

    tareasFiltradas.forEach((tarea, index) => {
        const li = document.createElement("li");

        if (tarea.hecho) {
            li.classList.add("hecho");
        }

        li.innerHTML =´
            <div class="acciones">
                <button class="check" onclick="toggle(${index})">✔</button>
                <span>${tarea.texto}</span>
            </div>
            <button class="eliminar" onclick="eliminar(${index})">X</button> 
         ´;

        lista.appendChild(li);
    });

    contador.textContent = ´${tareas.length} tareas´;
}

function toggle(index) {
    tareas[index].hecho = !tareas[index].hecho;
    render();
}

function eliminar(index) {
    tareas.splice(index, 1);
    render();
}

function filtrar(tipo) {
    filtroActual = tipo;
    render();
}

function limpiar() {
    tareas = [];
    render();
}
