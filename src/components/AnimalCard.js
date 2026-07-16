speechSynthesis.getVoices();

class AnimalCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    const emoji = this.getAttribute("emoji");
    const nombre= this.getAttribute("nombre");
    const imagen= this.getAttribute("imagen");
    const sonido= this.getAttribute("sonido");
    this.shadowRoot.innerHTML= `
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
          <img src="${imagen}" alt="${emoji}">
        </div>
        <div class="actions">
          <button id="voz">🔊 Nombre</button>
          <button id="sonido">🎶 Sonido</button>
        </div>
      </div>
      `;

    this.shadowRoot.getElementById("voz").addEventListener("click", () => {
      speechSynthesis.cancel();

      const msg = new SpeechSynthesisUtterance(nombre);
      msg.lang = "es-ES";

      const voces = speechSynthesis.getVoices();
      const voz = voces.find(v => v.name.includes("Laura") && v.lang.startsWith("es"));
      if (voz) msg.voice = voz;

      msg.pitch = 1.4;
      msg.rate = 0.8;
      speechSynthesis.speak(msg);
    });

    this.shadowRoot.getElementById("sonido").addEventListener("click", () => {
      if (!sonido) return;
      const audio = new Audio(sonido);
      audio.volume = 0.7;
      audio.play();
    });
  }
}
customElements.define("animal-card", AnimalCard);

export {AnimalCard};
