const div = document.createElement("div");

const a2 = document.createElement("a");
a2.href = "https://fanlink.to/illbebacksoon";

const imagen = document.createElement("img");
imagen.src = "../imagenes/sadj.jpg";
imagen.width = "350";
alt="";
a2.appendChild(imagen);
div.appendChild(a2);

const p = document.createElement("p");
p.innerText = "Aprovechando un poco mi laboratorio, comparto mi Segunda Cancion, lanzada en este 2021, donde se vienen muchas proximas canciones, y donde espero romperla con un album multigenero a fin de anio."
div.appendChild(p);

const lista = document.createElement("ul");
const l1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "../Inicio/Inicio.html";
a1.innerText = "Regreso a pagina pricipal";
l1.appendChild(a1);
lista.appendChild(l1);
div.appendChild(lista);

const label = document.createElement("label");
label.id = "pagina"
label.innerText = "Pagina 10  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "100%";
progress.value = 100;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);