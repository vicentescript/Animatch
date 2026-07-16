const BASE = import.meta.env.BASE_URL;

export const GRUPOS = [
  { id: "domesticos", nombre: "Domésticos", icono: "🐾", fondo: "linear-gradient(135deg, #f5af19, #f12711)", fondoImg: `${BASE}assets/images/fondos/domesticos.webp` },
  { id: "granja",     nombre: "Granja",     icono: "🐮", fondo: "linear-gradient(135deg, #a8e063, #56ab2f)", fondoImg: `${BASE}assets/images/fondos/granja.webp` },
  { id: "selva",      nombre: "Selva",      icono: "🦁", fondo: "linear-gradient(135deg, #1a512e, #0d3b1e)", fondoImg: `${BASE}assets/images/fondos/salvajes.webp` },
  { id: "marinos",    nombre: "Marinos",    icono: "🐬", fondo: "linear-gradient(135deg, #00b4db, #0083b0)", fondoImg: `${BASE}assets/images/fondos/marinos.webp` },
  { id: "todos",      nombre: "Todos",      icono: "🌟", fondo: "linear-gradient(135deg, #667eea, #764ba2)", fondoImg: null }
];

export const ANIMALES = [
  { id: "perro",    nombre: "Perro",    grupo: "domesticos", emoji: "🐶", img: `${BASE}assets/images/animales/perro.webp`, sonido: "perro.mp3" },
  { id: "gato",     nombre: "Gato",     grupo: "domesticos", emoji: "🐱", img: `${BASE}assets/images/animales/gato.webp`, sonido: "gato.mp3" },
  { id: "pez",      nombre: "Pez",      grupo: "domesticos", emoji: "🐟", img: `${BASE}assets/images/animales/pez.webp`, sonido: "pez.mp3" },
  { id: "conejo",   nombre: "Conejo",   grupo: "domesticos", emoji: "🐰", img: `${BASE}assets/images/animales/conejo.webp`, sonido: null },
  { id: "tortuga",  nombre: "Tortuga",  grupo: "domesticos", emoji: "🐢", img: `${BASE}assets/images/animales/tortuga.webp`, sonido: null },
  { id: "loro",     nombre: "Loro",     grupo: "domesticos", emoji: "🦜", img: `${BASE}assets/images/animales/loro.webp`, sonido: "loro.mp3" },

  { id: "vaca",     nombre: "Vaca",     grupo: "granja", emoji: "🐮", img: `${BASE}assets/images/animales/vaca.webp`, sonido: "vaca.mp3" },
  { id: "oveja",    nombre: "Oveja",    grupo: "granja", emoji: "🐑", img: `${BASE}assets/images/animales/oveja.webp`, sonido: "oveja.mp3" },
  { id: "caballo",  nombre: "Caballo",  grupo: "granja", emoji: "🐴", img: `${BASE}assets/images/animales/caballo.webp`, sonido: "caballo.mp3" },
  { id: "cerdo",    nombre: "Cerdo",    grupo: "granja", emoji: "🐷", img: `${BASE}assets/images/animales/cerdo.webp`, sonido: "cerdo.mp3" },
  { id: "gallina",  nombre: "Gallina",  grupo: "granja", emoji: "🐔", img: `${BASE}assets/images/animales/gallina.webp`, sonido: "gallina.mp3" },
  { id: "pato",     nombre: "Pato",     grupo: "granja", emoji: "🦆", img: `${BASE}assets/images/animales/pato.webp`, sonido: "pato.mp3" },

  { id: "leon",     nombre: "León",     grupo: "selva", emoji: "🦁", img: `${BASE}assets/images/animales/leon.webp`, sonido: "leon.mp3" },
  { id: "elefante", nombre: "Elefante", grupo: "selva", emoji: "🐘", img: `${BASE}assets/images/animales/elefante.webp`, sonido: "elefante.mp3" },
  { id: "mono",     nombre: "Mono",     grupo: "selva", emoji: "🐒", img: `${BASE}assets/images/animales/mono.webp`, sonido: "mono.mp3" },
  { id: "jirafa",   nombre: "Jirafa",   grupo: "selva", emoji: "🦒", img: `${BASE}assets/images/animales/jirafa.webp`, sonido: null },
  { id: "tigre",    nombre: "Tigre",    grupo: "selva", emoji: "🐯", img: `${BASE}assets/images/animales/tigre.webp`, sonido: "tigre.mp3" },
  { id: "cebra",    nombre: "Cebra",    grupo: "selva", emoji: "🦓", img: `${BASE}assets/images/animales/cebra.webp`, sonido: null },

  { id: "delfin",   nombre: "Delfín",   grupo: "marinos", emoji: "🐬", img: `${BASE}assets/images/animales/delfin.webp`, sonido: "delfin.mp3" },
  { id: "ballena",  nombre: "Ballena",  grupo: "marinos", emoji: "🐋", img: `${BASE}assets/images/animales/ballena.webp`, sonido: "ballena.mp3" },
  { id: "pez-payaso", nombre: "Pez Payaso", grupo: "marinos", emoji: "🐠", img: `${BASE}assets/images/animales/ppayaso.webp`, sonido: null },
  { id: "tortuga-marina", nombre: "Tortuga Marina", grupo: "marinos", emoji: "🐢", img: `${BASE}assets/images/animales/tmarina.webp`, sonido: null },
  { id: "foca",     nombre: "Foca",     grupo: "marinos", emoji: "🦭", img: `${BASE}assets/images/animales/foca.webp`, sonido: "foca.mp3" }
];
