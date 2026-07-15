export const GRUPOS = [
  { id: "domesticos", nombre: "Domésticos", icono: "🐾", fondo: "linear-gradient(135deg, #f5af19, #f12711)" },
  { id: "granja",     nombre: "Granja",     icono: "🐮", fondo: "linear-gradient(135deg, #a8e063, #56ab2f)" },
  { id: "selva",      nombre: "Selva",      icono: "🦁", fondo: "linear-gradient(135deg, #1a512e, #0d3b1e)" },
  { id: "marinos",    nombre: "Marinos",    icono: "🐬", fondo: "linear-gradient(135deg, #00b4db, #0083b0)" },
  { id: "todos",      nombre: "Todos",      icono: "🌟", fondo: "linear-gradient(135deg, #667eea, #764ba2)" }
];

export const ANIMALES = [
  { id: "perro",    nombre: "Perro",    grupo: "domesticos", emoji: "🐶", sonido: "perro.mp3" },
  { id: "gato",     nombre: "Gato",     grupo: "domesticos", emoji: "🐱", sonido: "gato.mp3" },
  { id: "pez",      nombre: "Pez",      grupo: "domesticos", emoji: "🐟", sonido: "pez.mp3" },
  { id: "conejo",   nombre: "Conejo",   grupo: "domesticos", emoji: "🐰", sonido: null },
  { id: "tortuga",  nombre: "Tortuga",  grupo: "domesticos", emoji: "🐢", sonido: null },
  { id: "loro",     nombre: "Loro",     grupo: "domesticos", emoji: "🦜", sonido: "loro.mp3" },

  { id: "vaca",     nombre: "Vaca",     grupo: "granja", emoji: "🐮", sonido: "vaca.mp3" },
  { id: "oveja",    nombre: "Oveja",    grupo: "granja", emoji: "🐑", sonido: "oveja.mp3" },
  { id: "caballo",  nombre: "Caballo",  grupo: "granja", emoji: "🐴", sonido: "caballo.mp3" },
  { id: "cerdo",    nombre: "Cerdo",    grupo: "granja", emoji: "🐷", sonido: "cerdo.mp3" },
  { id: "gallina",  nombre: "Gallina",  grupo: "granja", emoji: "🐔", sonido: "gallina.mp3" },
  { id: "pato",     nombre: "Pato",     grupo: "granja", emoji: "🦆", sonido: "pato.mp3" },

  { id: "leon",     nombre: "León",     grupo: "selva", emoji: "🦁", sonido: "leon.mp3" },
  { id: "elefante", nombre: "Elefante", grupo: "selva", emoji: "🐘", sonido: "elefante.mp3" },
  { id: "mono",     nombre: "Mono",     grupo: "selva", emoji: "🐒", sonido: "mono.mp3" },
  { id: "jirafa",   nombre: "Jirafa",   grupo: "selva", emoji: "🦒", sonido: null },
  { id: "tigre",    nombre: "Tigre",    grupo: "selva", emoji: "🐯", sonido: "tigre.mp3" },
  { id: "cebra",    nombre: "Cebra",    grupo: "selva", emoji: "🦓", sonido: null },

  { id: "delfin",   nombre: "Delfín",   grupo: "marinos", emoji: "🐬", sonido: "delfin.mp3" },
  { id: "ballena",  nombre: "Ballena",  grupo: "marinos", emoji: "🐋", sonido: "ballena.mp3" },
  { id: "pez-payaso", nombre: "Pez Payaso", grupo: "marinos", emoji: "🐠", sonido: null },
  { id: "tortuga-marina", nombre: "Tortuga Marina", grupo: "marinos", emoji: "🐢", sonido: null },
  { id: "foca",     nombre: "Foca",     grupo: "marinos", emoji: "🦭", sonido: "foca.mp3" }
];
