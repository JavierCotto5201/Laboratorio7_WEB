const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/carro.jpg";
imagen.width = "450";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Mi papa me queria dar un regalo por mi cumpleanios, por lo que me llevo a escogerle nuevos aros a mi carro. Fue un gran y tardado viaje. Fuimos a la terminal a buscar entre varios puestos de aros de llantas y aros donde algunos se querian tontaer a uno y otros donde estaban algo feo para el carro. Al final encontramos los indicados. Nos los colocaron los trabajadores con las herramientas respectivas, y pues mi carro quedo bien chilero. Un dato curioso es que los aros son mas anchos que las llantas por lo que se salen :D."
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
label.innerText = "Pagina 4  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "40%";
progress.value = 40;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);
