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
    if (grupo) {
      document.body.style.background = grupo.fondo;
    }
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
          <animal-card emoji="${animal.emoji}" nombre="${animal.nombre}"></animal-card>
        </div>
        <div class="controls">
          <button id="prev">◀</button>
          <button id="next">▶</button>
        </div>
      </div>
    `;

    this.shadowRoot.getElementById("prev").addEventListener("click", () => this.anterior());
    this.shadowRoot.getElementById("next").addEventListener("click", () => this.siguiente());

    const card = this.shadowRoot.querySelector(".card-container");
    card.addEventListener("mousedown", (e) => this.iniciarArrastre(e));
    card.addEventListener("touchstart", (e) => this.iniciarArrastre(e), { passive: true });
  }

  siguiente() {
    const container = this.shadowRoot.querySelector(".card-container");
    container.style.transform = "translateX(-100%)";
    container.style.opacity = "0";

    setTimeout(() => {
      this._indice = (this._indice + 1) % this._animales.length;
      this.render();
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

    const card = this.shadowRoot.querySelector(".card-container");
    card.addEventListener("mousedown", (e) => this.iniciarArrastre(e));
    card.addEventListener("touchstart", (e) => this.iniciarArrastre(e), { passive: true });
  }

  iniciarArrastre(e) {
    const punto = e.touches ? e.touches[0] : e;
    this._arrastrando = true;
    this._inicioX = punto.clientX;
    this._desplazamiento = 0;

    const mover = (ev) => {
      if (!this._arrastrando) return;
      const p = ev.touches ? ev.touches[0] : ev;
      this._desplazamiento = p.clientX - this._inicioX;
      const container = this.shadowRoot.querySelector(".card-container");
      container.style.transform = `translateX(${this._desplazamiento}px)`;
      container.style.opacity = `${1 - Math.abs(this._desplazamiento) / 400}`;
    };

    const soltar = () => {
      this._arrastrando = false;
      document.removeEventListener("mousemove", mover);
      document.removeEventListener("mouseup", soltar);
      document.removeEventListener("touchmove", mover);
      document.removeEventListener("touchend", soltar);

      if (Math.abs(this._desplazamiento) > 80) {
        if (this._desplazamiento < 0) this.siguiente();
        else this.anterior();
      } else {
        this.animarEntrada();
      }
    };

    this._arrastrando = true;
    this._inicioX = punto.clientX;
    this._desplazamiento = 0;

    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
    document.addEventListener("touchmove", mover, { passive: true });
    document.addEventListener("touchend", soltar);
  }
}

customElements.define("animal-deck", AnimalDeck);