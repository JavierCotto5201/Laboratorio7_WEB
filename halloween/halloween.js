const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/halloween.jpg";
imagen.width = "350";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Era la semana de Halloween, con mis cuates no habiamos adquirido ninguna entrada para alguna que otra fiesta, por lo que tuvimos la idea de hacer una fiesta en mi casa. Hicimos cooperacha para comprar lo que ibamos a tomar, los premios(botellas de alcohol) para el mejor disfrazado y llame a mi amigo el que producia música si queria hacer un concierto dentro de mi casa, pues el trabajaba en The Box y hacia conciertos ahi, y el accedio. Fue una fiesta super loca, donde la mayoria termino mal, pero alegre"
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
label.innerText = "Pagina 6  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "60%";
progress.value = 60;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);