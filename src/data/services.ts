export interface Servicio {
  t: string;
  slug: string;
  precio: string;
  excerpt: string;
  image: string;
  description?: string;
  benefits?: string[];
  duration?: string;
}

export interface Categoria {
  nombre: string;
  slug: string;
  servicios: Servicio[];
}

export const categorias: Categoria[] = [
  {
    nombre: "Inyecciones y Neurotoxinas",
    slug: "inyecciones-neurotoxinas",
    servicios: [
      {
        t: "Inyecciones de Neurotoxina Tox",
        slug: "tox-neurotoxina",
        precio: "$12 / unidad",
        excerpt: "Suaviza líneas de expresión y arrugas dinámicas.",
        image: "/images/services/tox-neurotoxina.jpg",
        description: "Tratamiento con neurotoxina para reducir líneas de expresión y prevenir la formación de nuevas arrugas.",
        benefits: ["Reduce arrugas dinámicas", "Previene nuevas líneas", "Resultados naturales", "Mínimo tiempo de recuperación"],
        duration: "30 minutos"
      },
      {
        t: "Botox No-Sweat (sudoración)",
        slug: "botox-no-sweat",
        precio: "$850",
        excerpt: "Elimina la sudoración excesiva de axilas.",
        image: "/images/services/botox-no-sweat.jpg",
        description: "Tratamiento especializado para hiperhidrosis axilar con resultados duraderos.",
        benefits: ["Elimina sudoración excesiva", "Resultados hasta 6 meses", "Mejora confianza", "Procedimiento rápido"],
        duration: "45 minutos"
      },
      {
        t: "Botox Lip Flip",
        slug: "botox-lip-flip",
        precio: "$75",
        excerpt: "Potencia el labio superior de forma natural.",
        image: "/images/services/botox-lip-flip.jpg",
        description: "Técnica sutil que realza el labio superior creando una apariencia más voluminosa.",
        benefits: ["Labios más definidos", "Aspecto natural", "Sin rellenos", "Resultados inmediatos"],
        duration: "15 minutos"
      },
      {
        t: "Xeomin",
        slug: "xeomin",
        precio: "Consultar",
        excerpt: "Neurotoxina pura para resultados precisos.",
        image: "/images/services/xeomin.jpg",
        description: "Neurotoxina de alta pureza para tratamientos faciales específicos.",
        benefits: ["Fórmula pura", "Menos resistencia", "Resultados duraderos", "Precisión en aplicación"],
        duration: "30 minutos"
      },
      {
        t: "Dysport",
        slug: "dysport",
        precio: "Consultar",
        excerpt: "Tratamiento avanzado para líneas de expresión.",
        image: "/images/services/dysport.jpg",
        description: "Neurotoxina de acción rápida para áreas extensas del rostro.",
        benefits: ["Acción rápida", "Cobertura amplia", "Resultados naturales", "Duración prolongada"],
        duration: "30 minutos"
      },
      {
        t: "Botox hombros (adelgazamiento)",
        slug: "botox-hombros",
        precio: "Consultar",
        excerpt: "Adelgaza y estiliza la línea de los hombros.",
        image: "/images/services/botox-hombros.jpg",
        description: "Tratamiento para reducir el músculo trapecio y crear una silueta más estilizada.",
        benefits: ["Hombros más estilizados", "Cuello más largo", "Postura mejorada", "Confianza aumentada"],
        duration: "45 minutos"
      },
      {
        t: "Baby Botox",
        slug: "baby-botox",
        precio: "Consultar",
        excerpt: "Tratamiento preventivo con dosis mínimas.",
        image: "/images/services/baby-botox.jpg",
        description: "Aplicación preventiva con dosis reducidas para mantener expresiones naturales.",
        benefits: ["Prevención temprana", "Expresiones naturales", "Resultados sutiles", "Mantenimiento facial"],
        duration: "20 minutos"
      },
      {
        t: "Botox para migrañas",
        slug: "botox-migranas",
        precio: "Consultar",
        excerpt: "Alivio terapéutico para migrañas crónicas.",
        image: "/images/services/botox-migranas.jpg",
        description: "Tratamiento médico especializado para reducir la frecuencia e intensidad de migrañas.",
        benefits: ["Reduce migrañas", "Mejora calidad de vida", "Tratamiento médico", "Resultados duraderos"],
        duration: "60 minutos"
      }
    ]
  },
  {
    nombre: "Contorno Facial y Corporal",
    slug: "contorno-facial-corporal",
    servicios: [
      {
        t: "Contorno Facial Personalizado",
        slug: "contorno-facial",
        precio: "$850",
        excerpt: "Esculpe y define los rasgos faciales.",
        image: "/images/services/contorno-facial.jpg",
        description: "Tratamiento personalizado para realzar y definir la estructura facial natural.",
        benefits: ["Rostro más definido", "Armonía facial", "Resultados naturales", "Técnica personalizada"],
        duration: "60 minutos"
      },
      {
        t: "Elevación de Pómulos (Cheekbone Pop)",
        slug: "cheekbone-pop",
        precio: "$850",
        excerpt: "Define y realza tus pómulos naturalmente.",
        image: "/images/services/cheekbone-pop.jpg",
        description: "Técnica especializada para crear pómulos más prominentes y definidos.",
        benefits: ["Pómulos más altos", "Rostro más joven", "Definición facial", "Aspecto natural"],
        duration: "45 minutos"
      },
      {
        t: "Check Your Bags (ojeras)",
        slug: "check-your-bags",
        precio: "$750",
        excerpt: "Elimina ojeras y bolsas bajo los ojos.",
        image: "/images/services/check-your-bags.jpg",
        description: "Tratamiento específico para reducir ojeras y bolsas, rejuveneciendo la mirada.",
        benefits: ["Elimina ojeras", "Reduce bolsas", "Mirada más joven", "Sin cirugía"],
        duration: "30 minutos"
      },
      {
        t: "ChinBella (papada)",
        slug: "chinbella",
        precio: "$1200",
        excerpt: "Reduce la papada y define el mentón.",
        image: "/images/services/chinbella.jpg",
        description: "Tratamiento avanzado para eliminar grasa submental y definir la línea de la mandíbula.",
        benefits: ["Elimina papada", "Define mentón", "Perfil mejorado", "Sin cirugía"],
        duration: "45 minutos"
      },
      {
        t: "ThighBella (muslos)",
        slug: "thighbella",
        precio: "$1200",
        excerpt: "Contornea y estiliza los muslos.",
        image: "/images/services/thighbella.jpg",
        description: "Tratamiento corporal para reducir grasa localizada en muslos y mejorar el contorno.",
        benefits: ["Muslos más estilizados", "Reduce grasa localizada", "Mejora contorno", "Sin tiempo de baja"],
        duration: "60 minutos"
      },
      {
        t: "BraBella (rollito brasier)",
        slug: "brabella",
        precio: "$1200",
        excerpt: "Elimina los rollitos del brasier.",
        image: "/images/services/brabella.jpg",
        description: "Tratamiento específico para eliminar la grasa acumulada en la zona del brasier.",
        benefits: ["Elimina rollitos", "Espalda más lisa", "Mejor silueta", "Confianza renovada"],
        duration: "45 minutos"
      },
      {
        t: "BananaBella (bikini)",
        slug: "bananabella",
        precio: "$1200",
        excerpt: "Contornea la zona del bikini.",
        image: "/images/services/bananabella.jpg",
        description: "Tratamiento para eliminar grasa localizada en la zona del bikini y mejorar el contorno.",
        benefits: ["Contorno mejorado", "Elimina grasa localizada", "Silueta definida", "Confianza en bikini"],
        duration: "45 minutos"
      },
      {
        t: "Mini Chin Up (papada)",
        slug: "mini-chin-up",
        precio: "$600",
        excerpt: "Versión suave para papada ligera.",
        image: "/images/services/mini-chin-up.jpg",
        description: "Tratamiento menos invasivo para papadas ligeras y definición sutil del mentón.",
        benefits: ["Tratamiento suave", "Papada ligera", "Recuperación rápida", "Resultados naturales"],
        duration: "30 minutos"
      }
    ]
  },
  {
    nombre: "Sculptra y Rellenos",
    slug: "sculptra-y-rellenos",
    servicios: [
      {
        t: "Estimulación de Colágeno con Sculptra",
        slug: "sculptra-colageno",
        precio: "$800",
        excerpt: "Activa la producción natural de colágeno.",
        image: "/images/services/sculptra-colageno.jpg",
        description: "Bioestimulador que activa la producción natural de colágeno para rejuvenecimiento gradual.",
        benefits: ["Estimula colágeno", "Resultados graduales", "Aspecto natural", "Duración prolongada"],
        duration: "45 minutos"
      },
      {
        t: "Doble Sculptra",
        slug: "doble-sculptra",
        precio: "$1600",
        excerpt: "Tratamiento intensivo de bioestimulación.",
        image: "/images/services/doble-sculptra.jpg",
        description: "Protocolo intensivo con doble dosis para resultados más pronunciados y duraderos.",
        benefits: ["Resultados intensivos", "Mayor duración", "Rejuvenecimiento profundo", "Valor agregado"],
        duration: "60 minutos"
      },
      {
        t: "Relleno Dérmico",
        slug: "relleno-dermico",
        precio: "Consultar",
        excerpt: "Restaura volumen y suaviza arrugas.",
        image: "/images/services/relleno-dermico.jpg",
        description: "Rellenos de ácido hialurónico para restaurar volumen y suavizar líneas faciales.",
        benefits: ["Restaura volumen", "Suaviza arrugas", "Resultados inmediatos", "Aspecto natural"],
        duration: "30 minutos"
      },
      {
        t: "Relleno de Labios (mini/compl./mega)",
        slug: "relleno-labios",
        precio: "$375 / $650 / $850",
        excerpt: "Aumenta y define los labios naturalmente.",
        image: "/images/services/relleno-labios.jpg",
        description: "Diferentes niveles de aumento labial para lograr el volumen deseado de forma natural.",
        benefits: ["Labios más voluminosos", "Definición mejorada", "Opciones personalizadas", "Hidratación profunda"],
        duration: "30 minutos"
      },
      {
        t: "Relleno de Mejillas",
        slug: "relleno-mejillas",
        precio: "Consultar",
        excerpt: "Restaura volumen en pómulos y mejillas.",
        image: "/images/services/relleno-mejillas.jpg",
        description: "Relleno específico para restaurar volumen perdido en mejillas y crear lifting natural.",
        benefits: ["Mejillas más llenas", "Lifting natural", "Rostro más joven", "Armonía facial"],
        duration: "45 minutos"
      },
      {
        t: "Relleno debajo de ojos",
        slug: "relleno-ojos",
        precio: "Consultar",
        excerpt: "Corrige ojeras y hundimientos.",
        image: "/images/services/relleno-ojos.jpg",
        description: "Técnica especializada para corregir ojeras profundas y hundimientos periorbitales.",
        benefits: ["Corrige ojeras", "Elimina hundimientos", "Mirada más fresca", "Técnica especializada"],
        duration: "30 minutos"
      },
      {
        t: "Relleno de Mandíbula",
        slug: "relleno-mandibula",
        precio: "Consultar",
        excerpt: "Define y masculiniza la mandíbula.",
        image: "/images/services/relleno-mandibula.jpg",
        description: "Relleno para crear una mandíbula más definida y proporcionada al rostro.",
        benefits: ["Mandíbula definida", "Perfil mejorado", "Masculinización facial", "Armonía facial"],
        duration: "45 minutos"
      },
      {
        t: "Relleno de Mano",
        slug: "relleno-mano",
        precio: "Consultar",
        excerpt: "Rejuvenece las manos envejecidas.",
        image: "/images/services/relleno-mano.jpg",
        description: "Tratamiento para restaurar volumen en manos y disimular venas prominentes.",
        benefits: ["Manos más jóvenes", "Disimula venas", "Restaura volumen", "Piel más lisa"],
        duration: "30 minutos"
      }
    ]
  },
  {
    nombre: "Especializados",
    slug: "especializados",
    servicios: [
      {
        t: "PRF-Ection (gel PRF)",
        slug: "prf-ection",
        precio: "$1200",
        excerpt: "Gel de plasma rico en fibrina para regeneración.",
        image: "/images/services/prf-ection.jpg",
        description: "Tratamiento regenerativo con plasma rico en fibrina para rejuvenecimiento natural.",
        benefits: ["Regeneración natural", "Estimula colágeno", "Sin químicos", "Resultados duraderos"],
        duration: "60 minutos"
      },
      {
        t: "Inyecciones PuppetMaster (líneas)",
        slug: "puppetmaster",
        precio: "$750",
        excerpt: "Elimina líneas de marioneta profundas.",
        image: "/images/services/puppetmaster.jpg",
        description: "Técnica especializada para corregir líneas de marioneta y surcos nasolabiales.",
        benefits: ["Elimina líneas profundas", "Técnica avanzada", "Resultados naturales", "Rejuvenecimiento facial"],
        duration: "45 minutos"
      },
      {
        t: "Lifting de Cuello Nefertiti",
        slug: "nefertiti",
        precio: "$480",
        excerpt: "Define y estiliza el cuello como Nefertiti.",
        image: "/images/services/nefertiti.jpg",
        description: "Tratamiento para crear un cuello elegante y definido inspirado en la reina Nefertiti.",
        benefits: ["Cuello más elegante", "Define línea mandibular", "Efecto lifting", "Sin cirugía"],
        duration: "30 minutos"
      },
      {
        t: "EZ Gel PRF",
        slug: "ez-gel-prf",
        precio: "Consultar",
        excerpt: "Gel de plasma para rejuvenecimiento facial.",
        image: "/images/services/ez-gel-prf.jpg",
        description: "Versión avanzada del gel PRF para tratamientos faciales específicos.",
        benefits: ["Tecnología avanzada", "Rejuvenecimiento profundo", "Biocompatible", "Resultados naturales"],
        duration: "45 minutos"
      },
      {
        t: "Disolvente de Grasa Kybella",
        slug: "kybella",
        precio: "Consultar",
        excerpt: "Disuelve grasa localizada sin cirugía.",
        image: "/images/services/kybella.jpg",
        description: "Tratamiento inyectable para disolver grasa localizada, especialmente en papada.",
        benefits: ["Disuelve grasa", "Sin cirugía", "Resultados permanentes", "FDA aprobado"],
        duration: "30 minutos"
      },
      {
        t: "Cortisona / Acné quístico",
        slug: "cortisona-acne",
        precio: "Consultar",
        excerpt: "Tratamiento médico para acné severo.",
        image: "/images/services/cortisona-acne.jpg",
        description: "Inyecciones de cortisona para tratar acné quístico y lesiones inflamatorias.",
        benefits: ["Reduce inflamación", "Trata acné severo", "Resultados rápidos", "Tratamiento médico"],
        duration: "15 minutos"
      },
      {
        t: "Inyecciones de PRP",
        slug: "inyecciones-prp",
        precio: "Consultar",
        excerpt: "Plasma rico en plaquetas para regeneración.",
        image: "/images/services/inyecciones-prp.jpg",
        description: "Tratamiento regenerativo con plasma rico en plaquetas para rejuvenecimiento facial.",
        benefits: ["Regeneración celular", "Estimula colágeno", "Tratamiento natural", "Mejora textura"],
        duration: "45 minutos"
      }
    ]
  },
  {
    nombre: "Pérdida de Peso y Bienestar",
    slug: "peso-bienestar",
    servicios: [
      {
        t: "Inyección B12 + Fat Blaster",
        slug: "b12-fat-blaster",
        precio: "$50 (+$15 tarifa estatal)",
        excerpt: "Energía y quema de grasa en una inyección.",
        image: "/images/services/b12-fat-blaster.jpg",
        description: "Combinación de vitamina B12 y lipotropos para aumentar energía y acelerar metabolismo.",
        benefits: ["Aumenta energía", "Acelera metabolismo", "Quema grasa", "Mejora bienestar"],
        duration: "15 minutos"
      },
      {
        t: "Inyecciones Fat Blaster",
        slug: "fat-blaster",
        precio: "$40",
        excerpt: "Acelera el metabolismo y quema grasa.",
        image: "/images/services/fat-blaster.jpg",
        description: "Inyección de lipotropos para acelerar el metabolismo y facilitar la pérdida de peso.",
        benefits: ["Acelera metabolismo", "Facilita pérdida de peso", "Aumenta energía", "Mejora digestión"],
        duration: "10 minutos"
      },
      {
        t: "Inyección de Energía B12",
        slug: "b12-energia",
        precio: "Consultar",
        excerpt: "Vitamina B12 para energía y vitalidad.",
        image: "/images/services/b12-energia.jpg",
        description: "Inyección de vitamina B12 para combatir fatiga y aumentar niveles de energía.",
        benefits: ["Combate fatiga", "Aumenta energía", "Mejora concentración", "Fortalece sistema inmune"],
        duration: "10 minutos"
      },
      {
        t: "Consulta Get Carded",
        slug: "get-carded",
        precio: "$250 (+$15)",
        excerpt: "Evaluación médica para tratamientos de peso.",
        image: "/images/services/get-carded.jpg",
        description: "Consulta médica especializada para evaluar opciones de pérdida de peso supervisada.",
        benefits: ["Evaluación médica", "Plan personalizado", "Seguimiento profesional", "Resultados seguros"],
        duration: "45 minutos"
      },
      {
        t: "Pérdida de peso supervisada",
        slug: "perdida-peso-supervisada",
        precio: "Consultar",
        excerpt: "Programa médico integral de pérdida de peso.",
        image: "/images/services/perdida-peso-supervisada.jpg",
        description: "Programa médico completo con seguimiento profesional para pérdida de peso efectiva.",
        benefits: ["Supervisión médica", "Plan integral", "Resultados duraderos", "Seguimiento continuo"],
        duration: "Programa personalizado"
      },
      {
        t: "Semaglutide / Ozempic",
        slug: "semaglutide-ozempic",
        precio: "Consultar",
        excerpt: "Medicamento avanzado para pérdida de peso.",
        image: "/images/services/semaglutide-ozempic.jpg",
        description: "Tratamiento médico con semaglutide para pérdida de peso significativa y controlada.",
        benefits: ["Pérdida de peso efectiva", "Control de apetito", "Supervisión médica", "Resultados comprobados"],
        duration: "Tratamiento continuo"
      },
      {
        t: "Ozonoterapia / Exosomas / TRH",
        slug: "ozono-exosomas-trh",
        precio: "Consultar",
        excerpt: "Terapias avanzadas de bienestar y longevidad.",
        image: "/images/services/ozono-exosomas-trh.jpg",
        description: "Terapias de medicina regenerativa para bienestar integral y anti-envejecimiento.",
        benefits: ["Medicina regenerativa", "Anti-envejecimiento", "Bienestar integral", "Tecnología avanzada"],
        duration: "60 minutos"
      }
    ]
  },
  {
    nombre: "Cabello y Piel",
    slug: "cabello-piel",
    servicios: [
      {
        t: "Restauración capilar con PRF",
        slug: "capilar-prf",
        precio: "$750",
        excerpt: "Estimula crecimiento capilar naturalmente.",
        image: "/images/services/capilar-prf.jpg",
        description: "Tratamiento con plasma rico en fibrina para estimular el crecimiento capilar natural.",
        benefits: ["Estimula crecimiento", "Fortalece cabello", "Tratamiento natural", "Sin efectos secundarios"],
        duration: "60 minutos"
      },
      {
        t: "Microneedling",
        slug: "microneedling",
        precio: "Consultar",
        excerpt: "Rejuvenece la piel con microagujas.",
        image: "/images/services/microneedling.jpg",
        description: "Tratamiento de microagujas para estimular colágeno y mejorar textura de la piel.",
        benefits: ["Estimula colágeno", "Mejora textura", "Reduce cicatrices", "Piel más firme"],
        duration: "45 minutos"
      },
      {
        t: "Microneedling con PRP",
        slug: "microneedling-prp",
        precio: "Consultar",
        excerpt: "Microneedling potenciado con plasma rico.",
        image: "/images/services/microneedling-prp.jpg",
        description: "Combinación de microneedling con PRP para máxima regeneración y rejuvenecimiento.",
        benefits: ["Regeneración máxima", "Resultados potenciados", "Rejuvenecimiento profundo", "Piel renovada"],
        duration: "60 minutos"
      }
    ]
  },
  {
    nombre: "Rejuvenecimiento Íntimo",
    slug: "rejuvenecimiento-intimo",
    servicios: [
      {
        t: "O-Shot (PRP)",
        slug: "o-shot-prp",
        precio: "$1200",
        excerpt: "Rejuvenecimiento íntimo con plasma rico.",
        image: "/images/services/o-shot-prp.jpg",
        description: "Tratamiento íntimo con PRP para mejorar sensibilidad y rejuvenecimiento vaginal.",
        benefits: ["Mejora sensibilidad", "Rejuvenecimiento íntimo", "Tratamiento natural", "Confianza renovada"],
        duration: "45 minutos"
      },
      {
        t: "PRP vaginal / Células madre vaginal",
        slug: "prp-celulas-vaginal",
        precio: "Consultar",
        excerpt: "Regeneración íntima con células madre.",
        image: "/images/services/prp-celulas-vaginal.jpg",
        description: "Tratamiento avanzado con células madre para regeneración íntima completa.",
        benefits: ["Regeneración completa", "Tecnología avanzada", "Resultados duraderos", "Bienestar íntimo"],
        duration: "60 minutos"
      }
    ]
  },
  {
    nombre: "Faciales PRP / Células Madre",
    slug: "faciales-prp-celulas",
    servicios: [
      {
        t: "Faciales con PRP",
        slug: "facial-prp",
        precio: "Consultar",
        excerpt: "Facial rejuvenecedor con plasma rico.",
        image: "/images/services/facial-prp.jpg",
        description: "Facial regenerativo con plasma rico en plaquetas para rejuvenecimiento profundo.",
        benefits: ["Rejuvenecimiento profundo", "Estimula colágeno", "Piel radiante", "Tratamiento natural"],
        duration: "75 minutos"
      },
      {
        t: "Faciales con Células Madre",
        slug: "facial-celulas-madre",
        precio: "Consultar",
        excerpt: "Facial avanzado con células madre.",
        image: "/images/services/facial-celulas-madre.jpg",
        description: "Facial de última generación con células madre para máxima regeneración facial.",
        benefits: ["Regeneración máxima", "Tecnología avanzada", "Anti-envejecimiento", "Resultados excepcionales"],
        duration: "90 minutos"
      }
    ]
  },
  {
    nombre: "Avanzados / Corporales",
    slug: "avanzados-corporales",
    servicios: [
      {
        t: "Brazilian Butt Lift",
        slug: "bbl",
        precio: "$6000",
        excerpt: "Aumento y contorno de glúteos con grasa propia.",
        image: "/images/services/bbl.jpg",
        description: "Procedimiento avanzado de aumento de glúteos con transferencia de grasa autóloga.",
        benefits: ["Aumento natural", "Contorno mejorado", "Grasa propia", "Resultados duraderos"],
        duration: "3-4 horas"
      }
    ]
  }
];

// Función helper para obtener servicio por slug
export function getServicioBySlug(slug: string): Servicio | undefined {
  for (const categoria of categorias) {
    const servicio = categoria.servicios.find(s => s.slug === slug);
    if (servicio) return servicio;
  }
  return undefined;
}

// Función helper para obtener categoría por slug
export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return categorias.find(c => c.slug === slug);
}

// Servicios destacados para la página principal
export const serviciosDestacados = [
  "tox-neurotoxina",
  "sculptra-colageno", 
  "prf-ection",
  "cheekbone-pop",
  "relleno-labios",
  "b12-fat-blaster"
];