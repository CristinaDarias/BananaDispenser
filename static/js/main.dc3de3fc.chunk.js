(this.webpackJsonpu10p01b=this.webpackJsonpu10p01b||[]).push([[0],{30:function(e,t,n){},53:function(e,t,n){e.exports=n(94)},58:function(e,t,n){},59:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(14),r=n.n(l),i=(n(58),n(8)),c=(n(59),n(15)),d=n(16),s=n(19),u=n(17),m=n(20),g=n(22),p=n.n(g),y=g.initializeApp({apiKey:"AIzaSyDbwVKS4mZ_87-QbS4NGGyGiuJn-fOJ9sw",authDomain:"u10p01b-apilol.firebaseapp.com",databaseURL:"https://u10p01b-apilol.firebaseio.com",projectId:"u10p01b-apilol",storageBucket:"u10p01b-apilol.appspot.com",messagingSenderId:"522854679561",appId:"1:522854679561:web:6bf4ea57e3c480071364d8"});var v=function(){document.getElementById("registrado").style.display="none",document.getElementById("registradoTlfn").style.display="none",document.getElementById("registro").style.display="none",document.getElementById("OtrosLogs").style.display="none",document.getElementById("verificacion").style.display="none",document.getElementById("Logged").style.display="block",document.getElementById("Info").innerHTML="",document.getElementById("saludo").style.display="flex",document.getElementById("championPage").style.display="block"},E=(n(30),/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/),h=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"registrar",value:function(){var e=document.getElementById("Correo").value,t=document.getElementById("Pass").value,n="";E.test(e)?h.test(t)?y.auth().createUserWithEmailAndPassword(e,t).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("La contrase\xf1a es debil"):alert(n),console.log(e)})).then((function(e){if(null!=e){document.getElementById("Correo").value="",document.getElementById("Pass").value="";var t=e.user;document.getElementById("saludo").innerHTML="Bienvenido  ".concat(t.email),v()}})):n="Contrase\xf1a introducida no v\xe1lida, la longitud debe tener entre 8 y 15 caracteres con al menos una may\xfascula, una min\xfascula, un n\xfamero y 1 caracter especial":n="Correo electronico no valido",document.getElementById("Info").innerHTML=n}},{key:"registered",value:function(){document.getElementById("registrado").style.display="flex",document.getElementById("registro").style.display="none",document.getElementById("OtrosLogs").style.display="flex",document.getElementById("Info").innerHTML=" ",document.getElementById("saludo").innerHTML=" "}},{key:"render",value:function(){return o.a.createElement("div",{id:"login"},o.a.createElement("div",{id:"registro"},o.a.createElement("label",{for:"Correo"},"Correo electr\xf3nico"),o.a.createElement("input",{id:"Correo",type:"text"}),o.a.createElement("label",{for:"Pass"},"Contrase\xf1a"),o.a.createElement("input",{id:"Pass",type:"password"}),o.a.createElement("button",{class:"separa",onClick:this.registrar},"Reg\xedstrate"),o.a.createElement("label",{id:"yaRegistradoTexto"},"O si ya eres un BananaDispenser"),o.a.createElement("button",{onClick:this.registered},"Pincha aqu\xed")),o.a.createElement("p",{id:"Info"}))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),console.log("VALOR PROPS EN EL CONSTRUCTOR: "+e.isLogedIn),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLogedIn:e.isLogedIn},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"acceder",value:function(){var e=this,t=document.getElementById("Usuario").value,n=document.getElementById("Contrasena").value;y.auth().signInWithEmailAndPassword(t,n).catch((function(e){"auth/invalid-email"===e.code&&(document.getElementById("Info").innerHTML="Correo no v\xe1lido."),console.log(e)})).then((function(t){if(null!=t){var n=t.user;document.getElementById("saludo").innerHTML="Bienvenid@ ".concat(n.email),console.log("VALOR DE PROPS: "+e.props),v()}else document.getElementById("Info").innerHTML="Usuario o contrase\xf1a incorrectos."}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"registrado"},o.a.createElement("label",{for:"Usuario"},"Correo electr\xf3nico"),o.a.createElement("input",{id:"Usuario",type:"text"}),o.a.createElement("label",{for:"Contrasena"},"Contrase\xf1a"),o.a.createElement("input",{id:"Contrasena",type:"password"}),o.a.createElement("button",{class:"separa",onClick:this.acceder},"Acceder"))}}]),t}(a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"phoneAuth",value:function(){document.getElementById("recaptcha-container").style.display="inline";var e=document.getElementById("telefono").value;if(9!==e.length||isNaN(e))document.getElementById("Info").innerHTML="No has introducido un numero de telefono valido";else{var t=document.getElementById("prefijo").value;e="+".concat(t).concat(e),window.recaptchaVerifier=new p.a.auth.RecaptchaVerifier("recaptcha-container");var n=window.recaptchaVerifier;y.auth().signInWithPhoneNumber(e,n).then((function(e){document.getElementById("recaptcha-container").style.display="none",document.getElementById("verificacion").style.display="flex",window.confirmationResult=e})).catch((function(e){console.log(e),window.recaptchaVerifier=new p.a.auth.RecaptchaVerifier("recaptcha-container")}))}}},{key:"codeVerify",value:function(){var e=document.getElementById("Codigo").value;window.confirmationResult.confirm(e).then((function(e){document.getElementById("verificacion").style.display="none",document.getElementById("saludo").innerHTML="Bienvenido ".concat(document.getElementById("telefono").value),v()})).catch((function(e){console.log(e)}))}},{key:"volver",value:function(){document.getElementById("registradoTlfn").style.display="none",document.getElementById("OtrosLogs").style.display="flex",document.getElementById("acceder").style.display="flex"}},{key:"render",value:function(){return o.a.createElement("div",{id:"accedertlfn"},o.a.createElement("div",{id:"registradoTlfn"},o.a.createElement("div",null,o.a.createElement("label",{for:"telefono"},"Introduzca su numero de telefono: "),o.a.createElement("select",{id:"prefijo"},o.a.createElement("option",{value:"34"},"+34"),o.a.createElement("option",{value:"33"},"+33"),o.a.createElement("option",{value:"39"},"+39"))),o.a.createElement("input",{class:"separapoco",type:"text",id:"telefono",min:"0"}),o.a.createElement("button",{class:"separa",onClick:this.phoneAuth},"Enviar SMS"),o.a.createElement("button",{class:"separa",onClick:this.volver},"Volver"),o.a.createElement("p",{id:"recaptcha-container"}),o.a.createElement("div",{id:"verificacion"},o.a.createElement("label",{for:"Codigo"},"Codigo del sms"),o.a.createElement("input",{type:"text",id:"Codigo"}),o.a.createElement("button",{class:"separa",onClick:this.codeVerify},"Comprobar"))))}}]),t}(a.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"gitHubSignin",value:function(){var e=new p.a.auth.GithubAuthProvider;y.auth().signInWithPopup(e).then((function(e){var t=e.user;document.getElementById("saludo").innerHTML="Bienvenido ".concat(t.email),v()})).catch((function(e){var t=e.message;alert(t),console.log(e)}))}},{key:"twitterSignin",value:function(){var e=new p.a.auth.TwitterAuthProvider;y.auth().signInWithPopup(e).then((function(e){var t=e.user;document.getElementById("saludo").innerHTML="Bienvenido ".concat(t.displayName),v()})).catch((function(e){var t=e.message;alert(t),console.log(e)}))}},{key:"telefonoSignin",value:function(){document.getElementById("registradoTlfn").style.display="flex",document.getElementById("OtrosLogs").style.display="none",document.getElementById("acceder").style.display="none"}},{key:"crear",value:function(){document.getElementById("registrado").style.display="none",document.getElementById("registradoTlfn").style.display="none",document.getElementById("OtrosLogs").style.display="none",document.getElementById("registro").style.display="",document.getElementById("Info").innerHTML=" "}},{key:"render",value:function(){return o.a.createElement("div",{id:"OtrosLogs"},o.a.createElement("button",{id:"botonGitHub",onClick:this.gitHubSignin}),o.a.createElement("button",{id:"botonTwitter",onClick:this.twitterSignin}),o.a.createElement("button",{id:"botonTelefono",onClick:this.telefonoSignin}),o.a.createElement("button",{onClick:this.crear},"Nuevo usuario"))}}]),t}(a.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"logout",value:function(){document.getElementById("Correo").value="",document.getElementById("Pass").value="",document.getElementById("Usuario").value="",document.getElementById("Contrasena").value="",document.getElementById("Codigo").value="",document.getElementById("telefono").value="",y.auth().signOut().then((function(){document.getElementById("Info").innerHTML="Ha cerrado su sesi\xf3n.",document.getElementById("registrado").style.display="none",document.getElementById("registradoTlfn").style.display="none",document.getElementById("registro").style.display="flex",document.getElementById("OtrosLogs").style.display="none",document.getElementById("Logged").style.display="none",document.getElementById("championPage").style.display="none",document.getElementById("saludo").style.display="none",document.getElementById("saludo").innerHTML=""})).catch(console.log)}},{key:"render",value:function(){return o.a.createElement("div",{id:"logout"},o.a.createElement("div",null,o.a.createElement("button",{id:"Logged",onClick:this.logout},"Logout")))}}]),t}(a.Component);function w(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(C,null),o.a.createElement(I,null),o.a.createElement(B,null))}var O=n(25),A=n.n(O),j=n(33);n(86);var T=function(e,t){var n=window.google;n.charts.load("current",{packages:["corechart"]});var a="card".concat(e.id),l="botonCard".concat(e.id),r="img".concat(e.id),i="cardBody".concat(e.id);function c(){var t=document.getElementById("botonCard".concat(e.id));"Saber menos"===t.innerText?(t.innerText="Saber m\xe1s",function(){var t=document.getElementById(a),n=document.getElementById("cardInfoContainer".concat(e.id)),o=document.getElementById(l),c=document.getElementById(r),d=document.getElementById(i);t.style.setProperty("width","13rem"),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),d.style.setProperty("justify-content","center"),d.style.removeProperty("align-items"),c.style.width="inherit",o.width="max-content",o.style.removeProperty("align-self"),function(e){for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(n)}(),function(){var e=document.getElementById(a),t=e.nextElementSibling,n=e.previousElementSibling;for(;t;)t.style.display="initial",t=t.nextElementSibling;for(;n;)n.style.display="initial",n=n.previousElementSibling}()):(!function(){var e=document.getElementById(a),t=e.nextElementSibling,n=e.previousElementSibling;for(;t;)t.style.display="none",t=t.nextElementSibling;for(;n;)n.style.display="none",n=n.previousElementSibling}(),function(){var t=document.getElementById(a),o=document.getElementById(l),c=document.getElementById(r),d=document.getElementById(i);t.style.width="100%",t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","row"),d.style.setProperty("align-items","start"),c.style.width="13rem",o.width="max-content",o.style.setProperty("align-self","center"),A.a.get("https://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion/".concat(e.id,".json")).then((function(t){console.log("EL valor de la api es: "),n.charts.load("current",{packages:["corechart"]});var a=t.data.data[e.id],o=document.getElementById("cardInfoContainer".concat(e.id)),l=document.createElement("div");l.id="infoCampeon".concat(e.id);var r=document.createElement("div");r.style.width="100%",l.appendChild(r),o.appendChild(l),A.a.get("https://universe-meeps.leagueoflegends.com/v1/assets/videos/".concat(e.id.toLowerCase(),"-splashvideo.webm")).then((function(t){console.log("Respuesta al buscar el video: ");var n=document.createElement("video");n.id="video".concat(e.id),n.autoplay=!0,n.loop=!0,n.preload=!0,n.src="https://universe-meeps.leagueoflegends.com/v1/assets/videos/".concat(e.id.toLowerCase(),"-splashvideo.webm"),r.appendChild(n)})).catch((function(e){if(console.log("Error al buscar el video: "),console.log(e.response.status),404===e.response.status){var t=document.createElement("p");t.innerText="No posee v\xeddeo.",r.appendChild(t)}}));var i=document.createElement("p");i.id="tags".concat(e.id);var c=!0,d=[];a.tags.forEach((function(e){d.push(e),!0===c?(i.innerText+="".concat(e," "),c=!1):i.innerText+=" ".concat(e," "),i.innerText.trim()})),l.appendChild(i),d.forEach((function(t){var n=document.createElement("img");n.src="./images/img/".concat(t.toLowerCase(),".png"),n.id="tagImg".concat(e.id).concat(t),l.appendChild(n)}));var s=document.createElement("p");s.id="lore".concat(e.id),s.innerText=a.lore,l.appendChild(s);var u=document.createElement("div");u.id="tipsContainer".concat(e.id),l.appendChild(u);var m=document.createElement("div");m.id="allyTips".concat(e.id),u.appendChild(m);var g=document.createElement("div");g.id="enemyTips".concat(e.id),u.appendChild(g);var p=document.createElement("div");p.id="infoSkills".concat(e.id),l.appendChild(p);var y=document.createElement("div");y.id="graphContainer".concat(e.id),l.appendChild(y);var v=document.createElement("div");v.id="graphStats".concat(e.id),y.appendChild(v);var E=document.createElement("div");E.id="graphCd".concat(e.id),y.appendChild(E);var h=document.createElement("h4");h.innerText="Consejos si es tu aliad@",m.appendChild(h);var f=document.createElement("p");f.innerText=a.allytips,m.appendChild(f);var b=document.createElement("h4");b.innerText="Consejos si es tu enemig@",g.appendChild(b);var C=document.createElement("p");C.innerText=a.enemytips,g.appendChild(C);var I=a.stats,B=a.spells,w=[];w.push("Vida","Velocidad de movimiento","Armadura","Resistencia m\xe1gica","Rango de ataque","Da\xf1o de ataque"),w.push("Vida inicial",I.hp),n.charts.setOnLoadCallback(function(t){var a=n.visualization.arrayToDataTable([["Estad\xedsticas","Valor",{role:"style"}],["Vida",t.hp,"#13D100"],["Armadura",t.armor,"#9D9D9D"],["Resistencia M\xe1gica",t.spellblock,"#9849F1"],["Da\xf1o de Ataque",t.attackdamage,"#FA2222"],["Rango de Ataque",t.attackrange,"#FAA715"],["Velocidad de Movimiento",t.movespeed,"#159CFA"]]);new n.visualization.DataView(a).setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]),new n.visualization.ColumnChart(document.getElementById("graphStats".concat(e.id))).draw(a,{title:"Estad\xedsticas del personaje",height:430,bar:{groupWidth:"95%"},legend:{position:"none"}})}(I)),n.charts.setOnLoadCallback(function(t){console.log("Nombre de habilidad: "+t[0].name);var a=n.visualization.arrayToDataTable([["Mana"," Rango 1"," Rango 2"," Rango 3"," Rango 4"," Rango 5"],[" ".concat(t[0].name," - Q "),t[0].cooldown[0],t[0].cooldown[1],t[0].cooldown[2],t[0].cooldown[3],t[0].cooldown[4]],[" ".concat(t[1].name," - W "),t[1].cooldown[0],t[1].cooldown[1],t[1].cooldown[2],t[1].cooldown[3],t[1].cooldown[4]],[" ".concat(t[2].name," - E "),t[2].cooldown[0],t[2].cooldown[1],t[2].cooldown[2],t[2].cooldown[3],t[2].cooldown[4]],[" ".concat(t[3].name," - R "),t[3].cooldown[0],t[3].cooldown[1],t[3].cooldown[2],t[3].cooldown[3],0]]);new n.visualization.DataView(a).setColumns([0,1,{calc:"stringify",sourceColumn:1,type:"string",role:"annotation"},2]),new n.visualization.BarChart(document.getElementById("graphCd".concat(e.id))).draw(a,{title:"Enfriamiento de Habilidades por Rango",width:600,height:300,chartArea:{width:"50%",height:"90%"},colors:["#b0120a","#ffab91","#7BFF19","#097FF0","#F009D0"],hAxis:{title:"Enfriamiento",minValue:0},vAxis:{title:"Habilidades"}})}(B));var O=document.createElement("div");O.id="passiveDiv".concat(e.id),p.appendChild(O);var j=document.createElement("img");j.setAttribute("src","https://ddragon.leagueoflegends.com/cdn/10.4.1/img/passive/".concat(a.passive.image.full)),j.id="imgPassive".concat(e.id),O.appendChild(j);var T=document.createElement("p");T.innerText="".concat(a.passive.name," (Pasiva) - ").concat(a.passive.description),T.style.margin="0.5em",T.style.width="90%",O.appendChild(T),B.forEach((function(t){var n=document.createElement("div");n.style.width="100%",n.id="divSpell".concat(e.id),p.appendChild(n);var a=document.createElement("img");a.setAttribute("src","http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/".concat(t.id,".png")),a.id="imgSpell".concat(t.id),n.appendChild(a);var o=document.createElement("p");o.innerText="".concat(t.name," - ").concat(t.description,"."),o.style.width="90%",o.style.margin="0.5em",n.appendChild(o)}))}))}(),t.innerText="Saber menos")}return o.a.createElement(j.a,{text:"white",className:"text-center",id:a},o.a.createElement(j.a.Img,{variant:"top",src:t,id:r}),o.a.createElement(j.a.Body,{id:i},o.a.createElement(j.a.Title,null,e.id),o.a.createElement("div",{id:"cardInfoContainer".concat(e.id)}),o.a.createElement("button",{id:l,onClick:function(){return c()}},"Saber m\xe1s")))},k={arrayActual:[],arrayClavesActual:[],arrayOriginal:[],arrayClavesOriginal:[],ordenActual:""},x=a.createContext(),L=function(e,t){switch(t.type){case"inicio":return console.log("ENTRA A INICIO: "),k.arrayActual=t.payload,k.arrayOriginal=t.payload,k.arrayClavesOriginal=Object.keys(k.arrayOriginal),console.log("Valor claves original inicio: "),console.log(k.arrayClavesOriginal),k.arrayClavesActual=k.arrayClavesOriginal,k.ordenActual="az",console.log(t.payload),k.arrayActual;case"reset":return k.arrayActual=k.arrayOriginal,k.arrayActual;case"filtraNombre":var n=Object.keys(k.arrayOriginal).filter((function(e){return e.toLowerCase().includes(t.payload.toLowerCase())}));return k.arrayActual=[],k.arrayClavesActual=n,console.log("Array filtrado: "),console.log(k.arrayClavesActual),k.arrayClavesActual.forEach((function(e){k.arrayActual.push(k.arrayOriginal[e])})),console.log("NUEVO VALOR array actual: "),console.log(k.arrayActual),console.log(k),k.arrayActual;case"ordenaCampeones":return console.log("Array claves actual en ordena "),console.log(k.arrayClavesActual.reverse()),k.arrayActual=[],k.ordenActual=t.payload,"az"===k.ordenActual?k.arrayClavesActual.forEach((function(e){k.arrayActual.unshift(k.arrayOriginal[e])})):k.arrayClavesActual.forEach((function(e){k.arrayActual.push(k.arrayOriginal[e])})),console.log("Nuevo array "),console.log(k.arrayActual),k.arrayActual}};function S(e){var t=a.useReducer(L,k),n=Object(i.a)(t,2),o={state:n[0],dispatch:n[1]};return a.createElement(x.Provider,{value:o},e.children)}x.Consumer;var P=a.createContext();P.Consumer,n(28),n(97);n(89);function R(){var e=!0,t=o.a.useContext(x),n=t.state,l=t.dispatch,r=Object(a.useState)(n),c=Object(i.a)(r,2),d=(c[0],c[1]);return Object(a.useEffect)((function(){!0===e&&(A.a.get("https://ddragon.leagueoflegends.com/cdn/10.4.1/data/es_ES/champion.json").then((function(e){l({type:"inicio",payload:e.data.data}),d(n)})),e=!1)}),[]),o.a.createElement("div",{id:"championsC"},(console.log("Estado en el return: "),console.log(n),Object.entries(n).map((function(e){return T(e[1],"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+e[1].id+"_0.jpg")}))))}n(90);function V(e){var t=o.a.useContext(x),n=(t.state,t.dispatch),l=Object(a.useState)(""),r=Object(i.a)(l,2),c=r[0],d=r[1];return o.a.createElement("div",{id:"nameFilterDiv"},o.a.createElement("label",null,"Introduzca nombre de campe\xf3n: "),o.a.createElement("input",{value:c,onChange:function(e){d(e.target.value),n({type:"filtraNombre",payload:e.target.value.trim()})}}))}n(91);function z(e){var t=o.a.useContext(x),n=(t.state,t.dispatch),l=Object(a.useState)(""),r=Object(i.a)(l,2),c=(r[0],r[1]);return o.a.createElement("form",{id:"nameSortForm"},o.a.createElement("label",null,"Ordenar por: "),o.a.createElement("label",{for:"az"},"A-Z"),o.a.createElement("input",{type:"radio",id:"az",value:"A-Z",defaultChecked:!0,name:"sort",onChange:function(e){c(e.target.value),n({type:"ordenaCampeones",payload:e.target.value})}}),o.a.createElement("label",{for:"az"},"Z-A"),o.a.createElement("input",{type:"radio",id:"az",value:"Z-A",name:"sort",onChange:function(e){c(e.target.value),n({type:"ordenaCampeones",payload:e.target.value})}}))}var H=n(51);n(92);function M(e,t){var n=Object(a.useState)(),l=Object(i.a)(n,2);l[0],l[1];return o.a.createElement("div",{id:"contenedorFiltros"},o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{src:"./img/LogoRedondoBananaDispenser.png",roundedCircle:!0}),o.a.createElement(V,null),o.a.createElement(z,null)))}n(93);function D(){return o.a.createElement("div",{id:"championPage"},o.a.createElement(S,null,o.a.createElement(M,null),o.a.createElement(R,null)))}var N,F,Z=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],a.createElement(a.Fragment,null,a.createElement(w,null),a.createElement("p",{id:"saludo"}),a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));N=o.a.createElement(Z,null),F=document.getElementById("root"),r.a.render(N,F),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.dc3de3fc.chunk.js.map