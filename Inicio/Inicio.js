const link = document.createElement('div');
link.id = "links";

const titulo = document.createElement("h2");
titulo.id = "titulo"
titulo.innerText = "MI MEJOR ANIO: 2019";
link.appendChild(titulo);

const intro = document.createElement("h3");
intro.id = "intro";
intro.innerText = "El otro diaaaa...Estaba recibiendo mi clase de sistemas y tecnologias web y nos propusieron hacer como laboratorio una pagina web que contase una historia de nosotro o inventada. Este fue el resultado..."
link.appendChild(intro);

const lista = document.createElement("ol");
lista.id="lista";
link.appendChild(lista);

const l1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "../graduacion/graduacion.html";
a1.innerText = "Mi Graduacion 2018";
l1.appendChild(a1);
lista.appendChild(l1);

const l2 = document.createElement("li");
const a2 = document.createElement("a");
a2.href = "../1ercancion/primerCancion.html";
a2.innerText = "Mi Primer Cancion";
l2.appendChild(a2);
lista.appendChild(l2);

const l3 = document.createElement("li");
const a3 = document.createElement("a");
a3.href = "../trenzas/trenzas.html";
a3.innerText = "El dia que intente algo nuevo...";
l3.appendChild(a3);
lista.appendChild(l3);

const l4 = document.createElement("li");
const a4 = document.createElement("a");
a4.href = "../carro/Carro.html";
a4.innerText = "A mejorar el carro se ha dicho";
l4.appendChild(a4);
lista.appendChild(l4);

const l5 = document.createElement("li");
const a5 = document.createElement("a");
a5.href = "../badBunny/badBunny.html";
a5.innerText = "EL MEJOR CONCIERTO";
l5.appendChild(a5);
lista.appendChild(l5);

const l6 = document.createElement("li");
const a6 = document.createElement("a");
a6.href = "../halloween/halloween.html";
a6.innerText = "Una fiesta para recordar";
l6.appendChild(a6);
lista.appendChild(l6);

const l7 = document.createElement("li");
const a7 = document.createElement("a");
a7.href = "../disparos/disparos.html";
a7.innerText = "Vamos a reventar a los blancos";
l7.appendChild(a7);
lista.appendChild(l7);

const l8 = document.createElement("li");
const a8 = document.createElement("a");
a8.href = "../buki/elbuki.html";
a8.innerText = "Una noche para recordar";
l8.appendChild(a8);
lista.appendChild(l8);

const l9 = document.createElement("li");
const a9 = document.createElement("a");
a9.href = "../ohana/Ohana.html";
a9.innerText = "Ma Family";
l9.appendChild(a9);
lista.appendChild(l9);

const l10 = document.createElement("li");
const a10 = document.createElement("a");
a10.href = "../2dacancion/segundaCancion.html";
a10.innerText = "Empieza algo grande";
l10.appendChild(a10);
lista.appendChild(l10);

const br1 = document.createElement("br")
lista.appendChild(br1);
const br2 = document.createElement("br")
lista.appendChild(br2);
const br3 = document.createElement("br")
lista.appendChild(br3);
const br4 = document.createElement("br")
lista.appendChild(br4);
const br5 = document.createElement("br")
lista.appendChild(br5);

const lista1 = document.createElement("ul");
lista1.id = "lista1";
link.appendChild(lista1);

const l11 = document.createElement("li");
const a11 = document.createElement("a")
a11.href = "https://www.instagram.com/cotto5201/";
a11.innerText = "Instagram Personal";
l11.appendChild(a11);
lista1.appendChild(l11);

const l12 = document.createElement("li");
const a12 = document.createElement("a")
a12.href = "https://www.instagram.com/cotto5201/";
a12.innerText = "Instagram Personal";
l12.appendChild(a12);
lista1.appendChild(l12);

const label = document.createElement("label");
label.id = "pagina"
label.innerText = "Pagina 0  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "0%";
progress.value = 0;
progress.max = 100;

const footer = document.createElement("footer");
footer.id = "foot";

const p1 = document.createElement("p");
p1.innerText = "Javier Alejandro Cotto Argueta";
footer.appendChild(p1);

const p2 = document.createElement("p");
footer.appendChild(p2);

const a13 = document.createElement("a");
a13.href= "cot19324@uvg.edu.gt";
a13.innerText = "cot19324@uvg.edu.gt";
footer.appendChild(a13);

document.getElementById("cuerpo").appendChild(link);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);
document.getElementById("cuerpo").appendChild(footer);
