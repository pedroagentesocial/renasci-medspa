// Unified service interface
export interface ServicioUnificado {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  category: string;
  categoryName: {
    es: string;
    en: string;
  };
  icon?: string;
  precio?: string;
  image: string;
  benefits: string[];
  duration?: string;
  href: string; // Auto-generated from slug
}

export interface CategoriaUnificada {
  id: string;
  nombre: {
    es: string;
    en: string;
  };
  slug: string;
  servicios: ServicioUnificado[];
}

// Legacy interfaces for backward compatibility
export interface Servicio extends ServicioUnificado {}
export interface Categoria extends CategoriaUnificada {
  nombre: string;
}

// New services data structure for the services section
export const services: Servicio[] = [
  // Neurotoxinas
  {
    id: 'botox-dysport',
    title: { es: 'Botox / Dysport', en: 'Botox / Dysport' },
    description: { es: 'Reduce arrugas y líneas de expresión', en: 'Reduce wrinkles and expression lines' },
    category: 'neurotoxinas',
    icon: '💉',
    href: '/services/botox-dysport',
    precio: '$12 / unidad'
  },
  {
    id: 'xeomin',
    slug: 'xeomin',
    title: { es: 'Xeomin', en: 'Xeomin' },
    description: { es: 'Neurotoxina pura sin proteínas complejas para resultados precisos y naturales en el tratamiento de arrugas y líneas de expresión.', en: 'Pure neurotoxin without complex proteins for precise and natural results in treating wrinkles and expression lines.' },
    excerpt: { es: 'Neurotoxina pura para resultados precisos y naturales.', en: 'Pure neurotoxin for precise and natural results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Neurotoxina pura', 'Sin proteínas complejas', 'Resultados naturales', 'Menor riesgo de resistencia'],
    duration: '30 minutos',
    href: '/services/xeomin'
  },
  {
    id: 'dysport',
    slug: 'dysport',
    title: { es: 'Dysport', en: 'Dysport' },
    description: { es: 'Neurotoxina de acción rápida que proporciona resultados naturales para suavizar arrugas dinámicas y líneas de expresión.', en: 'Fast-acting neurotoxin that provides natural results for smoothing dynamic wrinkles and expression lines.' },
    excerpt: { es: 'Neurotoxina de acción rápida para resultados naturales.', en: 'Fast-acting neurotoxin for natural results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Acción rápida', 'Resultados naturales', 'Menor difusión', 'Efectos duraderos'],
    duration: '30 minutos',
    href: '/services/dysport'
  },
  {
    id: 'botox-hombros',
    slug: 'botox-hombros',
    title: { es: 'Botox para Adelgazar los Hombros', en: 'Botox for Shoulder Slimming' },
    description: { es: 'Tratamiento especializado con neurotoxina para reducir el volumen de los músculos trapecio y crear una silueta más estilizada de hombros y cuello.', en: 'Specialized neurotoxin treatment to reduce trapezius muscle volume and create a more stylized shoulder and neck silhouette.' },
    excerpt: { es: 'Reduce el volumen de los hombros para una silueta más estilizada.', en: 'Reduce shoulder volume for a more stylized silhouette.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
    icon: '💪',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?w=400&h=300&fit=crop&crop=center',
    benefits: ['Silueta más estilizada', 'Hombros más delgados', 'Cuello más largo', 'Resultados naturales'],
    duration: '45 minutos',
    href: '/services/botox-hombros'
  },
  {
    id: 'baby-botox',
    title: { es: 'Baby Botox', en: 'Baby Botox' },
    description: { es: 'Tratamiento preventivo con dosis mínimas', en: 'Preventive treatment with minimal doses' },
    category: 'neurotoxinas',
    icon: '✨',
    href: '/services/baby-botox'
  },
  {
    id: 'baby-botox-especializado',
    slug: 'baby-botox',
    title: { es: 'Baby Botox', en: 'Baby Botox' },
    description: { es: 'Tratamiento suave con dosis menores de neurotoxina para resultados naturales y sutiles, manteniendo la expresión facial natural.', en: 'Gentle treatment with smaller doses of neurotoxin for natural and subtle results, maintaining natural facial expression.' },
    excerpt: { es: 'Tratamiento suave para resultados naturales y sutiles.', en: 'Gentle treatment for natural and subtle results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
    icon: '✨',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=center',
    benefits: ['Resultados naturales', 'Expresión preservada', 'Menos riesgo', 'Efecto sutil'],
    duration: '20 minutos',
    href: '/services/baby-botox'
  },
  {
    id: 'botox-migranas',
    slug: 'botox-migranas',
    title: { es: 'Botox para Migrañas', en: 'Botox for Migraines' },
    description: { es: 'Tratamiento médico especializado con neurotoxina para reducir la frecuencia e intensidad de las migrañas crónicas y mejorar la calidad de vida.', en: 'Specialized medical treatment with neurotoxin to reduce the frequency and intensity of chronic migraines and improve quality of life.' },
    excerpt: { es: 'Tratamiento médico para reducir migrañas crónicas.', en: 'Medical treatment to reduce chronic migraines.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
    icon: '🧠',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reduce frecuencia', 'Menor intensidad', 'Mejora calidad de vida', 'Tratamiento médico'],
    duration: '60 minutos',
    href: '/services/botox-migranas'
  },
  {
    id: 'botox-lip-flip',
    title: { es: 'Botox Lip Flip', en: 'Botox Lip Flip' },
    description: { es: 'Potencia el labio superior naturalmente', en: 'Enhance upper lip naturally' },
    category: 'neurotoxinas',
    icon: '💋',
    href: '/services/botox-lip-flip',
    precio: '$75'
  },
  {
    id: 'botox-no-sweat',
    title: { es: 'Botox No-Sweat', en: 'Botox No-Sweat' },
    description: { es: 'Elimina la sudoración excesiva', en: 'Eliminates excessive sweating' },
    category: 'neurotoxinas',
    icon: '🌡️',
    href: '/services/botox-no-sweat',
    precio: '$850'
  },

  // Medicina Regenerativa
  {
    id: 'semaglutide',
    slug: 'semaglutide',
    title: { es: 'Semaglutide', en: 'Semaglutide' },
    description: { es: 'Tratamiento avanzado de medicina regenerativa para el control de peso y mejora metabólica con resultados duraderos y seguros.', en: 'Advanced regenerative medicine treatment for weight control and metabolic improvement with lasting and safe results.' },
    excerpt: { es: 'Medicina regenerativa para control de peso y mejora metabólica.', en: 'Regenerative medicine for weight control and metabolic improvement.' },
    category: 'medicina-regenerativa',
    categoryName: { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
    icon: '💊',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Control efectivo del peso', 'Mejora metabólica', 'Reducción del apetito', 'Resultados duraderos'],
    duration: '30 minutos',
    href: '/services/semaglutide'
  },
  {
    id: 'ozempic',
    slug: 'ozempic',
    title: { es: 'Ozempic', en: 'Ozempic' },
    description: { es: 'Tratamiento innovador de medicina regenerativa con semaglutida para el control glucémico y pérdida de peso efectiva y segura.', en: 'Innovative regenerative medicine treatment with semaglutide for glycemic control and effective, safe weight loss.' },
    excerpt: { es: 'Medicina regenerativa para control glucémico y pérdida de peso.', en: 'Regenerative medicine for glycemic control and weight loss.' },
    category: 'medicina-regenerativa',
    categoryName: { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
    icon: '💊',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
    benefits: ['Control glucémico superior', 'Pérdida de peso significativa', 'Reducción de riesgo cardiovascular', 'Mejora en calidad de vida'],
    duration: '30 minutos',
    href: '/services/ozempic'
  },
  {
    id: 'ozonoterapia',
    slug: 'ozonoterapia',
    title: { es: 'Ozonoterapia', en: 'Ozone Therapy' },
    description: { es: 'Terapia regenerativa avanzada con ozono médico para potenciar la oxigenación celular, fortalecer el sistema inmune y promover la curación natural.', en: 'Advanced regenerative therapy with medical ozone to enhance cellular oxygenation, strengthen the immune system and promote natural healing.' },
    excerpt: { es: 'Terapia regenerativa con ozono médico para oxigenación y curación.', en: 'Regenerative therapy with medical ozone for oxygenation and healing.' },
    category: 'medicina-regenerativa',
    categoryName: { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
    icon: '🫧',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center',
    benefits: ['Oxigenación celular mejorada', 'Fortalecimiento inmunológico', 'Propiedades antimicrobianas', 'Regeneración tisular acelerada'],
    duration: '45 minutos',
    href: '/services/ozonoterapia'
  },
  {
    id: 'exosomas',
    slug: 'exosomas',
    title: { es: 'Exosomas', en: 'Exosomes' },
    description: { es: 'Terapia regenerativa de vanguardia con exosomas para la regeneración celular, rejuvenecimiento y reparación de tejidos a nivel molecular.', en: 'Cutting-edge regenerative therapy with exosomes for cellular regeneration, rejuvenation and tissue repair at the molecular level.' },
    excerpt: { es: 'Terapia regenerativa con exosomas para regeneración celular avanzada.', en: 'Regenerative therapy with exosomes for advanced cellular regeneration.' },
    category: 'medicina-regenerativa',
    categoryName: { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular avanzada', 'Rejuvenecimiento tisular', 'Comunicación celular mejorada', 'Reparación molecular'],
    duration: '60 minutos',
    href: '/services/exosomas'
  },
  {
    id: 'terapia-reemplazo-hormonal',
    slug: 'terapia-reemplazo-hormonal',
    title: { es: 'Terapia de Reemplazo Hormonal', en: 'Hormone Replacement Therapy' },
    description: { es: 'Terapia regenerativa especializada para restaurar el equilibrio hormonal, mejorar la calidad de vida y optimizar el bienestar integral mediante tratamientos hormonales personalizados.', en: 'Specialized regenerative therapy to restore hormonal balance, improve quality of life and optimize integral well-being through personalized hormonal treatments.' },
    excerpt: { es: 'Terapia regenerativa para equilibrio hormonal y bienestar integral.', en: 'Regenerative therapy for hormonal balance and integral well-being.' },
    category: 'medicina-regenerativa',
    categoryName: { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
    icon: '⚖️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Equilibrio hormonal restaurado', 'Mejora en calidad de vida', 'Optimización del bienestar', 'Tratamiento personalizado'],
    duration: '45 minutos',
    href: '/services/terapia-reemplazo-hormonal'
  },
  // Rellenos y Sculptra
  {
    id: 'mini-aumento-labios',
    title: { es: 'Mini Aumento de Labios', en: 'Mini Lip Enhancement' },
    description: { es: 'Volumen sutil y natural para labios más definidos', en: 'Subtle and natural volume for more defined lips' },
    category: 'rellenos',
    icon: '💋',
    href: '/services/mini-aumento-labios',
    precio: '$375'
  },
  {
    id: 'mega-aumento-labios',
    title: { es: 'Mega Aumento de Labios', en: 'Mega Lip Enhancement' },
    description: { es: 'Máximo volumen y definición dramática para labios impactantes', en: 'Maximum volume and dramatic definition for impactful lips' },
    category: 'rellenos',
    icon: '💋',
    href: '/services/mega-aumento-labios',
    precio: '$850'
  },
  {
    id: 'relleno-labios',
    title: { es: 'Relleno de Labios', en: 'Lip Fillers' },
    description: { es: 'Aumenta y define los labios naturalmente', en: 'Enhance and define lips naturally' },
    category: 'rellenos',
    icon: '💋',
    href: '/services/relleno-labios',
    precio: '$375 - $850'
  },
  // Tratamientos con Sculptra y Rellenos
  {
    id: 'bananabella',
    slug: 'bananabella',
    title: { es: 'BananaBella (zona del bikini)', en: 'BananaBella (bikini area)' },
    description: { es: 'Tratamiento especializado para contornear la zona del bikini', en: 'Specialized treatment to contour the bikini area' },
    excerpt: { es: 'Contornea y define la zona del bikini', en: 'Contour and define the bikini area' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🌺',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Contorno especializado', 'Zona bikini definida', 'Resultados duraderos', 'Técnica avanzada'],
    duration: '90 minutos',
    href: '/services/bananabella'
  },
  {
    id: 'sculptra-colageno',
    slug: 'sculptra-colageno',
    title: { es: 'Estimulación de Colágeno con Sculptra', en: 'Sculptra Collagen Stimulation' },
    description: { es: 'Activa la producción natural de colágeno para rejuvenecimiento duradero', en: 'Activates natural collagen production for lasting rejuvenation' },
    excerpt: { es: 'Estimula la producción natural de colágeno', en: 'Stimulates natural collagen production' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🧬',
    precio: '$800',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula colágeno natural', 'Resultados graduales', 'Duración hasta 2 años', 'Rejuvenecimiento integral'],
    duration: '45 minutos',
    href: '/services/sculptra-colageno'
  },
  {
    id: 'mini-chin-up',
    slug: 'mini-chin-up',
    title: { es: 'Mini Chin Up (reducción de papada)', en: 'Mini Chin Up (double chin reduction)' },
    description: { es: 'Tratamiento mínimamente invasivo para reducir la papada', en: 'Minimally invasive treatment to reduce double chin' },
    excerpt: { es: 'Reduce la papada de forma mínimamente invasiva', en: 'Reduce double chin minimally invasively' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🎯',
    precio: '$600',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reducción efectiva', 'Mínimamente invasivo', 'Perfil mejorado', 'Recuperación rápida'],
    duration: '30 minutos',
    href: '/services/mini-chin-up'
  },
  {
    id: 'mega-collagen-stimulation-sculptra',
    slug: 'mega-collagen-stimulation-sculptra',
    title: { es: 'Mega Estimulación de Colágeno — Sculptra', en: 'Mega Collagen Stimulation — Sculptra' },
    description: { es: 'Tratamiento intensivo con doble aplicación de Sculptra', en: 'Intensive treatment with double Sculptra application' },
    excerpt: { es: 'Doble estimulación de colágeno para resultados intensos', en: 'Double collagen stimulation for intense results' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '💎',
    precio: '$1600',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Doble estimulación', 'Resultados intensivos', 'Rejuvenecimiento profundo', 'Duración extendida'],
    duration: '75 minutos',
    href: '/services/mega-collagen-stimulation-sculptra'
  },
  {
    id: 'brazilian-butt-lift',
    slug: 'brazilian-butt-lift',
    title: { es: 'Brazilian Butt Lift', en: 'Brazilian Butt Lift' },
    description: { es: 'Aumento y contorno de glúteos con técnicas avanzadas', en: 'Buttock enhancement and contouring with advanced techniques' },
    excerpt: { es: 'Aumento y contorno de glúteos con técnicas avanzadas', en: 'Buttock enhancement and contouring with advanced techniques' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🍑',
    precio: '$6000',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Aumento natural', 'Contorno mejorado', 'Resultados duraderos', 'Técnica avanzada'],
    duration: '3-4 horas',
    href: '/services/brazilian-butt-lift'
  },
  {
    id: 'prf-ection',
    slug: 'prf-ection',
    title: { es: 'PRF-Ection (gel PRF)', en: 'PRF-Ection (PRF gel)' },
    description: { es: 'Tratamiento regenerativo con gel de fibrina rica en plaquetas', en: 'Regenerative treatment with platelet-rich fibrin gel' },
    excerpt: { es: 'Rejuvenecimiento natural con gel PRF', en: 'Natural rejuvenation with PRF gel' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🧪',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular', 'Mejora textura', 'Estimula colágeno', 'Resultados progresivos'],
    duration: '60 minutos',
    href: '/services/prf-ection'
  },
  {
    id: 'relleno-mejillas',
    title: { es: 'Relleno de Mejillas', en: 'Cheek Fillers' },
    description: { es: 'Restaura volumen en pómulos', en: 'Restore volume in cheekbones' },
    category: 'rellenos',
    icon: '✨',
    href: '/services/relleno-mejillas'
  },
  {
    id: 'relleno-ojos',
    title: { es: 'Relleno Debajo de Ojos', en: 'Under Eye Fillers' },
    description: { es: 'Corrige ojeras y hundimientos', en: 'Correct dark circles and hollows' },
    category: 'rellenos',
    icon: '👁️',
    href: '/services/relleno-ojos'
  },

  // Skin & Laser
  {
    id: 'microneedling',
    title: { es: 'Microneedling', en: 'Microneedling' },
    description: { es: 'Rejuvenece la piel con microagujas', en: 'Rejuvenate skin with microneedles' },
    category: 'skin-laser',
    icon: '🔬',
    href: '/services/microneedling'
  },
  {
    id: 'microneedling-prp',
    title: { es: 'Microneedling + PRP', en: 'Microneedling + PRP' },
    description: { es: 'Microneedling potenciado con plasma', en: 'Enhanced microneedling with plasma' },
    category: 'skin-laser',
    icon: '🩸',
    href: '/services/microneedling-prp'
  },
  {
    id: 'facial-prp',
    title: { es: 'Facial PRP', en: 'PRP Facial' },
    description: { es: 'Facial rejuvenecedor con plasma rico', en: 'Rejuvenating facial with rich plasma' },
    category: 'skin-laser',
    icon: '✨',
    href: '/services/facial-prp'
  },
  {
    id: 'facial-celulas-madre',
    title: { es: 'Facial Células Madre', en: 'Stem Cell Facial' },
    description: { es: 'Facial avanzado con células madre', en: 'Advanced facial with stem cells' },
    category: 'skin-laser',
    icon: '🧬',
    href: '/services/facial-celulas-madre'
  },

  // Contorno Corporal
  {
    id: 'contorno-facial-personalizado',
    title: { es: 'Contorno Facial Personalizado', en: 'Personalized Facial Contouring' },
    description: { es: 'Tratamiento personalizado para realzar y definir la estructura facial natural', en: 'Personalized treatment to enhance and define natural facial structure' },
    category: 'contorno',
    icon: '🎨',
    href: '/services/contorno-facial-personalizado',
    precio: '$850'
  },
  {
    id: 'cheekbone-pop',
    title: { es: 'Elevación de Pómulos (Cheekbone Pop)', en: 'Cheekbone Pop Enhancement' },
    description: { es: 'Tratamiento especializado para elevar y definir los pómulos', en: 'Specialized treatment to lift and define cheekbones' },
    category: 'contorno',
    icon: '💎',
    href: '/services/cheekbone-pop',
    precio: '$850'
  },
  {
    id: 'check-your-bags',
    title: { es: 'Inyección Check Your Bags (ojeras/bolsas)', en: 'Check Your Bags Injection (under-eye bags)' },
    description: { es: 'Tratamiento especializado para reducir ojeras y bolsas debajo de los ojos', en: 'Specialized treatment to reduce dark circles and under-eye bags' },
    category: 'contorno',
    icon: '👁️',
    href: '/services/check-your-bags',
    precio: '$750'
  },
  {
    id: 'chinbella',
    title: { es: 'ChinBella (papada/doble mentón)', en: 'ChinBella (double chin treatment)' },
    description: { es: 'Tratamiento especializado para reducir la papada y definir el contorno del mentón', en: 'Specialized treatment to reduce double chin and define chin contour' },
    category: 'contorno',
    icon: '🎯',
    href: '/services/chinbella',
    precio: '$1200'
  },
  {
    id: 'thighbella',
    title: { es: 'ThighBella (muslos)', en: 'ThighBella (thigh contouring)' },
    description: { es: 'Tratamiento especializado para contornear y definir los muslos', en: 'Specialized treatment to contour and define thighs' },
    category: 'contorno',
    icon: '🦵',
    href: '/services/thighbella',
    precio: '$1200'
  },
  {
    id: 'brabella',
    title: { es: 'BraBella (rollito de brasier)', en: 'BraBella (bra bulge treatment)' },
    description: { es: 'Tratamiento especializado para eliminar el rollito de brasier', en: 'Specialized treatment to eliminate bra bulge' },
    category: 'contorno',
    icon: '👙',
    href: '/services/brabella',
    precio: '$1200'
  },
  {
    id: 'kybella',
    title: { es: 'Kybella', en: 'Kybella' },
    description: { es: 'Disuelve grasa localizada sin cirugía', en: 'Dissolve localized fat without surgery' },
    category: 'contorno',
    icon: '🎯',
    href: '/services/kybella'
  },

  // Rejuvenecimiento Íntimo
  {
    id: 'o-shot-prp',
    title: { es: 'O-Shot (PRP)', en: 'O-Shot (PRP)' },
    description: { es: 'Rejuvenecimiento íntimo con plasma', en: 'Intimate rejuvenation with plasma' },
    category: 'intimo',
    icon: '🌸',
    href: '/services/o-shot-prp',
    precio: '$1200'
  },
  {
    id: 'prp-celulas-vaginal',
    title: { es: 'PRP Vaginal', en: 'Vaginal PRP' },
    description: { es: 'Regeneración íntima con células madre', en: 'Intimate regeneration with stem cells' },
    category: 'intimo',
    icon: '🌺',
    href: '/services/prp-celulas-vaginal'
  },

  // Cabello y Piel
  {
    id: 'capilar-prf',
    title: { es: 'Restauración Capilar PRF', en: 'PRF Hair Restoration' },
    description: { es: 'Estimula crecimiento capilar naturalmente', en: 'Stimulate natural hair growth' },
    category: 'cabello-piel',
    icon: '💇‍♀️',
    href: '/services/capilar-prf',
    precio: '$750'
  },
  {
    id: 'restauracion-capilar-prp',
    slug: 'restauracion-capilar-prp',
    title: { es: 'Tratamiento de Restauración Capilar con PRP', en: 'PRP Hair Restoration Treatment' },
    description: { es: 'Tratamiento regenerativo que utiliza plasma rico en plaquetas (PRP) para estimular el crecimiento capilar natural y fortalecer los folículos pilosos.', en: 'Regenerative treatment that uses platelet-rich plasma (PRP) to stimulate natural hair growth and strengthen hair follicles.' },
    excerpt: { es: 'Regeneración capilar con PRP para crecimiento natural.', en: 'Hair regeneration with PRP for natural growth.' },
    category: 'cabello-piel',
    categoryName: { es: 'Tratamientos de Cabello y Piel', en: 'Hair and Skin Treatments' },
    icon: '💇‍♀️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula crecimiento natural', 'Fortalece folículos', 'Mejora densidad capilar', 'Tratamiento natural'],
    duration: '60 minutos',
    href: '/services/restauracion-capilar-prp'
  },
  {
    id: 'microneedling-tratamiento',
    slug: 'microneedling',
    title: { es: 'Tratamiento Microneedling', en: 'Microneedling Treatment' },
    description: { es: 'Tratamiento de rejuvenecimiento facial que utiliza microagujas para estimular la producción natural de colágeno y mejorar la textura de la piel.', en: 'Facial rejuvenation treatment that uses micro-needles to stimulate natural collagen production and improve skin texture.' },
    excerpt: { es: 'Rejuvenecimiento facial con microagujas para estimular colágeno.', en: 'Facial rejuvenation with micro-needles to stimulate collagen.' },
    category: 'cabello-piel',
    categoryName: { es: 'Tratamientos de Cabello y Piel', en: 'Hair and Skin Treatments' },
    icon: '🔬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula producción de colágeno', 'Mejora textura de la piel', 'Reduce cicatrices y poros', 'Rejuvenecimiento natural'],
    duration: '45 minutos',
    href: '/services/microneedling'
  },
  {
    id: 'microneedling-prp-tratamiento',
    slug: 'microneedling-prp',
    title: { es: 'Microneedling con PRP', en: 'Microneedling with PRP' },
    description: { es: 'Tratamiento avanzado que combina microneedling con plasma rico en plaquetas (PRP) para maximizar la regeneración celular y obtener resultados superiores en el rejuvenecimiento facial.', en: 'Advanced treatment that combines microneedling with platelet-rich plasma (PRP) to maximize cellular regeneration and achieve superior results in facial rejuvenation.' },
    excerpt: { es: 'Microneedling potenciado con PRP para máxima regeneración.', en: 'Microneedling enhanced with PRP for maximum regeneration.' },
    category: 'cabello-piel',
    categoryName: { es: 'Tratamientos de Cabello y Piel', en: 'Hair and Skin Treatments' },
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular acelerada', 'Resultados superiores', 'Estimulación natural de colágeno', 'Rejuvenecimiento profundo'],
    duration: '60 minutos',
    href: '/services/microneedling-prp'
  },

  // Rellenos Faciales y Corporales
  {
    id: 'relleno-dermico',
    slug: 'relleno-dermico',
    title: { es: 'Relleno Dérmico', en: 'Dermal Filler' },
    description: { es: 'Tratamiento estético avanzado con ácido hialurónico para restaurar volumen, suavizar arrugas y realzar los contornos faciales de forma natural y segura.', en: 'Advanced aesthetic treatment with hyaluronic acid to restore volume, smooth wrinkles and enhance facial contours naturally and safely.' },
    excerpt: { es: 'Restaura volumen y suaviza arrugas de forma natural.', en: 'Restores volume and smooths wrinkles naturally.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Restaura volumen facial', 'Suaviza arrugas profundas', 'Realza contornos naturales', 'Resultados inmediatos'],
    duration: '45 minutos',
    href: '/services/relleno-dermico'
  },
  {
    id: 'relleno-labios',
    slug: 'relleno-labios',
    title: { es: 'Relleno de Labios', en: 'Lip Filler' },
    description: { es: 'Tratamiento especializado para aumentar el volumen, definir el contorno y mejorar la forma de los labios con ácido hialurónico para un resultado natural y atractivo.', en: 'Specialized treatment to increase volume, define contour and improve lip shape with hyaluronic acid for a natural and attractive result.' },
    excerpt: { es: 'Aumenta volumen y define el contorno de los labios naturalmente.', en: 'Increases volume and defines lip contour naturally.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '💋',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Aumenta volumen labial', 'Define contorno natural', 'Mejora simetría', 'Hidrata y suaviza'],
    duration: '30 minutos',
    href: '/services/relleno-labios'
  },
  {
    id: 'relleno-mejillas',
    slug: 'relleno-mejillas',
    title: { es: 'Relleno de Mejillas', en: 'Cheek Filler' },
    description: { es: 'Tratamiento estético para restaurar volumen en los pómulos, elevar las mejillas y crear un contorno facial más juvenil y definido con ácido hialurónico.', en: 'Aesthetic treatment to restore volume in the cheekbones, lift the cheeks and create a more youthful and defined facial contour with hyaluronic acid.' },
    excerpt: { es: 'Restaura volumen y eleva las mejillas para un rostro más juvenil.', en: 'Restores volume and lifts cheeks for a more youthful face.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '✨',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Restaura volumen perdido', 'Eleva pómulos naturalmente', 'Mejora contorno facial', 'Efecto lifting natural'],
    duration: '45 minutos',
    href: '/services/relleno-mejillas'
  },
  {
    id: 'relleno-debajo-ojos',
    slug: 'relleno-debajo-ojos',
    title: { es: 'Relleno para Debajo de los Ojos', en: 'Under Eye Filler' },
    description: { es: 'Tratamiento estético especializado para corregir ojeras, bolsas y hundimientos en el área periocular, devolviendo luminosidad y juventud a la mirada con ácido hialurónico.', en: 'Specialized aesthetic treatment to correct dark circles, bags and hollows in the periocular area, restoring luminosity and youth to the gaze with hyaluronic acid.' },
    excerpt: { es: 'Corrige ojeras y bolsas para una mirada más luminosa y juvenil.', en: 'Corrects dark circles and bags for a brighter and more youthful look.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '👁️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina ojeras profundas', 'Reduce bolsas bajo los ojos', 'Ilumina la mirada', 'Rejuvenece el área ocular'],
    duration: '30 minutos',
    href: '/services/relleno-debajo-ojos'
  },
  {
    id: 'relleno-mandibula',
    slug: 'relleno-mandibula',
    title: { es: 'Relleno de Mandíbula', en: 'Jaw Filler' },
    description: { es: 'Tratamiento estético avanzado para definir y esculpir la línea de la mandíbula, creando un perfil más masculino o femenino según el deseo del paciente con ácido hialurónico.', en: 'Advanced aesthetic treatment to define and sculpt the jawline, creating a more masculine or feminine profile according to the patient\'s desire with hyaluronic acid.' },
    excerpt: { es: 'Define y esculpe la línea de la mandíbula para un perfil más atractivo.', en: 'Defines and sculpts the jawline for a more attractive profile.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '💎',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-5f8fcfe5f8a8?w=400&h=300&fit=crop&crop=center',
    benefits: ['Define la línea mandibular', 'Mejora el perfil facial', 'Crea simetría facial', 'Rejuvenece la apariencia'],
    duration: '45 minutos',
    href: '/services/relleno-mandibula'
  },
  {
    id: 'relleno-mano',
    slug: 'relleno-mano',
    title: { es: 'Relleno de Mano', en: 'Hand Filler' },
    description: { es: 'Tratamiento estético especializado para rejuvenecer las manos, restaurando volumen perdido y disimulando venas prominentes con ácido hialurónico para unas manos más jóvenes y suaves.', en: 'Specialized aesthetic treatment to rejuvenate hands, restoring lost volume and concealing prominent veins with hyaluronic acid for younger and smoother hands.' },
    excerpt: { es: 'Rejuvenece tus manos restaurando volumen y suavidad natural.', en: 'Rejuvenates your hands by restoring volume and natural smoothness.' },
    category: 'rellenos-faciales-corporales',
    categoryName: { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
    icon: '✋',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
    benefits: ['Restaura volumen perdido', 'Disimula venas prominentes', 'Suaviza arrugas', 'Rejuvenece la apariencia'],
    duration: '30 minutos',
    href: '/services/relleno-mano'
  },

  // Bienestar
  {
    id: 'b12-fat-blaster',
    title: { es: 'B12 + Fat Blaster', en: 'B12 + Fat Blaster' },
    description: { es: 'Energía y quema de grasa en una inyección', en: 'Energy and fat burning in one injection' },
    category: 'bienestar',
    icon: '⚡',
    href: '/services/b12-fat-blaster',
    precio: '$50'
  },
  {
    id: 'semaglutide-ozempic',
    title: { es: 'Semaglutide / Ozempic', en: 'Semaglutide / Ozempic' },
    description: { es: 'Medicamento avanzado para pérdida de peso', en: 'Advanced weight loss medication' },
    category: 'bienestar',
    icon: '💊',
    href: '/services/semaglutide-ozempic'
  },
  {
    id: 'ozono-exosomas-trh',
    title: { es: 'Ozonoterapia / Exosomas', en: 'Ozone Therapy / Exosomes' },
    description: { es: 'Terapias avanzadas de bienestar', en: 'Advanced wellness therapies' },
    category: 'bienestar',
    icon: '🧪',
    href: '/services/ozono-exosomas-trh'
  },
  // Faciales Especializados
  {
    id: 'faciales-prp',
    slug: 'faciales-prp',
    title: { es: 'Faciales con PRP', en: 'PRP Facials' },
    description: { es: 'Tratamiento facial regenerativo con plasma rico en plaquetas para rejuvenecer la piel, estimular la producción de colágeno y obtener un rostro más luminoso y juvenil.', en: 'Regenerative facial treatment with platelet-rich plasma to rejuvenate skin, stimulate collagen production and achieve a more luminous and youthful face.' },
    excerpt: { es: 'Facial regenerativo con PRP para rejuvenecer y luminosidad.', en: 'Regenerative facial with PRP for rejuvenation and luminosity.' },
    category: 'faciales-especializados',
    categoryName: { es: 'Faciales Especializados', en: 'Specialized Facials' },
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Rejuvenecimiento natural', 'Estimula colágeno', 'Mejora textura de la piel', 'Luminosidad facial'],
    duration: '60 minutos',
    href: '/services/faciales-prp'
  },
  {
    id: 'faciales-celulas-madre',
    slug: 'faciales-celulas-madre',
    title: { es: 'Faciales con Células Madre', en: 'Stem Cell Facials' },
    description: { es: 'Tratamiento facial avanzado con células madre para la regeneración profunda de la piel, reducción de signos de envejecimiento y restauración de la vitalidad cutánea.', en: 'Advanced facial treatment with stem cells for deep skin regeneration, reduction of aging signs and restoration of skin vitality.' },
    excerpt: { es: 'Facial avanzado con células madre para regeneración profunda.', en: 'Advanced facial with stem cells for deep regeneration.' },
    category: 'faciales-especializados',
    categoryName: { es: 'Faciales Especializados', en: 'Specialized Facials' },
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular profunda', 'Reducción de arrugas', 'Restaura vitalidad', 'Tratamiento anti-edad'],
    duration: '75 minutos',
    href: '/services/faciales-celulas-madre'
  },
  // Tratamientos Avanzados
  {
    id: 'ez-gel-prf',
    slug: 'ez-gel-prf',
    title: { es: 'EZ Gel PRF', en: 'EZ Gel PRF' },
    description: { es: 'Tratamiento avanzado con gel de fibrina rica en plaquetas (PRF) que utiliza factores de crecimiento naturales para rejuvenecer la piel, estimular la producción de colágeno y mejorar la textura facial de forma natural y duradera.', en: 'Advanced treatment with platelet-rich fibrin (PRF) gel that uses natural growth factors to rejuvenate skin, stimulate collagen production and improve facial texture naturally and lastingly.' },
    excerpt: { es: 'Rejuvenecimiento natural con gel PRF y factores de crecimiento.', en: 'Natural rejuvenation with PRF gel and growth factors.' },
    category: 'tratamientos-avanzados',
    categoryName: { es: 'Tratamientos Avanzados', en: 'Advanced Treatments' },
    icon: '🧪',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Factores de crecimiento naturales', 'Estimula colágeno', 'Rejuvenecimiento duradero', 'Tratamiento natural'],
    duration: '60 minutos',
    href: '/services/ez-gel-prf'
  },
  {
    id: 'kybella',
    slug: 'kybella',
    title: { es: 'Disolvente de Grasa Kybella', en: 'Kybella Fat Dissolver' },
    description: { es: 'Tratamiento avanzado no quirúrgico con Kybella (ácido desoxicólico) para eliminar la grasa submentoniana (papada) de forma permanente, creando un perfil facial más definido y juvenil sin cirugía.', en: 'Advanced non-surgical treatment with Kybella (deoxycholic acid) to permanently eliminate submental fat (double chin), creating a more defined and youthful facial profile without surgery.' },
    excerpt: { es: 'Elimina la papada permanentemente sin cirugía con Kybella.', en: 'Permanently eliminate double chin without surgery with Kybella.' },
    category: 'tratamientos-avanzados',
    categoryName: { es: 'Tratamientos Avanzados', en: 'Advanced Treatments' },
    icon: '💧',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina grasa permanentemente', 'Sin cirugía', 'Perfil más definido', 'Resultados duraderos'],
    duration: '45 minutos',
    href: '/services/kybella'
  },
  {
    id: 'cortisona-acne-quistico',
    slug: 'cortisona-acne-quistico',
    title: { es: 'Inyección de Cortisona / Acné Quístico', en: 'Cortisone Injection / Cystic Acne' },
    description: { es: 'Tratamiento avanzado con inyecciones de cortisona para tratar el acné quístico severo, reducir la inflamación y acelerar la curación de lesiones profundas de forma rápida y efectiva.', en: 'Advanced treatment with cortisone injections to treat severe cystic acne, reduce inflammation and accelerate healing of deep lesions quickly and effectively.' },
    excerpt: { es: 'Tratamiento rápido para acné quístico con inyecciones de cortisona.', en: 'Quick treatment for cystic acne with cortisone injections.' },
    category: 'tratamientos-avanzados',
    categoryName: { es: 'Tratamientos Avanzados', en: 'Advanced Treatments' },
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reduce inflamación rápidamente', 'Trata acné severo', 'Acelera curación', 'Resultados inmediatos'],
    duration: '15 minutos',
    href: '/services/cortisona-acne-quistico'
  },
  {
    id: 'inyecciones-prp',
    slug: 'inyecciones-prp',
    title: { es: 'Inyecciones de PRP', en: 'PRP Injections' },
    description: { es: 'Tratamiento avanzado de medicina regenerativa con inyecciones de plasma rico en plaquetas (PRP) para estimular la regeneración celular, mejorar la textura de la piel y promover la curación natural desde adentro.', en: 'Advanced regenerative medicine treatment with platelet-rich plasma (PRP) injections to stimulate cellular regeneration, improve skin texture and promote natural healing from within.' },
    excerpt: { es: 'Medicina regenerativa con PRP para regeneración celular avanzada.', en: 'Regenerative medicine with PRP for advanced cellular regeneration.' },
    category: 'tratamientos-avanzados',
    categoryName: { es: 'Tratamientos Avanzados', en: 'Advanced Treatments' },
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular natural', 'Estimula colágeno', 'Mejora textura de piel', 'Curación acelerada'],
    duration: '45 minutos',
    href: '/services/inyecciones-prp'
  },
  // Rejuvenecimiento Intimo
  {
    id: 'rejuvenecimiento-vaginal-prp',
    slug: 'rejuvenecimiento-vaginal-prp',
    title: { es: 'Rejuvenecimiento Vaginal con PRP', en: 'Vaginal Rejuvenation with PRP' },
    description: { es: 'Tratamiento íntimo avanzado con plasma rico en plaquetas (PRP) para rejuvenecer y revitalizar la zona vaginal, mejorando la sensibilidad, lubricación natural y bienestar íntimo femenino.', en: 'Advanced intimate treatment with platelet-rich plasma (PRP) to rejuvenate and revitalize the vaginal area, improving sensitivity, natural lubrication and feminine intimate wellness.' },
    excerpt: { es: 'Rejuvenecimiento íntimo con PRP para bienestar femenino.', en: 'Intimate rejuvenation with PRP for feminine wellness.' },
    category: 'rejuvenecimiento-intimo',
    categoryName: { es: 'Rejuvenecimiento Intimo', en: 'Intimate Rejuvenation' },
    icon: '🌸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Mejora sensibilidad', 'Aumenta lubricación natural', 'Rejuvenece tejidos', 'Bienestar íntimo'],
    duration: '60 minutos',
    href: '/services/rejuvenecimiento-vaginal-prp'
  },
  {
    id: 'rejuvenecimiento-vaginal-celulas-madre',
    slug: 'rejuvenecimiento-vaginal-celulas-madre',
    title: { es: 'Rejuvenecimiento Vaginal con Células Madre', en: 'Vaginal Rejuvenation with Stem Cells' },
    description: { es: 'Tratamiento íntimo de vanguardia con células madre para la regeneración profunda de tejidos vaginales, restaurando la elasticidad, firmeza y vitalidad íntima de forma natural y duradera.', en: 'Cutting-edge intimate treatment with stem cells for deep regeneration of vaginal tissues, restoring elasticity, firmness and intimate vitality naturally and lastingly.' },
    excerpt: { es: 'Regeneración íntima profunda con células madre avanzadas.', en: 'Deep intimate regeneration with advanced stem cells.' },
    category: 'rejuvenecimiento-intimo',
    categoryName: { es: 'Rejuvenecimiento Intimo', en: 'Intimate Rejuvenation' },
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular profunda', 'Restaura elasticidad', 'Mejora firmeza', 'Vitalidad duradera'],
    duration: '75 minutos',
    href: '/services/rejuvenecimiento-vaginal-celulas-madre'
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
