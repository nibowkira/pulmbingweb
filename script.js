/* ============================================================
   ABAY Plumbing & Supplies — JavaScript
   - Single Centralized Business Contact Configuration
   - Default Language: English (with Amharic switcher)
   - Dynamic Copyright Year
   - Accessible Mobile Navigation Drawer
   - Service-to-Form Pre-selection
   - Ethiopian Phone Validation & Form Handling
   - Back to Top Control
   ============================================================ */

// ── 1. Centralized Business Contact Configuration ───────────
const BUSINESS_CONFIG = {
  phone: '0975 753 773',                // Official business phone
  phoneTel: '+251975753773',            // Dialable format
  whatsapp: '+251 975 753 773',         // WhatsApp business line
  whatsappLink: 'https://wa.me/251975753773',
  telegram: null,                       // Telegram handle (optional)
  email: 'abayplumbing.addis@gmail.com', // Official business email
  formEndpoint: null                    // Form submission endpoint (Formspree or internal API)
};

document.addEventListener('DOMContentLoaded', () => {

  // ── 2. Dynamic Copyright Year ─────────────────────────────
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  // ── 3. Populate Contact Cards with Config ─────────────────
  function setupContactCards() {
    const phoneEl = document.getElementById('contact-phone-val');
    const waEl = document.getElementById('contact-whatsapp-val');
    const tgEl = document.getElementById('contact-telegram-val');
    const emailEl = document.getElementById('contact-email-val');

    if (phoneEl) {
      if (BUSINESS_CONFIG.phone) {
        phoneEl.textContent = BUSINESS_CONFIG.phone;
        const card = phoneEl.closest('.contact-card');
        card.classList.add('configured');
        const badge = card.querySelector('.contact-card-badge');
        if (badge) badge.textContent = 'Call Now';
        card.setAttribute('href', 'tel:' + (BUSINESS_CONFIG.phoneTel || BUSINESS_CONFIG.phone.replace(/[^\d+]/g, '')));
      } else {
        phoneEl.textContent = '[Phone number pending launch]';
        phoneEl.closest('a').removeAttribute('href');
      }
    }

    if (waEl) {
      if (BUSINESS_CONFIG.whatsapp) {
        waEl.textContent = BUSINESS_CONFIG.whatsapp;
        const card = waEl.closest('.contact-card');
        card.classList.add('configured');
        const badge = card.querySelector('.contact-card-badge');
        if (badge) badge.textContent = 'Chat on WhatsApp';
        card.setAttribute('href', BUSINESS_CONFIG.whatsappLink || ('https://wa.me/' + BUSINESS_CONFIG.whatsapp.replace(/[^\d]/g, '')));
      } else {
        waEl.textContent = '[WhatsApp channel pending launch]';
        waEl.closest('a').removeAttribute('href');
      }
    }

    if (tgEl) {
      if (BUSINESS_CONFIG.telegram) {
        tgEl.textContent = BUSINESS_CONFIG.telegram;
        tgEl.closest('.contact-card').classList.add('configured');
        tgEl.closest('a').href = BUSINESS_CONFIG.telegram;
      } else {
        tgEl.textContent = '[Telegram channel pending launch]';
        tgEl.closest('a').removeAttribute('href');
      }
    }

    if (emailEl) {
      if (BUSINESS_CONFIG.email) {
        emailEl.textContent = BUSINESS_CONFIG.email;
        const card = emailEl.closest('.contact-card');
        card.classList.add('configured');
        const badge = card.querySelector('.contact-card-badge');
        if (badge) badge.textContent = 'Send Email';
        card.setAttribute('href', 'mailto:' + BUSINESS_CONFIG.email);
      } else {
        emailEl.textContent = '[Email address pending launch]';
        emailEl.closest('a').removeAttribute('href');
      }
    }
  }

  setupContactCards();


  // ── 4. Translations Dictionary ────────────────────────────
  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_services: "Services",
      nav_supplies: "Plumbing Supplies",
      nav_about: "About Us",
      nav_areas: "Service Areas",
      nav_contact: "Contact",
      btn_request: "Request a Plumber",

      // Brand
      brand_wordmark: "ABAY",
      brand_sub: "PLUMBING & SUPPLIES",
      brand_tagline: "Reliable Water. Reliable Service.",

      // Hero
      hero_eyebrow: "PROFESSIONAL PLUMBING SERVICES IN ADDIS ABABA",
      hero_title: "Reliable Plumbing Services Across Addis Ababa",
      hero_desc: "From leaking pipes and faulty taps to plumbing installations, contact ABAY Plumbing & Supplies to arrange plumbing service for your home or business.",
      hero_cta_primary: "Request a Plumber",
      hero_cta_secondary: "Explore Our Services",

      // Trust points
      trust_1_title: "Clear Estimates",
      trust_1_sub: "Discussed openly before work",
      trust_2_title: "Local Service",
      trust_2_sub: "Serving Addis Ababa",
      trust_3_title: "Responsive Communication",
      trust_3_sub: "Direct phone & messaging",

      // Services
      services_heading: "Plumbing Services You Can Rely On",
      services_intro: "Explore plumbing repair, maintenance, and installation services for homes and businesses across Addis Ababa.",
      svc_request_link: "Request Service",

      svc_1_title: "Leak Detection and Repair",
      svc_1_desc: "Locating and resolving water leaks in pipes, joints, and hidden connections before damage occurs.",

      svc_2_title: "Pipe Repair and Installation",
      svc_2_desc: "Installation, replacement, and repair of PPR, PVC, and metal pipe systems for water supply and drainage.",

      svc_3_title: "Tap and Faucet Repair",
      svc_3_desc: "Fixing dripping faucets, replacing worn stopcocks, valves, and installing modern kitchen and bathroom mixers.",

      svc_4_title: "Blocked Drain Assistance",
      svc_4_desc: "Unblocking stopped sinks, showers, floor traps, and drainage lines using dedicated diagnostic tools.",

      svc_5_title: "Toilet, Sink, and Shower Installation",
      svc_5_desc: "Professional assembly and connection of sanitary ware, toilets, washbasins, and shower mixers.",

      svc_6_title: "Plumbing Fixture Replacement",
      svc_6_desc: "Upgrading outdated or damaged plumbing fixtures, valves, traps, and fittings with reliable replacements.",

      svc_7_title: "Water Supply and Pipe Connections",
      svc_7_desc: "Connecting water tanks, pressure systems, and interior water lines for residential and commercial spaces.",

      svc_8_title: "Water Heater Installation & Repair",
      svc_8_desc: "Electrical boiler and water heater connection checks, valve replacements, and installation upon assessment.",

      // How it works
      how_heading: "How It Works",
      how_intro: "A straightforward, transparent process for arranging plumbing support.",
      step_1_num: "01",
      step_1_title: "Tell Us the Problem",
      step_1_desc: "Describe the plumbing issue and provide your location in Addis Ababa.",

      step_2_num: "02",
      step_2_title: "Discuss the Service",
      step_2_desc: "The team reviews the request and contacts the customer to discuss the next steps and any applicable costs.",

      step_3_num: "03",
      step_3_title: "Arrange the Work",
      step_3_desc: "Agree on the service details and appointment before the work begins.",

      // Supplies
      supplies_heading: "Plumbing Supplies for Your Next Project",
      supplies_intro: "A dedicated section for plumbing materials, fixtures, and accessories for household and commercial plumbing needs.",
      supplies_badge: "Supplies Division • Category Overview",
      supplies_banner_title: "Plumbing Materials & Fittings",
      supplies_banner_desc: "ABAY is organizing a selection of quality PPR pipes, brass valves, sanitary hardware, and connectors for contractors and property owners.",
      supplies_banner_btn: "Inquire About Supplies",

      cat_1_title: "Pipes and Fittings",
      cat_1_desc: "PPR, PVC, and galvanized water supply and drainage pipes with connectors.",
      cat_2_title: "Taps and Faucets",
      cat_2_desc: "Kitchen basin taps, bathroom mixers, gate valves, and bibcocks.",
      cat_3_title: "Valves and Connectors",
      cat_3_desc: "Ball valves, non-return check valves, flexible hoses, and Teflon tape.",
      cat_4_title: "Bathroom Fixtures",
      cat_4_desc: "Washbasins, toilet cistern mechanisms, siphon traps, and shower heads.",
      cat_5_title: "Plumbing Tools and Accessories",
      cat_5_desc: "Pipe cutters, PPR fusion welding accessories, gaskets, and seals.",
      cat_status: "Ask About Supplies",

      // About
      about_heading: "Your Local Plumbing Service in Addis Ababa",
      about_copy: "ABAY Plumbing & Supplies is focused on helping homes and businesses in Addis Ababa with plumbing repairs, installations, and plumbing supply inquiries. Our goal is to make requesting plumbing assistance straightforward through clear communication, practical service information, and an easy contact process.",

      // Service Area
      area_heading: "Serving Addis Ababa",
      area_badge: "Addis Ababa, Ethiopia",
      area_copy: "Need plumbing assistance at your home, office, shop, or commercial property? Contact ABAY Plumbing & Supplies to discuss your needs anywhere in Addis Ababa.",

      // Booking Form
      booking_heading: "Request a Plumber",
      booking_intro: "Tell us a little about your plumbing issue, and we can discuss the next steps with you.",

      form_name_label: "Full Name",
      form_name_placeholder: "Enter your full name",
      form_name_error: "Please enter your full name.",

      form_phone_label: "Phone Number",
      form_phone_placeholder: "e.g. 0911000000 or +251 9...",
      form_phone_error: "Please enter a valid Ethiopian phone number (e.g. 0911000000).",

      form_pref_label: "Preferred Contact Method",
      pref_phone: "Phone Call",
      pref_whatsapp: "WhatsApp",
      pref_telegram: "Telegram",

      form_service_label: "Service Required",
      form_service_placeholder: "Select required service",
      form_service_error: "Please select a service type.",

      form_area_label: "Location / Neighborhood in Addis Ababa",
      form_area_placeholder: "e.g. Bole, Kazanchis, Piassa, CMC...",
      form_area_error: "Please provide your neighborhood in Addis Ababa.",

      form_desc_label: "Description of the Problem",
      form_desc_placeholder: "Briefly describe the plumbing issue (e.g., leaking pipe under sink, water pressure drop...)",

      form_date_label: "Preferred Appointment Date (Optional)",

      form_btn_submit: "Send Service Request",
      form_dev_note: "Notice: This form records service inquiries. In production, configure an active submission endpoint (e.g. email or API) before launch.",

      // Demo/Feedback
      demo_feedback_title: "Service Request Ready (Demo Mode)",
      demo_feedback_p: "Thank you! Form fields were successfully validated. Because this website is currently in pre-launch mode without a live email/API backend configured, this request was saved locally. Connect your form endpoint in script.js before going live.",
      demo_feedback_btn: "Submit Another Request",

      // Footer
      footer_about: "Professional plumbing services and practical plumbing materials for homes, apartments, and businesses throughout Addis Ababa.",
      footer_nav_heading: "Navigation",
      footer_services_heading: "Services",
      footer_notice_heading: "Launch Verification",
      footer_notice_text: "Contact phone, messaging channels, and booking submission endpoints will be activated upon launch verification.",
      footer_privacy: "Privacy Notice",
      footer_terms: "Terms of Service"
    },

    am: {
      // Navigation
      nav_home: "መነሻ",
      nav_services: "አገልግሎቶች",
      nav_supplies: "የቧንቧ እቃዎች",
      nav_about: "ስለ አባይ",
      nav_areas: "የአገልግሎት ክልል",
      nav_contact: "ያግኙን",
      btn_request: "ቧንቧ ባለሙያ ይጠይቁ",

      // Brand
      brand_wordmark: "አባይ",
      brand_sub: "ቧንቧ እና እቃዎች",
      brand_tagline: "አስተማማኝ ውሃ። አስተማማኝ አገልግሎት።",

      // Hero
      hero_eyebrow: "በአዲስ አበባ ሙያዊ የቧንቧ አገልግሎት",
      hero_title: "በአዲስ አበባ አስተማማኝ የቧንቧ አገልግሎት",
      hero_desc: "ከተበላሹ እና ከሚፈሱ ቧንቧዎች ጀምሮ እስከ አዳዲስ ዝርጋታዎች ድረስ ለመኖሪያ ቤትዎ ወይም ለንግድ ተቋምዎ የቧንቧ ባለሙያ ለማግኘት አባይን ያነጋግሩ።",
      hero_cta_primary: "ቧንቧ ባለሙያ ይጠይቁ",
      hero_cta_secondary: "አገልግሎቶቻችንን ይመልከቱ",

      // Trust points
      trust_1_title: "ግልጽ የዋጋ ግምት",
      trust_1_sub: "ስራው ከመጀመሩ በፊት የሚነገር",
      trust_2_title: "የአካባቢ አገልግሎት",
      trust_2_sub: "መላው አዲስ አበባን ያገለግላል",
      trust_3_title: "ቀጥተኛ ግንኙነት",
      trust_3_sub: "በስልክ እና በመልዕክት",

      // Services
      services_heading: "የሚተማመኑባቸው የቧንቧ አገልግሎቶች",
      services_intro: "በአዲስ አበባ ለመኖሪያ ቤቶችና ንግድ ተቋማት የሚሰጡ የተሟሉ የጥገና እና የዝርጋታ ስራዎችን ይመልከቱ።",
      svc_request_link: "አገልግሎት ይጠይቁ",

      svc_1_title: "የውሃ ፍሳሽ ጥገና",
      svc_1_desc: "የውሃ ብክነትን እና ጉዳትን ለመከላከል በቧንቧዎችና በመጋጠሚያዎች ላይ ያሉ ፍሳሾችን መለየትና መጠገን።",

      svc_2_title: "የቧንቧ ጥገና እና ዝርጋታ",
      svc_2_desc: "በPPR፣ PVC እና በብረት ቧንቧዎች ደረጃቸውን የጠበቁ አዳዲስ መስመሮችን መዘርጋት እና ያረጁትን መቀየር።",

      svc_3_title: "የቧንቧ እና ቫልቭ ጥገና",
      svc_3_desc: "የሚንጠባጠቡ ቧንቧዎችን፣ ያረጁ ቫልቮችን እና የውሃ ማቀላቀያዎችን (Mixers) የመጠገንና የመቀየር ስራ።",

      svc_4_title: "የተደፈኑ ፍሳሽ ማስወገጃዎች",
      svc_4_desc: "የተደፈኑ የሰንክ፣ የሻወር እና የወለል ፍሳሽ ማስወገጃ ቧንቧዎችን በዘመናዊ እቃዎች ሙሉ በሙሉ ማጽዳት።",

      svc_5_title: "የሽንት ቤት፣ ሰንክ እና ሻወር ገጠማ",
      svc_5_desc: "የሽንት ቤት ገንዳዎች፣ የእጅ መታጠቢያ ሰንኮች እና የመታጠቢያ ቤት እቃዎችን በጥራት መግጠም።",

      svc_6_title: "የቧንቧ መለዋወጫዎች ቅያሬ",
      svc_6_desc: "ያረጁ ወይም የተበላሹ የውሃ መቆጣጠሪያዎችን፣ ትራፖችን እና መጋጠሚያዎችን በአስተማማኝ ሁኔታ መቀየር።",

      svc_7_title: "የውሃ አቅርቦት እና ማገናኘት",
      svc_7_desc: "የውሃ ታንከሮችን፣ የፕሬሸር ሲስተሞችን እና ዋና የውሃ መስመሮችን የማገናኘት ስራ።",

      svc_8_title: "የውሃ ማሞቂያ (ቦይለር) ጥገና",
      svc_8_desc: "የኤሌክትሪክ ውሃ ማሞቂያ መስመሮችን ማስተካከል እና የቦይለር ገጠማ አገልግሎት (በቅድመ ግምገማ)።",

      // How it works
      how_heading: "አሰራራችን",
      how_intro: "የቧንቧ ባለሙያ ድጋፍ ለማግኘት ቀላል እና ግልጽ ሂደት።",
      step_1_num: "01",
      step_1_title: "ችግሩን ይግለጹ",
      step_1_desc: "ያጋጠመዎትን የቧንቧ ብልሽት እና ያሉበትን የአዲስ አበባ አካባቢ ይንገሩን።",

      step_2_num: "02",
      step_2_title: "ስለ ስራው ይወያዩ",
      step_2_desc: "ቡድናችን ጥያቄዎን ተመልክቶ ስለ ቀጣይ እርምጃዎች እና የሚጠበቀው ወጪ ያነጋግርዎታል።",

      step_3_num: "03",
      step_3_title: "ስራውን ያከናውኑ",
      step_3_desc: "ስራው ከመጀመሩ በፊት በዝርዝሩ እና በቀጠሮው ሰዓት ላይ ይስማሙ።",

      // Supplies
      supplies_heading: "ለማንኛውም ስራ የሚያስፈልጉ የቧንቧ እቃዎች",
      supplies_intro: "ለመኖሪያ ቤቶች እና ለግንባታ ፕሮጀክቶች የሚያስፈልጉ የቧንቧ መለዋወጫዎች እና እቃዎች ማስተዋወቂያ ክፍል፦",
      supplies_badge: "የእቃዎች ክፍል • ዝርዝር መረጃ",
      supplies_banner_title: "ጥራት ያላቸው የቧንቧ እቃዎች",
      supplies_banner_desc: "አባይ ጥራት ያላቸውን የPPR ቧንቧዎች፣ ቫልቮች፣ ማያያዣዎች እና የመታጠቢያ ቤት እቃዎችን ለደንበኞች ለማቅረብ እየሰራ ይገኛል።",
      supplies_banner_btn: "ስለ እቃዎች ይጠይቁ",

      cat_1_title: "ቧንቧዎችና ማገናኛዎች",
      cat_1_desc: "PPR፣ PVC እና የብረት ቧንቧዎች ከሙሉ ማገናኛ ፊቲንጎች ጋር።",
      cat_2_title: "የውሃ ቧንቧዎችና ቫልቮች",
      cat_2_desc: "የኪችንና ባዝሩም ሚክሰሮች፣ የበር ቫልቮች (Gate Valves) እና ስቶፕ ኮኮች።",
      cat_3_title: "ቫልቮችና ማያያዣዎች",
      cat_3_desc: "ቴፍሎን ቴፕ፣ ፍሌክሲብል ቱቦዎች፣ ዩኒየኖች እና ማሸጊያዎች።",
      cat_4_title: "የንጽህና መጠበቂያ እቃዎች",
      cat_4_desc: "የእጅ መታጠቢያ ሰንኮች፣ የሽንት ቤት መለዋወጫዎች እና የሻወር ጭንቅላቶች።",
      cat_5_title: "የቧንቧ መገልገያ መሳሪያዎች",
      cat_5_desc: "የPPR ማሞቂያ ማሽኖች መለዋወጫ፣ ቧንቧ መቁረጫዎች እና ጋስኬቶች።",
      cat_status: "ስለ እቃዎች ይጠይቁ",

      // About
      about_heading: "የአካባቢዎ አስተማማኝ የቧንቧ አገልግሎት",
      about_copy: "አባይ ቧንቧ እና እቃዎች (ABAY Plumbing & Supplies) በአዲስ አበባ ከተማ ውስጥ ለሚገኙ መኖሪያ ቤቶችና ንግድ ተቋማት የቧንቧ አገልግሎቶችን እና አስፈላጊ የቧንቧ እቃዎችን በቀላሉ ተደራሽ ለማድረግ ይሰራል። ትኩረታችን በግልጽ ግንኙነት፣ በታማኝ የዋጋ ግምት እና አስተማማኝ አገልግሎት ላይ ነው።",

      // Service Area
      area_heading: "አዲስ አበባን እናገለግላለን",
      area_badge: "አዲስ አበባ፣ ኢትዮጵያ",
      area_copy: "በመኖሪያ ቤትዎ፣ በቢሮዎ፣ በሱቅዎ ወይም በንግድ ተቋምዎ የቧንቧ ስራ ይፈልጋሉ? በአዲስ አበባ ውስጥ በማንኛውም አካባቢ አባይን ያነጋግሩ።",

      // Booking Form
      booking_heading: "ቧንቧ ባለሙያ ይጠይቁ",
      booking_intro: "ያጋጠመዎትን የቧንቧ ችግር ይንገሩን፤ ቀጣዩን እርምጃ አብረን እንወያያለን።",

      form_name_label: "ሙሉ ስም",
      form_name_placeholder: "ስምዎትን ያስገቡ",
      form_name_error: "እባክዎ ሙሉ ስምዎን ያስገቡ።",

      form_phone_label: "ስልክ ቁጥር",
      form_phone_placeholder: "ለምሳሌ 0911000000 ወይም +251 9...",
      form_phone_error: "ትክክለኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ (ለምሳሌ 0911000000)።",

      form_pref_label: "የሚመርጡት የመገናኛ መንገድ",
      pref_phone: "በስልክ ጥሪ",
      pref_whatsapp: "በWhatsApp",
      pref_telegram: "በTelegram",

      form_service_label: "የሚፈልጉት አገልግሎት",
      form_service_placeholder: "አገልግሎት ይምረጡ",
      form_service_error: "እባክዎ የሚፈልጉትን አገልግሎት ይምረጡ።",

      form_area_label: "አካባቢ / ሰፈር (በአዲስ አበባ ውስጥ)",
      form_area_placeholder: "ለምሳሌ፡ ቦሌ፣ ካዛንቺስ፣ ፒያሳ፣ ሲኤምሲ...",
      form_area_error: "እባክዎ ያሉበትን አካባቢ ያስገቡ።",

      form_desc_label: "የችግሩ ዝርዝር መግለጫ",
      form_desc_placeholder: "ያጋጠመዎትን ችግር ባጭሩ ይግለጹ (ለምሳሌ፡ በሰንክ ስር ቧንቧ ይፈሳል...)",

      form_date_label: "የሚመርጡት የቀጠሮ ቀን (አማራጭ)",

      form_btn_submit: "ጥያቄዎን ይላኩ",
      form_dev_note: "ማስታወሻ፦ ይህ ቅጽ ጥያቄዎትን ለመመዝገብ ያገለግላል። ድረ-ገጹ ይፋ ከመሆኑ በፊት የቀጥታ የኢሜይል ወይም ኤፒአይ አገናኝ ይዋቀራል።",

      // Demo/Feedback
      demo_feedback_title: "ጥያቄዎ ተመዝግቧል (የሙከራ ሁነታ)",
      demo_feedback_p: "እናመሰግናለን! ያስገቧቸው መረጃዎች በሙሉ በትክክል ተረጋግጠዋል። ድረ-ገጹ ከመጀመሩ በፊት የመረጃ መቀበያ መስመሩ እስኪገናኝ ድረስ ይህ ጥያቄ በጊዜያዊነት ተመዝግቧል።",
      demo_feedback_btn: "ሌላ ጥያቄ ያስገቡ",

      // Footer
      footer_about: "በአዲስ አበባ ከተማ አስተማማኝ የቧንቧ አገልግሎት እና ጥራት ያላቸው የቧንቧ እቃዎች መረጃ አቅራቢ።",
      footer_nav_heading: "ፈጣን አገናኞች",
      footer_services_heading: "አገልግሎቶች",
      footer_notice_heading: "የመረጃ ዝግጅት",
      footer_notice_text: "ይፋዊ የስልክ እና የመልዕክት አድራሻዎች ድረ-ገጹ ከመከፈቱ በፊት ይረጋገጣሉ።",
      footer_privacy: "የግላዊነት ማስታወሻ",
      footer_terms: "የአገልግሎት ደንቦች"
    }
  };


  // ── 5. Language Switcher (Default: English) ───────────────
  let currentLang = localStorage.getItem('abay_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('abay_lang', lang);
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);

    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update active class on switch buttons
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && (targetLang === 'en' || targetLang === 'am')) {
        applyLanguage(targetLang);
      }
    });
  });

  applyLanguage(currentLang);


  // ── 6. Mobile Navigation Drawer ───────────────────────────
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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


  // ── 7. Smooth Navigation Links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 74;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });


  // ── 8. Service Card "Request Service" Dropdown Pre-selection
  document.querySelectorAll('.service-request-link').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const serviceVal = btn.getAttribute('data-service');
      const serviceSelect = document.getElementById('service-type');
      if (serviceSelect && serviceVal) {
        serviceSelect.value = serviceVal;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 74;
        const targetPos = bookingSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('fullname')?.focus();
        }, 400);
      }
    });
  });


  // ── 9. Active Nav Highlight & Header Shadow ────────────────
  const siteHeader = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    if (siteHeader) {
      if (scrollY > 15) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    const scrollPos = scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
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

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ── 10. Ethiopian Phone Validation Helper ──────────────────
  function isValidEthiopianPhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    // Accepts +251 9/7..., 09/07..., 9/7...
    const ethiopianPhoneRegex = /^(\+251[79]\d{8}|0[79]\d{8}|[79]\d{8})$/;
    return ethiopianPhoneRegex.test(cleaned);
  }


  // ── 11. Request Form Validation & Submission Handling ─────
  const bookingForm = document.getElementById('booking-form');
  const feedbackCard = document.getElementById('form-feedback');
  const resetFormBtn = document.getElementById('reset-form-btn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      let hasError = false;

      // Full Name
      const nameGroup = document.getElementById('group-name');
      const nameInput = document.getElementById('fullname');
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameGroup.classList.add('error');
        hasError = true;
      } else {
        nameGroup.classList.remove('error');
      }

      // Phone Number
      const phoneGroup = document.getElementById('group-phone');
      const phoneInput = document.getElementById('phone');
      if (!phoneInput.value.trim() || !isValidEthiopianPhone(phoneInput.value)) {
        phoneGroup.classList.add('error');
        hasError = true;
      } else {
        phoneGroup.classList.remove('error');
      }

      // Service Required
      const serviceGroup = document.getElementById('group-service');
      const serviceSelect = document.getElementById('service-type');
      if (!serviceSelect.value) {
        serviceGroup.classList.add('error');
        hasError = true;
      } else {
        serviceGroup.classList.remove('error');
      }

      // Neighborhood / Location
      const areaGroup = document.getElementById('group-area');
      const areaInput = document.getElementById('area');
      if (!areaInput.value.trim()) {
        areaGroup.classList.add('error');
        hasError = true;
      } else {
        areaGroup.classList.remove('error');
      }

      if (hasError) {
        const firstError = bookingForm.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Form validation passed!
      if (BUSINESS_CONFIG.formEndpoint) {
        // Production submission logic
        const formData = new FormData(bookingForm);
        fetch(BUSINESS_CONFIG.formEndpoint, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(response => {
          if (response.ok) {
            showSubmissionFeedback(true);
          } else {
            alert('Submission error. Please contact directly via phone.');
          }
        }).catch(() => {
          alert('Network error. Please try again or reach out directly.');
        });
      } else {
        // Pre-launch Demo Mode: Show transparent configuration notice
        showSubmissionFeedback(false);
      }
    });

    function showSubmissionFeedback(isProduction) {
      bookingForm.style.display = 'none';
      if (feedbackCard) {
        feedbackCard.classList.add('active');
        feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    // Clear error highlights on input
    ['fullname', 'phone', 'service-type', 'area'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group')?.classList.remove('error');
        });
        input.addEventListener('change', () => {
          input.closest('.form-group')?.classList.remove('error');
        });
      }
    });
  }

  if (resetFormBtn && bookingForm && feedbackCard) {
    resetFormBtn.addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.style.display = 'block';
      feedbackCard.classList.remove('active');
    });
  }

});
