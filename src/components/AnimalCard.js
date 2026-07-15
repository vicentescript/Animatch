class AnimalCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    const emoji = this.getAttribute("emoji");
    const nombre= this.getAttribute("nombre");
    this.shadowRoot.innerHTML= `
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
        .emoji {
          font-size: 120px;
          display: block;
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
        <h1>${emoji} ${nombre}</h1>
        <div class="card">
          <span class="emoji">${emoji}</span>
        </div>
        <div class="actions">
          <button id="voz">🔊 Nombre</button>
          <button id="sonido">🎶 Sonido</button>
        </div>
      </article>
      `;
  }
}
customElements.define("animal-card", AnimalCard);

export {AnimalCard};
