(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var n=e.g.document;if(!a&&n&&(n.currentScript&&(a=n.currentScript.src),!a)){var t=n.getElementsByTagName("script");t.length&&(a=t[t.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=e.p+"src/imagenes/ carro.jpg",n=document.createElement("div"),t=document.createElement("img");t.src=a,t.width="450",n.appendChild(t);const r=document.createElement("p");r.innerText="Mi papa me queria dar un regalo por mi cumpleanios, por lo que me llevo a escogerle nuevos aros a mi carro. Fue un gran y tardado viaje. Fuimos a la terminal a buscar entre varios puestos de aros de llantas y aros donde algunos se querian tontaer a uno y otros donde estaban algo feo para el carro. Al final encontramos los indicados. Nos los colocaron los trabajadores con las herramientas respectivas, y pues mi carro quedo bien chilero. Un dato curioso es que los aros son mas anchos que las llantas por lo que se salen :D.",n.appendChild(r);const o=document.createElement("ul"),i=document.createElement("li"),c=document.createElement("a");c.href="../Inicio/Inicio.html",c.innerText="Regreso a pagina pricipal",i.appendChild(c),o.appendChild(i),n.appendChild(o);const l=document.createElement("label");l.id="pagina",l.innerText="Pagina 4  \t";const s=document.createElement("progress");s.id="file",s.innerText="40%",s.value=40,s.max=100,document.getElementById("cuerpo5").appendChild(n),document.getElementById("cuerpo5").appendChild(l),document.getElementById("cuerpo5").appendChild(s)})();