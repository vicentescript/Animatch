class AnimalCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    const emoji = this.getAttribute("emoji");
    const nombre= this.getAttribute("nombre");
    const imagen= this.getAttribute("imagen");
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
  }
}
customElements.define("animal-card", AnimalCard);

export {AnimalCard};
