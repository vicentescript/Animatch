import "./components/AnimalCard.js";
import "./components/AnimalDeck.js";
import { GRUPOS, ANIMALES } from "./data/animales.js";

const BASE = import.meta.env.BASE_URL;
const bgInicio = document.createElement("div");
bgInicio.id = "bg-1";
bgInicio.style.backgroundImage = `url(${BASE}assets/images/fondos/fondo.webp)`;
bgInicio.style.opacity = "1";
document.body.prepend(bgInicio);

let grupoActivo = "todos";

GRUPOS.forEach(g => {
  const btn = document.createElement("button");
  btn.className = "grupo-btn" + (g.id === "todos" ? " activo" : "");
  btn.textContent = `${g.icono} ${g.nombre}`;
  btn.dataset.grupo = g.id;
  btn.addEventListener("click", () => {
    document.querySelectorAll(".grupo-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    grupoActivo = g.id;
  });
  document.getElementById("grupos").appendChild(btn);
});

document.getElementById("jugar").addEventListener("click", () => {
  document.getElementById("inicio").hidden = true;
  document.getElementById("juego").hidden = false;

  const filtrados = grupoActivo === "todos"
    ? ANIMALES
    : ANIMALES.filter(a => a.grupo === grupoActivo);

  document.querySelector("animal-deck").animales = filtrados;
});

