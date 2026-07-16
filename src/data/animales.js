const BASE = import.meta.env.BASE_URL;

export const GRUPOS = [
  { id: "domesticos", nombre: "Domésticos", icono: "🐾", fondo: "linear-gradient(135deg, #f5af19, #f12711)", fondoImg: `${BASE}assets/images/fondos/domesticos.webp` },
  { id: "granja",     nombre: "Granja",     icono: "🐮", fondo: "linear-gradient(135deg, #a8e063, #56ab2f)", fondoImg: `${BASE}assets/images/fondos/granja.webp` },
  { id: "selva",      nombre: "Selva",      icono: "🦁", fondo: "linear-gradient(135deg, #1a512e, #0d3b1e)", fondoImg: `${BASE}assets/images/fondos/salvajes.webp` },
  { id: "marinos",    nombre: "Marinos",    icono: "🐬", fondo: "linear-gradient(135deg, #00b4db, #0083b0)", fondoImg: `${BASE}assets/images/fondos/marinos.webp` },
  { id: "todos",      nombre: "Todos",      icono: "🌟", fondo: "linear-gradient(135deg, #667eea, #764ba2)", fondoImg: null }
];

const S = name => `${BASE}assets/sounds/${name}.mp3`;

export const ANIMALES = [
  { id: "perro",    nombre: "Perro",    grupo: "domesticos", emoji: "🐶", img: `${BASE}assets/images/animales/perro.webp`, sonido: S("perro") },
  { id: "gato",     nombre: "Gato",     grupo: "domesticos", emoji: "🐱", img: `${BASE}assets/images/animales/gato.webp`, sonido: S("gato") },
  { id: "pez",      nombre: "Pez",      grupo: "domesticos", emoji: "🐟", img: `${BASE}assets/images/animales/pez.webp`, sonido: S("pez") },
  { id: "conejo",   nombre: "Conejo",   grupo: "domesticos", emoji: "🐰", img: `${BASE}assets/images/animales/conejo.webp`, sonido: S("conejo") },
  { id: "tortuga",  nombre: "Tortuga",  grupo: "domesticos", emoji: "🐢", img: `${BASE}assets/images/animales/tortuga.webp`, sonido: S("tortuga") },
  { id: "loro",     nombre: "Loro",     grupo: "domesticos", emoji: "🦜", img: `${BASE}assets/images/animales/loro.webp`, sonido: S("loro") },

  { id: "vaca",     nombre: "Vaca",     grupo: "granja", emoji: "🐮", img: `${BASE}assets/images/animales/vaca.webp`, sonido: S("vaca") },
  { id: "oveja",    nombre: "Oveja",    grupo: "granja", emoji: "🐑", img: `${BASE}assets/images/animales/oveja.webp`, sonido: S("oveja") },
  { id: "caballo",  nombre: "Caballo",  grupo: "granja", emoji: "🐴", img: `${BASE}assets/images/animales/caballo.webp`, sonido: S("caballo") },
  { id: "cerdo",    nombre: "Cerdo",    grupo: "granja", emoji: "🐷", img: `${BASE}assets/images/animales/cerdo.webp`, sonido: S("cerdo") },
  { id: "gallina",  nombre: "Gallina",  grupo: "granja", emoji: "🐔", img: `${BASE}assets/images/animales/gallina.webp`, sonido: S("gallina") },
  { id: "pato",     nombre: "Pato",     grupo: "granja", emoji: "🦆", img: `${BASE}assets/images/animales/pato.webp`, sonido: S("pato") },

  { id: "leon",     nombre: "León",     grupo: "selva", emoji: "🦁", img: `${BASE}assets/images/animales/leon.webp`, sonido: S("leon") },
  { id: "elefante", nombre: "Elefante", grupo: "selva", emoji: "🐘", img: `${BASE}assets/images/animales/elefante.webp`, sonido: S("elefante") },
  { id: "mono",     nombre: "Mono",     grupo: "selva", emoji: "🐒", img: `${BASE}assets/images/animales/mono.webp`, sonido: S("mono") },
  { id: "jirafa",   nombre: "Jirafa",   grupo: "selva", emoji: "🦒", img: `${BASE}assets/images/animales/jirafa.webp`, sonido: S("jirafa") },
  { id: "tigre",    nombre: "Tigre",    grupo: "selva", emoji: "🐯", img: `${BASE}assets/images/animales/tigre.webp`, sonido: S("tigre") },
  { id: "cebra",    nombre: "Cebra",    grupo: "selva", emoji: "🦓", img: `${BASE}assets/images/animales/cebra.webp`, sonido: S("cebra") },

  { id: "delfin",   nombre: "Delfín",   grupo: "marinos", emoji: "🐬", img: `${BASE}assets/images/animales/delfin.webp`, sonido: S("delfin") },
  { id: "ballena",  nombre: "Ballena",  grupo: "marinos", emoji: "🐋", img: `${BASE}assets/images/animales/ballena.webp`, sonido: S("ballena") },
  { id: "pez-payaso", nombre: "Pez Payaso", grupo: "marinos", emoji: "🐠", img: `${BASE}assets/images/animales/ppayaso.webp`, sonido: S("pez") },
  { id: "tortuga-marina", nombre: "Tortuga Marina", grupo: "marinos", emoji: "🐢", img: `${BASE}assets/images/animales/tmarina.webp`, sonido: S("tortuga") },
  { id: "foca",     nombre: "Foca",     grupo: "marinos", emoji: "🦭", img: `${BASE}assets/images/animales/foca.webp`, sonido: S("foca") }
];
