const WA_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style="flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const PRODUCTS = [
  // ═══════════════════════════════════════
  // COMBOS
  // ═══════════════════════════════════════
  {
    id: 1,
    name: "Combo Premium Matero",
    price: 87980,
    category: "combos",
    image: "images/1.jpg",
    description: "Caja de presentación + Yerba Canarias 1 kilo + Bombillón alpaca y bronce + Camionero cincelado futbolero",
    featured: true,
    tags: ["combo", "regalo", "premium", "futbol"]
  },
  {
    id: 2,
    name: "Combo Boca Juniors Grabado",
    price: 28800,
    category: "combos",
    image: "images/2.jpg",
    description: "Caja de presentación + Camionero algarrobo grabado + Bombilla chata",
    featured: true,
    tags: ["combo", "boca", "futbol", "regalo", "grabado"]
  },
  {
    id: 3,
    name: "Combo River Plate Grabado",
    price: 28800,
    category: "combos",
    image: "images/3.jpg",
    description: "Caja de presentación + Camionero algarrobo grabado + Bombilla chata",
    featured: true,
    tags: ["combo", "river", "futbol", "regalo", "grabado"]
  },
  {
    id: 4,
    name: "Combo Latas Forradas + Mate Térmico",
    price: 9590,
    category: "combos",
    image: "images/4.jpg",
    description: "Diferentes diseños y colores disponibles",
    featured: false,
    tags: ["combo", "termico"]
  },
  {
    id: 5,
    name: "Combo Camionero + Bombilla + Canasta + Yerba",
    price: 25000,
    category: "combos",
    image: "images/5.jpg",
    description: "Camionero algarrobo + Bombilla chata + Canasta eco + Yerba + Azúcar",
    featured: false,
    tags: ["combo", "algarrobo"]
  },
  {
    id: 6,
    name: "Combo Imperial Alpaca + Termo + Bombilla",
    price: 41300,
    category: "combos",
    image: "images/6.jpg",
    description: "Imperial alpaca + Termo 1L acero + Bombilla pico de loro",
    featured: true,
    tags: ["combo", "imperial", "alpaca", "primo"]
  },
  {
    id: 7,
    name: "Combo Imperial Guarda Alpaca",
    price: 37500,
    category: "combos",
    image: "images/7.jpg",
    description: "Imperial Guarda Alpaca + Canasta Eco + Chaulata + Bombilla chata",
    featured: false,
    tags: ["combo", "imperial", "alpaca"]
  },

  // ═══════════════════════════════════════
  // IMPERIALES
  // ═══════════════════════════════════════
  {
    id: 8,
    name: "Imperial Premium River Plate",
    price: 62000,
    category: "imperiales",
    image: "images/8.jpg",
    description: "Virola de alpaca, cuero repujado, dije de bronce, color único",
    featured: true,
    tags: ["imperial", "river", "premium", "alpaca", "cuero"]
  },
  {
    id: 9,
    name: "Imperial Hojita Borravino",
    price: 41985,
    category: "imperiales",
    image: "images/9.jpg",
    description: "Imperial hojita en color borravino, diseño exclusivo",
    featured: true,
    tags: ["imperial", "cuero", "premium"]
  },
  {
    id: 10,
    name: "Imperial Gajo Pelotas con Base de Alpaca",
    price: 38000,
    category: "imperiales",
    image: "images/10.jpg",
    description: "Imperial con gajos de pelota y base de alpaca",
    featured: true,
    tags: ["imperial", "alpaca", "futbol"]
  },
  {
    id: 11,
    name: "Imperial de Alpaca con Base",
    price: 37600,
    category: "imperiales",
    image: "images/11.jpg",
    description: "Imperial completo de alpaca con base incluida",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 12,
    name: "Imperial Esquinero con Bases de Alpaca",
    price: 36400,
    category: "imperiales",
    image: "images/12.jpg",
    description: "Imperial esquinero con bases de alpaca incluidas",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 13,
    name: "Imperial de Alpaca Dije de Bronce Boca",
    price: 35000,
    category: "imperiales",
    image: "images/13.jpg",
    description: "Imperial de alpaca con dije de bronce de Boca Juniors",
    featured: false,
    tags: ["imperial", "alpaca", "boca", "futbol"]
  },
  {
    id: 14,
    name: "Imperial Botitas de Alpaca con Pelotitas de Bronce",
    price: 33500,
    category: "imperiales",
    image: "images/14.jpg",
    description: "Diferentes colores disponibles",
    featured: false,
    tags: ["imperial", "alpaca", "bronce", "futbol"]
  },
  {
    id: 15,
    name: "Imperial Virola de Alpaca Cuero Repujado",
    price: 30000,
    category: "imperiales",
    image: "images/15.jpg",
    description: "Virola de alpaca con cuero repujado artesanal",
    featured: false,
    tags: ["imperial", "alpaca", "cuero"]
  },
  {
    id: 16,
    name: "Imperial de Alpaca con Gajos de Pelota",
    price: 30000,
    category: "imperiales",
    image: "images/16.jpg",
    description: "Imperial de alpaca con gajos de pelota de fútbol",
    featured: false,
    tags: ["imperial", "alpaca", "futbol"]
  },
  {
    id: 17,
    name: "Imperiales Virola de Alpaca Cuero Croco",
    price: 30000,
    category: "imperiales",
    image: "images/17.jpg",
    description: "Virola de alpaca con cuero tipo cocodrilo",
    featured: false,
    tags: ["imperial", "alpaca", "cuero"]
  },
  {
    id: 18,
    name: "Imperial de Alpaca Dije Sol de Mayo",
    price: 30000,
    category: "imperiales",
    image: "images/18.jpg",
    description: "Imperial de alpaca con dije Sol de Mayo",
    featured: false,
    tags: ["imperial", "alpaca", "argentina"]
  },
  {
    id: 19,
    name: "Imperial Virola Cincelada Cuero Borravino",
    price: 29000,
    category: "imperiales",
    image: "images/19.jpg",
    description: "Virola cincelada con cuero repujado borravino",
    featured: false,
    tags: ["imperial", "cuero", "cincelado"]
  },
  {
    id: 20,
    name: "Mate Imperial de Alpaca AFA",
    price: 29000,
    category: "imperiales",
    image: "images/20.jpg",
    description: "Imperial de alpaca con escudo de la AFA",
    featured: false,
    tags: ["imperial", "alpaca", "afa", "argentina", "futbol"]
  },
  {
    id: 21,
    name: "Imperial de Alpaca River Plate",
    price: 29000,
    category: "imperiales",
    image: "images/21.jpg",
    description: "Imperial de alpaca virola de alpaca River Plate",
    featured: false,
    tags: ["imperial", "alpaca", "river", "futbol"]
  },
  {
    id: 22,
    name: "Imperial de Alpaca Dije Boca",
    price: 29000,
    category: "imperiales",
    image: "images/22.jpg",
    description: "Imperial de alpaca con dije de Boca Juniors",
    featured: false,
    tags: ["imperial", "alpaca", "boca", "futbol"]
  },
  {
    id: 23,
    name: "Imperial Sol de Mayo",
    price: 28990,
    category: "imperiales",
    image: "images/23.jpg",
    description: "Imperial con diseño Sol de Mayo argentino",
    featured: false,
    tags: ["imperial", "argentina", "sol"]
  },
  {
    id: 24,
    name: "Imperial Repujado Escudo Argentina",
    price: 28500,
    category: "imperiales",
    image: "images/24.jpg",
    description: "Imperial con cuero repujado y escudo de Argentina",
    featured: false,
    tags: ["imperial", "argentina", "cuero"]
  },
  {
    id: 25,
    name: "Imperial Premium Virola Cincelada",
    price: 28000,
    category: "imperiales",
    image: "images/25.jpg",
    description: "Imperial premium con virola cincelada artesanal",
    featured: false,
    tags: ["imperial", "cincelado", "premium"]
  },
  {
    id: 26,
    name: "Imperial Virola de Alpaca Invertida",
    price: 28000,
    category: "imperiales",
    image: "images/26.jpg",
    description: "Imperial con virola de alpaca en posición invertida",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 27,
    name: "Imperial Algarrobo Premium",
    price: 26980,
    category: "imperiales",
    image: "images/27.jpg",
    description: "Algarrobo premium con virola y base de alpaca",
    featured: false,
    tags: ["imperial", "algarrobo", "alpaca"]
  },
  {
    id: 28,
    name: "Imperial Virola de Alpaca Rosa",
    price: 25000,
    category: "imperiales",
    image: "images/28.jpg",
    description: "Imperial con virola de alpaca en color rosa",
    featured: false,
    tags: ["imperial", "alpaca", "rosa"]
  },
  {
    id: 29,
    name: "Mate Imperial Virola de Alpaca Vaquita",
    price: 25000,
    category: "imperiales",
    image: "images/29.jpg",
    description: "Imperial con virola de alpaca diseño vaquita",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 30,
    name: "Mate Imperial de Alpaca Color Suela",
    price: 25000,
    category: "imperiales",
    image: "images/30.jpg",
    description: "Imperial de alpaca en color suela natural",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 31,
    name: "Imperial Azul Virola de Alpaca",
    price: 25000,
    category: "imperiales",
    image: "images/31.jpg",
    description: "Imperial azul con virola de alpaca artesanal",
    featured: false,
    tags: ["imperial", "alpaca"]
  },
  {
    id: 32,
    name: "Imperial Virola de Bronce",
    price: 21000,
    category: "imperiales",
    image: "images/32.jpg",
    description: "Imperial con virola de bronce trabajado",
    featured: false,
    tags: ["imperial", "bronce"]
  },
  {
    id: 33,
    name: "Imperial Interior de Acero",
    price: 20000,
    category: "imperiales",
    image: "images/33.jpg",
    description: "Imperial con interior de acero inoxidable",
    featured: false,
    tags: ["imperial", "acero"]
  },
  {
    id: 34,
    name: "Imperial de Plástico",
    price: 9980,
    category: "imperiales",
    image: "images/34.jpg",
    description: "Imperial liviano, ideal para principiantes",
    featured: false,
    tags: ["imperial"]
  },

  // ═══════════════════════════════════════
  // ALGARROBO
  // ═══════════════════════════════════════
  {
    id: 35,
    name: "Mate Algarrobo con Base de Alpaca",
    price: 40000,
    category: "algarrobo",
    image: "images/35.jpg",
    description: "Mate de algarrobo con base de alpaca incluida",
    featured: true,
    tags: ["algarrobo", "alpaca"]
  },
  {
    id: 36,
    name: "Mate Algarrobo con Base de Alpaca y Bronce",
    price: 40000,
    category: "algarrobo",
    image: "images/36.jpg",
    description: "Algarrobo con base de alpaca y detalles en bronce",
    featured: false,
    tags: ["algarrobo", "alpaca", "bronce"]
  },
  {
    id: 37,
    name: "Mate de Algarrobo Virola de Alpaca",
    price: 23980,
    category: "algarrobo",
    image: "images/37.jpg",
    description: "Mate de algarrobo con virola de alpaca artesanal",
    featured: false,
    tags: ["algarrobo", "alpaca"]
  },
  {
    id: 38,
    name: "Mate Algarrobo Laqueado",
    price: 20000,
    category: "algarrobo",
    image: "images/38.jpg",
    description: "Mate de algarrobo con acabado laqueado premium",
    featured: false,
    tags: ["algarrobo"]
  },

  // ═══════════════════════════════════════
  // CAMIONEROS
  // ═══════════════════════════════════════
  {
    id: 39,
    name: "Camionero de Algarrobo",
    price: 15000,
    category: "camioneros",
    image: "images/39.jpg",
    description: "Mate camionero clásico de algarrobo",
    featured: false,
    tags: ["camionero", "algarrobo"]
  },
  {
    id: 40,
    name: "Camionero Virola de Acero",
    price: 18500,
    category: "camioneros",
    image: "images/40.jpg",
    description: "Camionero con virola de acero inoxidable",
    featured: false,
    tags: ["camionero", "acero"]
  },
  {
    id: 41,
    name: "Camioneros Virola de Aluminio",
    price: 13500,
    category: "camioneros",
    image: "images/41.jpg",
    description: "Camionero con virola de aluminio, liviano y resistente",
    featured: false,
    tags: ["camionero", "aluminio"]
  },

  // ═══════════════════════════════════════
  // TORPEDOS
  // ═══════════════════════════════════════
  {
    id: 42,
    name: "Torpedo Virola de Alpaca Calada",
    price: 45000,
    category: "torpedos",
    image: "images/42.jpg",
    description: "Calabaza + Cuero repujado + Base de alpaca ancha",
    featured: true,
    tags: ["torpedo", "alpaca", "cuero", "calabaza"]
  },
  {
    id: 43,
    name: "Torpedo con Base",
    price: 45000,
    category: "torpedos",
    image: "images/43.jpg",
    description: "Virola de alpaca cincelada + Calabaza + Cuero natural repujado + Base alpaca + Pelotas de bronce",
    featured: true,
    tags: ["torpedo", "alpaca", "cuero", "bronce"]
  },
  {
    id: 44,
    name: "Torpedo Croco con Pelotas de Bronce",
    price: 42000,
    category: "torpedos",
    image: "images/44.jpg",
    description: "Cuero tipo cocodrilo marrón con pelotas de bronce",
    featured: true,
    tags: ["torpedo", "cuero", "bronce"]
  },
  {
    id: 45,
    name: "Torpedo Virola de Alpaca Cincelada Borravino",
    price: 40000,
    category: "torpedos",
    image: "images/45.jpg",
    description: "Cuero liso borravino con base de alpaca ancha",
    featured: false,
    tags: ["torpedo", "alpaca", "cuero"]
  },
  {
    id: 46,
    name: "Torpedo Futbolero",
    price: 35990,
    category: "torpedos",
    image: "images/46.jpg",
    description: "Base completa y virola de alpaca cincelada, cuero gajos de pelota",
    featured: false,
    tags: ["torpedo", "futbol", "alpaca"]
  },
  {
    id: 47,
    name: "Torpedo con Base de Bronce",
    price: 37400,
    category: "torpedos",
    image: "images/47.jpg",
    description: "Torpedo artesanal con base de bronce",
    featured: false,
    tags: ["torpedo", "bronce"]
  },
  {
    id: 48,
    name: "Torpedo Criollo Cuero Repujado Negro",
    price: 32990,
    category: "torpedos",
    image: "images/48.jpg",
    description: "Cuero repujado negro con virola de alpaca",
    featured: false,
    tags: ["torpedo", "cuero", "alpaca"]
  },
  {
    id: 49,
    name: "Torpedo Virola de Bronce Cincelada",
    price: 31600,
    category: "torpedos",
    image: "images/49.jpg",
    description: "Calabaza + Cuero repujado negro + Virola de bronce cincelada",
    featured: false,
    tags: ["torpedo", "bronce", "cuero", "calabaza"]
  },
  {
    id: 50,
    name: "Torpedo Virola Cincelada",
    price: 30000,
    category: "torpedos",
    image: "images/50.jpg",
    description: "Torpedo con virola cincelada artesanalmente",
    featured: false,
    tags: ["torpedo", "cincelado"]
  },
  {
    id: 51,
    name: "Torpedo de Algarrobo Virola",
    price: 25000,
    category: "torpedos",
    image: "images/51.jpg",
    description: "Torpedo de algarrobo con virola decorativa",
    featured: false,
    tags: ["torpedo", "algarrobo"]
  },
  {
    id: 52,
    name: "Torpedo Guarda de Bronce Cincelada",
    price: 25000,
    category: "torpedos",
    image: "images/52.jpg",
    description: "Guarda de bronce cincelada + Cuero negro + Calabaza",
    featured: false,
    tags: ["torpedo", "bronce", "cuero", "calabaza"]
  },
  {
    id: 53,
    name: "Torpedo Virola de Acero de Calabaza",
    price: 16950,
    category: "torpedos",
    image: "images/53.jpg",
    description: "Torpedo de calabaza con virola de acero inoxidable",
    featured: false,
    tags: ["torpedo", "acero", "calabaza"]
  },
  {
    id: 54,
    name: "Torpedo Algarrobo",
    price: 13980,
    category: "torpedos",
    image: "images/54.jpg",
    description: "Torpedo clásico de algarrobo artesanal",
    featured: false,
    tags: ["torpedo", "algarrobo"]
  },

  // ═══════════════════════════════════════
  // TERMOS
  // ═══════════════════════════════════════
  {
    id: 55,
    name: "Termo Original Lumilagro",
    price: 55000,
    category: "termos",
    image: "images/55.jpg",
    description: "Termo mi milagro 1 litro con pico cebador, presentado en caja",
    featured: true,
    tags: ["termo", "lumilagro", "premium"]
  },
  {
    id: 56,
    name: "Termo Media Manija Negro",
    price: 25000,
    category: "termos",
    image: "images/56.jpg",
    description: "Termo media manija 1 litro con pico cebador, color negro",
    featured: false,
    tags: ["termo"]
  },
  {
    id: 57,
    name: "Termos Media Manija Grabados Futboleros",
    price: 30000,
    category: "termos",
    image: "images/57.jpg",
    description: "Termo media manija con grabados futboleros predeterminados. Elegí tu diseño favorito deslizando entre los modelos disponibles.",
    featured: true,
    tags: ["termo", "futbol", "grabado"],
    // Galería de variantes: se muestra como carrusel deslizable en la ficha.
    // Para sumar un diseño: agregá { src, label } y subí la imagen a images/.
    gallery: [
      { src: "images/57-afa.jpg",          label: "AFA · Selección" },
      { src: "images/57-boca.jpg",         label: "Boca Juniors" },
      { src: "images/57-river.jpg",        label: "River Plate" },
      { src: "images/57-racing.jpg",       label: "Racing Club" },
      { src: "images/57-independiente.jpg",label: "Independiente" },
      { src: "images/57-san-lorenzo.jpg",  label: "San Lorenzo" },
      { src: "images/57-huracan.jpg",      label: "Huracán" },
      { src: "images/57-lanus.jpg",        label: "Lanús" },
      { src: "images/57-gimnasia.jpg",     label: "Gimnasia" }
    ]
  },
  {
    id: 58,
    name: "Termo Degradé con Manija",
    price: 30000,
    category: "termos",
    image: "images/58.jpg",
    description: "1 litro con manija y pico a rosca. Únicos colores disponibles",
    featured: false,
    tags: ["termo"]
  },
  {
    id: 59,
    name: "Termo 1,25L con Diseño",
    price: 30000,
    category: "termos",
    image: "images/59.jpg",
    description: "Termo 1,25 litros, solo en color rosa",
    featured: false,
    tags: ["termo", "rosa"]
  },
  {
    id: 60,
    name: "Termo 1,2L Mate System",
    price: 30000,
    category: "termos",
    image: "images/60.jpg",
    description: "Termo 1,2 litros en varios colores disponibles",
    featured: false,
    tags: ["termo"]
  },
  {
    id: 61,
    name: "Termos Media Manija Grabados",
    price: 30000,
    category: "termos",
    image: "images/61.jpg",
    description: "Termo media manija con grabados predeterminados",
    featured: false,
    tags: ["termo", "grabado"]
  },
  {
    id: 62,
    name: "Termo Media Manija de Acero",
    price: 21980,
    category: "termos",
    image: "images/62.jpg",
    description: "Termo media manija de acero 1 litro con pico cebador",
    featured: false,
    tags: ["termo", "acero"]
  },
  {
    id: 63,
    name: "Termo Bala Acero 1L",
    price: 19980,
    category: "termos",
    image: "images/63.jpg",
    description: "Termo bala de 1 litro con pico botón",
    featured: false,
    tags: ["termo", "acero", "bala"]
  },
  {
    id: 64,
    name: "Termo Imitación Stanley",
    price: 25000,
    category: "termos",
    image: "images/64-verde.jpg",
    description: "Termo 1,2L con pico a rosca. Elegí el color deslizando entre las opciones.",
    featured: false,
    tags: ["termo"],
    gallery: [
      { src: "images/64-verde.jpg", label: "Verde" },
      { src: "images/64-rosa.jpg",  label: "Rosa" }
    ]
  },
  {
    id: 65,
    name: "Termo Bala 500ml",
    price: 15000,
    category: "termos",
    image: "images/65.jpg",
    description: "Termo bala de medio litro con pico botón",
    featured: false,
    tags: ["termo", "bala"]
  },

  // ═══════════════════════════════════════
  // BOMBILLAS
  // ═══════════════════════════════════════
  {
    id: 66,
    name: "Bombillón Artesanal Filtro Uruguayo Full Alpaca",
    price: 35980,
    category: "bombillas",
    image: "images/66.jpg",
    description: "Exclusivo, detallado, filtro uruguayo full alpaca, pico loro",
    featured: true,
    tags: ["bombilla", "alpaca", "premium", "artesanal"]
  },
  {
    id: 67,
    name: "Bombillón Liso de Alpaca Pico Corona",
    price: 35980,
    category: "bombillas",
    image: "images/67.jpg",
    description: "Alpaca liso, pico corona, filtro uruguayo",
    featured: false,
    tags: ["bombilla", "alpaca", "premium"]
  },
  {
    id: 68,
    name: "Bombillón Premium Super Curvo Pico Rey",
    price: 29985,
    category: "bombillas",
    image: "images/68.jpg",
    description: "Caño cincelado, dije de bronce con pala estilo gauchito",
    featured: false,
    tags: ["bombilla", "bronce", "premium"]
  },
  {
    id: 69,
    name: "Bombillón de Alpaca con Pico de Bronce",
    price: 28000,
    category: "bombillas",
    image: "images/69.jpg",
    description: "Caño labrado con 2 dijes alpaca/bronce (18cm)",
    featured: false,
    tags: ["bombilla", "alpaca", "bronce"]
  },
  {
    id: 70,
    name: "Bombillón Alpaca Doble Dije Caño Cincelado",
    price: 27980,
    category: "bombillas",
    image: "images/70.jpg",
    description: "Doble dije de alpaca, caño cincelado, pico curvo largo",
    featured: false,
    tags: ["bombilla", "alpaca"]
  },
  {
    id: 71,
    name: "Bombillón Caño Liso Recto Alpaca y Bronce",
    price: 25980,
    category: "bombillas",
    image: "images/71.jpg",
    description: "Caño liso recto en alpaca y bronce",
    featured: false,
    tags: ["bombilla", "alpaca", "bronce"]
  },
  {
    id: 72,
    name: "Bombillones Futboles Alpaca y Bronce",
    price: 23985,
    category: "bombillas",
    image: "images/72.jpg",
    description: "Bombillones con diseño de fútbol en alpaca y aplique de bronce",
    featured: false,
    tags: ["bombilla", "alpaca", "bronce", "futbol"]
  },
  {
    id: 73,
    name: "Bombilla de 100% Alpaca con Pico de Loro de Bronce",
    price: 15000,
    category: "bombillas",
    image: "images/73.jpg",
    description: "100% alpaca con pico de loro de bronce",
    featured: false,
    tags: ["bombilla", "alpaca", "bronce", "premium"]
  },
  {
    id: 74,
    name: "Bombilla de Acero con Filtro Pala",
    price: 12980,
    category: "bombillas",
    image: "images/74.jpg",
    description: "Acero inoxidable con filtro tipo pala",
    featured: false,
    tags: ["bombilla", "acero"]
  },
  {
    id: 75,
    name: "Bombillón Pico Cuervo de Acero con Filtro",
    price: 5980,
    category: "bombillas",
    image: "images/75.jpg",
    description: "Pico cuervo de acero inoxidable grueso con filtro",
    featured: false,
    tags: ["bombilla", "acero"]
  },
  {
    id: 76,
    name: "Bombilla Caño Liso Pico de Loro con Bronce",
    price: 5980,
    category: "bombillas",
    image: "images/76.jpg",
    description: "Caño liso, pico de loro con detalle en bronce",
    featured: false,
    tags: ["bombilla", "bronce"]
  },
  {
    id: 77,
    name: "Bombilla Completa de Alpaca Caño Cincelado",
    price: 5000,
    category: "bombillas",
    image: "images/77.jpg",
    description: "Completa de alpaca con caño cincelado artesanal",
    featured: false,
    tags: ["bombilla", "alpaca", "cincelado"]
  },
  {
    id: 78,
    name: "Bombilla Pico de Loro Acero Inoxidable",
    price: 5180,
    category: "bombillas",
    image: "images/78.jpg",
    description: "Pico de loro de acero inoxidable",
    featured: false,
    tags: ["bombilla", "acero"]
  },
  {
    id: 79,
    name: "Bombilla Chata Aplique de Bronce",
    price: 3200,
    category: "bombillas",
    image: "images/79.jpg",
    description: "Pico curvo de acero inox chata con dije de bronce. Lisas y grabadas",
    featured: false,
    tags: ["bombilla", "acero", "bronce"]
  },
  {
    id: 80,
    name: "Bombilla Pico de Loro Acero con Dije",
    price: 3180,
    category: "bombillas",
    image: "images/80.jpg",
    description: "Caño redondo con dije de bronce",
    featured: false,
    tags: ["bombilla", "acero", "bronce"]
  },

  // ═══════════════════════════════════════
  // MATERAS
  // ═══════════════════════════════════════
  {
    id: 81,
    name: "Matera de Pelo Cuero Argentina",
    price: 55000,
    category: "materas",
    image: "images/81.jpg",
    description: "Cuero pelo, manija a tiento, sol bordado y yerbero bordado",
    featured: true,
    tags: ["matera", "cuero", "argentina", "premium"]
  },
  {
    id: 82,
    name: "Materas Futboleras",
    price: 30000,
    category: "materas",
    image: "images/82.jpg",
    description: "Boca Juniors, River Plate y AFA disponibles",
    featured: true,
    tags: ["matera", "futbol", "boca", "river", "afa"]
  },
  {
    id: 83,
    name: "Matera Ovalada 100% Cuero",
    price: 25000,
    category: "materas",
    image: "images/83.jpg",
    description: "Matera ovalada 100% cuero artesanal",
    featured: false,
    tags: ["matera", "cuero"]
  },
  {
    id: 84,
    name: "Mochila Bolso Matero + Yerbero + Azucarero",
    price: 20000,
    category: "materas",
    image: "images/84-1.jpg",
    description: "Mochila/bolso matero con yerbero y azucarero. Elegí tu diseño deslizando entre las opciones.",
    featured: true,
    tags: ["matera", "bolso", "mochila"],
    gallery: [
      { src: "images/84-1.jpg", label: "Modelo 1" },
      { src: "images/84-2.jpg", label: "Modelo 2" },
      { src: "images/84-3.jpg", label: "Modelo 3" },
      { src: "images/84-4.jpg", label: "Modelo 4" },
      { src: "images/84-5.jpg", label: "Modelo 5" },
      { src: "images/84-6.jpg", label: "Modelo 6" }
    ]
  },
  {
    id: 85,
    name: "Porta Mate de Cuero",
    price: 10000,
    category: "materas",
    image: "images/85.jpg",
    description: "Diferentes diseños disponibles en cuero",
    featured: false,
    tags: ["matera", "cuero"]
  },
  {
    id: 86,
    name: "Matera Cuerina Doble Costura",
    price: 12000,
    category: "materas",
    image: "images/86.jpg",
    description: "Diferentes colores disponibles, doble costura reforzada",
    featured: false,
    tags: ["matera", "cuerina"]
  },
  {
    id: 87,
    name: "Matera con Tapa",
    price: 9800,
    category: "materas",
    image: "images/87.jpg",
    description: "Matera con tapa protectora incluida",
    featured: false,
    tags: ["matera"]
  },
  {
    id: 88,
    name: "Matera Mango Rígido",
    price: 9800,
    category: "materas",
    image: "images/88.jpg",
    description: "Matera con mango rígido resistente",
    featured: false,
    tags: ["matera"]
  },
  {
    id: 89,
    name: "Porta Mate Termo y Mate",
    price: 9000,
    category: "materas",
    image: "images/89.jpg",
    description: "Porta mate para termo y mate juntos",
    featured: false,
    tags: ["matera"]
  },
  {
    id: 90,
    name: "Porta Mate Cuerina",
    price: 6000,
    category: "materas",
    image: "images/90.jpg",
    description: "Porta mate económico en cuerina",
    featured: false,
    tags: ["matera", "cuerina"]
  },

  // ═══════════════════════════════════════
  // VASOS
  // ═══════════════════════════════════════
  {
    id: 91,
    name: "Vaso Térmico 1,2L con Bombilla",
    price: 18500,
    category: "vasos",
    image: "images/91.jpg",
    description: "Vaso térmico 1,2 litros con bombilla incluida",
    featured: true,
    tags: ["vaso", "termico"]
  },
  {
    id: 92,
    name: "Vaso Chop Cervecero con Manija",
    price: 18000,
    category: "vasos",
    image: "images/92.jpg",
    description: "Vaso chop cervecero con manija, ideal para grabados",
    featured: false,
    tags: ["vaso", "cerveza"]
  },
  {
    id: 93,
    name: "Vaso Térmico Frío/Calor 560ml",
    price: 15000,
    category: "vasos",
    image: "images/93.jpg",
    description: "560ml con sorbete de acero inoxidable, colores surtidos",
    featured: false,
    tags: ["vaso", "termico", "acero"]
  },
  {
    id: 94,
    name: "Vasos Ferneteros Grabados",
    price: 8000,
    category: "vasos",
    image: "images/94-boca.jpg",
    description: "Vasos ferneteros con grabados. Elegí tu diseño deslizando entre los modelos disponibles.",
    featured: true,
    tags: ["vaso", "fernetero", "grabado", "futbol"],
    gallery: [
      { src: "images/94-afa.jpg",         label: "AFA · Selección" },
      { src: "images/94-boca.jpg",        label: "Boca Juniors" },
      { src: "images/94-river.jpg",       label: "River Plate" },
      { src: "images/94-racing.jpg",      label: "Racing Club" },
      { src: "images/94-casla.jpg",       label: "San Lorenzo (CASLA)" },
      { src: "images/94-papa.jpg",        label: "El Mejor Papá" },
      { src: "images/94-fernetometro.jpg",label: "Fernetómetro" },
      { src: "images/94-ruido.jpg",       label: "Un Poco de Ruido" }
    ]
  },
  {
    id: 95,
    name: "Vaso Térmico para Café",
    price: 10000,
    category: "vasos",
    image: "images/95.jpg",
    description: "Ideal para café, colores surtidos disponibles",
    featured: false,
    tags: ["vaso", "termico", "cafe"]
  },
  {
    id: 96,
    name: "Vaso Fernetero Liso 500cc / 1 Litro",
    price: 5980,
    category: "vasos",
    image: "images/96.jpg",
    description: "Lisos, ideal para grabados personalizados",
    featured: false,
    tags: ["vaso", "grabado"]
  },
  {
    id: 137,
    name: "Mate Térmico",
    price: 6980,
    category: "vasos",
    image: "images/137-negro.jpg",
    description: "Mate térmico con interior que conserva la temperatura. Elegí tu color deslizando entre las opciones.",
    featured: true,
    tags: ["mate", "termico", "vaso"],
    gallery: [
      { src: "images/137-negro.jpg",  label: "Negro" },
      { src: "images/137-blanco.jpg", label: "Blanco" },
      { src: "images/137-rosa.jpg",   label: "Rosa" }
    ]
  },
  {
    id: 138,
    name: "Vaso Copita Interior Térmico",
    price: 6980,
    category: "vasos",
    image: "images/138-negro.jpg",
    description: "Vaso copita con interior térmico de acero inoxidable. Elegí tu color deslizando entre las opciones.",
    featured: false,
    tags: ["vaso", "copita", "termico", "acero"],
    gallery: [
      { src: "images/138-negro.jpg",  label: "Negro" },
      { src: "images/138-blanco.jpg", label: "Blanco" },
      { src: "images/138-rosa.jpg",   label: "Rosa" }
    ]
  },
  {
    id: 140,
    name: "Mates Térmicos Grabados",
    price: 8990,
    category: "vasos",
    image: "images/140-1.jpg",
    description: "Mates térmicos con grabados. Elegí tu diseño deslizando entre los modelos disponibles.",
    featured: true,
    tags: ["mate", "termico", "grabado", "vaso"],
    gallery: [
      { src: "images/140-1.jpg", label: "Grabado 1" },
      { src: "images/140-2.jpg", label: "Grabado 2" },
      { src: "images/140-3.jpg", label: "Grabado 3" },
      { src: "images/140-4.jpg", label: "Grabado 4" },
      { src: "images/140-5.jpg", label: "Grabado 5" },
      { src: "images/140-6.jpg", label: "Grabado 6" },
      { src: "images/140-7.jpg", label: "Grabado 7" },
      { src: "images/140-8.jpg", label: "Grabado 8" },
      { src: "images/140-9.jpg", label: "Grabado 9" }
    ]
  },

  // ═══════════════════════════════════════
  // YERBAS
  // ═══════════════════════════════════════
  {
    id: 97,
    name: "SARA Edición Limitada Coco 500gr",
    price: 9300,
    category: "yerbas",
    image: "images/97.jpg",
    description: "Edición limitada sabor coco 500 gramos",
    featured: true,
    tags: ["yerba", "premium", "edicion limitada"]
  },
  {
    id: 98,
    name: "Yerba Mate REI Verde Premium Export",
    price: 7500,
    category: "yerbas",
    image: "images/98.jpg",
    description: "Premium Export 500gr, paquete negro",
    featured: false,
    tags: ["yerba", "premium"]
  },
  {
    id: 99,
    name: "Yerba BALDO 500gr",
    price: 6990,
    category: "yerbas",
    image: "images/99.jpg",
    description: "Yerba BALDO clásica 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 100,
    name: "Yerba Canarias Serena 500gr",
    price: 6990,
    category: "yerbas",
    image: "images/100.jpg",
    description: "Yerba Canarias Serena 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 101,
    name: "Yerba Canarias Té Verde y Jengibre 500gr",
    price: 6990,
    category: "yerbas",
    image: "images/101.jpg",
    description: "Con té verde y jengibre, 500 gramos",
    featured: false,
    tags: ["yerba", "jengibre", "te verde"]
  },
  {
    id: 102,
    name: "Yerba Canarias Tradicional 500gr",
    price: 6000,
    category: "yerbas",
    image: "images/102.jpg",
    description: "Yerba Canarias tradicional 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 103,
    name: "Yerba BARAO 500gr",
    price: 6000,
    category: "yerbas",
    image: "images/103.jpg",
    description: "Yerba BARAO 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 104,
    name: "Yerba Mate REI Verde 500gr",
    price: 6000,
    category: "yerbas",
    image: "images/104.jpg",
    description: "Yerba Mate REI Verde 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 105,
    name: "Yerba Verdecita 500gr",
    price: 6000,
    category: "yerbas",
    image: "images/105.jpg",
    description: "Yerba Verdecita clásica 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 106,
    name: "YERBA REI Verde Clásica Paquete Blanco 500gr",
    price: 5500,
    category: "yerbas",
    image: "images/106.jpg",
    description: "REI Verde clásica, paquete blanco 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 107,
    name: "Yerba Kurupí Menta y Boldo 500gr",
    price: 5490,
    category: "yerbas",
    image: "images/107.jpg",
    description: "Yerba Kurupí con menta y boldo, 500 gramos",
    featured: false,
    tags: ["yerba", "menta", "boldo"]
  },
  {
    id: 108,
    name: "Yerba Kurupí Tereré Mega Menta 500gr",
    price: 5499,
    category: "yerbas",
    image: "images/108.jpg",
    description: "Tereré mega menta, 500 gramos",
    featured: false,
    tags: ["yerba", "terere", "menta"]
  },
  {
    id: 109,
    name: "Yerba Pindare 500gr",
    price: 5999,
    category: "yerbas",
    image: "images/109.jpg",
    description: "Yerba Pindare 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 110,
    name: "YERBA Emperatriz del Monte Despalada 500gr",
    price: 4680,
    category: "yerbas",
    image: "images/110.jpg",
    description: "Yerba despalada Emperatriz del Monte 500 gramos",
    featured: false,
    tags: ["yerba", "despalada"]
  },
  {
    id: 111,
    name: "YERBA Mate 10 Edición Argentina",
    price: 4300,
    category: "yerbas",
    image: "images/111.jpg",
    description: "Edición Argentina, 500 gramos",
    featured: false,
    tags: ["yerba", "argentina"]
  },
  {
    id: 112,
    name: "YERBA Mate 10 Rojo Paquete Rosa 500gr",
    price: 4300,
    category: "yerbas",
    image: "images/112.jpg",
    description: "Mate rojo paquete rosa, 500 gramos",
    featured: false,
    tags: ["yerba"]
  },
  {
    id: 113,
    name: "YERBA Exclusiva Mate Sport 500gr",
    price: 4180,
    category: "yerbas",
    image: "images/113.jpg",
    description: "Mate Sport exclusiva, 500 gramos",
    featured: false,
    tags: ["yerba"]
  },

  // ═══════════════════════════════════════
  // ACCESORIOS
  // ═══════════════════════════════════════
  {
    id: 114,
    name: "Latas Lisas Blancas x2 — Yerbero + Azucarero Grandes",
    price: 6500,
    category: "accesorios",
    image: "images/114.jpg",
    description: "Set yerbero + azucarero grandes, latas lisas. Diferentes colores disponibles.",
    featured: false,
    tags: ["accesorio", "yerbero", "azucarero", "latas"]
  },
  {
    id: 115,
    name: "Latas Yerbero y Azucarero Grabadas",
    price: 8000,
    category: "accesorios",
    image: "images/115.jpg",
    description: "Diferentes colores, grabados y cuadros de fútbol disponibles.",
    featured: false,
    tags: ["accesorio", "yerbero", "azucarero", "latas", "grabado", "futbol"]
  },
  {
    id: 139,
    name: "Latas Matero x2 — Yerbero + Azucarero",
    price: 8500,
    category: "accesorios",
    image: "images/139-1.jpg",
    description: "Set de latas Matero x2 (yerbero + azucarero). Elegí tu color deslizando entre las opciones.",
    featured: true,
    tags: ["accesorio", "yerbero", "azucarero", "latas", "matero"],
    gallery: [
      { src: "images/139-1.jpg", label: "Color 1" },
      { src: "images/139-2.jpg", label: "Color 2" },
      { src: "images/139-3.jpg", label: "Color 3" },
      { src: "images/139-4.jpg", label: "Color 4" },
      { src: "images/139-5.jpg", label: "Color 5" },
      { src: "images/139-6.jpg", label: "Color 6" },
      { src: "images/139-7.jpg", label: "Color 7" },
      { src: "images/139-8.jpg", label: "Color 8" }
    ]
  },
  {
    id: 142,
    name: "Yerbera de Cuero",
    price: 9980,
    category: "accesorios",
    image: "images/142.jpg",
    description: "Yerbera de cuero artesanal.",
    featured: false,
    tags: ["accesorio", "yerbera", "cuero"]
  },
  {
    id: 116,
    name: "Chaulata x2 — Yerbero + Azucarero Interior Plastificado",
    price: 8500,
    category: "accesorios",
    image: "images/116.jpg",
    description: "Set de chaulatas yerbero + azucarero con interior plastificado.",
    featured: false,
    tags: ["accesorio", "yerbero", "azucarero", "chaulata"]
  },
  {
    id: 117,
    name: "Kit Tapamatero — Tapamate + Tapabombilla de Silicona",
    price: 11000,
    category: "accesorios",
    image: "images/117.jpg",
    description: "Tapamate + tapabombilla de silicona. Todos en color negro.",
    featured: true,
    tags: ["accesorio", "tapamate", "tapabombilla", "silicona", "kit"]
  },
  {
    id: 118,
    name: "Cosito para el Mate de Acero Inoxidable",
    price: 7000,
    category: "accesorios",
    image: "images/118.jpg",
    description: "Cosito limpiabombilla / removedor de yerba en acero inoxidable.",
    featured: false,
    tags: ["accesorio", "acero", "cosito"]
  },
  {
    id: 119,
    name: "Cajas de Presentación",
    price: 7000,
    category: "accesorios",
    image: "images/119.jpg",
    description: "Caja de presentación premium. Ideal para regalar.",
    featured: false,
    tags: ["accesorio", "caja", "regalo", "presentacion"]
  },

  // ═══════════════════════════════════════
  // ASADO
  // ═══════════════════════════════════════
  {
    id: 120,
    name: "Set de Asado Cerrado Valijita — Plato, Cuchillo y Tenedor",
    price: 8500,
    category: "asado",
    image: "images/120.jpg",
    description: "Set de asado en valijita cerrada: incluye plato, cuchillo y tenedor.",
    featured: false,
    tags: ["asado", "set", "cubiertos", "valijita"]
  },
  {
    id: 121,
    name: "Set de Cubiertos de Asado Estilo Alemania Rosmania — 12 Piezas",
    price: 55000,
    category: "asado",
    image: "images/121.jpg",
    description: "Set premium de 12 piezas, estilo Alemania Rosmania. Acabado de alta calidad.",
    featured: true,
    tags: ["asado", "cubiertos", "premium", "set"]
  },
  {
    id: 122,
    name: "Tabla de Asado con Manija 50x30",
    price: 25000,
    category: "asado",
    image: "images/122.jpg",
    description: "Tabla de asado de madera con manija, medidas 50x30 cm.",
    featured: true,
    tags: ["asado", "tabla", "madera"]
  },
  {
    id: 141,
    name: "Tabla de Asado Premium 50x30 — Eucaliptus Saligna",
    price: 20000,
    category: "asado",
    image: "images/141.jpg",
    description: "Tabla de asado premium 50x30 cm en madera de eucaliptus saligna.",
    featured: false,
    tags: ["asado", "tabla", "madera", "premium"]
  },

  // ═══════════════════════════════════════
  // YERBAS 1KG / BOLSÓN
  // ═══════════════════════════════════════
  {
    id: 123,
    name: "Yerba Bolsón Baldo 5kg",
    price: 55500,
    category: "yerbas",
    image: "images/123.jpg",
    description: "Bolsón de yerba Baldo de 5 kilos. Rendidor, ideal para casa o para compartir.",
    featured: true,
    tags: ["yerba", "baldo", "5kg", "bolson"]
  },
  {
    id: 124,
    name: "Yerba Mate Esmeralda 1kg",
    price: 12500,
    category: "yerbas",
    image: "images/124.jpg",
    description: "Yerba Mate Esmeralda, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "esmeralda", "1kg"]
  },
  {
    id: 125,
    name: "Yerba Mate Rei Verde 1kg",
    price: 11000,
    category: "yerbas",
    image: "images/125.jpg",
    description: "Yerba Mate Rei Verde, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "rei verde", "1kg"]
  },
  {
    id: 126,
    name: "Yerba Barao 1kg",
    price: 8000,
    category: "yerbas",
    image: "images/126.jpg",
    description: "Yerba Barao, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "barao", "1kg"]
  },
  {
    id: 127,
    name: "Yerba Canarias Serena 1kg",
    price: 13000,
    category: "yerbas",
    image: "images/127.jpg",
    description: "Yerba Canarias Serena, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "canarias", "serena", "1kg"]
  },
  {
    id: 128,
    name: "Yerba Canarias Edición Especial 1kg",
    price: 13000,
    category: "yerbas",
    image: "images/128.jpg",
    description: "Yerba Canarias Edición Especial, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "canarias", "especial", "1kg"]
  },
  {
    id: 129,
    name: "Yerba Pindaré 1kg",
    price: 9000,
    category: "yerbas",
    image: "images/129.jpg",
    description: "Yerba Pindaré, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "pindare", "1kg"]
  },
  {
    id: 130,
    name: "Yerba Baldo 1kg",
    price: 13000,
    category: "yerbas",
    image: "images/130.jpg",
    description: "Yerba Baldo, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "baldo", "1kg"]
  },
  {
    id: 131,
    name: "Yerba Canarias Tradicional 1kg",
    price: 11500,
    category: "yerbas",
    image: "images/131.jpg",
    description: "Yerba Canarias Tradicional, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "canarias", "tradicional", "1kg"]
  },
  {
    id: 132,
    name: "Yerba Canarias Té Verde y Jengibre 1kg",
    price: 13000,
    category: "yerbas",
    image: "images/132.jpg",
    description: "Yerba Canarias con té verde y jengibre, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "canarias", "te verde", "jengibre", "1kg"]
  },
  {
    id: 133,
    name: "Yerba Verdecita 1kg",
    price: 8000,
    category: "yerbas",
    image: "images/133.jpg",
    description: "Yerba Verdecita, paquete de 1 kilo.",
    featured: false,
    tags: ["yerba", "verdecita", "1kg"]
  },

  // ═══════════════════════════════════════
  // GRABADOS PERSONALIZADOS
  // ═══════════════════════════════════════
  {
    id: 134,
    name: "Grabado Personalizado para Mates",
    price: 12000,
    category: "grabados",
    image: "images/grabado-mate.jpg",
    description: "Personalizá tu mate con nombre, fecha, frase, escudo de tu equipo o el diseño que imagines. Grabado artesanal con acabado permanente. Se suma al mate que elijas del catálogo.",
    featured: true,
    tags: ["grabado", "personalizado", "mate", "regalo", "escudo", "nombre"]
  },
  {
    id: 135,
    name: "Grabado Personalizado para Bombillas",
    price: 5000,
    category: "grabados",
    image: "images/grabado-bombilla.jpg",
    description: "Iniciales, nombres o pequeños diseños grabados en tu bombilla. Detalle fino, elegante y permanente. Ideal para regalar o distinguir la tuya.",
    featured: false,
    tags: ["grabado", "personalizado", "bombilla", "regalo", "nombre"]
  },
  {
    id: 136,
    name: "Grabado Personalizado para Termos",
    price: 13000,
    category: "grabados",
    image: "images/grabado-termo.jpg",
    description: "Grabá tu termo con escudos, nombres, fechas o frases. Diseño 100% a medida y acabado profesional para que nunca te lo confundan.",
    featured: false,
    tags: ["grabado", "personalizado", "termo", "regalo", "escudo"]
  }
];

const CATEGORIES = [
  { id: "todos", label: "Todos", icon: "🧉" },
  { id: "combos", label: "Combos", icon: "🎁" },
  { id: "imperiales", label: "Imperiales", icon: "✨" },
  { id: "torpedos", label: "Torpedos", icon: "🏆" },
  { id: "algarrobo", label: "Algarrobo", icon: "🌳" },
  { id: "camioneros", label: "Camioneros", icon: "🚛" },
  { id: "termos", label: "Termos", icon: "♨️" },
  { id: "bombillas", label: "Bombillas", icon: "⚡" },
  { id: "materas", label: "Materas", icon: "👜" },
  { id: "vasos", label: "Vasos", icon: "🥤" },
  { id: "yerbas", label: "Yerbas", icon: "🌿" },
  { id: "accesorios", label: "Accesorios", icon: "🧰" },
  { id: "asado", label: "Asado", icon: "🔥" },
  { id: "grabados", label: "Grabados", icon: "✍️" }
];

function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
}

function getImagePath(filename) {
  return filename;
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

function getProductsByCategory(category) {
  if (category === 'todos') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
