const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/cancion1.jpg";
imagen.width = "350";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Empezando el anio, uno de mis amigos que produce musica me contacto para darme la idea de retomar un proyecto que tuvimos en 2017, sobre sacar una cancion. Dentro de mis ideas estaba realizar una canción de TRAP pues en ese tiempo escuchaba mucho el genero. Empece a escribir la letra, el a producir el beat y logramos sacar una cancion que a mi parecer si hubieramos tenido mejores recursos como microfono y más experiencia a la hora de mezclar, hubiera sido mejor de lo que fue."
div.appendChild(p);

const audio = document.createElement("audio")
audio.controls = true;

const source = document.createElement("source");
source.src = "../imagenes/cancion.mpeg";
source.type ="audio/ogg";
audio.appendChild(source);
div.appendChild(audio);

const br1 = document.createElement("br")
div.appendChild(br1);
const br2 = document.createElement("br")
div.appendChild(br2);

const lista = document.createElement("ul");

const l1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "https://www.instagram.com/silegray/";
a1.innerText = "Productor del beat";
l1.appendChild(a1);
lista.appendChild(l1);

const l2 = document.createElement("li");
const a2 = document.createElement("a");
a2.href = "https://www.instagram.com/kistudiogt/";
a2.innerText = "Disenador de la portada";
l2.appendChild(a2);
lista.appendChild(l2);

const l3 = document.createElement("li");
const a3 = document.createElement("a");
a3.href = "../Inicio/Inicio.html";
a3.innerText = "Regreso a pagina pricipal";
l3.appendChild(a3);
lista.appendChild(l3);

div.appendChild(lista);

const label = document.createElement("label");
label.id = "pagina"
label.innerText = "Pagina 2  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "20%";
progress.value = 20;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);