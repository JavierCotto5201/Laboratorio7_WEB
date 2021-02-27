const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/ohana.jpg";
imagen.width = "500";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "El dia 20 de diciembre de el año 2019, celebrabamos el cumpleaños de uno de mis mejores amigos, y pues nos juntamos en su casa para tirar party. Ese dia llevamos todos lo que ibamos a tomar, jugamos beer pong, stacks, kings, todo el juego que implicase tomar, y nos tomamos una foto al final, para recordar lo que fue esa fiesta y lo alegre que la pasamos."
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
label.innerText = "Pagina 9  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "90%";
progress.value = 90;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);