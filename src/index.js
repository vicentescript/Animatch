console.log("🐾 Animatch ready!");
import "./components/AnimalCard.js";
import "./components/AnimalDeck.js";
import { ANIMALES } from "./data/animales.js";

const deck = document.querySelector("animal-deck");
deck.animales = ANIMALES;

