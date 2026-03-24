let total = 0; 
function actualizarContador() { 
document.getElementById("contador").textContent = "Tareas: " + total; 
} 
function agregar() { 
let input = document.getElementById("inputTarea"); 
let texto = input.value; 
if (texto === "") return; 
let li = document.createElement("li"); 
let span = document.createElement("span"); 
span.textContent = texto; 
// Marcar como completada (clic en texto) 
span.onclick = function () { 
span.classList.toggle("hecho"); 
}; 
// Botón eliminar 
let btn = document.createElement("button"); 
btn.textContent = "X"; 
btn.classList.add("eliminar"); 
btn.onclick = function () { 
li.remove(); 
total--; 
actualizarContador(); 
}; 
li.appendChild(span); 
li.appendChild(btn); 
document.getElementById("lista").appendChild(li); 
total++;
actualizarContador(); 
input.value = ""; 
}
