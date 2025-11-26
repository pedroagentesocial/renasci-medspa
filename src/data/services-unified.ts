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
  precio: string;
  image: string;
  benefits: string[];
  duracion?: string;
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

// Service categories mapping
export const serviceCategories = {
  'injections': { es: 'Inyecciones', en: 'Injections' },
  'inyecciones-neurotoxinas': { es: 'Inyecciones y Neurotoxinas', en: 'Injections and Neurotoxins' },
  'medicina-regenerativa': { es: 'Terapias de Medicina Regenerativa', en: 'Regenerative Medicine Therapies' },
  'rellenos': { es: 'Rellenos/Sculptra', en: 'Fillers/Sculptra' },
  'skin-laser': { es: 'Skin & Laser', en: 'Skin & Laser' },
  'contorno': { es: 'Contorno', en: 'Contouring' },
  'sculptra-rellenos': { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
  'intimo': { es: 'Íntimo', en: 'Intimate' },
  'cabello-piel': { es: 'Tratamientos de Cabello y Piel', en: 'Hair and Skin Treatments' },
  'bienestar': { es: 'Pérdida de Peso y Bienestar', en: 'Weight Loss and Wellness' },
  'especializados': { es: 'Tratamientos Especializados', en: 'Specialized Treatments' },
  'rellenos-faciales-corporales': { es: 'Rellenos Faciales y Corporales', en: 'Facial and Body Fillers' },
  'faciales-especializados': { es: 'Faciales Especializados', en: 'Specialized Facials' },
  'tratamientos-avanzados': { es: 'Tratamientos Avanzados', en: 'Advanced Treatments' },
  'rejuvenecimiento-intimo': { es: 'Rejuvenecimiento Intimo', en: 'Intimate Rejuvenation' },
  'bhrt': { es: 'Terapia Hormonal Bioidéntica (BHRT)', en: 'Bioidentical Hormone Therapy (BHRT)' },
  'peptide-therapy': { es: 'Terapia con Péptidos', en: 'Peptide Therapy' },
  'iv-im-therapy': { es: 'Terapia IV/IM', en: 'IV/IM Therapy' }
};

// Unified services data - combining both old structures
export const serviciosUnificados: ServicioUnificado[] = [
  // Inyecciones
  {
    id: 'tox-neurotoxina',
    slug: 'tox-neurotoxina',
    title: { es: 'Inyecciones de Neurotoxina Tox', en: 'Tox Neurotoxin Injections' },
    description: { es: 'Tratamiento con neurotoxina para reducir líneas de expresión y prevenir la formación de nuevas arrugas.', en: 'Neurotoxin treatment to reduce expression lines and prevent new wrinkle formation.' },
    excerpt: { es: 'Suaviza líneas de expresión y arrugas dinámicas.', en: 'Smooths expression lines and dynamic wrinkles.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '💉',
    precio: '$12 / unidad',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face',
    benefits: ['Reduce arrugas dinámicas', 'Previene nuevas líneas', 'Resultados naturales', 'Mínimo tiempo de recuperación'],
    duracion: '30 minutos',
    href: '/services/tox-neurotoxina'
  },
  // Nuevos servicios de Inyecciones y Neurotoxinas
  {
    id: 'xeomin',
    slug: 'xeomin',
    title: { es: 'Xeomin', en: 'Xeomin' },
    description: { es: 'Neurotoxina pura sin proteínas complejas para resultados precisos y naturales en el tratamiento de arrugas y líneas de expresión.', en: 'Pure neurotoxin without complex proteins for precise and natural results in treating wrinkles and expression lines.' },
    excerpt: { es: 'Neurotoxina pura para resultados precisos y naturales.', en: 'Pure neurotoxin for precise and natural results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: serviceCategories['inyecciones-neurotoxinas'],
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Neurotoxina pura', 'Sin proteínas complejas', 'Resultados naturales', 'Menor riesgo de resistencia'],
    duracion: '30 minutos',
    href: '/services/xeomin'
  },
  // Medicina Regenerativa
  {
    id: 'semaglutide',
    slug: 'semaglutide',
    title: { es: 'Semaglutide', en: 'Semaglutide' },
    description: { es: 'Tratamiento avanzado de medicina regenerativa para el control de peso y mejora metabólica con resultados duraderos y seguros.', en: 'Advanced regenerative medicine treatment for weight control and metabolic improvement with lasting and safe results.' },
    excerpt: { es: 'Medicina regenerativa para control de peso y mejora metabólica.', en: 'Regenerative medicine for weight control and metabolic improvement.' },
    category: 'medicina-regenerativa',
    categoryName: serviceCategories['medicina-regenerativa'],
    icon: '💊',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Control efectivo del peso', 'Mejora metabólica', 'Reducción del apetito', 'Resultados duraderos'],
    duracion: '30 minutos',
    href: '/services/semaglutide'
  },
  {
    id: 'ozempic',
    slug: 'ozempic',
    title: { es: 'Ozempic', en: 'Ozempic' },
    description: { es: 'Tratamiento innovador de medicina regenerativa con semaglutida para el control glucémico y pérdida de peso efectiva y segura.', en: 'Innovative regenerative medicine treatment with semaglutide for glycemic control and effective, safe weight loss.' },
    excerpt: { es: 'Medicina regenerativa para control glucémico y pérdida de peso.', en: 'Regenerative medicine for glycemic control and weight loss.' },
    category: 'medicina-regenerativa',
    categoryName: serviceCategories['medicina-regenerativa'],
    icon: '💊',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
    benefits: ['Control glucémico superior', 'Pérdida de peso significativa', 'Reducción de riesgo cardiovascular', 'Mejora en calidad de vida'],
    duracion: '30 minutos',
    href: '/services/ozempic'
  },
  {
    id: 'ozonoterapia',
    slug: 'ozonoterapia',
    title: { es: 'Ozonoterapia', en: 'Ozone Therapy' },
    description: { es: 'Terapia regenerativa avanzada con ozono médico para potenciar la oxigenación celular, fortalecer el sistema inmune y promover la curación natural.', en: 'Advanced regenerative therapy with medical ozone to enhance cellular oxygenation, strengthen the immune system and promote natural healing.' },
    excerpt: { es: 'Terapia regenerativa con ozono médico para oxigenación y curación.', en: 'Regenerative therapy with medical ozone for oxygenation and healing.' },
    category: 'medicina-regenerativa',
    categoryName: serviceCategories['medicina-regenerativa'],
    icon: '🫧',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center',
    benefits: ['Oxigenación celular mejorada', 'Fortalecimiento inmunológico', 'Propiedades antimicrobianas', 'Regeneración tisular acelerada'],
    duracion: '45 minutos',
    href: '/services/ozonoterapia'
  },
  {
    id: 'exosomas',
    slug: 'exosomas',
    title: { es: 'Exosomas', en: 'Exosomes' },
    description: { es: 'Terapia regenerativa de vanguardia con exosomas para la regeneración celular, rejuvenecimiento y reparación de tejidos a nivel molecular.', en: 'Cutting-edge regenerative therapy with exosomes for cellular regeneration, rejuvenation and tissue repair at the molecular level.' },
    excerpt: { es: 'Terapia regenerativa con exosomas para regeneración celular avanzada.', en: 'Regenerative therapy with exosomes for advanced cellular regeneration.' },
    category: 'medicina-regenerativa',
    categoryName: serviceCategories['medicina-regenerativa'],
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular avanzada', 'Rejuvenecimiento tisular', 'Comunicación celular mejorada', 'Reparación molecular'],
    duracion: '60 minutos',
    href: '/services/exosomas'
  },
  {
    id: 'terapia-reemplazo-hormonal',
    slug: 'terapia-reemplazo-hormonal',
    title: { es: 'Terapia de Reemplazo Hormonal', en: 'Hormone Replacement Therapy' },
    description: { es: 'Terapia regenerativa especializada para restaurar el equilibrio hormonal, mejorar la calidad de vida y optimizar el bienestar integral mediante tratamientos hormonales personalizados.', en: 'Specialized regenerative therapy to restore hormonal balance, improve quality of life and optimize integral well-being through personalized hormonal treatments.' },
    excerpt: { es: 'Terapia regenerativa para equilibrio hormonal y bienestar integral.', en: 'Regenerative therapy for hormonal balance and integral well-being.' },
    category: 'medicina-regenerativa',
    categoryName: serviceCategories['medicina-regenerativa'],
    icon: '⚖️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Equilibrio hormonal restaurado', 'Mejora en calidad de vida', 'Optimización del bienestar', 'Tratamiento personalizado'],
    duracion: '45 minutos',
    href: '/services/terapia-reemplazo-hormonal'
  },
  // BHRT (Bioidentical Hormone Therapy)
  {
    id: 'bhrt-membership-her',
    slug: 'bhrt-membership-her',
    title: { es: 'Membresía Hormonal para Ella', en: 'Hormone Membership for Her' },
    description: { es: 'Plan BHRT personalizado para mujeres.', en: 'Personalized BHRT plan for women.' },
    excerpt: { es: 'BHRT para ella con seguimiento médico.', en: 'BHRT for her with medical follow-up.' },
    category: 'bhrt',
    categoryName: serviceCategories['bhrt'],
    icon: '⚖️',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Plan personalizado','Seguimiento médico','Optimización hormonal'],
    href: '/services/bhrt-membership-her'
  },
  {
    id: 'bhrt-setup-labs-consult',
    slug: 'bhrt-setup-labs-consult',
    title: { es: 'BHRT Setup (Labs + Consulta)', en: 'BHRT Setup (includes labs + consult)' },
    description: { es: 'Evaluación inicial con laboratorios y consulta.', en: 'Initial evaluation with labs and consult.' },
    excerpt: { es: 'Setup completo para iniciar BHRT.', en: 'Complete setup to start BHRT.' },
    category: 'bhrt',
    categoryName: serviceCategories['bhrt'],
    icon: '🧪',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Laboratorios','Consulta','Plan de inicio'],
    href: '/services/bhrt-setup-labs-consult'
  },
  {
    id: 'bhrt-monthly-support',
    slug: 'bhrt-monthly-support',
    title: { es: 'BHRT Mensual (soporte y visitas)', en: 'BHRT Monthly (support, messaging, visits)' },
    description: { es: 'Soporte mensual con visitas y mensajería.', en: 'Monthly support with visits and messaging.' },
    excerpt: { es: 'Seguimiento continuo BHRT.', en: 'Continuous BHRT follow-up.' },
    category: 'bhrt',
    categoryName: serviceCategories['bhrt'],
    icon: '📅',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Soporte','Mensajería','Visitas periódicas'],
    href: '/services/bhrt-monthly-support'
  },
  {
    id: 'hormone-replacement-therapy-him',
    slug: 'hormone-replacement-therapy-him',
    title: { es: 'Terapia Hormonal para Él', en: 'Hormone Replacement Therapy for Him' },
    description: { es: 'BHRT personalizada para hombres.', en: 'Personalized BHRT for men.' },
    excerpt: { es: 'Optimización hormonal masculina.', en: 'Male hormonal optimization.' },
    category: 'bhrt',
    categoryName: serviceCategories['bhrt'],
    icon: '⚖️',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Plan personalizado','Seguimiento médico'],
    href: '/services/hormone-replacement-therapy-him'
  },
  {
    id: 'lab-draw',
    slug: 'lab-draw',
    title: { es: 'Extracción de Laboratorios', en: 'Per Lab Draw' },
    description: { es: 'Toma de muestra para análisis.', en: 'Sample draw for analysis.' },
    excerpt: { es: 'Extracción de laboratorio.', en: 'Lab draw.' },
    category: 'bhrt',
    categoryName: serviceCategories['bhrt'],
    icon: '🧪',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Muestreo','Resultados confiables'],
    href: '/services/lab-draw'
  },
  // Peptide Therapy
  {
    id: 'peptides-bpc-157',
    slug: 'peptides-bpc-157',
    title: { es: 'BPC-157', en: 'BPC-157' },
    description: { es: 'Péptido para recuperación y regeneración.', en: 'Peptide for recovery and regeneration.' },
    excerpt: { es: 'Soporte de tejidos y recuperación.', en: 'Tissue support and recovery.' },
    category: 'peptide-therapy',
    categoryName: serviceCategories['peptide-therapy'],
    icon: '🧬',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Recuperación','Regeneración'],
    href: '/services/peptides-bpc-157'
  },
  {
    id: 'peptides-cjc1295-ipamorelin',
    slug: 'peptides-cjc1295-ipamorelin',
    title: { es: 'CJC 1295 / Ipamorelin', en: 'CJC 1295 / Ipamorelin' },
    description: { es: 'Péptidos para soporte hormonal y crecimiento.', en: 'Peptides for hormonal support and growth.' },
    excerpt: { es: 'Apoyo al eje hormonal.', en: 'Hormonal axis support.' },
    category: 'peptide-therapy',
    categoryName: serviceCategories['peptide-therapy'],
    icon: '🧬',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Soporte hormonal'],
    href: '/services/peptides-cjc1295-ipamorelin'
  },
  {
    id: 'peptides-sermorelin',
    slug: 'peptides-sermorelin',
    title: { es: 'Sermorelina', en: 'Sermorelin' },
    description: { es: 'Péptido para estimulación natural.', en: 'Peptide for natural stimulation.' },
    excerpt: { es: 'Estimulación natural del crecimiento.', en: 'Natural growth stimulation.' },
    category: 'peptide-therapy',
    categoryName: serviceCategories['peptide-therapy'],
    icon: '🧬',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Estimulación'],
    href: '/services/peptides-sermorelin'
  },
  {
    id: 'peptides-nad',
    slug: 'peptides-nad',
    title: { es: 'NAD+', en: 'NAD+' },
    description: { es: 'Soporte celular y energético.', en: 'Cellular and energy support.' },
    excerpt: { es: 'Metabolismo y energía.', en: 'Metabolism and energy.' },
    category: 'peptide-therapy',
    categoryName: serviceCategories['peptide-therapy'],
    icon: '🧬',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Energía','Metabolismo'],
    href: '/services/peptides-nad'
  },
  // IV/IM Therapy
  {
    id: 'iv-drips',
    slug: 'iv-drips',
    title: { es: 'Suero IV (Drips)', en: 'IV Drips' },
    description: { es: 'Terapias intravenosas para hidratación y recuperación.', en: 'Intravenous therapies for hydration and recovery.' },
    excerpt: { es: 'Hidratación y recuperación inmediata.', en: 'Immediate hydration and recovery.' },
    category: 'iv-im-therapy',
    categoryName: serviceCategories['iv-im-therapy'],
    icon: '💧',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Hidratación','Recuperación'],
    href: '/services/iv-drips'
  },
  {
    id: 'im-injections',
    slug: 'im-injections',
    title: { es: 'Inyecciones IM', en: 'IM Injections' },
    description: { es: 'Terapias intramusculares para soporte rápido.', en: 'Intramuscular therapies for rapid support.' },
    excerpt: { es: 'Soporte rápido intramuscular.', en: 'Rapid intramuscular support.' },
    category: 'iv-im-therapy',
    categoryName: serviceCategories['iv-im-therapy'],
    icon: '💉',
    precio: 'Por definir',
    image: '/images/med-spa-room.jpg',
    benefits: ['Soporte rápido'],
    href: '/services/im-injections'
  },
  // Rellenos
  {
    id: 'dysport-especializado',
    slug: 'dysport',
    title: { es: 'Dysport', en: 'Dysport' },
    description: { es: 'Neurotoxina de acción rápida que proporciona resultados naturales para suavizar arrugas dinámicas y líneas de expresión.', en: 'Fast-acting neurotoxin that provides natural results for smoothing dynamic wrinkles and expression lines.' },
    excerpt: { es: 'Neurotoxina de acción rápida para resultados naturales.', en: 'Fast-acting neurotoxin for natural results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: serviceCategories['inyecciones-neurotoxinas'],
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Acción rápida', 'Resultados naturales', 'Menor difusión', 'Efectos duraderos'],
    duracion: '30 minutos',
    href: '/services/dysport'
  },
  {
    id: 'botox-hombros',
    slug: 'botox-hombros',
    title: { es: 'Botox para Adelgazar los Hombros', en: 'Botox for Shoulder Slimming' },
    description: { es: 'Tratamiento especializado con neurotoxina para reducir el volumen de los músculos trapecio y crear una silueta más estilizada de hombros y cuello.', en: 'Specialized neurotoxin treatment to reduce trapezius muscle volume and create a more stylized shoulder and neck silhouette.' },
    excerpt: { es: 'Reduce el volumen de los hombros para una silueta más estilizada.', en: 'Reduce shoulder volume for a more stylized silhouette.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: serviceCategories['inyecciones-neurotoxinas'],
    icon: '💪',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?w=400&h=300&fit=crop&crop=center',
    benefits: ['Silueta más estilizada', 'Hombros más delgados', 'Cuello más largo', 'Resultados naturales'],
    duracion: '45 minutos',
    href: '/services/botox-hombros'
  },
  {
    id: 'baby-botox-especializado',
    slug: 'baby-botox',
    title: { es: 'Baby Botox', en: 'Baby Botox' },
    description: { es: 'Tratamiento suave con dosis menores de neurotoxina para resultados naturales y sutiles, manteniendo la expresión facial natural.', en: 'Gentle treatment with smaller doses of neurotoxin for natural and subtle results, maintaining natural facial expression.' },
    excerpt: { es: 'Tratamiento suave para resultados naturales y sutiles.', en: 'Gentle treatment for natural and subtle results.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: serviceCategories['inyecciones-neurotoxinas'],
    icon: '✨',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=center',
    benefits: ['Resultados naturales', 'Expresión preservada', 'Menos riesgo', 'Efecto sutil'],
    duracion: '20 minutos',
    href: '/services/baby-botox'
  },
  {
    id: 'botox-migranas',
    slug: 'botox-migranas',
    title: { es: 'Botox para Migrañas', en: 'Botox for Migraines' },
    description: { es: 'Tratamiento médico especializado con neurotoxina para reducir la frecuencia e intensidad de las migrañas crónicas y mejorar la calidad de vida.', en: 'Specialized medical treatment with neurotoxin to reduce the frequency and intensity of chronic migraines and improve quality of life.' },
    excerpt: { es: 'Tratamiento médico para reducir migrañas crónicas.', en: 'Medical treatment to reduce chronic migraines.' },
    category: 'inyecciones-neurotoxinas',
    categoryName: serviceCategories['inyecciones-neurotoxinas'],
    icon: '🧠',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reduce frecuencia', 'Menor intensidad', 'Mejora calidad de vida', 'Tratamiento médico'],
    duracion: '60 minutos',
    href: '/services/botox-migranas'
  },

  {
    id: 'botox-no-sweat',
    slug: 'botox-no-sweat',
    title: { es: 'Tratamiento Botox No-Sweat (sudoración)', en: 'Botox No-Sweat Treatment (sweating)' },
    description: { es: 'Tratamiento especializado para hiperhidrosis axilar con resultados duraderos.', en: 'Specialized treatment for axillary hyperhidrosis with lasting results.' },
    excerpt: { es: 'Elimina la sudoración excesiva de axilas.', en: 'Eliminates excessive underarm sweat.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '🌡️',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina sudoración excesiva', 'Resultados hasta 6 meses', 'Mejora confianza', 'Procedimiento rápido'],
    duracion: '45 minutos',
    href: '/services/botox-no-sweat'
  },
  {
    id: 'botox-lip-flip',
    slug: 'botox-lip-flip',
    title: { es: 'Botox Lip Flip (giro de labio)', en: 'Botox Lip Flip' },
    description: { es: 'Técnica sutil que realza el labio superior creando una apariencia más voluminosa.', en: 'Subtle technique that enhances the upper lip creating a more voluminous appearance.' },
    excerpt: { es: 'Potencia el labio superior de forma natural.', en: 'Enhances upper lip naturally.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '💋',
    precio: '$75',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=face',
    benefits: ['Labios más definidos', 'Aspecto natural', 'Sin rellenos', 'Resultados inmediatos'],
    duracion: '15 minutos',
    href: '/services/botox-lip-flip'
  },
  {
    id: 'mini-aumento-labios',
    slug: 'mini-aumento-labios',
    title: { es: 'Mini Aumento de Labios', en: 'Mini Lip Enhancement' },
    description: { es: 'Aumento sutil de labios con ácido hialurónico para un resultado natural y discreto.', en: 'Subtle lip enhancement with hyaluronic acid for a natural and discreet result.' },
    excerpt: { es: 'Aumento sutil y natural de los labios.', en: 'Subtle and natural lip enhancement.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '💋',
    precio: '$375',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=face',
    benefits: ['Aumento sutil', 'Resultado natural', 'Mínima hinchazón', 'Recuperación rápida'],
    duracion: '30 minutos',
    href: '/services/mini-aumento-labios'
  },
  {
    id: 'aumento-completo-labios',
    slug: 'aumento-completo-labios',
    title: { es: 'Aumento Completo de Labios', en: 'Complete Lip Enhancement' },
    description: { es: 'Aumento completo de labios con ácido hialurónico para mayor volumen y definición.', en: 'Complete lip enhancement with hyaluronic acid for greater volume and definition.' },
    excerpt: { es: 'Volumen y definición completa de labios.', en: 'Complete lip volume and definition.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '💋',
    precio: '$650',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=face',
    benefits: ['Volumen completo', 'Definición mejorada', 'Labios balanceados', 'Resultados duraderos'],
    duracion: '45 minutos',
    href: '/services/aumento-completo-labios'
  },
  {
    id: 'mega-aumento-labios',
    slug: 'mega-aumento-labios',
    title: { es: 'Mega Aumento de Labios', en: 'Mega Lip Enhancement' },
    description: { es: 'Aumento máximo de labios con ácido hialurónico para un volumen dramático y llamativo.', en: 'Maximum lip enhancement with hyaluronic acid for dramatic and striking volume.' },
    excerpt: { es: 'Máximo volumen y impacto en los labios.', en: 'Maximum lip volume and impact.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '💋',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=face',
    benefits: ['Volumen máximo', 'Impacto dramático', 'Labios llamativos', 'Transformación completa'],
    duracion: '60 minutos',
    href: '/services/mega-aumento-labios'
  },
  {
    id: 'baby-botox',
    slug: 'baby-botox',
    title: { es: 'Baby Botox', en: 'Baby Botox' },
    description: { es: 'Aplicación preventiva con dosis reducidas para mantener expresiones naturales.', en: 'Preventive application with reduced doses to maintain natural expressions.' },
    excerpt: { es: 'Tratamiento preventivo con dosis mínimas.', en: 'Preventive treatment with minimal doses.' },
    category: 'injections',
    categoryName: serviceCategories.injections,
    icon: '✨',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop&crop=face',
    benefits: ['Prevención temprana', 'Expresiones naturales', 'Resultados sutiles', 'Mantenimiento facial'],
    duracion: '20 minutos',
    href: '/services/baby-botox'
  },

  // Rellenos y Sculptra
  {
    id: 'relleno-labios',
    slug: 'relleno-labios',
    title: { es: 'Relleno de Labios', en: 'Lip Fillers' },
    description: { es: 'Aumenta y define los labios naturalmente con ácido hialurónico de alta calidad.', en: 'Enhance and define lips naturally with high-quality hyaluronic acid.' },
    excerpt: { es: 'Aumenta y define los labios naturalmente.', en: 'Enhance and define lips naturally.' },
    category: 'rellenos',
    categoryName: serviceCategories.rellenos,
    icon: '💋',
    precio: '$375 - $850',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=face',
    benefits: ['Labios más voluminosos', 'Definición natural', 'Resultados inmediatos', 'Duración prolongada'],
    duracion: '30 minutos',
    href: '/services/relleno-labios'
  },
  // Tratamientos con Sculptra y Rellenos
  {
    id: 'bananabella',
    slug: 'bananabella',
    title: { es: 'BananaBella (zona del bikini)', en: 'BananaBella (bikini area)' },
    description: { es: 'Tratamiento especializado para contornear la zona del bikini con técnicas avanzadas de rellenos.', en: 'Specialized treatment to contour the bikini area with advanced filler techniques.' },
    excerpt: { es: 'Contornea y define la zona del bikini.', en: 'Contour and define the bikini area.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🌺',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Contorno especializado', 'Zona bikini definida', 'Resultados duraderos', 'Técnica avanzada'],
    duracion: '90 minutos',
    href: '/services/bananabella'
  },
  {
    id: 'sculptra-colageno',
    slug: 'sculptra-colageno',
    title: { es: 'Estimulación de Colágeno con Sculptra', en: 'Sculptra Collagen Stimulation' },
    description: { es: 'Activa la producción natural de colágeno para rejuvenecimiento gradual y duradero con Sculptra.', en: 'Activates natural collagen production for gradual and lasting rejuvenation with Sculptra.' },
    excerpt: { es: 'Estimula la producción natural de colágeno.', en: 'Stimulates natural collagen production.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🧬',
    precio: '$800',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula colágeno natural', 'Resultados graduales', 'Duración hasta 2 años', 'Rejuvenecimiento integral'],
    duracion: '45 minutos',
    href: '/services/sculptra-colageno'
  },
  {
    id: 'mini-chin-up',
    slug: 'mini-chin-up',
    title: { es: 'Mini Chin Up (reducción de papada)', en: 'Mini Chin Up (double chin reduction)' },
    description: { es: 'Tratamiento mínimamente invasivo para reducir la papada con técnicas de rellenos especializados.', en: 'Minimally invasive treatment to reduce double chin with specialized filler techniques.' },
    excerpt: { es: 'Reduce la papada de forma mínimamente invasiva.', en: 'Reduce double chin minimally invasively.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🎯',
    precio: '$600',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reducción efectiva', 'Mínimamente invasivo', 'Perfil mejorado', 'Recuperación rápida'],
    duracion: '30 minutos',
    href: '/services/mini-chin-up'
  },
  {
    id: 'mega-collagen-stimulation-sculptra',
    slug: 'mega-collagen-stimulation-sculptra',
    title: { es: 'Mega Estimulación de Colágeno — Sculptra', en: 'Mega Collagen Stimulation — Sculptra' },
    description: { es: 'Tratamiento intensivo con doble aplicación de Sculptra para máxima estimulación de colágeno.', en: 'Intensive treatment with double Sculptra application for maximum collagen stimulation.' },
    excerpt: { es: 'Doble estimulación de colágeno para resultados intensos.', en: 'Double collagen stimulation for intense results.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '💎',
    precio: '$1600',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Doble estimulación', 'Resultados intensivos', 'Rejuvenecimiento profundo', 'Duración extendida'],
    duracion: '75 minutos',
    href: '/services/mega-collagen-stimulation-sculptra'
  },
  {
    id: 'brazilian-butt-lift',
    slug: 'brazilian-butt-lift',
    title: { es: 'Brazilian Butt Lift', en: 'Brazilian Butt Lift' },
    description: { es: 'Aumento y contorno de glúteos con técnicas avanzadas de rellenos y Sculptra.', en: 'Buttock enhancement and contouring with advanced filler and Sculptra techniques.' },
    excerpt: { es: 'Aumento y contorno de glúteos con técnicas avanzadas.', en: 'Buttock enhancement and contouring with advanced techniques.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🍑',
    precio: '$6000',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Aumento natural', 'Contorno mejorado', 'Resultados duraderos', 'Técnica avanzada'],
    duracion: '3-4 horas',
    href: '/services/brazilian-butt-lift'
  },
  {
    id: 'prf-ection',
    slug: 'prf-ection',
    title: { es: 'PRF-Ection (gel PRF)', en: 'PRF-Ection (PRF gel)' },
    description: { es: 'Tratamiento regenerativo avanzado con gel de fibrina rica en plaquetas (PRF) para rejuvenecimiento natural.', en: 'Advanced regenerative treatment with platelet-rich fibrin (PRF) gel for natural rejuvenation.' },
    excerpt: { es: 'Rejuvenecimiento natural con gel PRF.', en: 'Natural rejuvenation with PRF gel.' },
    category: 'sculptra-rellenos',
    categoryName: { es: 'Tratamientos con Sculptra y Rellenos', en: 'Sculptra and Fillers Treatments' },
    icon: '🧪',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular', 'Mejora textura', 'Estimula colágeno', 'Resultados progresivos'],
    duracion: '60 minutos',
    href: '/services/prf-ection'
  },

  // Contorno Facial
  {
    id: 'contorno-facial',
    slug: 'contorno-facial',
    title: { es: 'Contorno Facial Personalizado', en: 'Personalized Facial Contouring' },
    description: { es: 'Tratamiento personalizado para realzar y definir la estructura facial natural.', en: 'Personalized treatment to enhance and define natural facial structure.' },
    excerpt: { es: 'Esculpe y define los rasgos faciales.', en: 'Sculpt and define facial features.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '🎨',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop&crop=face',
    benefits: ['Rostro más definido', 'Armonía facial', 'Resultados naturales', 'Técnica personalizada'],
    duracion: '60 minutos',
    href: '/services/contorno-facial'
  },
  {
    id: 'cheekbone-pop',
    slug: 'cheekbone-pop',
    title: { es: 'Elevación de Pómulos (Cheekbone Pop)', en: 'Cheekbone Pop' },
    description: { es: 'Realza y define los pómulos para crear una estructura facial más atractiva.', en: 'Enhance and define cheekbones to create a more attractive facial structure.' },
    excerpt: { es: 'Define y realza tus pómulos.', en: 'Define and enhance your cheekbones.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '💎',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=face',
    benefits: ['Pómulos más definidos', 'Estructura facial mejorada', 'Aspecto juvenil', 'Confianza renovada'],
    duracion: '45 minutos',
    href: '/services/cheekbone-pop'
  },

  // Pérdida de Peso y Bienestar
  {
    id: 'b12-fat-blaster',
    slug: 'b12-fat-blaster',
    title: { es: 'Inyección B12 + Fat Blaster (Doble Efecto)', en: 'B12 + Fat Blaster Injection (Double Effect)' },
    description: { es: 'Combinación de vitamina B12 y lipotropos para aumentar energía y acelerar metabolismo.', en: 'Combination of vitamin B12 and lipotropics to increase energy and accelerate metabolism.' },
    excerpt: { es: 'Energía y quema de grasa en una inyección.', en: 'Energy and fat burning in one injection.' },
    category: 'bienestar',
    categoryName: serviceCategories.bienestar,
    icon: '⚡',
    precio: '$50 (+$15 tarifa estatal)',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
    benefits: ['Aumenta energía', 'Acelera metabolismo', 'Quema grasa', 'Mejora bienestar'],
    duracion: '15 minutos',
    href: '/services/b12-fat-blaster'
  },
  {
    id: 'consulta-medicina-alternativa',
    slug: 'consulta-medicina-alternativa',
    title: { es: 'Consulta de Medicina Alternativa Get Carded', en: 'Alternative Medicine Consultation Get Carded' },
    description: { es: 'Consulta especializada en medicina alternativa para obtener la certificación médica necesaria para tratamientos de bienestar y pérdida de peso.', en: 'Specialized alternative medicine consultation to obtain the necessary medical certification for wellness and weight loss treatments.' },
    excerpt: { es: 'Certificación médica para tratamientos de bienestar.', en: 'Medical certification for wellness treatments.' },
    category: 'bienestar',
    categoryName: serviceCategories.bienestar,
    icon: '📋',
    precio: '$250 (+$15 tarifa estatal)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
    benefits: ['Certificación médica', 'Evaluación integral', 'Plan personalizado', 'Seguimiento profesional'],
    duracion: '45 minutos',
    href: '/services/consulta-medicina-alternativa'
  },
  {
    id: 'inyecciones-fat-blaster',
    slug: 'inyecciones-fat-blaster',
    title: { es: 'Inyecciones Fat Blaster', en: 'Fat Blaster Injections' },
    description: { es: 'Inyecciones especializadas con lipotropos para acelerar el metabolismo y promover la quema de grasa de forma natural y efectiva.', en: 'Specialized injections with lipotropics to accelerate metabolism and promote fat burning naturally and effectively.' },
    excerpt: { es: 'Acelera el metabolismo y quema grasa naturalmente.', en: 'Accelerate metabolism and burn fat naturally.' },
    category: 'bienestar',
    categoryName: serviceCategories.bienestar,
    icon: '🔥',
    precio: '$40',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Acelera metabolismo', 'Quema grasa efectiva', 'Aumenta energía', 'Resultados naturales'],
    duracion: '15 minutos',
    href: '/services/fat-blaster-injections'
  },
  {
    id: 'inyeccion-energia-b12',
    slug: 'inyeccion-energia-b12',
    title: { es: 'Inyección de Energía B12', en: 'B12 Energy Injection' },
    description: { es: 'Inyección de vitamina B12 para aumentar los niveles de energía, mejorar el estado de ánimo y optimizar el funcionamiento del sistema nervioso.', en: 'Vitamin B12 injection to increase energy levels, improve mood and optimize nervous system function.' },
    excerpt: { es: 'Aumenta energía y mejora el estado de ánimo.', en: 'Increase energy and improve mood.' },
    category: 'bienestar',
    categoryName: serviceCategories.bienestar,
    icon: '⚡',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Aumenta energía', 'Mejora estado de ánimo', 'Optimiza sistema nervioso', 'Combate fatiga'],
    duracion: '10 minutos',
    href: '/services/inyeccion-energia-b12'
  },
  {
    id: 'perdida-peso-supervisada',
    slug: 'perdida-peso-supervisada',
    title: { es: 'Pérdida de Peso Médicamente Supervisada', en: 'Medically Supervised Weight Loss' },
    description: { es: 'Programa integral de pérdida de peso bajo supervisión médica que incluye evaluación, plan personalizado y seguimiento continuo para resultados seguros y duraderos.', en: 'Comprehensive weight loss program under medical supervision that includes evaluation, personalized plan and continuous monitoring for safe and lasting results.' },
    excerpt: { es: 'Programa integral de pérdida de peso bajo supervisión médica.', en: 'Comprehensive weight loss program under medical supervision.' },
    category: 'bienestar',
    categoryName: serviceCategories.bienestar,
    icon: '⚖️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Supervisión médica', 'Plan personalizado', 'Seguimiento continuo', 'Resultados duraderos'],
    duracion: '60 minutos',
    href: '/services/perdida-peso-supervisada'
  },
  {
    id: 'contorno-facial-personalizado',
    slug: 'contorno-facial-personalizado',
    title: { es: 'Contorno Facial Personalizado', en: 'Personalized Facial Contouring' },
    description: { es: 'Tratamiento personalizado para realzar y definir la estructura facial natural con técnicas avanzadas de contorno.', en: 'Personalized treatment to enhance and define natural facial structure with advanced contouring techniques.' },
    excerpt: { es: 'Esculpe y define los rasgos faciales de forma personalizada.', en: 'Sculpt and define facial features in a personalized way.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '🎨',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Rostro más definido', 'Armonía facial', 'Resultados naturales', 'Técnica personalizada'],
    duracion: '60 minutos',
    href: '/services/contorno-facial-personalizado'
  },
  {
    id: 'cheekbone-pop-new',
    slug: 'cheekbone-pop',
    title: { es: 'Elevación de Pómulos (Cheekbone Pop)', en: 'Cheekbone Pop Enhancement' },
    description: { es: 'Tratamiento especializado para elevar y definir los pómulos, creando un efecto lifting natural y juvenil.', en: 'Specialized treatment to lift and define cheekbones, creating a natural and youthful lifting effect.' },
    excerpt: { es: 'Eleva y define tus pómulos para un rostro más esculpido.', en: 'Lift and define your cheekbones for a more sculpted face.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '💎',
    precio: '$850',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Pómulos más definidos', 'Efecto lifting natural', 'Rostro más juvenil', 'Resultados inmediatos'],
    duracion: '45 minutos',
    href: '/services/cheekbone-pop'
  },
  {
    id: 'check-your-bags',
    slug: 'check-your-bags',
    title: { es: 'Inyección Check Your Bags (ojeras/bolsas)', en: 'Check Your Bags Injection (under-eye bags)' },
    description: { es: 'Tratamiento especializado para reducir ojeras y bolsas debajo de los ojos, devolviendo frescura y juventud a tu mirada.', en: 'Specialized treatment to reduce dark circles and under-eye bags, restoring freshness and youth to your gaze.' },
    excerpt: { es: 'Elimina ojeras y bolsas para una mirada más fresca y juvenil.', en: 'Eliminate dark circles and bags for a fresher, more youthful look.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '👁️',
    precio: '$750',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reducción de ojeras', 'Eliminación de bolsas', 'Mirada más fresca', 'Resultados naturales'],
    duracion: '30 minutos',
    href: '/services/check-your-bags'
  },
  {
    id: 'chinbella',
    slug: 'chinbella',
    title: { es: 'ChinBella (papada/doble mentón)', en: 'ChinBella (double chin treatment)' },
    description: { es: 'Tratamiento especializado para reducir la papada y definir el contorno del mentón, creando un perfil más estilizado y juvenil.', en: 'Specialized treatment to reduce double chin and define chin contour, creating a more stylized and youthful profile.' },
    excerpt: { es: 'Elimina la papada y define tu mentón para un perfil más estilizado.', en: 'Eliminate double chin and define your chin for a more stylized profile.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '🎯',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reducción de papada', 'Mentón más definido', 'Perfil estilizado', 'Resultados duraderos'],
    duracion: '60 minutos',
    href: '/services/chinbella'
  },
  {
    id: 'thighbella',
    slug: 'thighbella',
    title: { es: 'ThighBella (muslos)', en: 'ThighBella (thigh contouring)' },
    description: { es: 'Tratamiento especializado para contornear y definir los muslos, eliminando grasa localizada y creando una silueta más estilizada.', en: 'Specialized treatment to contour and define thighs, eliminating localized fat and creating a more stylized silhouette.' },
    excerpt: { es: 'Contornea y define tus muslos para una silueta más estilizada.', en: 'Contour and define your thighs for a more stylized silhouette.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '🦵',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Muslos más definidos', 'Reducción de grasa localizada', 'Silueta estilizada', 'Resultados duraderos'],
    duracion: '90 minutos',
    href: '/services/thighbella'
  },
  {
    id: 'brabella',
    slug: 'brabella',
    title: { es: 'BraBella (rollito de brasier)', en: 'BraBella (bra bulge treatment)' },
    description: { es: 'Tratamiento especializado para eliminar el rollito de brasier y contornear la espalda, creando una silueta más suave y estilizada.', en: 'Specialized treatment to eliminate bra bulge and contour the back, creating a smoother and more stylized silhouette.' },
    excerpt: { es: 'Elimina el rollito de brasier para una espalda más suave y estilizada.', en: 'Eliminate bra bulge for a smoother and more stylized back.' },
    category: 'contorno',
    categoryName: serviceCategories.contorno,
    icon: '👙',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
    benefits: ['Eliminación del rollito', 'Espalda más suave', 'Silueta estilizada', 'Mayor confianza'],
    duracion: '75 minutos',
    href: '/services/brabella'
  },
  // Tratamientos Especializados
  {
    id: 'restauracion-capilar-prf',
    slug: 'restauracion-capilar-prf',
    title: { es: 'Restauración Capilar con PRF', en: 'Hair Restoration with PRF' },
    description: { es: 'Tratamiento regenerativo con plasma rico en fibrina para estimular el crecimiento capilar natural y fortalecer el cabello existente.', en: 'Regenerative treatment with platelet-rich fibrin to stimulate natural hair growth and strengthen existing hair.' },
    excerpt: { es: 'Estimula crecimiento capilar con plasma rico en fibrina.', en: 'Stimulates hair growth with platelet-rich fibrin.' },
    category: 'especializados',
    categoryName: serviceCategories.especializados,
    icon: '💇‍♀️',
    precio: '$750',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula crecimiento capilar', 'Fortalece cabello existente', 'Tratamiento natural', 'Resultados progresivos'],
    duracion: '60 minutos',
    href: '/services/restauracion-capilar-prf'
  },
  {
    id: 'o-shot-terapia',
    slug: 'o-shot-terapia',
    title: { es: 'O-Shot Terapia con Plaquetas', en: 'O-Shot Platelet Therapy' },
    description: { es: 'Tratamiento íntimo avanzado con plasma rico en plaquetas para mejorar sensibilidad y rejuvenecimiento vaginal.', en: 'Advanced intimate treatment with platelet-rich plasma to improve sensitivity and vaginal rejuvenation.' },
    excerpt: { es: 'Rejuvenecimiento íntimo con terapia de plaquetas.', en: 'Intimate rejuvenation with platelet therapy.' },
    category: 'especializados',
    categoryName: serviceCategories.especializados,
    icon: '🌸',
    precio: '$1200',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center',
    benefits: ['Mejora sensibilidad', 'Rejuvenecimiento íntimo', 'Terapia natural', 'Confianza renovada'],
    duracion: '45 minutos',
    href: '/services/o-shot-terapia'
  },
  {
    id: 'puppet-lines-injections',
    slug: 'puppet-lines-injections',
    title: { es: 'Puppet Lines Injections', en: 'Puppet Lines Injections' },
    description: { es: 'Técnica especializada para corregir líneas de marioneta y surcos nasolabiales con precisión avanzada.', en: 'Specialized technique to correct marionette lines and nasolabial folds with advanced precision.' },
    excerpt: { es: 'Elimina líneas de marioneta y surcos profundos.', en: 'Eliminates marionette lines and deep folds.' },
    category: 'especializados',
    categoryName: serviceCategories.especializados,
    icon: '🎭',
    precio: '$750',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina líneas profundas', 'Técnica avanzada', 'Resultados naturales', 'Rejuvenecimiento facial'],
    duracion: '45 minutos',
    href: '/services/puppet-lines-injections'
  },
  {
    id: 'lifting-nefertiti',
    slug: 'lifting-nefertiti',
    title: { es: 'Lifting de Cuello Nefertiti', en: 'Nefertiti Neck Lift' },
    description: { es: 'Tratamiento especializado para crear un cuello elegante y definido inspirado en la belleza de la reina Nefertiti.', en: 'Specialized treatment to create an elegant and defined neck inspired by the beauty of Queen Nefertiti.' },
    excerpt: { es: 'Define y estiliza el cuello como la reina Nefertiti.', en: 'Defines and stylizes the neck like Queen Nefertiti.' },
    category: 'especializados',
    categoryName: serviceCategories.especializados,
    icon: '👑',
    precio: '$480',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=center',
    benefits: ['Cuello más elegante', 'Define línea mandibular', 'Efecto lifting', 'Sin cirugía'],
    duracion: '30 minutos',
    href: '/services/lifting-nefertiti'
  },
  {
    id: 'botox-lip-flip-especializado',
    slug: 'botox-lip-flip-especializado',
    title: { es: 'Tratamiento Botox Lip Flip (giro de labio)', en: 'Botox Lip Flip Treatment' },
    description: { es: 'Técnica especializada de Botox para crear un efecto de labios más voluminosos mediante el relajamiento del músculo orbicular.', en: 'Specialized Botox technique to create fuller lips by relaxing the orbicular muscle.' },
    excerpt: { es: 'Técnica especializada para labios más voluminosos.', en: 'Specialized technique for fuller lips.' },
    category: 'especializados',
    categoryName: serviceCategories.especializados,
    icon: '💋',
    precio: '$75',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Labios más definidos', 'Efecto natural', 'Procedimiento rápido', 'Sin tiempo de recuperación'],
    duracion: '15 minutos',
    href: '/services/botox-lip-flip-especializado'
  },
  {
    id: 'restauracion-capilar-prp',
    slug: 'restauracion-capilar-prp',
    title: { es: 'Tratamiento de Restauración Capilar con PRP', en: 'PRP Hair Restoration Treatment' },
    description: { es: 'Tratamiento regenerativo que utiliza plasma rico en plaquetas (PRP) para estimular el crecimiento capilar natural y fortalecer los folículos pilosos.', en: 'Regenerative treatment that uses platelet-rich plasma (PRP) to stimulate natural hair growth and strengthen hair follicles.' },
    excerpt: { es: 'Regeneración capilar con PRP para crecimiento natural.', en: 'Hair regeneration with PRP for natural growth.' },
    category: 'cabello-piel',
    categoryName: serviceCategories['cabello-piel'],
    icon: '💇‍♀️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula crecimiento natural', 'Fortalece folículos', 'Mejora densidad capilar', 'Tratamiento natural'],
    duracion: '60 minutos',
    href: '/services/restauracion-capilar-prp'
  },
  {
    id: 'microneedling-tratamiento',
    slug: 'microneedling',
    title: { es: 'Tratamiento Microneedling', en: 'Microneedling Treatment' },
    description: { es: 'Tratamiento de rejuvenecimiento facial que utiliza microagujas para estimular la producción natural de colágeno y mejorar la textura de la piel.', en: 'Facial rejuvenation treatment that uses micro-needles to stimulate natural collagen production and improve skin texture.' },
    excerpt: { es: 'Rejuvenecimiento facial con microagujas para estimular colágeno.', en: 'Facial rejuvenation with micro-needles to stimulate collagen.' },
    category: 'cabello-piel',
    categoryName: serviceCategories['cabello-piel'],
    icon: '🔬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula producción de colágeno', 'Mejora textura de la piel', 'Reduce cicatrices y poros', 'Rejuvenecimiento natural'],
    duracion: '45 minutos',
    href: '/services/microneedling'
  },
  {
    id: 'microneedling-prp-tratamiento',
    slug: 'microneedling-prp',
    title: { es: 'Microneedling con PRP', en: 'Microneedling with PRP' },
    description: { es: 'Tratamiento avanzado que combina microneedling con plasma rico en plaquetas (PRP) para maximizar la regeneración celular y obtener resultados superiores en el rejuvenecimiento facial.', en: 'Advanced treatment that combines microneedling with platelet-rich plasma (PRP) to maximize cellular regeneration and achieve superior results in facial rejuvenation.' },
    excerpt: { es: 'Microneedling potenciado con PRP para máxima regeneración.', en: 'Microneedling enhanced with PRP for maximum regeneration.' },
    category: 'cabello-piel',
    categoryName: serviceCategories['cabello-piel'],
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular acelerada', 'Resultados superiores', 'Estimulación natural de colágeno', 'Rejuvenecimiento profundo'],
    duracion: '60 minutos',
    href: '/services/microneedling-prp'
  },
  // Rellenos Faciales y Corporales
  {
    id: 'relleno-dermico',
    slug: 'relleno-dermico',
    title: { es: 'Relleno Dérmico', en: 'Dermal Filler' },
    description: { es: 'Tratamiento de relleno dérmico con ácido hialurónico para restaurar volumen, suavizar arrugas y realzar los contornos faciales de forma natural y segura.', en: 'Dermal filler treatment with hyaluronic acid to restore volume, smooth wrinkles and enhance facial contours naturally and safely.' },
    excerpt: { es: 'Restaura volumen y suaviza arrugas con ácido hialurónico.', en: 'Restore volume and smooth wrinkles with hyaluronic acid.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop&crop=face',
    benefits: ['Restaura volumen facial', 'Suaviza arrugas y líneas', 'Resultados inmediatos', 'Procedimiento seguro'],
    duracion: '45 minutos',
    href: '/services/relleno-dermico'
  },
  {
    id: 'relleno-labios',
    slug: 'relleno-labios',
    title: { es: 'Relleno de Labios', en: 'Lip Filler' },
    description: { es: 'Tratamiento especializado de relleno labial con ácido hialurónico para aumentar el volumen, definir el contorno y crear labios más atractivos y naturales.', en: 'Specialized lip filler treatment with hyaluronic acid to increase volume, define contour and create more attractive and natural lips.' },
    excerpt: { es: 'Aumenta volumen y define el contorno de los labios.', en: 'Increase volume and define lip contour.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '💋',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Labios más voluminosos', 'Contorno definido', 'Hidratación profunda', 'Aspecto natural'],
    duracion: '30 minutos',
    href: '/services/relleno-labios'
  },
  {
    id: 'relleno-mejillas',
    slug: 'relleno-mejillas',
    title: { es: 'Relleno de Mejillas', en: 'Cheek Filler' },
    description: { es: 'Tratamiento de relleno en mejillas con ácido hialurónico para restaurar volumen, crear pómulos definidos y lograr un lifting facial natural sin cirugía.', en: 'Cheek filler treatment with hyaluronic acid to restore volume, create defined cheekbones and achieve a natural facial lift without surgery.' },
    excerpt: { es: 'Restaura volumen y define los pómulos naturalmente.', en: 'Restore volume and define cheekbones naturally.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '✨',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Pómulos más definidos', 'Lifting facial natural', 'Restaura volumen perdido', 'Rejuvenecimiento facial'],
    duracion: '45 minutos',
    href: '/services/relleno-mejillas'
  },
  {
    id: 'relleno-debajo-ojos',
    slug: 'relleno-debajo-ojos',
    title: { es: 'Relleno para Debajo de los Ojos', en: 'Under Eye Filler' },
    description: { es: 'Tratamiento especializado de relleno para el área debajo de los ojos que elimina ojeras, reduce bolsas y restaura la juventud de la mirada de forma segura.', en: 'Specialized filler treatment for the under-eye area that eliminates dark circles, reduces bags and restores youthful eyes safely.' },
    excerpt: { es: 'Elimina ojeras y restaura la juventud de la mirada.', en: 'Eliminate dark circles and restore youthful eyes.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '👁️',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina ojeras profundas', 'Reduce bolsas', 'Mirada más joven', 'Resultados naturales'],
    duracion: '30 minutos',
    href: '/services/relleno-debajo-ojos'
  },
  {
    id: 'relleno-mandibula',
    slug: 'relleno-mandibula',
    title: { es: 'Relleno de Mandíbula', en: 'Jawline Filler' },
    description: { es: 'Tratamiento de relleno mandibular con ácido hialurónico para definir la línea de la mandíbula, crear un perfil más masculino o femenino y lograr armonía facial.', en: 'Jawline filler treatment with hyaluronic acid to define the jawline, create a more masculine or feminine profile and achieve facial harmony.' },
    excerpt: { es: 'Define la línea mandibular y crea armonía facial.', en: 'Define jawline and create facial harmony.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '🦴',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?w=400&h=300&fit=crop&crop=center',
    benefits: ['Mandíbula más definida', 'Perfil armonioso', 'Contorno facial mejorado', 'Aspecto más juvenil'],
    duracion: '45 minutos',
    href: '/services/relleno-mandibula'
  },
  {
    id: 'relleno-mano',
    slug: 'relleno-mano',
    title: { es: 'Relleno de Mano', en: 'Hand Filler' },
    description: { es: 'Tratamiento de relleno en manos con ácido hialurónico para restaurar volumen perdido, suavizar arrugas y rejuvenecer el aspecto de las manos de forma natural.', en: 'Hand filler treatment with hyaluronic acid to restore lost volume, smooth wrinkles and rejuvenate the appearance of hands naturally.' },
    excerpt: { es: 'Rejuvenece y restaura el volumen de las manos.', en: 'Rejuvenate and restore hand volume.' },
    category: 'rellenos-faciales-corporales',
    categoryName: serviceCategories['rellenos-faciales-corporales'],
    icon: '🤲',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Manos más jóvenes', 'Volumen restaurado', 'Piel más suave', 'Aspecto rejuvenecido'],
    duracion: '30 minutos',
    href: '/services/relleno-mano'
  },
  {
    id: 'faciales-prp',
    slug: 'faciales-prp',
    title: { es: 'Faciales con PRP', en: 'PRP Facials' },
    description: { es: 'Tratamiento facial regenerativo avanzado con plasma rico en plaquetas (PRP) que estimula la renovación celular, mejora la textura de la piel y proporciona un rejuvenecimiento natural desde adentro.', en: 'Advanced regenerative facial treatment with platelet-rich plasma (PRP) that stimulates cellular renewal, improves skin texture and provides natural rejuvenation from within.' },
    excerpt: { es: 'Rejuvenecimiento facial natural con plasma rico en plaquetas para una piel radiante.', en: 'Natural facial rejuvenation with platelet-rich plasma for radiant skin.' },
    category: 'faciales-especializados',
    categoryName: serviceCategories['faciales-especializados'],
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Estimula renovación celular', 'Mejora textura de la piel', 'Rejuvenecimiento natural', 'Resultados progresivos'],
    duracion: '75 minutos',
    href: '/services/faciales-prp'
  },
  {
    id: 'faciales-celulas-madre',
    slug: 'faciales-celulas-madre',
    title: { es: 'Faciales con Células Madre', en: 'Stem Cell Facials' },
    description: { es: 'Tratamiento facial revolucionario con células madre que promueve la regeneración profunda de la piel, estimula la producción de colágeno y proporciona un rejuvenecimiento celular avanzado para una piel más joven y radiante.', en: 'Revolutionary facial treatment with stem cells that promotes deep skin regeneration, stimulates collagen production and provides advanced cellular rejuvenation for younger, more radiant skin.' },
    excerpt: { es: 'Regeneración celular avanzada con células madre para un rejuvenecimiento facial profundo.', en: 'Advanced cellular regeneration with stem cells for deep facial rejuvenation.' },
    category: 'faciales-especializados',
    categoryName: serviceCategories['faciales-especializados'],
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular profunda', 'Estimula colágeno natural', 'Rejuvenecimiento avanzado', 'Resultados duraderos'],
    duracion: '90 minutos',
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
    categoryName: serviceCategories['tratamientos-avanzados'],
    icon: '🧪',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
    benefits: ['Factores de crecimiento naturales', 'Estimula colágeno', 'Rejuvenecimiento duradero', 'Tratamiento natural'],
    duracion: '60 minutos',
    href: '/services/ez-gel-prf'
  },
  {
    id: 'kybella',
    slug: 'kybella',
    title: { es: 'Disolvente de Grasa Kybella', en: 'Kybella Fat Dissolver' },
    description: { es: 'Tratamiento avanzado no quirúrgico con Kybella (ácido desoxicólico) para eliminar la grasa submentoniana (papada) de forma permanente, creando un perfil facial más definido y juvenil sin cirugía.', en: 'Advanced non-surgical treatment with Kybella (deoxycholic acid) to permanently eliminate submental fat (double chin), creating a more defined and youthful facial profile without surgery.' },
    excerpt: { es: 'Elimina la papada permanentemente sin cirugía con Kybella.', en: 'Permanently eliminate double chin without surgery with Kybella.' },
    category: 'tratamientos-avanzados',
    categoryName: serviceCategories['tratamientos-avanzados'],
    icon: '💧',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?w=400&h=300&fit=crop&crop=center',
    benefits: ['Elimina grasa permanentemente', 'Sin cirugía', 'Perfil más definido', 'Resultados duraderos'],
    duracion: '45 minutos',
    href: '/services/kybella'
  },
  {
    id: 'cortisona-acne-quistico',
    slug: 'cortisona-acne-quistico',
    title: { es: 'Inyección de Cortisona / Acné Quístico', en: 'Cortisone Injection / Cystic Acne' },
    description: { es: 'Tratamiento avanzado con inyecciones de cortisona para tratar el acné quístico severo, reducir la inflamación y acelerar la curación de lesiones profundas de forma rápida y efectiva.', en: 'Advanced treatment with cortisone injections to treat severe cystic acne, reduce inflammation and accelerate healing of deep lesions quickly and effectively.' },
    excerpt: { es: 'Tratamiento rápido para acné quístico con inyecciones de cortisona.', en: 'Quick treatment for cystic acne with cortisone injections.' },
    category: 'tratamientos-avanzados',
    categoryName: serviceCategories['tratamientos-avanzados'],
    icon: '💉',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop&crop=center',
    benefits: ['Reduce inflamación rápidamente', 'Trata acné severo', 'Acelera curación', 'Resultados inmediatos'],
    duracion: '15 minutos',
    href: '/services/cortisona-acne-quistico'
  },
  {
    id: 'inyecciones-prp',
    slug: 'inyecciones-prp',
    title: { es: 'Inyecciones de PRP', en: 'PRP Injections' },
    description: { es: 'Tratamiento avanzado de medicina regenerativa con inyecciones de plasma rico en plaquetas (PRP) para estimular la regeneración celular, mejorar la textura de la piel y promover la curación natural desde adentro.', en: 'Advanced regenerative medicine treatment with platelet-rich plasma (PRP) injections to stimulate cellular regeneration, improve skin texture and promote natural healing from within.' },
    excerpt: { es: 'Medicina regenerativa con PRP para regeneración celular avanzada.', en: 'Regenerative medicine with PRP for advanced cellular regeneration.' },
    category: 'tratamientos-avanzados',
    categoryName: serviceCategories['tratamientos-avanzados'],
    icon: '🩸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular natural', 'Estimula colágeno', 'Mejora textura de piel', 'Curación acelerada'],
    duracion: '45 minutos',
    href: '/services/inyecciones-prp'
  },
  // Rejuvenecimiento Intimo
  {
    id: 'rejuvenecimiento-vaginal-prp',
    slug: 'rejuvenecimiento-vaginal-prp',
    title: { es: 'Rejuvenecimiento Vaginal con PRP', en: 'Vaginal Rejuvenation with PRP' },
    description: { es: 'Tratamiento innovador que utiliza plasma rico en plaquetas para mejorar la salud íntima femenina, estimular la regeneración celular y mejorar la lubricación natural de forma completamente segura.', en: 'Innovative treatment that uses platelet-rich plasma to improve feminine intimate health, stimulate cellular regeneration and improve natural lubrication completely safely.' },
    excerpt: { es: 'Mejora la salud íntima femenina con plasma rico en plaquetas.', en: 'Improve feminine intimate health with platelet-rich plasma.' },
    category: 'rejuvenecimiento-intimo',
    categoryName: serviceCategories['rejuvenecimiento-intimo'],
    icon: '🌸',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    benefits: ['Mejora lubricación natural', 'Aumenta sensibilidad', 'Tratamiento natural', 'Resultados duraderos'],
    duracion: '45-60 minutos',
    href: '/services/rejuvenecimiento-vaginal-prp'
  },
  {
    id: 'rejuvenecimiento-vaginal-celulas-madre',
    slug: 'rejuvenecimiento-vaginal-celulas-madre',
    title: { es: 'Rejuvenecimiento Vaginal con Células Madre', en: 'Vaginal Rejuvenation with Stem Cells' },
    description: { es: 'Tratamiento revolucionario que utiliza células madre para la regeneración íntima avanzada, proporcionando resultados excepcionales y duraderos en el bienestar femenino.', en: 'Revolutionary treatment that uses stem cells for advanced intimate regeneration, providing exceptional and lasting results in feminine wellness.' },
    excerpt: { es: 'Regeneración íntima avanzada con células madre para resultados excepcionales.', en: 'Advanced intimate regeneration with stem cells for exceptional results.' },
    category: 'rejuvenecimiento-intimo',
    categoryName: serviceCategories['rejuvenecimiento-intimo'],
    icon: '🧬',
    precio: 'Por definir',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=center',
    benefits: ['Regeneración celular profunda', 'Resultados duraderos', 'Tecnología de vanguardia', 'Tratamiento seguro'],
    duracion: '60-90 minutos',
    href: '/services/rejuvenecimiento-vaginal-celulas-madre'
  }
];

// Categories with unified services
export const categoriasUnificadas: CategoriaUnificada[] = [
  {
    id: 'injections',
    nombre: serviceCategories.injections,
    slug: 'injections',
    servicios: serviciosUnificados.filter(s => s.category === 'injections')
  },
  {
    id: 'inyecciones-neurotoxinas',
    nombre: serviceCategories['inyecciones-neurotoxinas'],
    slug: 'inyecciones-neurotoxinas',
    servicios: serviciosUnificados.filter(s => s.category === 'inyecciones-neurotoxinas')
  },
  {
    id: 'rellenos',
    nombre: serviceCategories.rellenos,
    slug: 'rellenos-sculptra',
    servicios: serviciosUnificados.filter(s => s.category === 'rellenos')
  },
  {
    id: 'contorno',
    nombre: serviceCategories.contorno,
    slug: 'contorno-facial-corporal',
    servicios: serviciosUnificados.filter(s => s.category === 'contorno')
  },
  {
    id: 'sculptra-rellenos',
    nombre: serviceCategories['sculptra-rellenos'],
    slug: 'tratamientos-sculptra-rellenos',
    servicios: serviciosUnificados.filter(s => s.category === 'sculptra-rellenos')
  },
  {
    id: 'especializados',
    nombre: serviceCategories.especializados,
    slug: 'tratamientos-especializados',
    servicios: serviciosUnificados.filter(s => s.category === 'especializados')
  },
  {
    id: 'bienestar',
    nombre: serviceCategories.bienestar,
    slug: 'peso-bienestar',
    servicios: serviciosUnificados.filter(s => s.category === 'bienestar')
  },
  {
    id: 'medicina-regenerativa',
    nombre: serviceCategories['medicina-regenerativa'],
    slug: 'medicina-regenerativa',
    servicios: serviciosUnificados.filter(s => s.category === 'medicina-regenerativa')
  },
  {
    id: 'cabello-piel',
    nombre: serviceCategories['cabello-piel'],
    slug: 'tratamientos-cabello-piel',
    servicios: serviciosUnificados.filter(s => s.category === 'cabello-piel')
  },
  {
    id: 'rellenos-faciales-corporales',
    nombre: serviceCategories['rellenos-faciales-corporales'],
    slug: 'rellenos-faciales-corporales',
    servicios: serviciosUnificados.filter(s => s.category === 'rellenos-faciales-corporales')
  },
  {
    id: 'faciales-especializados',
    nombre: serviceCategories['faciales-especializados'],
    slug: 'faciales-especializados',
    servicios: serviciosUnificados.filter(s => s.category === 'faciales-especializados')
  },
  {
    id: 'tratamientos-avanzados',
    nombre: serviceCategories['tratamientos-avanzados'],
    slug: 'tratamientos-avanzados',
    servicios: serviciosUnificados.filter(s => s.category === 'tratamientos-avanzados')
  },
  {
    id: 'rejuvenecimiento-intimo',
    nombre: serviceCategories['rejuvenecimiento-intimo'],
    slug: 'rejuvenecimiento-intimo',
    servicios: serviciosUnificados.filter(s => s.category === 'rejuvenecimiento-intimo')
  }
  ,{
    id: 'bhrt',
    nombre: serviceCategories['bhrt'],
    slug: 'bhrt',
    servicios: serviciosUnificados.filter(s => s.category === 'bhrt')
  }
  ,{
    id: 'peptide-therapy',
    nombre: serviceCategories['peptide-therapy'],
    slug: 'peptide-therapy',
    servicios: serviciosUnificados.filter(s => s.category === 'peptide-therapy')
  }
  ,{
    id: 'iv-im-therapy',
    nombre: serviceCategories['iv-im-therapy'],
    slug: 'iv-im-therapy',
    servicios: serviciosUnificados.filter(s => s.category === 'iv-im-therapy')
  }
];

// Helper functions
export function getServicioUnificadoBySlug(slug: string): ServicioUnificado | undefined {
  return serviciosUnificados.find(servicio => servicio.slug === slug);
}

export function getCategoriaUnificadaBySlug(slug: string): CategoriaUnificada | undefined {
  return categoriasUnificadas.find(categoria => categoria.slug === slug);
}

export function getServiciosByCategory(category: string): ServicioUnificado[] {
  return serviciosUnificados.filter(servicio => servicio.category === category);
}

// Featured services
export const serviciosDestacados = [
  'tox-neurotoxina',
  'sculptra-colageno', 
  'cheekbone-pop',
  'relleno-labios',
  'b12-fat-blaster'
];
