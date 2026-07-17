(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=null;document.addEventListener(`stop-sound`,()=>{e&&=(e.pause(),null)}),speechSynthesis.getVoices();var t=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){let t=this.getAttribute(`emoji`),n=this.getAttribute(`nombre`),r=this.getAttribute(`imagen`),i=this.getAttribute(`sonido`);this.shadowRoot.innerHTML=`
      <style>
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .card {
          width: 320px;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 30px 30px rgba(0,0,1,1);
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .actions {
          display: flex;
          gap: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
          cursor: pointer;
          background: rgba(255,255,255,0.2);
          color: #fff;
          backdrop-filter: blur(4px);
        }
        button:hover {
          background: rgba(255,255,255,0.4);
        }
        @media (max-width: 600px) {
          .card {
            width: min(85vw, 320px);
            height: auto;
            aspect-ratio: 1;
          }
          button {
            font-size: 1.2rem;
            padding: 0.4rem 0.8rem;
          }
        }
      </style>
      <div class="wrapper">
        <div class="card">
          <img src="${r}" alt="${t}">
        </div>
        <div class="actions">
          <button id="voz">🔊 Nombre</button>
          <button id="sonido">🎶 Sonido</button>
        </div>
      </div>
      `,this.shadowRoot.getElementById(`voz`).addEventListener(`click`,()=>{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(n);e.lang=`es-ES`;let t=speechSynthesis.getVoices().find(e=>e.name.includes(`Laura`)&&e.lang.startsWith(`es`));t&&(e.voice=t),e.pitch=1.8,e.rate=.7,speechSynthesis.speak(e)}),this.shadowRoot.getElementById(`sonido`).addEventListener(`click`,()=>{i&&(e&&=(e.pause(),null),e=new Audio(i),e.volume=.7,e.play())})}};customElements.define(`animal-card`,t);var n=`/Animatch/`,r=[{id:`domesticos`,nombre:`Domésticos`,icono:`🐾`,fondo:`linear-gradient(135deg, #f5af19, #f12711)`,fondoImg:`${n}assets/images/fondos/domesticos.webp`},{id:`granja`,nombre:`Granja`,icono:`🐮`,fondo:`linear-gradient(135deg, #a8e063, #56ab2f)`,fondoImg:`${n}assets/images/fondos/granja.webp`},{id:`selva`,nombre:`Selva`,icono:`🦁`,fondo:`linear-gradient(135deg, #1a512e, #0d3b1e)`,fondoImg:`${n}assets/images/fondos/salvajes.webp`},{id:`marinos`,nombre:`Marinos`,icono:`🐬`,fondo:`linear-gradient(135deg, #00b4db, #0083b0)`,fondoImg:`${n}assets/images/fondos/marinos.webp`},{id:`todos`,nombre:`Todos`,icono:`🌟`,fondo:`linear-gradient(135deg, #667eea, #764ba2)`,fondoImg:null}],i=e=>`${n}assets/sounds/${e}.mp3`,a=[{id:`perro`,nombre:`Perro`,grupo:`domesticos`,emoji:`🐶`,img:`${n}assets/images/animales/perro.webp`,sonido:i(`perro`)},{id:`gato`,nombre:`Gato`,grupo:`domesticos`,emoji:`🐱`,img:`${n}assets/images/animales/gato.webp`,sonido:i(`gato`)},{id:`pez`,nombre:`Pez`,grupo:`domesticos`,emoji:`🐟`,img:`${n}assets/images/animales/pez.webp`,sonido:i(`pez`)},{id:`conejo`,nombre:`Conejo`,grupo:`domesticos`,emoji:`🐰`,img:`${n}assets/images/animales/conejo.webp`,sonido:i(`conejo`)},{id:`tortuga`,nombre:`Tortuga`,grupo:`domesticos`,emoji:`🐢`,img:`${n}assets/images/animales/tortuga.webp`,sonido:i(`tortuga`)},{id:`loro`,nombre:`Loro`,grupo:`domesticos`,emoji:`🦜`,img:`${n}assets/images/animales/loro.webp`,sonido:i(`loro`)},{id:`vaca`,nombre:`Vaca`,grupo:`granja`,emoji:`🐮`,img:`${n}assets/images/animales/vaca.webp`,sonido:i(`vaca`)},{id:`oveja`,nombre:`Oveja`,grupo:`granja`,emoji:`🐑`,img:`${n}assets/images/animales/oveja.webp`,sonido:i(`oveja`)},{id:`caballo`,nombre:`Caballo`,grupo:`granja`,emoji:`🐴`,img:`${n}assets/images/animales/caballo.webp`,sonido:i(`caballo`)},{id:`cerdo`,nombre:`Cerdo`,grupo:`granja`,emoji:`🐷`,img:`${n}assets/images/animales/cerdo.webp`,sonido:i(`cerdo`)},{id:`gallina`,nombre:`Gallina`,grupo:`granja`,emoji:`🐔`,img:`${n}assets/images/animales/gallina.webp`,sonido:i(`gallina`)},{id:`pato`,nombre:`Pato`,grupo:`granja`,emoji:`🦆`,img:`${n}assets/images/animales/pato.webp`,sonido:i(`pato`)},{id:`leon`,nombre:`León`,grupo:`selva`,emoji:`🦁`,img:`${n}assets/images/animales/leon.webp`,sonido:i(`leon`)},{id:`elefante`,nombre:`Elefante`,grupo:`selva`,emoji:`🐘`,img:`${n}assets/images/animales/elefante.webp`,sonido:i(`elefante`)},{id:`mono`,nombre:`Mono`,grupo:`selva`,emoji:`🐒`,img:`${n}assets/images/animales/mono.webp`,sonido:i(`mono`)},{id:`jirafa`,nombre:`Jirafa`,grupo:`selva`,emoji:`🦒`,img:`${n}assets/images/animales/jirafa.webp`,sonido:i(`jirafa`)},{id:`tigre`,nombre:`Tigre`,grupo:`selva`,emoji:`🐯`,img:`${n}assets/images/animales/tigre.webp`,sonido:i(`tigre`)},{id:`cebra`,nombre:`Cebra`,grupo:`selva`,emoji:`🦓`,img:`${n}assets/images/animales/cebra.webp`,sonido:i(`cebra`)},{id:`delfin`,nombre:`Delfín`,grupo:`marinos`,emoji:`🐬`,img:`${n}assets/images/animales/delfin.webp`,sonido:i(`delfin`)},{id:`ballena`,nombre:`Ballena`,grupo:`marinos`,emoji:`🐋`,img:`${n}assets/images/animales/ballena.webp`,sonido:i(`ballena`)},{id:`pez-payaso`,nombre:`Pez Payaso`,grupo:`marinos`,emoji:`🐠`,img:`${n}assets/images/animales/ppayaso.webp`,sonido:i(`pez`)},{id:`tortuga-marina`,nombre:`Tortuga Marina`,grupo:`marinos`,emoji:`🐢`,img:`${n}assets/images/animales/tmarina.webp`,sonido:i(`tortuga`)},{id:`foca`,nombre:`Foca`,grupo:`marinos`,emoji:`🦭`,img:`${n}assets/images/animales/foca.webp`,sonido:i(`foca`)}],o=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this._animales=[],this._indice=0}connectedCallback(){this.render(),this.animarEntrada(),this.agregarEventos()}set animales(e){this._animales=this.aleatorizar([...e]),this._indice=0,this.render(),this.animarEntrada(),this.agregarEventos(),this.actualizarFondo()}actualizarFondo(){let e=this._animales[this._indice],t=r.find(t=>t.id===e.grupo);if(!t||!t.fondoImg)return;let n=document.getElementById(`bg-1`),i=document.getElementById(`bg-2`);n||(n=document.createElement(`div`),n.id=`bg-1`,document.body.prepend(n)),i||(i=document.createElement(`div`),i.id=`bg-2`,document.body.prepend(i));let a=n.style.opacity===`0`?i:n,o=a===n?i:n;o.style.backgroundImage=`url(${t.fondoImg})`,o.style.opacity=`1`,a.style.opacity=`0`}aleatorizar(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}render(){if(this._animales.length===0)return;let e=this._animales[this._indice];this.shadowRoot.innerHTML=`
      <style>
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        h1 {
          font-family: 'Playwrite ID', cursive;
          font-size: 3.5rem;
          margin: 0;
          color: #fff;
          text-shadow: 0 4px 8px rgba(1,1,1,1);
        }
        .row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .card-container {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .row button {
          width: 80px;
          height: 80px;
          border: none;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          background: rgba(255,255,255,0.2);
          color: #fff;
          transition: background 0.2s;
        }
        .row button:hover {
          background: rgba(255,255,255,0.4);
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 2.2rem;
          }
          .row {
            gap: 0.8rem;
          }
          .row button {
            width: 55px;
            height: 55px;
            font-size: 1.2rem;
          }
        }
        .btn-salir {
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          background: transparent;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-salir:hover {
          background: rgba(255,255,255,0.1);
        }
      </style>
      <div class="wrapper">
        <h1>${e.nombre}</h1>
        <div class="row">
          <button id="prev">◀</button>
          <div class="card-container">
            <animal-card emoji="${e.emoji}" nombre="${e.nombre}" imagen="${e.img}" sonido="${e.sonido||``}"></animal-card>
          </div>
          <button id="next">▶</button>
        </div>
        <button id="reset" class="btn-salir">Salir</button>
      </div>
    `,this.shadowRoot.getElementById(`reset`)?.addEventListener(`click`,()=>{document.getElementById(`juego`).hidden=!0,document.getElementById(`inicio`).hidden=!1;let e=document.getElementById(`bg-1`),t=document.getElementById(`bg-2`);e&&(e.style.backgroundImage=`url(/Animatch/assets/images/fondos/fondo.webp)`),t&&(t.style.opacity=`0`)})}siguiente(){document.dispatchEvent(new CustomEvent(`stop-sound`));let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(-100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice+1)%this._animales.length,this.render(),this.agregarEventos(),this.animarEntrada(),this.actualizarFondo()},300)}anterior(){document.dispatchEvent(new CustomEvent(`stop-sound`));let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice-1+this._animales.length)%this._animales.length,this.render(),this.agregarEventos(),this.animarEntrada(),this.actualizarFondo()},300)}animarEntrada(){requestAnimationFrame(()=>{let e=this.shadowRoot.querySelector(`.card-container`);e&&(e.style.transform=`translateX(0)`,e.style.opacity=`1`)})}agregarEventos(){this.shadowRoot.getElementById(`prev`).addEventListener(`click`,()=>this.anterior()),this.shadowRoot.getElementById(`next`).addEventListener(`click`,()=>this.siguiente())}};customElements.define(`animal-deck`,o);var s=`/Animatch/`,c=document.createElement(`div`);c.id=`bg-1`,c.style.backgroundImage=`url(${s}assets/images/fondos/fondo.webp)`,c.style.opacity=`1`,document.body.prepend(c);var l=`todos`;r.forEach(e=>{let t=document.createElement(`button`);t.className=`grupo-btn`+(e.id===`todos`?` activo`:``),t.textContent=`${e.icono} ${e.nombre}`,t.dataset.grupo=e.id,t.addEventListener(`click`,()=>{document.querySelectorAll(`.grupo-btn`).forEach(e=>e.classList.remove(`activo`)),t.classList.add(`activo`),l=e.id}),document.getElementById(`grupos`).appendChild(t)}),document.getElementById(`jugar`).addEventListener(`click`,()=>{document.getElementById(`inicio`).hidden=!0,document.getElementById(`juego`).hidden=!1;let e=l===`todos`?a:a.filter(e=>e.grupo===l);document.querySelector(`animal-deck`).animales=e});