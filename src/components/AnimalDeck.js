import { GRUPOS } from "../data/animales.js";

class AnimalDeck extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._animales = [];
    this._indice = 0;
  }

  connectedCallback() {
    this.render();
    this.animarEntrada();
    this.agregarEventos();
  }

  set animales(lista) {
    this._animales = this.aleatorizar([...lista]);
    this._indice = 0;
    this.render();
    this.animarEntrada();
    this.agregarEventos();
    this.actualizarFondo();
  }

  actualizarFondo() {
    const animal = this._animales[this._indice];
    const grupo = GRUPOS.find(g => g.id === animal.grupo);
    if (!grupo || !grupo.fondoImg) return;

    const bg1 = document.getElementById("bg-1");
    const bg2 = document.getElementById("bg-2");
    if (!bg1 || !bg2) return;

    if (bg1.style.opacity === "") {
      bg1.style.backgroundImage = `url(${grupo.fondoImg})`;
      bg1.style.opacity = "1";
      return;
    }

    const activa = bg1.style.opacity !== "0" ? bg1 : bg2;
    const inactiva = activa === bg1 ? bg2 : bg1;

    inactiva.style.backgroundImage = `url(${grupo.fondoImg})`;
    inactiva.style.opacity = "1";
    activa.style.opacity = "0";
  }

  aleatorizar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    if (this._animales.length === 0) return;

    const animal = this._animales[this._indice];

    this.shadowRoot.innerHTML = `
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
        <h1>${animal.nombre}</h1>
        <div class="row">
          <button id="prev">◀</button>
          <div class="card-container">
            <animal-card emoji="${animal.emoji}" nombre="${animal.nombre}" imagen="${animal.img}" sonido="${animal.sonido || ''}"></animal-card>
          </div>
          <button id="next">▶</button>
        </div>
      </div>
    `;

  }

  siguiente() {
    const container = this.shadowRoot.querySelector(".card-container");
    container.style.transform = "translateX(-100%)";
    container.style.opacity = "0";

    setTimeout(() => {
      this._indice = (this._indice + 1) % this._animales.length;
      this.render();
      this.agregarEventos();
      this.animarEntrada();
      this.actualizarFondo();
    }, 300);
  }

  anterior() {
    const container = this.shadowRoot.querySelector(".card-container");
    container.style.transform = "translateX(100%)";
    container.style.opacity = "0";

    setTimeout(() => {
      this._indice = (this._indice - 1 + this._animales.length) % this._animales.length;
      this.render();
      this.agregarEventos();
      this.animarEntrada();
      this.actualizarFondo();
    }, 300);
  }

  animarEntrada() {
    requestAnimationFrame(() => {
      const container = this.shadowRoot.querySelector(".card-container");
      if (container) {
        container.style.transform = "translateX(0)";
        container.style.opacity = "1";
      }
    });
  }

  agregarEventos() {
    this.shadowRoot.getElementById("prev").addEventListener("click", () => this.anterior());
    this.shadowRoot.getElementById("next").addEventListener("click", () => this.siguiente());
  }
}

customElements.define("animal-deck", AnimalDeck);
