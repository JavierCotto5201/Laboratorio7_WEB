const div = document.createElement("div");

const imagen = document.createElement("img");
imagen.src = "../imagenes/graduacion.jpg";
imagen.width = "300";
alt="";
div.appendChild(imagen);

const p = document.createElement("p");
p.innerText = "Mi 2018 fue un gran año. Empece con el primer ultimo dia de colegio, una caravana super alegre, con mariachis, corriendo por todo el colegio, haciendo ruidos con bubucelas, quemando cuetes y más de algun compañero de goma me pude encontrar. El año fue lleno de alegrias como la ultima interaulas donde quedamos 2do tristemente, el ultimo mercadito, el dia country, los ultimos actos civicos, y la ultima fiesta de gala dentro del colegio. Mi super peda de mi cumpleaños donde todos terminamos muertos al final:). Puedo decir que me la pase super bien dentro de este año pero lo que más disfrute fue la semana de graduandos y posteriormente la graduacion. La semana de graduandos estuvo muy interesante, pues nos disfrazamos de militares, piratas, sicarios y obviamente todos esos dias nos fuimos ha hacer desmadre y celebrar a la casa de algun compañero. Llego el dia de la graduación que se hizo en un salon del Camino Real y donde hubieron muchas risas, sonrisas y alguna que otra lagrima por parte de los estudiantes y padres. Tambien mi regalo fue lo mejor, pues me dieron mi actual carro un Jetta 2014 SE"
div.appendChild(p);

const detail = document.createElement("details")
const summary = document.createElement("summary")
summary.innerText = "DIA DE PIRATAS"
detail.appendChild(summary);
div.appendChild(detail);

const imagen1 = document.createElement("img");
imagen1.src = "../imagenes/piratas.jpg";
imagen1.width = "300";
alt="";
detail.appendChild(imagen1);

const br = document.createElement("br");
div.appendChild(br);

const detail1 = document.createElement("details")
const summary1 = document.createElement("summary")
summary1.innerText = "DIA DE SICARIOS"
detail1.appendChild(summary1);
div.appendChild(detail1);

const imagen2 = document.createElement("img");
imagen2.src = "../imagenes/sicarios.jpg";
imagen2.width = "300";
alt="";
detail1.appendChild(imagen2);


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
label.innerText = "Pagina 1  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "10%";
progress.value = 10;
progress.max = 100;

document.getElementById("cuerpo").appendChild(div);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);