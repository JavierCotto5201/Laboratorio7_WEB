const vid = document.createElement("div");
vid.id = "vid";

const video = document.createElement("video");
video.id = "vidBunny";
video.src = "../imagenes/benito.mp4";
video.width = "300";
video.autoplay = true;
vid.appendChild(video);

const p3 = document.createElement("p");
p3.innerText ="Este dia lo espere con todo mi ser. Queria ver al conejor malo otra vez, pues lo logre ver el 16/02/2017 en la University party que se hizo por parte de AM promotions. Ese dia me junte en la casa de un cuate y bajamos pro uber a Cayala, a las 12 de la tarde pues nos ibamos a juntar con otros cuates y cuatas. Fuimos a almorzar a taco bellcde Cardales y despues de ello nos fuimos a Jacks a esperar a la hermana de un cuate a mi mejor amigo. Nos pusimos a tomar dentro de jacks mientras esperabamos a las demas personas. Planeabamos llegar más tarde, pues no queriamos pasar tiempo en las canciones de fondo y los artistas de aca. Durante la espera de Bad Bunny, pasaron Sarti Boy y su novia Yessie, otros cantantes guatemaltecos y grupos, antes de Benito paso Sech que dio un buen concierto y llego el momento... Empezo a sonar RLNDT de Bad bunny y sabiamos que iba a salir ya. Mientras cantaba canciones antiguas como Soy Peor, Diles, Tu no vive asi, y similares empezo a llovisnar. A la mitad de su album Xsiempre empezo a llover super fuerte, mientras todos bien tomados y ademas lloviendo, estabamos tirando party. Super chilero el concierto, claramente el mejor concierto al que he asistido."
vid.appendChild(p3);

const lista = document.createElement("ul")
vid.appendChild(lista);

const l1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "../Inicio/Inicio.html";
a1.innerText = "Regreso a pagina pricipal";
l1.appendChild(a1);
lista.appendChild(l1);

const label = document.createElement("label");
label.id = "pagina"
label.innerText = "Pagina 5  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "50%";
progress.value = 50;
progress.max = 100;

document.getElementById("cuerpo").appendChild(vid);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);