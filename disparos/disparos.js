const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/pistola.jpg";
imagen.width = "450";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Habiamos planeado con mi padre ir a disparar al Campo, Tiro y Pesca pues habia adquirido un rifle de 9mm y queriamos probarlo. Fuimos al lugar, esperamos a los amigos de mi padre y empezo la accion. Disparamos varias municiones a los blancos, y logramos probar el rifle de 9mm, la pistola de 9mm y otras pistolas que llevaban los compañeros de mis papas. Luego de eso fuimos a comer a la hacienda real, desde las 9 y salimos a las 3 de la mañana. Durante el dia disparamos terminando con un buen azado y bebida."
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
label.innerText = "Pagina 7  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "70%";
progress.value = 70;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);