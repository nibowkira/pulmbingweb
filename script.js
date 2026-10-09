/* ============================================================
   BlueDrop Plumbing — JavaScript
   Mobile nav, language switching, form validation, smooth scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Navigation ──────────────────────────────────
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  window.closeMobileNav = function () {
    if (mobileNav && mobileToggle) {
      mobileNav.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };


  // ── Smooth Scroll for Anchor Links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });


  // ── Active Nav Link on Scroll ──────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });


  // ── Header Shadow on Scroll ────────────────────────────
  const header = document.getElementById('header');
  function updateHeaderShadow() {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });


  // ── Form Validation ────────────────────────────────────
  const bookingForm = document.getElementById('booking-form');
  const confirmation = document.getElementById('form-confirmation');

  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      let isValid = true;

      // Required fields
      const requiredFields = [
        { id: 'full-name', group: 'group-name' },
        { id: 'phone', group: 'group-phone' },
        { id: 'area', group: 'group-area' },
        { id: 'service-type', group: 'group-service' },
      ];

      requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        const group = document.getElementById(field.group);
        if (!input.value.trim()) {
          group.classList.add('has-error');
          input.classList.add('error');
          isValid = false;
        } else {
          group.classList.remove('has-error');
          input.classList.remove('error');
        }
      });

      // Phone format — basic Ethiopian number check
      const phoneInput = document.getElementById('phone');
      const phoneGroup = document.getElementById('group-phone');
      if (phoneInput.value.trim()) {
        const phoneClean = phoneInput.value.replace(/[\s\-\(\)]/g, '');
        const validPhone = /^(\+?251|0)?9\d{8}$/.test(phoneClean);
        if (!validPhone) {
          phoneGroup.classList.add('has-error');
          phoneInput.classList.add('error');
          isValid = false;
        }
      }

      if (isValid) {
        // Show confirmation (no actual backend)
        bookingForm.style.display = 'none';
        bookingForm.previousElementSibling.style.display = 'none'; // subtitle
        const formTitle = bookingForm.closest('.booking-form-card').querySelector('h3');
        if (formTitle) formTitle.style.display = 'none';
        confirmation.classList.add('show');

        // Scroll to confirmation
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Clear error state on input change
    bookingForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group) {
          group.classList.remove('has-error');
          field.classList.remove('error');
        }
      });
      field.addEventListener('change', () => {
        const group = field.closest('.form-group');
        if (group) {
          group.classList.remove('has-error');
          field.classList.remove('error');
        }
      });
    });
  }

  // Set min date to today
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }


  // ── Language Switching (EN / AM) ───────────────────────
  const translations = {
    am: {
      // Hero
      hero_eyebrow: 'ሙያዊ የቧንቧ አገልግሎቶች',
      hero_heading: 'በአዲስ አበባ <span>ውስጥ</span> አስተማማኝ የቧንቧ አገልግሎት',
      hero_description: 'ከሚያፈሱ ቧንቧዎች እና ከተበላሹ ቧንቧዎች ጀምሮ እስከ ቧንቧ ማስገጠም ድረስ፣ BlueDrop Plumbing ቤቶችን እና ንግዶችን ይረዳል።',
      hero_cta: 'ቧንቧ ባለሙያ ይጠይቁ',
      hero_call: 'ይደውሉ',
      hero_badge: 'ሙያዊ ቧንቧ ባለሙያ <small>በአዲስ አበባ</small>',
      trust_1: 'ምላሽ ሰጪ <small>ግንኙነት</small>',
      trust_2: 'ልምድ ያላቸው <small>ባለሙያዎች</small>',
      trust_3: 'አዲስ አበባን <small>እናገለግላለን</small>',

      // Services
      services_eyebrow: 'የእኛ ልምድ',
      services_heading: 'ሙያዊ የቧንቧ መፍትሄዎች',
      services_description: 'ለቤቶች እና ንግዶች ተግባራዊ የቧንቧ አገልግሎቶች።',
      svc_leak_title: 'የመፍሰስ ጥገና',
      svc_leak_desc: 'የሚያፈሱ ቧንቧዎችን፣ መገጣጠሚያዎችን እና ማያያዣዎችን በፍጥነት ማግኘት እና መጠገን።',
      svc_pipe_title: 'የቧንቧ ጥገና እና ማስገጠም',
      svc_pipe_desc: 'PPR፣ PVC እና የመዳብ ቁሳቁሶችን በመጠቀም ሙያዊ የቧንቧ ማስገጠም እና መቀየር።',
      svc_tap_title: 'የቧንቧ መክፈቻ እና ቫልቭ ጥገና',
      svc_tap_desc: 'የሚንጠባጠቡ ቧንቧ መክፈቻዎችን ማስተካከል፣ የተበላሹ ቫልቮችን መቀየር እና አዳዲስ መክፈቻዎችን ማስገጠም።',
      svc_drain_title: 'የተዘጉ ቧንቧ መፍትሄዎች',
      svc_drain_desc: 'ሙያዊ መሳሪያዎችን እና ቴክኒኮችን በመጠቀም የተዘጉ ቧንቧዎችን ማጽዳት።',
      svc_toilet_title: 'ሽንት ቤት፣ ማጠቢያ እና ሻወር ማስገጠም',
      svc_toilet_desc: 'ሙያዊ ማስገጠም እና የሽንት ቤቶች፣ ማጠቢያዎች እና ሻወሮች ጥገና።',
      svc_heater_title: 'የውሃ ማሞቂያ አገልግሎት',
      svc_heater_desc: 'የኤሌክትሪክ ውሃ ማሞቂያዎችን እና ጋይዘር ሲስተሞችን ማስገጠም፣ ጥገና እና ማስተካከል።',
      learn_more: 'ተጨማሪ <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',

      // How It Works
      how_eyebrow: 'እንዴት ይሠራል',
      how_heading: 'እርዳታ ማግኘት ቀላል ነው',
      how_description: 'ሙያዊ የቧንቧ ድጋፍ ለማግኘት አራት ቀላል ደረጃዎች።',
      step_1_title: 'ያግኙን',
      step_1_desc: 'በስልክ፣ WhatsApp ወይም Telegram ይደውሉ ወይም ያስተላልፉ።',
      step_2_title: 'ችግሩን ይግለጹ',
      step_2_desc: 'ስለ ቧንቧ ችግርዎ እና በአዲስ አበባ ውስጥ ስለ ቦታዎ ይንገሩን።',
      step_3_title: 'ግምት ያግኙ',
      step_3_desc: 'ስራ ከመጀመሩ በፊት የሚጠበቀውን የጉልበት እና የቁሳቁስ ወጪ ይወያዩ።',
      step_4_title: 'አገልግሎቱን ያስይዙ',
      step_4_desc: 'ለባለሙያ ጉብኝት ተስማሚ የቀጠሮ ጊዜ ያረጋግጡ።',

      // About
      about_eyebrow: 'ስለ እኛ',
      about_heading: 'የእርስዎ ታማኝ የቧንቧ አጋር',
      about_description: 'BlueDrop Plumbing በአዲስ አበባ ያሉ ደንበኞችን ለቤቶች እና ንግዶች ከቧንቧ ድጋፍ ጋር ያገናኛል። ግልጽ ግንኙነት፣ ግልጽ ግምቶች እና ታማኝ አገልግሎት ሂደቱን ቀላል ለማድረግ እንጥራለን።',
      value_1_title: 'ግልጽ ግምቶች',
      value_1_desc: 'ማንኛውም ስራ ከመጀመሩ በፊት የሚጠበቁ ወጪዎችን በግልጽ እንወያያለን።',
      value_2_title: 'ሙያዊ አገልግሎት',
      value_2_desc: 'ባለሙያዎቻችን ለስራው ትክክለኛ መሳሪያዎች እና እውቀት ይዘው ይመጣሉ።',
      value_3_title: 'ደንበኛ ተኮር ድጋፍ',
      value_3_desc: 'ግልጽ ግንኙነት እና ለእያንዳንዱ ጥያቄ ወቅታዊ ምላሾችን ቅድሚያ እንሰጣለን።',

      // Service Area
      area_heading: 'አዲስ አበባ፣ ኢትዮጵያን እናገለግላለን',
      area_description: 'በአዲስ አበባ ለቤትዎ ወይም ለንግድዎ የቧንቧ አገልግሎቶችን ለማስተካከል BlueDrop Plumbing ያግኙ።',

      // CTA
      cta_heading: 'ቧንቧ ባለሙያ ያስፈልግዎታል?',
      cta_description: 'ምን መጠገን እንዳለበት ይንገሩን፣ እና ቀጣዩን ደረጃ ለመወያየት ቡድናችንን ያግኙ።',
      cta_call: 'ይደውሉ',
      cta_whatsapp: 'WhatsApp',
      cta_telegram: 'Telegram',

      // Booking
      booking_eyebrow: 'ያግኙን',
      booking_heading: 'የቧንቧ ድጋፍ ይጠይቁ',
      booking_description: 'ስለ ቧንቧ ፍላጎቶችዎ ለመወያየት ቅጹን ይሙሉ ወይም በስልክ፣ WhatsApp ወይም Telegram ያግኙን።',
      form_title: 'ቧንቧ ባለሙያ ይጠይቁ',
      form_subtitle: 'ከዚህ በታች ያሉትን ዝርዝሮች ይሙሉ እና ቡድናችን ይመለሳል።',
      form_name: 'ሙሉ ስም',
      form_phone: 'ስልክ ቁጥር',
      form_area: 'በአዲስ አበባ ውስጥ ያለ ቦታ',
      form_service: 'የአገልግሎት ዓይነት',
      form_description: 'የችግሩ ገለጻ',
      form_date: 'ተመራጭ ቀን',
      form_time: 'ተመራጭ ሰዓት',
      form_submit: 'ቧንቧ ባለሙያ ይጠይቁ',
      form_note: 'ይህ ቅጽ ቦታ ማስያዝ አያረጋግጥም። ቡድናችን ዝርዝሮቹን ለመወያየት እና ለማረጋገጥ ያገኝዎታል።',
      form_name_error: 'እባክዎ ሙሉ ስምዎን ያስገቡ።',
      form_phone_error: 'እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።',
      form_area_error: 'እባክዎ ቦታዎን ይምረጡ።',
      form_area_placeholder: 'ቦታዎን ይምረጡ',
      form_service_error: 'እባክዎ የአገልግሎት ዓይነት ይምረጡ።',
      form_service_placeholder: 'አገልግሎት ይምረጡ',
      form_time_placeholder: 'ሰዓት ይምረጡ',
      opt_leak: 'የመፍሰስ ጥገና',
      opt_pipe: 'የቧንቧ ጥገና እና ማስገጠም',
      opt_tap: 'የቧንቧ መክፈቻ እና ቫልቭ ጥገና',
      opt_drain: 'የተዘጋ ቧንቧ',
      opt_fixture: 'ሽንት ቤት፣ ማጠቢያ እና ሻወር',
      opt_heater: 'ውሃ ማሞቂያ',
      opt_other: 'ሌላ',
      opt_morning: 'ጧት (8 ሰዓት – 12 ሰዓት)',
      opt_afternoon: 'ከሰዓት (12 ሰዓት – 5 ሰዓት)',
      opt_flexible: 'ተለዋዋጭ',
      confirm_title: 'ጥያቄ ቀርቧል',
      confirm_desc: 'አመሰግናለሁ! ጥያቄዎ ተመዝግቧል። ቡድናችን ዝርዝሮቹን ለመወያየት እና ቀጠሮዎን ለማረጋገጥ ያገኝዎታል።',

      // Contact Methods
      contact_phone: 'ይደውሉ <small>+251 911 000 000</small>',
      contact_whatsapp: 'WhatsApp <small>+251 911 000 000</small>',
      contact_telegram: 'Telegram <small>@BluedropPlumbing</small>',

      // Footer
      footer_about: 'በአዲስ አበባ ኢትዮጵያ ለቤቶች እና ንግዶች ሙያዊ የቧንቧ አገልግሎቶች።',
      footer_nav: 'ዳሰሳ',
      nav_home: 'ዋና ገጽ',
      nav_services: 'አገልግሎቶች',
      nav_about: 'ስለ እኛ',
      nav_areas: 'የአገልግሎት ቦታዎች',
      nav_contact: 'ያግኙን',
      footer_services: 'አገልግሎቶች',
      footer_contact: 'አግኙን',
      footer_location: 'አዲስ አበባ፣ ኢትዮጵያ',
      footer_privacy: 'የግል ፖሊሲ',
      footer_terms: 'የአገልግሎት ውሎች',
    }
  };

  // Store English defaults
  const englishDefaults = {};

  function captureEnglishDefaults() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!englishDefaults[key]) {
        englishDefaults[key] = el.innerHTML;
      }
    });
  }

  captureEnglishDefaults();

  let currentLang = 'en';

  function switchLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang === 'am' && translations.am[key]) {
        el.innerHTML = translations.am[key];
      } else if (lang === 'en' && englishDefaults[key]) {
        el.innerHTML = englishDefaults[key];
      }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang === 'am' ? 'am' : 'en');

    // Update all language switch buttons
    document.querySelectorAll('.lang-switch button, .footer-lang button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });
  }

  // Attach click handlers to all language buttons
  document.querySelectorAll('.lang-switch button, .footer-lang button').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });


  // ── Intersection Observer for Fade-in ──────────────────
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply subtle fade-in to section content
  document.querySelectorAll('.service-card, .step-card, .value-item, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
  });

  // Stagger service cards
  document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });

  document.querySelectorAll('.step-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 100}ms`;
  });

  document.querySelectorAll('.value-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 100}ms`;
  });

});
