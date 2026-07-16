(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),speechSynthesis.getVoices();var e=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}connectedCallback(){let e=this.getAttribute(`emoji`),t=this.getAttribute(`nombre`),n=this.getAttribute(`imagen`),r=this.getAttribute(`sonido`);this.shadowRoot.innerHTML=`
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
          <img src="${n}" alt="${e}">
        </div>
        <div class="actions">
          <button id="voz">🔊 Nombre</button>
          <button id="sonido">🎶 Sonido</button>
        </div>
      </div>
      `,this.shadowRoot.getElementById(`voz`).addEventListener(`click`,()=>{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.lang=`es-ES`;let n=speechSynthesis.getVoices().find(e=>e.name.includes(`Laura`)&&e.lang.startsWith(`es`));n&&(e.voice=n),e.pitch=1.4,e.rate=.8,speechSynthesis.speak(e)}),this.shadowRoot.getElementById(`sonido`).addEventListener(`click`,()=>{if(!r)return;let e=new Audio(r);e.volume=.7,e.play()})}};customElements.define(`animal-card`,e);var t=`/Animatch/`,n=[{id:`domesticos`,nombre:`Domésticos`,icono:`🐾`,fondo:`linear-gradient(135deg, #f5af19, #f12711)`,fondoImg:`${t}assets/images/fondos/domesticos.webp`},{id:`granja`,nombre:`Granja`,icono:`🐮`,fondo:`linear-gradient(135deg, #a8e063, #56ab2f)`,fondoImg:`${t}assets/images/fondos/granja.webp`},{id:`selva`,nombre:`Selva`,icono:`🦁`,fondo:`linear-gradient(135deg, #1a512e, #0d3b1e)`,fondoImg:`${t}assets/images/fondos/salvajes.webp`},{id:`marinos`,nombre:`Marinos`,icono:`🐬`,fondo:`linear-gradient(135deg, #00b4db, #0083b0)`,fondoImg:`${t}assets/images/fondos/marinos.webp`},{id:`todos`,nombre:`Todos`,icono:`🌟`,fondo:`linear-gradient(135deg, #667eea, #764ba2)`,fondoImg:null}],r=e=>`${t}assets/sounds/${e}.mp3`,i=[{id:`perro`,nombre:`Perro`,grupo:`domesticos`,emoji:`🐶`,img:`${t}assets/images/animales/perro.webp`,sonido:r(`perro`)},{id:`gato`,nombre:`Gato`,grupo:`domesticos`,emoji:`🐱`,img:`${t}assets/images/animales/gato.webp`,sonido:r(`gato`)},{id:`pez`,nombre:`Pez`,grupo:`domesticos`,emoji:`🐟`,img:`${t}assets/images/animales/pez.webp`,sonido:r(`pez`)},{id:`conejo`,nombre:`Conejo`,grupo:`domesticos`,emoji:`🐰`,img:`${t}assets/images/animales/conejo.webp`,sonido:r(`conejo`)},{id:`tortuga`,nombre:`Tortuga`,grupo:`domesticos`,emoji:`🐢`,img:`${t}assets/images/animales/tortuga.webp`,sonido:r(`pez`)},{id:`loro`,nombre:`Loro`,grupo:`domesticos`,emoji:`🦜`,img:`${t}assets/images/animales/loro.webp`,sonido:r(`loro`)},{id:`vaca`,nombre:`Vaca`,grupo:`granja`,emoji:`🐮`,img:`${t}assets/images/animales/vaca.webp`,sonido:r(`vaca`)},{id:`oveja`,nombre:`Oveja`,grupo:`granja`,emoji:`🐑`,img:`${t}assets/images/animales/oveja.webp`,sonido:r(`oveja`)},{id:`caballo`,nombre:`Caballo`,grupo:`granja`,emoji:`🐴`,img:`${t}assets/images/animales/caballo.webp`,sonido:r(`caballo`)},{id:`cerdo`,nombre:`Cerdo`,grupo:`granja`,emoji:`🐷`,img:`${t}assets/images/animales/cerdo.webp`,sonido:r(`cerdo`)},{id:`gallina`,nombre:`Gallina`,grupo:`granja`,emoji:`🐔`,img:`${t}assets/images/animales/gallina.webp`,sonido:r(`gallina`)},{id:`pato`,nombre:`Pato`,grupo:`granja`,emoji:`🦆`,img:`${t}assets/images/animales/pato.webp`,sonido:r(`pato`)},{id:`leon`,nombre:`León`,grupo:`selva`,emoji:`🦁`,img:`${t}assets/images/animales/leon.webp`,sonido:r(`leon`)},{id:`elefante`,nombre:`Elefante`,grupo:`selva`,emoji:`🐘`,img:`${t}assets/images/animales/elefante.webp`,sonido:r(`elefante`)},{id:`mono`,nombre:`Mono`,grupo:`selva`,emoji:`🐒`,img:`${t}assets/images/animales/mono.webp`,sonido:r(`mono`)},{id:`jirafa`,nombre:`Jirafa`,grupo:`selva`,emoji:`🦒`,img:`${t}assets/images/animales/jirafa.webp`,sonido:r(`jirafa`)},{id:`tigre`,nombre:`Tigre`,grupo:`selva`,emoji:`🐯`,img:`${t}assets/images/animales/tigre.webp`,sonido:r(`tigre`)},{id:`cebra`,nombre:`Cebra`,grupo:`selva`,emoji:`🦓`,img:`${t}assets/images/animales/cebra.webp`,sonido:r(`cebra`)},{id:`delfin`,nombre:`Delfín`,grupo:`marinos`,emoji:`🐬`,img:`${t}assets/images/animales/delfin.webp`,sonido:r(`delfin`)},{id:`ballena`,nombre:`Ballena`,grupo:`marinos`,emoji:`🐋`,img:`${t}assets/images/animales/ballena.webp`,sonido:r(`ballena`)},{id:`pez-payaso`,nombre:`Pez Payaso`,grupo:`marinos`,emoji:`🐠`,img:`${t}assets/images/animales/ppayaso.webp`,sonido:r(`pez`)},{id:`tortuga-marina`,nombre:`Tortuga Marina`,grupo:`marinos`,emoji:`🐢`,img:`${t}assets/images/animales/tmarina.webp`,sonido:r(`pez`)},{id:`foca`,nombre:`Foca`,grupo:`marinos`,emoji:`🦭`,img:`${t}assets/images/animales/foca.webp`,sonido:r(`foca`)}],a=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this._animales=[],this._indice=0}connectedCallback(){this.render(),this.animarEntrada(),this.agregarEventos()}set animales(e){this._animales=this.aleatorizar([...e]),this._indice=0,this.render(),this.animarEntrada(),this.agregarEventos(),this.actualizarFondo()}actualizarFondo(){let e=this._animales[this._indice],t=n.find(t=>t.id===e.grupo);if(!t||!t.fondoImg)return;let r=document.getElementById(`bg-1`),i=document.getElementById(`bg-2`);if(!r||!i)return;if(r.style.opacity===``){r.style.backgroundImage=`url(${t.fondoImg})`,r.style.opacity=`1`;return}let a=r.style.opacity===`0`?i:r,o=a===r?i:r;o.style.backgroundImage=`url(${t.fondoImg})`,o.style.opacity=`1`,a.style.opacity=`0`}aleatorizar(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}render(){if(this._animales.length===0)return;let e=this._animales[this._indice];this.shadowRoot.innerHTML=`
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
      </div>
    `}siguiente(){let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(-100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice+1)%this._animales.length,this.render(),this.agregarEventos(),this.animarEntrada(),this.actualizarFondo()},300)}anterior(){let e=this.shadowRoot.querySelector(`.card-container`);e.style.transform=`translateX(100%)`,e.style.opacity=`0`,setTimeout(()=>{this._indice=(this._indice-1+this._animales.length)%this._animales.length,this.render(),this.agregarEventos(),this.animarEntrada(),this.actualizarFondo()},300)}animarEntrada(){requestAnimationFrame(()=>{let e=this.shadowRoot.querySelector(`.card-container`);e&&(e.style.transform=`translateX(0)`,e.style.opacity=`1`)})}agregarEventos(){this.shadowRoot.getElementById(`prev`).addEventListener(`click`,()=>this.anterior()),this.shadowRoot.getElementById(`next`).addEventListener(`click`,()=>this.siguiente())}};customElements.define(`animal-deck`,a),console.log(`🐾 Animatch ready!`);var o=document.querySelector(`animal-deck`);o.animales=i;