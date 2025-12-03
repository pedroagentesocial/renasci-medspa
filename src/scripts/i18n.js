// Sistema de traducción dinámico
const dict = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      services: "Servicios",
      membership: "Membresía",
      about: "Nosotros",
      contact: "Contacto"
    },
    // CTAs and buttons
    cta: {
      book_now: "Agendar Ahora",
      learn_more: "Conoce Más",
      view_details: "Ver Detalles",
      view_services: "Ver Servicios",
      get_started: "Comenzar",
      contact_us: "Contáctanos",
      back_home: "Volver al Inicio",
      send: "Enviar",
      schedule: "Agendar",
      select_plan: "Seleccionar Plan",
      go_membership: "Ir a Membresía"
    },
    hero: {
      renew_prefix: "Renueva tu",
      renew_highlight: "Piel",
      memberships_title_prefix: "Conoce Nuestras",
      memberships_title_highlight: "Membresías"
    },
    start: {
      cta_title: "Empieza ahora tu tratamiento",
      cta_subtitle: "Renasci te espera con atención personalizada y resultados profesionales."
    },
    about: {
      title_prefix: "Experiencia y",
      title_highlight: "Excelencia",
      paragraph1: "En Renasci Medical Spa, combinamos la más avanzada tecnología médica con un enfoque personalizado para cada cliente. Nuestro equipo de especialistas certificados se dedica a brindar resultados excepcionales en un ambiente seguro y profesional.",
      paragraph2: "Desde tratamientos de rejuvenecimiento facial hasta procedimientos corporales innovadores, cada servicio está diseñado para realzar tu belleza natural y aumentar tu confianza.",
      stats_clients: "Clientes Satisfechos",
      stats_years: "Años de Experiencia"
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Resolvemos las dudas más comunes sobre tratamientos, reservas y membresías.",
      q1: "¿Cómo agendo una cita?",
      a1: "Puedes agendar directamente desde la página de contacto o llamarnos. Nuestro equipo confirmará tu horario ideal.",
      q2: "¿Qué tratamientos son adecuados para mí?",
      a2: "Realizamos una evaluación inicial para recomendarte el plan más adecuado según tus objetivos y perfil.",
      q3: "¿Ofrecen planes de membresía?",
      a3: "Sí, contamos con una membresía con beneficios y accesos prioritarios. Puedes ver los detalles en la sección de Membresía.",
      q4: "¿Cuál es el tiempo de recuperación?",
      a4: "Depende del tratamiento. La mayoría permite retomar actividades el mismo día, con cuidados simples que te indicaremos.",
      q5: "¿Aceptan consultas informativas?",
      a5: "Sí, ofrecemos consultas para resolver dudas y diseñar tu plan personalizado."
    },
    carousel: {
      title: "Servicios destacados del día",
      view_more: "Ver más",
      label_popular: "Más popular",
      label_recommended: "Recomendado",
      label_trending: "Tendencia"
    },
    // Footer
    footer: {
      contact_title: "Contáctanos",
      social_title: "Síguenos",
      follow_us: "Síguenos",
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "© 2024 Renasci Medical Spa. Todos los derechos reservados.",
      address: "Utah, Estados Unidos",
      phone: "+1 (000) 000-0000",
      email: "info@renasci.com",
      sitemap: "Mapa del sitio",
      about_paragraph: "Renasci Medical Spa es tu destino para tratamientos estéticos avanzados. Renovamos tu piel con los mejores especialistas y tecnología de vanguardia.",
      cert_fda: "Certificado FDA",
      cert_licensed: "Licenciado",
      location_label: "Ubicación",
      hours_label: "Horarios",
      hours_mon_fri: "Lun - Vie: 9:00 AM - 7:00 PM",
      hours_sat: "Sáb: 9:00 AM - 5:00 PM",
      hours_sun: "Dom: Cerrado",
      follow_paragraph: "Síguenos en nuestras redes sociales para tips de belleza, promociones exclusivas y transformaciones increíbles.",
      copyright_suffix: "Todos los derechos reservados."
    },
    // Forms
    form: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Email",
      message: "Mensaje",
      service: "Servicio de interés",
      required: "Campo requerido",
      service_select: "Selecciona un servicio",
      placeholder_name: "Tu nombre",
      placeholder_phone: "(385) 555-0123",
      placeholder_email: "tu@email.com",
      placeholder_message: "Cuéntanos tus objetivos o preguntas",
      consent_prefix: "Acepto ser contactado por Renasci y el tratamiento de mis datos de acuerdo a la",
      options: {
        botox: "Botox",
        fillers: "Rellenos Dérmicos",
        sculptra: "Sculptra",
        skincare: "Cuidado de la Piel",
        laser: "Tratamientos Láser",
        other: "Otro"
      }
    },
    // Common
    common: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      coming_soon: "Próximamente",
      best_value: "Mejor Valor",
      popular: "Popular",
      from: "Desde",
      per_session: "por sesión",
      per_month: "por mes"
    },
    // Pages
    pages: {
      home_title: "Renasci Medical Spa - Tratamientos Estéticos Avanzados",
      services_title: "Nuestros Servicios - Renasci Medical Spa",
      membership_title: "Membresías - Renasci Medical Spa",
      not_found: "Página no encontrada",
      server_error: "Error del servidor"
    },
    services: {
      injectables_title: "Inyectables & Rellenos Dérmicos",
      injectables_subtitle: "Resultados naturales y prevención de arrugas",
      skin_title: "Piel & Láser",
      skin_subtitle: "Microneedling y renovación de la piel",
      body_title: "Cuerpo & Íntimo",
      body_subtitle: "Bienestar íntimo y recuperación",
      biostimulators_title: "Bioestimuladores",
      specialized_title: "Tratamientos Especializados",
      wellness_title: "Pérdida de Peso y Bienestar",
      neurotoxins_title: "Botox y Neuromoduladores",
      regenerative_title: "Terapias de Medicina Regenerativa",
      advanced_title: "Tratamientos Avanzados",
      intimate_title: "Rejuvenecimiento Íntimo",
      microneedling_title: "Microneedling",
      prp_title: "Plasma Rico en Plaquetas (PRP)",
      bhrt_title: "Terapia Hormonal Bioidéntica (BHRT)",
      peptides_title: "Terapia con Péptidos",
      ivim_title: "Terapia IV/IM",
      filter_placeholder: "Filtrar servicios...",
      groups: {
        contour: "Contorno Facial y Corporal",
        hair_skin: "Tratamientos de Piel y Cabello"
      }
    },
    membership: {
      join_title_prefix: "Únete a Nuestra",
      join_title_highlight: "Membresía",
      join_subtitle: "Accede a descuentos exclusivos, tratamientos prioritarios y beneficios especiales diseñados para nuestros miembros más valorados.",
      benefit_discounts_title: "Descuentos Exclusivos",
      benefit_discounts_text: "Descubre descuentos exclusivos en servicios seleccionados",
      benefit_priority_title: "Acceso Prioritario",
      benefit_priority_text: "Reserva tus citas con prioridad y flexibilidad",
      benefit_special_title: "Beneficios Especiales",
      benefit_special_text: "Tratamientos gratuitos y productos exclusivos",
      view_membership: "Conoce Nuestra Membresía"
    },
    nosweat: { hero_title: "Botox No‑Sweat (hiperhidrosis)", hero_subtitle: "Tratamiento especializado para hiperhidrosis axilar que reduce la sudoración excesiva con resultados duraderos y mejora la confianza.", price_from_label: "Precio desde", price_value: "$825", duration_label: "Duración: 45 min", breadcrumb_label: "Botox No‑Sweat", details: { title: "Botox No‑Sweat", p1: "Solución especializada para la hiperhidrosis axilar. Utiliza neurotoxina para bloquear temporalmente las señales nerviosas que activan las glándulas sudoríparas.", p2: "Aplicación precisa y rápida en zonas objetivo, reduciendo significativamente la sudoración y mejorando tu comodidad diaria y confianza.", p3: "Resultados visibles en 3–7 días y con duración de hasta 6 meses, según metabolismo y seguimiento." }, benefits: { title: "Beneficios del Tratamiento", subtitle: "Ventajas clave del Botox No‑Sweat para hiperhidrosis", items: [ { title: "Reduce Sudoración Excesiva", text: "Disminuye significativamente la hiperhidrosis axilar para mayor comodidad diaria." }, { title: "Resultados Duraderos", text: "Efectos de 4–6 meses según metabolismo y seguimiento." }, { title: "Procedimiento Rápido", text: "Aplicación cómoda en menos de una hora y retorno inmediato a tus actividades." }, { title: "Mejora Calidad de Vida", text: "Mayor confianza y bienestar en situaciones sociales y deportivas." }, { title: "Seguridad Comprobada", text: "Aplicado por profesionales certificados con experiencia clínica." }, { title: "Resultados Naturales", text: "Control localizado de la sudoración sin afectar tu rutina." } ] }, process: { title: "Proceso del Tratamiento", subtitle: "Un proceso simple y profesional para obtener los mejores resultados", steps: [ { title: "Consulta Inicial", text: "Evaluación de áreas con sudoración excesiva y definición del plan de inyección." }, { title: "Preparación del Área", text: "Limpieza, desinfección y marcado preciso de puntos de inyección." }, { title: "Aplicación", text: "Microinyecciones en zonas axilares con técnica especializada." }, { title: "Cuidados y Seguimiento", text: "Recomendaciones post‑tratamiento y evaluación de resultados. Máximo efecto en ~2 semanas." } ] }, faq: { title: "Preguntas Frecuentes", subtitle: "Resolvemos dudas comunes sobre Botox No‑Sweat", items: [ { q: "¿Es doloroso el tratamiento?", a: "Molestias mínimas con agujas finas y técnica que reduce la incomodidad." }, { q: "¿Cuánto duran los resultados?", a: "Entre 4–6 meses; con constancia el efecto puede optimizarse." }, { q: "¿Hay efectos secundarios?", a: "Mínimos y temporales; posible enrojecimiento o sensibilidad local." } ] }, testimonials: { title: "Lo Que Dicen Nuestros Pacientes", subtitle: "Experiencias reales con resultados consistentes", items: [ "\"Resultados duraderos y me siento mucho más cómoda en el día a día.\"", "“El procedimiento fue rápido y el cambio se notó a la semana.”", "“Me devolvió la confianza; ahora puedo hacer ejercicio sin preocupaciones.”" ] } },
    lipflip: { hero_title: "Botox Lip Flip", hero_subtitle: "Define el labio superior con un efecto de volteo sutil y natural sin usar rellenos.", price_from_label: "Precio desde", price_value: "$75", duration_label: "Duración: 15 min", breadcrumb_label: "Botox Lip Flip", details: { title: "Botox Lip Flip", p1: "El <strong>Botox Lip Flip</strong> utiliza pequeñas dosis de neurotoxina para relajar suavemente el músculo del labio superior, logrando un efecto de volteo que crea definición y apariencia de mayor volumen sin rellenos.", p2: "Es ideal para un resultado sutil y natural; realza el contorno del labio superior manteniendo expresividad y proporciones.", p3: "Procedimiento rápido y seguro; resultados visibles en días y duración típica 3–4 meses." }, benefits: { title: "Beneficios del Tratamiento", subtitle: "Ventajas clave del Botox Lip Flip", items: [ { title: "Define el Labio Superior", text: "Aporta contorno y realce sutil sin añadir volumen externo." }, { title: "Aspecto Natural", text: "Mantiene expresividad y proporciones sin apariencia de relleno." }, { title: "Rápido y Seguro", text: "Procedimiento de pocos minutos y resultados visibles en días." }, { title: "Sin Rellenos", text: "Realce mediante relajación muscular, sin material de relleno." }, { title: "Resultados Consistentes", text: "Duración típica 3–4 meses con mantenimiento periódico." }, { title: "Mejora la Simetría", text: "Ayuda a armonizar el contorno entre ambos lados del labio." } ] }, process: { title: "Proceso del Tratamiento", subtitle: "Rápido, cómodo y con resultados naturales", steps: [ { title: "Evaluación Inicial", text: "Análisis del contorno natural del labio y definición del plan." }, { title: "Preparación del Área", text: "Limpieza, desinfección y marcado preciso de puntos." }, { title: "Aplicación Precisa", text: "Microinyecciones estratégicas en el músculo del labio superior." }, { title: "Cuidados y Seguimiento", text: "Recomendaciones post‑tratamiento y evaluación de resultados en días." } ] }, faq: { title: "Preguntas Frecuentes", subtitle: "Resolvemos dudas comunes sobre Botox Lip Flip", items: [ { q: "¿En qué se diferencia del relleno de labios?", a: "Relaja el músculo para definir el labio; los rellenos agregan volumen." }, { q: "¿Cuánto tiempo dura el efecto?", a: "Usualmente 3–4 meses; se puede repetir para mantener el resultado." }, { q: "¿Afecta la funcionalidad del labio?", a: "No; técnica precisa que mantiene funcionalidad normal." } ] }, testimonials: { title: "Lo Que Dicen Nuestros Pacientes", subtitle: "Experiencias reales con resultados sutiles y naturales", items: [ "\"Definición sutil y natural; me encantó el resultado desde la primera semana.\"", "“Proceso rápido y sin molestias. Superó mis expectativas.”", "“Resultados naturales, sin apariencia de relleno. Muy satisfecho.”" ] } },
    minilip: { hero_title: "Mini Aumento de Labios", hero_subtitle: "Volumen sutil y definición natural con ácido hialurónico premium.", price_from_label: "Precio desde", price_value: "$375", duration_label: "Duración: 30 min", breadcrumb_label: "Mini Aumento de Labios", details: { title: "Mini Aumento de Labios", p1: "Usa <strong>pequeñas dosis de ácido hialurónico</strong> para lograr <strong>volumen sutil</strong> y <strong>definición natural del borde</strong>.", p2: "Ideal para un cambio discreto y armonioso manteniendo el equilibrio facial y la expresividad.", p3: "Resultados visibles inmediatos que se refinan en días; duración típica 6–9 meses." }, benefits: { title: "Beneficios del Tratamiento", subtitle: "Ventajas clave del Mini Aumento de Labios", items: [ { title: "Volumen Natural", text: "Resultados discretos y equilibrados sin exageración." }, { title: "Hidratación Profunda", text: "El ácido hialurónico agrega suavidad e hidratación." }, { title: "Resultados Inmediatos", text: "Definición visible de inmediato y que mejora en días." }, { title: "Aspecto Joven", text: "Realza el contorno y suaviza líneas para un look fresco." }, { title: "Alta Precisión", text: "Puntos estratégicos para simetría y balance." }, { title: "Definición Sutil", text: "Mejora el borde del labio manteniendo proporciones naturales." } ] }, process: { title: "Proceso del Tratamiento", subtitle: "Seguro, preciso y con resultados inmediatos", steps: [ { title: "Consulta Inicial", text: "Evaluación de contorno del labio y proporciones naturales." }, { title: "Preparación", text: "Limpieza, desinfección y marcado preciso." }, { title: "Aplicación Precisa", text: "Microinyecciones de ácido hialurónico para definición sutil." }, { title: "Cuidados y Seguimiento", text: "Recomendaciones post‑tratamiento y evaluación de resultados." } ] }, faq: { title: "Preguntas Frecuentes", subtitle: "Dudas comunes sobre Mini Aumento de Labios", items: [ { q: "¿En qué se diferencia del aumento completo?", a: "Usa menos producto, enfocado en definición sutil y natural." }, { q: "¿Cuánto dura?", a: "Típicamente 6–9 meses según metabolismo y cuidado." }, { q: "¿Duele?", a: "Molestias mínimas; anestesia tópica y técnica precisa." } ] }, testimonials: { title: "Lo Que Dicen Nuestros Pacientes", subtitle: "Experiencias reales con resultados sutiles y naturales", items: [ "\"Definición natural y simetría; me encantó el cambio sutil.\"", "“Volumen muy natural; procedimiento rápido y cómodo.”", "“Se ve natural y mejoró la simetría del labio notablemente.”" ] } },
    fulllip: { hero_title: "Aumento Completo de Labios", hero_subtitle: "Aumento equilibrado y natural con ácido hialurónico para volumen y contorno.", price_from_label: "Precio desde", price_value: "$650", duration_label: "Duración: 45 min", breadcrumb_label: "Aumento Completo de Labios", details: { title: "Aumento Completo de Labios", p1: "Usa <strong>ácido hialurónico</strong> para crear <strong>volumen equilibrado</strong>, <strong>definición del borde</strong> y <strong>simetría</strong>.", p2: "Diseñado para un acabado refinado y natural que respeta proporciones y mantiene expresividad.", p3: "Visibles de inmediato y optimizan en días; duración típica 9–12 meses." }, benefits: { title: "Beneficios del Tratamiento", subtitle: "Ventajas clave del Aumento Completo de Labios", items: [ { title: "Volumen Equilibrado", text: "Plenitud refinada respetando proporciones naturales." }, { title: "Definición de Contorno", text: "Bordes más definidos con acabado natural." }, { title: "Mayor Duración", text: "Típicamente 9–12 meses con buen mantenimiento." }, { title: "Simetría", text: "Mejora el balance entre ambos lados del labio." }, { title: "Alta Precisión", text: "Aplicación estratégica para resultados refinados." }, { title: "Acabado Natural", text: "Mantiene expresividad con un look suave." } ] }, process: { title: "Proceso del Tratamiento", subtitle: "Aplicación segura y precisa para resultados naturales", steps: [ { title: "Consulta Inicial", text: "Evaluación de forma del labio, proporciones y objetivos." }, { title: "Preparación", text: "Limpieza, desinfección y marcado preciso." }, { title: "Aplicación Precisa", text: "Microinyecciones estratégicas de ácido hialurónico." }, { title: "Cuidados y Seguimiento", text: "Recomendaciones de cuidado y evaluación de resultados." } ] }, faq: { title: "Preguntas Frecuentes", subtitle: "Dudas comunes sobre Aumento Completo de Labios", items: [ { q: "¿Diferencia con mini aumento?", a: "El aumento completo busca cambios integrales de volumen y contorno." }, { q: "¿Cuánto dura?", a: "Típicamente 9–12 meses según metabolismo y cuidados." }, { q: "¿Duele?", a: "Molestias mínimas; anestesia tópica y técnica precisa." } ] }, testimonials: { title: "Lo Que Dicen Nuestros Pacientes", subtitle: "Experiencias reales con resultados refinados y naturales", items: [ "\"Volumen refinado y simetría; me encantó el look natural.\"", "“Definición muy natural; procedimiento rápido y cómodo.”", "“Se ve natural y mejoró el contorno del labio significativamente.”" ] } },
    megalip: { hero_title: "Mega Aumento de Labios", hero_subtitle: "Aumento avanzado con ácido hialurónico para volumen significativo, contorno esculpido y simetría.", price_from_label: "Precio desde", price_value: "$850", duration_label: "Duración: 60 min", breadcrumb_label: "Mega Aumento de Labios", details: { title: "Mega Aumento de Labios", p1: "Técnicas avanzadas con <strong>ácido hialurónico</strong> para <strong>volumen significativo</strong>, <strong>bordes esculpidos</strong> y <strong>simetría</strong> manteniendo un acabado natural.", p2: "Ideal para quienes buscan mayor plenitud con proporciones refinadas que preservan armonía y expresividad facial.", p3: "Visibilidad inmediata y optimización en días; longevidad típica ~12 meses." }, benefits: { title: "Beneficios del Tratamiento", subtitle: "Ventajas centrales del Mega Aumento de Labios", items: [ { title: "Volumen Significativo", text: "Plenitud manteniendo un aspecto suave y natural." }, { title: "Contorno Esculpido", text: "Bordes más marcados con acabado coherente." }, { title: "Mayor Longevidad", text: "Alrededor de 12 meses con buen mantenimiento." }, { title: "Simetría y Balance", text: "Apunta a armonía proporcional entre ambos lados." }, { title: "Alta Precisión", text: "Aplicación estratégica para resultados consistentes y refinados." }, { title: "Estética Natural", text: "Preserva expresividad con acabado pulido." } ] }, process: { title: "Proceso del Tratamiento", subtitle: "Aplicación segura y precisa para resultados refinados y naturales", steps: [ { title: "Consulta Inicial", text: "Evaluación de forma del labio, proporciones y objetivos." }, { title: "Preparación", text: "Limpieza, desinfección y marcado preciso." }, { title: "Aplicación Precisa", text: "Microinyecciones estratégicas de ácido hialurónico." }, { title: "Cuidados y Seguimiento", text: "Recomendaciones de cuidado y evaluación de resultados." } ] }, faq: { title: "Preguntas Frecuentes", subtitle: "Dudas comunes sobre Mega Aumento de Labios", items: [ { q: "¿Diferencia con aumento completo?", a: "El Mega Aumento busca mayor volumen y contorno respecto al completo." }, { q: "¿Cuánto dura?", a: "Aproximadamente ~12 meses; varía por metabolismo y cuidados." }, { q: "¿Duele?", a: "Molestias mínimas; anestesia tópica y técnica precisa." } ] }, testimonials: { title: "Lo Que Dicen Nuestros Pacientes", subtitle: "Experiencias reales con mayor plenitud y acabado natural", items: [ "\"Más volumen pero natural; contorno se ve refinado y simétrico.\"", "“Me gustó la forma mejorada con acabado suave; rápido y cómodo.”", "“Volumen significativo con estética natural; muy satisfecho.”" ] } }
  facialcontour: {
    category: "Contorno Facial",
    hero_title: "Contorno Facial Personalizado",
    hero_subtitle: "Plan a medida para definir pómulos, mandíbula y proporciones para un look equilibrado y natural.",
    price_from_label: "Precio desde",
    price_value: "$850",
    duration_label: "Duración: 60 min",
    breadcrumb_label: "Contorno Facial Personalizado",
    details: {
      title: "Contorno Facial Personalizado",
      p1: "Plan a medida que refina <strong>pómulos</strong>, <strong>mandíbula</strong> y proporciones faciales para lograr un <strong>contorno equilibrado y natural</strong>.",
      p2: "Combina técnicas precisas para mejorar definición y simetría respetando tus rasgos únicos.",
      p3: "Visible desde la primera sesión, con refinamiento óptimo en días."
    },
    benefits: {
      title: "Beneficios del Tratamiento",
      subtitle: "Ventajas clave del Contorno Facial Personalizado",
      items: [
        { title: "Pómulos Realzados", text: "Refina la definición del pómulo para un efecto lift y esculpido." },
        { title: "Mandíbula Definida", text: "Contorno de mandíbula más nítido para mejor equilibrio facial." },
        { title: "Armonía Natural", text: "Equilibra rasgos para resultados elegantes y coherentes." },
        { title: "Precisión", text: "Aplicación estratégica adaptada a tu anatomía." },
        { title: "Simetría", text: "Mejora el balance proporcional entre los rasgos." },
        { title: "Plan a Medida", text: "Enfoque personalizado según tus objetivos y rasgos." }
      ]
    },
    process: {
      title: "Proceso del Tratamiento",
      subtitle: "Consulta, plan a medida y aplicación precisa",
      steps: [
        { title: "Consulta Inicial", text: "Evaluación de proporciones faciales y objetivos." },
        { title: "Plan a Medida", text: "Mapeo y estrategia precisa para lograr tu resultado." },
        { title: "Aplicación Precisa", text: "Microinyecciones estratégicas para contorno refinado." },
        { title: "Cuidados y Seguimiento", text: "Cuidados posteriores y evaluación para optimizar resultados." }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Dudas comunes sobre Contorno Facial Personalizado",
      items: [
        { q: "¿Cómo se personaliza el plan?", a: "Evaluamos proporciones y objetivos para ajustar mapeo y técnica." },
        { q: "¿Cuánto duran los resultados?", a: "Visibles de inmediato; se refinan en días; la duración varía según técnica." },
        { q: "¿Duele?", a: "Molestias mínimas; anestesia tópica y técnica precisa." }
      ]
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Pacientes",
      subtitle: "Experiencias reales con resultados naturales y refinados",
      items: [
        "\"Pómulos y mandíbula refinados con acabado natural; muy feliz.\"",
        "“Definición equilibrada con armonía natural; rápido y cómodo.”",
        "“Mejoró la simetría y el contorno manteniendo un look natural.”"
      ]
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      membership: "Membership",
      about: "About",
      contact: "Contact"
    },
    // CTAs and buttons
    cta: {
      book_now: "Book Now",
      learn_more: "Learn More",
      view_details: "View Details",
      view_services: "View Services",
      get_started: "Get Started",
      contact_us: "Contact Us",
      back_home: "Back to Home",
      send: "Send",
      schedule: "Schedule",
      select_plan: "Select Plan",
      go_membership: "Go to Membership"
    },
    hero: {
      renew_prefix: "Renew your",
      renew_highlight: "Skin",
      memberships_title_prefix: "Discover our",
      memberships_title_highlight: "Memberships"
    },
    start: {
      cta_title: "Start your treatment now",
      cta_subtitle: "Renasci awaits with personalized care and professional results."
    },
    about: {
      title_prefix: "Experience and",
      title_highlight: "Excellence",
      paragraph1: "At Renasci Medical Spa, we combine advanced medical technology with a personalized approach for every client. Our certified specialists deliver exceptional results in a safe, professional environment.",
      paragraph2: "From facial rejuvenation to innovative body treatments, every service is designed to enhance your natural beauty and boost your confidence.",
      stats_clients: "Satisfied Clients",
      stats_years: "Years of Experience"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "We answer the most common questions about treatments, bookings and memberships.",
      q1: "How do I book an appointment?",
      a1: "You can book directly from the contact page or call us. Our team will confirm your ideal time.",
      q2: "Which treatments are right for me?",
      a2: "We perform an initial assessment to recommend the most suitable plan based on your goals and profile.",
      q3: "Do you offer membership plans?",
      a3: "Yes, we have a membership with benefits and priority access. You can see the details in the Membership section.",
      q4: "What is the recovery time?",
      a4: "It depends on the treatment. Most allow you to resume activities the same day, with simple care that we will indicate.",
      q5: "Do you accept informational consultations?",
      a5: "Yes, we offer consultations to answer questions and design your personalized plan."
    },
    carousel: {
      title: "Featured services of the day",
      view_more: "View more",
      label_popular: "Most popular",
      label_recommended: "Recommended",
      label_trending: "Trending"
    },
    // Footer
    footer: {
      contact_title: "Contact Us",
      social_title: "Follow Us",
      follow_us: "Follow Us",
      privacy: "Privacy",
      terms: "Terms",
      copyright: "© 2024 Renasci Medical Spa. All rights reserved.",
      address: "Utah, United States",
      phone: "+1 (000) 000-0000",
      email: "info@renasci.com",
      sitemap: "Sitemap",
      about_paragraph: "Renasci Medical Spa is your destination for advanced aesthetic treatments. We renew your skin with the best specialists and cutting-edge technology.",
      cert_fda: "FDA Certified",
      cert_licensed: "Licensed",
      location_label: "Location",
      hours_label: "Hours",
      hours_mon_fri: "Mon - Fri: 9:00 AM - 7:00 PM",
      hours_sat: "Sat: 9:00 AM - 5:00 PM",
      hours_sun: "Sun: Closed",
      follow_paragraph: "Follow us on social media for beauty tips, exclusive promotions and incredible transformations.",
      copyright_suffix: "All rights reserved."
    },
    // Forms
    form: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      service: "Service of interest",
      required: "Required field",
      service_select: "Select a service",
      placeholder_name: "Your name",
      placeholder_phone: "(385) 555-0123",
      placeholder_email: "your@email.com",
      placeholder_message: "Tell us your goals or questions",
      consent_prefix: "I agree to be contacted by Renasci and for my data to be processed according to",
      options: {
        botox: "Botox",
        fillers: "Dermal Fillers",
        sculptra: "Sculptra",
        skincare: "Skin Care",
        laser: "Laser Treatments",
        other: "Other"
    },
    
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      coming_soon: "Coming Soon",
      best_value: "Best Value",
      popular: "Popular",
      from: "From",
      per_session: "per session",
      per_month: "per month"
    },
    // Pages
    pages: {
      home_title: "Renasci Medical Spa - Advanced Aesthetic Treatments",
      services_title: "Our Services - Renasci Medical Spa",
      membership_title: "Memberships - Renasci Medical Spa",
      not_found: "Page not found",
      server_error: "Server error"
    },
    services: {
      injectables_title: "Injectables & Dermal Fillers",
      injectables_subtitle: "Natural results and wrinkle prevention",
      skin_title: "Skin & Laser",
      skin_subtitle: "Microneedling and skin renewal",
      body_title: "Body & Intimate",
      body_subtitle: "Intimate wellness and recovery",
      biostimulators_title: "Biostimulators",
      specialized_title: "Specialized Treatments",
      wellness_title: "Weight Loss & Wellness",
      neurotoxins_title: "Botox & Neuromodulators",
      regenerative_title: "Regenerative Medicine Therapies",
      advanced_title: "Advanced Treatments",
      intimate_title: "Intimate Rejuvenation",
      microneedling_title: "Microneedling",
      prp_title: "Platelet-Rich Plasma (PRP)",
      bhrt_title: "Bioidentical Hormone Therapy (BHRT)",
      peptides_title: "Peptide Therapy",
      ivim_title: "IV/IM Therapy",
      filter_placeholder: "Filter services...",
      groups: {
        contour: "Facial & Body Contouring",
        hair_skin: "Hair and Skin Treatments"
      }
    },
    membership: {
      join_title_prefix: "Join Our",
      join_title_highlight: "Membership",
      join_subtitle: "Access exclusive discounts, priority treatments, and special benefits designed for our most valued members.",
      benefit_discounts_title: "Exclusive Discounts",
      benefit_discounts_text: "Discover exclusive discounts on selected services",
      benefit_priority_title: "Priority Access",
      benefit_priority_text: "Book appointments with priority and flexibility",
      benefit_special_title: "Special Benefits",
      benefit_special_text: "Complimentary treatments and exclusive products",
      view_membership: "See Our Membership"
    },
    nosweat: { hero_title: "Botox No‑Sweat Treatment", hero_subtitle: "Specialized axillary hyperhidrosis protocol that reduces excessive sweating with durable results and improved confidence.", price_from_label: "Starting at", price_value: "$825", duration_label: "Duration: 45 min", breadcrumb_label: "Botox No‑Sweat", details: { title: "Botox No‑Sweat", p1: "Specialized solution for axillary hyperhidrosis. Uses neurotoxin to temporarily block nerve signals that activate sweat glands.", p2: "Precise, quick application to target areas, significantly reducing sweating while improving daily comfort and confidence.", p3: "Visible in 3–7 days and lasts up to ~6 months depending on metabolism and follow‑up." }, benefits: { title: "Treatment Benefits", subtitle: "Key advantages of Botox No‑Sweat for hyperhidrosis", items: [ { title: "Reduces Excessive Sweating", text: "Significantly diminishes axillary hyperhidrosis for daily comfort." }, { title: "Durable Results", text: "Effects last 4–6 months depending on metabolism and follow‑up." }, { title: "Quick Procedure", text: "Comfortable application under an hour; return to activities immediately." }, { title: "Quality of Life", text: "Greater confidence and wellbeing in social and sports settings." }, { title: "Proven Safety", text: "Performed by certified professionals with clinical experience." }, { title: "Natural Finish", text: "Localized control without affecting your routine." } ] }, process: { title: "Treatment Process", subtitle: "A simple, professional process to achieve the best results", steps: [ { title: "Initial Consultation", text: "Evaluation of excessive sweating areas and injection plan." }, { title: "Area Preparation", text: "Cleaning, disinfection and precise marking of injection points." }, { title: "Application", text: "Strategic microinjections in axillary areas with specialized technique." }, { title: "Care & Follow‑up", text: "Post‑care recommendations and results evaluation; maximal effect ~2 weeks." } ] }, faq: { title: "Frequently Asked Questions", subtitle: "Common questions about Botox No‑Sweat", items: [ { q: "Is the treatment painful?", a: "Minimal discomfort with fine needles and technique to reduce sensitivity." }, { q: "How long do results last?", a: "Between 4–6 months; consistency can optimize results." }, { q: "Are there side effects?", a: "Minimal and temporary; possible redness or local sensitivity." } ] }, testimonials: { title: "What Our Patients Say", subtitle: "Real experiences with consistent results", items: [ "\"Durable results and much more comfortable day‑to‑day.\"", "“Quick procedure and changes noticed within a week.”", "“Confidence restored; I can exercise without worries.”" ] } },
    lipflip: { hero_title: "Botox Lip Flip", hero_subtitle: "Defines the upper lip with a subtle, natural ‘flip’ effect without fillers.", price_from_label: "Starting at", price_value: "$75", duration_label: "Duration: 15 min", breadcrumb_label: "Botox Lip Flip", details: { title: "Botox Lip Flip", p1: "<strong>Botox Lip Flip</strong> uses small doses of neurotoxin to gently relax the upper lip muscle, creating a flip effect that defines and gives the appearance of more volume without fillers.", p2: "Ideal for a subtle, natural result. The technique enhances the upper lip contour while maintaining expressiveness and facial proportions.", p3: "Quick and safe procedure; visible results in days with a typical 3–4 month duration." }, benefits: { title: "Treatment Benefits", subtitle: "Key advantages of Botox Lip Flip", items: [ { title: "Defines Upper Lip", text: "Adds contour and subtle enhancement without external volume." }, { title: "Natural Look", text: "Maintains expressiveness and proportions without a filled appearance." }, { title: "Quick & Safe", text: "Minutes‑long procedure with results visible in days." }, { title: "No Fillers", text: "Enhancement via muscle relaxation without filler material." }, { title: "Consistent Results", text: "Typically 3–4 months with periodic maintenance." }, { title: "Improves Symmetry", text: "Helps harmonize contour across both sides of the lip." } ] }, process: { title: "Treatment Process", subtitle: "Quick, comfortable and natural‑looking", steps: [ { title: "Initial Evaluation", text: "Analysis of natural lip contour and plan setting." }, { title: "Area Preparation", text: "Cleaning, disinfection and precise marking." }, { title: "Precise Application", text: "Strategic microinjections in the upper lip muscle." }, { title: "Care & Follow‑up", text: "Post‑treatment recommendations and results evaluation in days." } ] }, faq: { title: "Frequently Asked Questions", subtitle: "Common questions about Botox Lip Flip", items: [ { q: "How is it different from lip filler?", a: "Relaxes muscle to define the lip; fillers add volume." }, { q: "How long does it last?", a: "Usually 3–4 months; can be repeated to maintain results." }, { q: "Does it affect lip function?", a: "No; precise technique keeps normal function intact." } ] }, testimonials: { title: "What Our Patients Say", subtitle: "Real experiences with subtle, natural results", items: [ "\"Subtle, natural definition — loved the result from the first week.\"", "“Quick and comfortable procedure; exceeded expectations.”", "“Natural results without a filled look. Very satisfied.”" ] } },
    minilip: { hero_title: "Mini Lip Enhancement", hero_subtitle: "Subtle volume and natural definition using premium hyaluronic acid.", price_from_label: "Starting at", price_value: "$375", duration_label: "Duration: 30 min", breadcrumb_label: "Mini Lip Enhancement", details: { title: "Mini Lip Enhancement", p1: "Uses <strong>small doses of hyaluronic acid</strong> to achieve <strong>subtle volume</strong> and <strong>natural edge definition</strong>.", p2: "Ideal for a discreet, harmonious change while maintaining facial balance and expressiveness.", p3: "Immediate visible results that refine over days; typical duration is 6–9 months." }, benefits: { title: "Treatment Benefits", subtitle: "Key advantages of Mini Lip Enhancement", items: [ { title: "Natural Volume", text: "Discreet, balanced results without exaggeration." }, { title: "Deep Hydration", text: "Hyaluronic acid adds softness and hydration." }, { title: "Immediate Results", text: "Visible definition immediately and refined over days." }, { title: "Youthful Look", text: "Enhances contour and softens lines for a fresh look." }, { title: "High Precision", text: "Strategic points for symmetry and balance." }, { title: "Subtle Definition", text: "Enhances the lip border while keeping natural proportions." } ] }, process: { title: "Treatment Process", subtitle: "Safe, precise and with immediate results", steps: [ { title: "Initial Consultation", text: "Evaluation of lip contour and natural proportions." }, { title: "Area Preparation", text: "Cleaning, disinfection and precise marking." }, { title: "Precise Application", text: "Hyaluronic acid microinjections for subtle definition." }, { title: "Care & Follow‑up", text: "Post‑treatment recommendations and results evaluation." } ] }, faq: { title: "Frequently Asked Questions", subtitle: "Common questions about Mini Lip Enhancement", items: [ { q: "What’s the difference from full augmentation?", a: "Uses less product focused on subtle, natural definition." }, { q: "How long does it last?", a: "Typically 6–9 months, depending on metabolism and care." }, { q: "Is it painful?", a: "Minimal discomfort; topical anesthesia and precise technique." } ] }, testimonials: { title: "What Our Patients Say", subtitle: "Real experiences with subtle, natural results", items: [ "\"Natural definition and symmetry; loved the subtle change.\"", "“Very natural volume; quick and comfortable procedure.”", "“Looks natural and improved lip symmetry noticeably.”" ] } },
    fulllip: { hero_title: "Full Lip Augmentation", hero_subtitle: "Balanced, natural‑looking lip augmentation using hyaluronic acid for volume and contour.", price_from_label: "Starting at", price_value: "$650", duration_label: "Duration: 45 min", breadcrumb_label: "Full Lip Augmentation", details: { title: "Full Lip Augmentation", p1: "Uses <strong>hyaluronic acid</strong> to create <strong>balanced volume</strong>, <strong>edge definition</strong> and <strong>symmetry</strong>.", p2: "Designed for a refined, natural look that respects facial proportions and maintains expressiveness.", p3: "Visible immediately and optimizes over days; typical duration 9–12 months." }, benefits: { title: "Treatment Benefits", subtitle: "Key advantages of Full Lip Augmentation", items: [ { title: "Balanced Volume", text: "Refined fullness respecting natural proportions." }, { title: "Contour Definition", text: "Sharper borders with a natural finish." }, { title: "Longer Duration", text: "Typically 9–12 months with proper maintenance." }, { title: "Symmetry", text: "Improves balance between both sides of the lip." }, { title: "High Precision", text: "Strategic application for refined results." }, { title: "Natural Finish", text: "Maintains expressiveness and a soft look." } ] }, process: { title: "Treatment Process", subtitle: "Safe, precise application for natural results", steps: [ { title: "Initial Consultation", text: "Assessment of lip shape, proportions and goals." }, { title: "Area Preparation", text: "Cleaning, disinfection and precise marking." }, { title: "Precise Application", text: "Strategic hyaluronic acid microinjections for refined balance." }, { title: "Care & Follow‑up", text: "Post‑care recommendations and evaluation of results." } ] }, faq: { title: "Frequently Asked Questions", subtitle: "Common questions about Full Lip Augmentation", items: [ { q: "Difference from mini enhancement?", a: "Full augmentation targets comprehensive volume and contour change." }, { q: "How long does it last?", a: "Typically 9–12 months depending on metabolism and care." }, { q: "Is it painful?", a: "Minimal discomfort; topical anesthesia and precise technique." } ] }, testimonials: { title: "What Our Patients Say", subtitle: "Real experiences with refined, natural results", items: [ "\"Refined volume and symmetry; loved the natural look.\"", "“Very natural definition; procedure was quick and comfortable.”", "“Looks natural and improved lip contour significantly.”" ] } },
    megalip: { hero_title: "Mega Lip Augmentation", hero_subtitle: "Advanced lip augmentation with hyaluronic acid for significant volume, sculpted contour and symmetry.", price_from_label: "Starting at", price_value: "$850", duration_label: "Duration: 60 min", breadcrumb_label: "Mega Lip Augmentation", details: { title: "Mega Lip Augmentation", p1: "Leverages <strong>advanced hyaluronic acid techniques</strong> to achieve <strong>significant volume</strong>, <strong>sculpted borders</strong> and <strong>symmetry</strong> while keeping a natural finish.", p2: "Ideal for those seeking a fuller look with refined proportions that maintain facial harmony and expressiveness.", p3: "Immediate visibility, optimized over days; typical longevity ~12 months." }, benefits: { title: "Treatment Benefits", subtitle: "Core advantages of Mega Lip Augmentation", items: [ { title: "Significant Volume", text: "Fuller lips while maintaining a soft, natural look." }, { title: "Sculpted Contour", text: "Sharper, refined borders with a cohesive finish." }, { title: "Extended Longevity", text: "Around 12 months with appropriate maintenance." }, { title: "Symmetry & Balance", text: "Targets proportional harmony between both sides." }, { title: "High Precision", text: "Strategic application for consistent, refined results." }, { title: "Natural Aesthetics", text: "Preserves expressiveness with a polished outcome." } ] }, process: { title: "Treatment Process", subtitle: "Safe, precise application for refined, natural results", steps: [ { title: "Initial Consultation", text: "Assessment of lip shape, proportions and goals." }, { title: "Area Preparation", text: "Cleaning, disinfection and precise marking." }, { title: "Precise Application", text: "Strategic hyaluronic acid microinjections for refined balance." }, { title: "Care & Follow‑up", text: "Post‑care recommendations and evaluation of results." } ] }, faq: { title: "Frequently Asked Questions", subtitle: "Common questions about Mega Lip Augmentation", items: [ { q: "Difference from full augmentation?", a: "Mega augmentation achieves greater volume and contour refinements." }, { q: "How long does it last?", a: "Around ~12 months; varies by metabolism and aftercare." }, { q: "Is it painful?", a: "Minimal discomfort; topical anesthesia and precise technique." } ] }, testimonials: { title: "What Our Patients Say", subtitle: "Real experiences with fuller yet natural results", items: [ "\"Fuller but still natural; contour looks refined and symmetric.\"", "“Loved the enhanced shape with a soft finish; quick and comfortable.”", "“Significant volume with natural aesthetics; very satisfied.”" ] } },
    facialcontour: {
      category: "Facial Contouring",
      hero_title: "Personalized Facial Contour",
      hero_subtitle: "Custom plan to refine cheekbones, jawline and proportions for a balanced, natural look.",
      price_from_label: "Starting at",
      price_value: "$850",
      duration_label: "Duration: 60 min",
      breadcrumb_label: "Personalized Facial Contour",
      details: {
        title: "Personalized Facial Contour",
        p1: "A tailored plan that refines <strong>cheekbones</strong>, <strong>jawline</strong> and facial proportions to achieve a <strong>balanced, natural-looking contour</strong>.",
        p2: "Combines precise techniques to enhance definition and symmetry while respecting your unique features.",
        p3: "Visible from the first session, with optimal refinement over days."
      },
      benefits: {
        title: "Treatment Benefits",
        subtitle: "Core advantages of Personalized Facial Contouring",
        items: [
          { title: "Enhanced Cheekbones", text: "Refines cheek definition for a lifted, sculpted look." },
          { title: "Defined Jawline", text: "Sharper jaw contour for improved facial balance." },
          { title: "Natural Harmony", text: "Balances features for cohesive, elegant results." },
          { title: "Precision", text: "Strategic application tailored to your anatomy." },
          { title: "Symmetry", text: "Improves proportional balance across features." },
          { title: "Tailored Plan", text: "Customized approach for your goals and features." }
        ]
      },
      process: {
        title: "Treatment Process",
        subtitle: "Consultation, tailored plan and precise application",
        steps: [
          { title: "Initial Consultation", text: "Assessment of facial proportions and goals." },
          { title: "Tailored Plan", text: "Precise mapping and strategy to achieve your outcome." },
          { title: "Precise Application", text: "Strategic microinjections for refined contour." },
          { title: "Care & Follow‑up", text: "Post‑care and evaluation to optimize results." }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about Personalized Facial Contour",
        items: [
          { q: "How is the plan customized?", a: "We assess proportions and goals to tailor mapping and technique." },
          { q: "How long do results last?", a: "Visible immediately; refinement over days; longevity varies by technique." },
          { q: "Is it painful?", a: "Minimal discomfort; topical anesthesia and precise technique." }
        ]
      },
      testimonials: {
        title: "What Our Patients Say",
        subtitle: "Real experiences with refined, natural results",
        items: [
          "\"Refined cheek and jaw contour with a natural finish; very happy.\"",
        "“Balanced definition with natural harmony; quick and comfortable.”",
        "“Improved symmetry and contour while keeping a natural look.”"
        ]
      }
    },
    neurotoxins: {
      hero_title: "Neurotoxin Injections",
      hero_subtitle: "Neurotoxin treatment to soften dynamic wrinkles and prevent new expression lines, maintaining natural, harmonious results.",
      price_from_label: "Starting at",
      price_value: "$12 / unit",
      duration_label: "Duration: 30 min",
      breadcrumb_label: "Neurotoxin Injections",
      details: {
        title: "Neurotoxin Injections",
        p1: "<strong>Neurotoxin Injections</strong> effectively soften dynamic wrinkles and help prevent new lines of expression. They work by temporarily relaxing the muscles responsible for wrinkles.",
        p2: "Our specialists apply precise dosing to areas like forehead, frown lines and crow’s feet, achieving natural results without losing expressiveness.",
        p3: "A safe and quick procedure, ideal for non-invasive facial rejuvenation with consistent results."
      },
      benefits: {
        title: "Treatment Benefits",
        subtitle: "Key advantages of Neurotoxin Injections",
        item1: { title: "Reduces Dynamic Wrinkles", text: "Softens expression lines from repetitive movements for a younger look." },
        item2: { title: "Prevents New Lines", text: "Effective prevention to keep skin smoother for longer." },
        item3: { title: "Natural Results", text: "Maintains your expressiveness while softening unwanted lines." }
      },
      process: {
        title: "Treatment Process",
        subtitle: "A simple, professional process to achieve the best results",
        step1: { title: "Initial Consultation", text: "Assessment of treatment areas and aesthetic goals. The plan and dosing are defined." },
        step2: { title: "Area Preparation", text: "Cleaning, disinfection and precise marking of injection points." },
        step3: { title: "Neurotoxin Application", text: "Precise, quick injections into target muscles. A comfortable ~30-minute procedure." },
        step4: { title: "Post‑Treatment Care", text: "Care recommendations and follow-up. Results visible in 3–5 days; maximal at 2 weeks." }
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "We answer common questions about Neurotoxin Injections",
        q1: "What is neurotoxin and how does it work?",
        a1: "It temporarily blocks nerve signals in specific muscles, safely softening dynamic wrinkles.",
        q2: "How long do results last?",
        a2: "Usually 3–4 months, depending on area, dose and metabolism. Consistency can optimize duration.",
        q3: "Is it painful?",
        a3: "It’s well tolerated — feels like small pinpricks with fine needles and precise technique."
      },
      testimonials: {
        title: "What Our Patients Say",
        subtitle: "Real experiences with natural, consistent results",
        q1: "Natural results and a very professional process. Loved the care.",
        q2: "“I felt comfortable and the results were exactly what I wanted.”",
        q3: "“Excellent care and visible results from the first week.”"
      }
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = this.getInitialLanguage();
    this.init();
  }

  init() {
    // Aplicar idioma guardado al cargar la página
    this.applyTranslations(this.currentLang);
    // Persistir lenguaje inicial
    this.setStoredLanguage(this.currentLang);
    
    // Actualizar el selector de idioma
    this.updateLanguageSwitcher();
  }

  getStoredLanguage() {
    return localStorage.getItem('renasci-language');
  }

  getInitialLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'es') return urlLang;
    } catch {}
    const stored = this.getStoredLanguage();
    return stored === 'en' ? 'en' : 'es';
  }

  setStoredLanguage(lang) {
    localStorage.setItem('renasci-language', lang);
  }

  switchLanguage(newLang) {
    if (newLang === this.currentLang) return;
    
    this.currentLang = newLang;
    this.setStoredLanguage(newLang);
    this.applyTranslations(newLang);
    this.updateLanguageSwitcher();
    
    // Disparar evento personalizado para otros componentes
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: newLang } 
    }));
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  applyTranslations(lang) {
    const translations = dict[lang];
    if (!translations) return;

    // Buscar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      let translation = this.getNestedValue(translations, key);
      if (typeof translation === 'string') {
        translation = translation.replace(/\\“/g, '“').replace(/\\”/g, '”');
      }
      if (translation) {
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else {
          element.innerHTML = translation;
        }
      }
    });

    // Actualizar el título de la página si existe
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-i18n')) {
      const titleKey = titleElement.getAttribute('data-i18n');
      const titleTranslation = this.getNestedValue(translations, titleKey);
      if (titleTranslation) {
        titleElement.textContent = titleTranslation;
      }
    }

    // Actualizar el atributo lang del documento
    document.documentElement.lang = lang;
  }

  updateLanguageSwitcher() {
    // Actualizar el texto del botón del selector de idioma
    const currentLangButton = document.querySelector('.language-switcher-button');
    if (currentLangButton) {
      const flagSpan = currentLangButton.querySelector('.flag');
      const textSpan = currentLangButton.querySelector('.lang-text');
      
      if (this.currentLang === 'es') {
        if (flagSpan) flagSpan.textContent = '🇪🇸';
        if (textSpan) textSpan.textContent = 'ES';
      } else {
        if (flagSpan) flagSpan.textContent = '🇺🇸';
        if (textSpan) textSpan.textContent = 'EN';
      }
    }

    // Actualizar el estado activo en las opciones del dropdown
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === this.currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}

// Inicializar el gestor de idiomas cuando el DOM esté listo
let i18nManager;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    i18nManager = new I18nManager();
    window.i18nManager = i18nManager;
  });
  } else {
    i18nManager = new I18nManager();
    window.i18nManager = i18nManager;
  }
