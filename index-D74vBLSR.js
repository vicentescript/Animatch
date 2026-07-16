(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){let e=this.getAttribute(`emoji`),t=this.getAttribute(`nombre`),n=this.getAttribute(`imagen`);this.shadowRoot.innerHTML=`
      <style>
        article {
          background: #fff;
          color: #222;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          width: 300px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .card img {
          width: 200px;
          height: 200px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }
        h1 {
          font-size: 1.5rem;
          margin: 0 0 1rem;
        }
        .actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          background: #f0f0f0;
        }
        button:hover {
          background: #ddd;
        }
      </style>
      <article>
        <h1>${e} ${t}</h1>
        <div class="card">
          <img src="${n}" alt="${t}">
        </div>
        <div class="actions">
          <button id="voz">🔊 Nombre</button>
          <button id="sonido">🎶 Sonido</button>
        </div>
      </article>
      `}};customElements.define(`animal-card`,e);var t=`/animatch/`,n=[{id:`domesticos`,nombre:`Domésticos`,icono:`🐾`,fondo:`linear-gradient(135deg, #f5af19, #f12711)`,fondoImg:`${t}assets/images/fondos/domesticos.png`},{id:`granja`,nombre:`Granja`,icono:`🐮`,fondo:`linear-gradient(135deg, #a8e063, #56ab2f)`,fondoImg:`${t}assets/images/fondos/granja.png`},{id:`selva`,nombre:`Selva`,icono:`🦁`,fondo:`linear-gradient(135deg, #1a512e, #0d3b1e)`,fondoImg:`${t}assets/images/fondos/salvajes.png`},{id:`marinos`,nombre:`Marinos`,icono:`🐬`,fondo:`linear-gradient(135deg, #00b4db, #0083b0)`,fondoImg:`${t}assets/images/fondos/marinos.png`},{id:`todos`,nombre:`Todos`,icono:`🌟`,fondo:`linear-gradient(135deg, #667eea, #764ba2)`,fondoImg:null}],r=[{id:`perro`,nombre:`Perro`,grupo:`domesticos`,emoji:`🐶`,img:`${t}assets/images/animales/perro.webp`,sonido:`perro.mp3`},{id:`gato`,nombre:`Gato`,grupo:`domesticos`,emoji:`🐱`,img:`${t}assets/images/animales/gato.webp`,sonido:`gato.mp3`},{id:`pez`,nombre:`Pez`,grupo:`domesticos`,emoji:`🐟`,img:`${t}assets/images/animales/pez.webp`,sonido:`pez.mp3`},{id:`conejo`,nombre:`Conejo`,grupo:`domesticos`,emoji:`🐰`,img:`${t}assets/images/animales/conejo.webp`,sonido:null},{id:`tortuga`,nombre:`Tortuga`,grupo:`domesticos`,emoji:`🐢`,img:`${t}assets/images/animales/tortuga.webp`,sonido:null},{id:`loro`,nombre:`Loro`,grupo:`domesticos`,emoji:`🦜`,img:`${t}assets/images/animales/loro.webp`,sonido:`loro.mp3`},{id:`vaca`,nombre:`Vaca`,grupo:`granja`,emoji:`🐮`,img:`${t}assets/images/animales/vaca.webp`,sonido:`vaca.mp3`},{id:`oveja`,nombre:`Oveja`,grupo:`granja`,emoji:`🐑`,img:`${t}assets/images/animales/oveja.webp`,sonido:`oveja.mp3`},{id:`caballo`,nombre:`Caballo`,grupo:`granja`,emoji:`🐴`,img:`${t}assets/images/animales/caballo.webp`,sonido:`caballo.mp3`},{id:`cerdo`,nombre:`Cerdo`,grupo:`granja`,emoji:`🐷`,img:`${t}assets/images/animales/cerdo.webp`,sonido:`cerdo.mp3`},{id:`gallina`,nombre:`Gallina`,grupo:`granja`,emoji:`🐔`,img:`${t}assets/images/animales/gallina.webp`,sonido:`gallina.mp3`},{id:`pato`,nombre:`Pato`,grupo:`granja`,emoji:`🦆`,img:`${t}assets/images/animales/pato.webp`,sonido:`pato.mp3`},{id:`leon`,nombre:`León`,grupo:`selva`,emoji:`🦁`,img:`${t}assets/images/animales/leon.webp`,sonido:`leon.mp3`},{id:`elefante`,nombre:`Elefante`,grupo:`selva`,emoji:`🐘`,img:`${t}assets/images/animales/elefante.webp`,sonido:`elefante.mp3`},{id:`mono`,nombre:`Mono`,grupo:`selva`,emoji:`🐒`,img:`${t}assets/images/animales/mono.webp`,sonido:`mono.mp3`},{id:`jirafa`,nombre:`Jirafa`,grupo:`selva`,emoji:`🦒`,img:`${t}assets/images/animales/jirafa.webp`,sonido:null},{id:`tigre`,nombre:`Tigre`,grupo:`selva`,emoji:`🐯`,img:`${t}assets/images/animales/tigre.webp`,sonido:`tigre.mp3`},{id:`cebra`,nombre:`Cebra`,grupo:`selva`,emoji:`🦓`,img:`${t}assets/images/animales/cebra.webp`,sonido:null},{id:`delfin`,nombre:`Delfín`,grupo:`marinos`,emoji:`🐬`,img:`${t}assets/images/animales/delfin.webp`,sonido:`delfin.mp3`},{id:`ballena`,nombre:`Ballena`,grupo:`marinos`,emoji:`🐋`,img:`${t}assets/images/animales/ballena.webp`,sonido:`ballena.mp3`},{id:`pez-payaso`,nombre:`Pez Payaso`,grupo:`marinos`,emoji:`🐠`,img:`${t}assets/images/animales/ppayaso.webp`,sonido:null},{id:`tortuga-marina`,nombre:`Tortuga Marina`,grupo:`marinos`,emoji:`🐢`,img:`${t}assets/images/animales/tmarina.webp`,sonido:null},{id:`foca`,nombre:`Foca`,grupo:`marinos`,emoji:`🦭`,img:`${t}assets/images/animales/foca.webp`,sonido:`foca.mp3`}],i=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this._animales=[],this._indice=0}connectedCallback(){this.render(),this.animarEntrada(),this.agregarEventos()}set animales(e){this._animales=this.aleatorizar([...e]),this._indice=0,this.render(),this.animarEntrada(),this.agregarEventos(),this.actualizarFondo()}actualizarFondo(){let e=this._animales[this._indice],t=n.find(t=>t.id===e.grupo);t&&t.fondoImg&&(document.body.style.background=`url(${t.fondoImg}) center/cover no-repeat`)}aleatorizar(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}render(){if(this._animales.length===0)return;let e=this._animales[this._indice];this.shadowRoot.innerHTML=`
      <style>
        .deck {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .card-container {
          transition: transform 0.3s ease, opacity 0.3s ease;
          user-select: none;
        }
        .controls {
          display: flex;
          gap: 2rem;
        }
        .controls button {
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          background: rgba(255,255,255,0.2);
          color: #fff;
          transition: background 0.2s;
        }
        .controls button:hover {
          background: rgba(255,255,255,0.4);
        }
      </style>
      <div class="deck">
        <div class="card-container">
          <animal-card emoji="${e.emoji}" nombre="${e.nombre}" imagen="${e.img}"></animal-card>
        </div>
        <div class="controls">
          <button id="prev">◀</button>
          <button id="next">▶</button>
        </div>
      </div>
    `,this.shadowRoot.getElementById(`prev`).addEventListener(`click`,()=>this.anterior()),this.shadowRoot.getElementById(`next`).addEventListener(`click`,()=>this.siguiente());let t=this.shadowRoot.querySelector(`.card-container`);t.addEventListener(`mousedown`,e=>this.iniciarArrastre(e)),t.addEventListener(`touchstart`,e=>this.iniciarArrastre(e),{passive:!0})}siguiente(){let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(-100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice+1)%this._animales.length,this.render(),this.animarEntrada(),this.actualizarFondo()},300)}anterior(){let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice-1+this._animales.length)%this._animales.length,this.render(),this.animarEntrada(),this.actualizarFondo()},300)}animarEntrada(){requestAnimationFrame(()=>{let e=this.shadowRoot.querySelector(`.card-container`);e&&(e.style.transform=`translateX(0)`,e.style.opacity=`1`)})}agregarEventos(){this.shadowRoot.getElementById(`prev`).addEventListener(`click`,()=>this.anterior()),this.shadowRoot.getElementById(`next`).addEventListener(`click`,()=>this.siguiente());let e=this.shadowRoot.querySelector(`.card-container`);e.addEventListener(`mousedown`,e=>this.iniciarArrastre(e)),e.addEventListener(`touchstart`,e=>this.iniciarArrastre(e),{passive:!0})}iniciarArrastre(e){let t=e.touches?e.touches[0]:e;this._arrastrando=!0,this._inicioX=t.clientX,this._desplazamiento=0;let n=e=>{if(!this._arrastrando)return;let t=e.touches?e.touches[0]:e;this._desplazamiento=t.clientX-this._inicioX;let n=this.shadowRoot.querySelector(`.card-container`);n.style.transform=`translateX(${this._desplazamiento}px)`,n.style.opacity=`${1-Math.abs(this._desplazamiento)/400}`},r=()=>{this._arrastrando=!1,document.removeEventListener(`mousemove`,n),document.removeEventListener(`mouseup`,r),document.removeEventListener(`touchmove`,n),document.removeEventListener(`touchend`,r),Math.abs(this._desplazamiento)>80?this._desplazamiento<0?this.siguiente():this.anterior():this.animarEntrada()};this._arrastrando=!0,this._inicioX=t.clientX,this._desplazamiento=0,document.addEventListener(`mousemove`,n),document.addEventListener(`mouseup`,r),document.addEventListener(`touchmove`,n,{passive:!0}),document.addEventListener(`touchend`,r)}};customElements.define(`animal-deck`,i),console.log(`🐾 Animatch ready!`);var a=document.querySelector(`animal-deck`);a.animales=r;