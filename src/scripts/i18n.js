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
      }
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
      const translation = this.getNestedValue(translations, key);
      
      if (translation) {
        // Verificar si es un input placeholder
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else {
          element.textContent = translation;
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