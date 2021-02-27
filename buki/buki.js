const vid = document.createElement("div");
vid.id = "vid";

const video = document.createElement("video");
video.id = "vidBuki";
video.src = "../imagenes/buki.mp4";
video.width = "450";
video.autoplay = true;
vid.appendChild(video);

const p3 = document.createElement("p");
p3.innerText ="Como todos los anios, en Guatemala es costumbre que Marco Antonio Solis viaje y haga su concierto a finales de anio. Pues este anio no era la excepcion, y lo mejor fue que me llevaron mis papas. Fuimos al concierto ubicados en una mesa y canto todas las canciones que lo llevaron al exito. Estuvimos cantando, bailando, tomando y disfrutando ese gran concierto que realizo El Buki."
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
label.innerText = "Pagina 8  \t";

const progress = document.createElement("progress");
progress.id = "file";
progress.innerText = "80%";
progress.value = 80;
progress.max = 100;

document.getElementById("cuerpo").appendChild(vid);
document.getElementById("cuerpo").appendChild(label);
document.getElementById("cuerpo").appendChild(progress);
