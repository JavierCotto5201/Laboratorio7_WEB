(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var t=e.g.document;if(!a&&t&&(t.currentScript&&(a=t.currentScript.src),!a)){var n=t.getElementsByTagName("script");n.length&&(a=n[n.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=e.p+"src/imagenes/ halloween.jpg",t=document.createElement("div"),n=document.createElement("img");n.src=a,n.width="350",t.appendChild(n);const r=document.createElement("p");r.innerText="Era la semana de Halloween, con mis cuates no habiamos adquirido ninguna entrada para alguna que otra fiesta, por lo que tuvimos la idea de hacer una fiesta en mi casa. Hicimos cooperacha para comprar lo que ibamos a tomar, los premios(botellas de alcohol) para el mejor disfrazado y llame a mi amigo el que producia música si queria hacer un concierto dentro de mi casa, pues el trabajaba en The Box y hacia conciertos ahi, y el accedio. Fue una fiesta super loca, donde la mayoria termino mal, pero alegre",t.appendChild(r);const i=document.createElement("ul"),o=document.createElement("li"),c=document.createElement("a");c.href="../Inicio/Inicio.html",c.innerText="Regreso a pagina pricipal",o.appendChild(c),i.appendChild(o),t.appendChild(i);const l=document.createElement("label");l.id="pagina",l.innerText="Pagina 6  \t";const d=document.createElement("progress");d.id="file",d.innerText="60%",d.value=60,d.max=100,document.getElementById("cuerpo8").appendChild(t),document.getElementById("cuerpo8").appendChild(l),document.getElementById("cuerpo8").appendChild(d)})();