/* ============================================================
   ABAY Plumbing & Supplies — JavaScript
   - Default Language: Amharic (አማርኛ)
   - Secondary Language: English
   - Bilingual i18n Dictionary
   - Mobile Nav & Smooth Navigation
   - Form Validation with Ethiopian Phone Support
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Translations Dictionary ────────────────────────────────
  const translations = {
    am: {
      // Navigation
      nav_home: "መነሻ",
      nav_services: "አገልግሎቶች",
      nav_supplies: "የቧንቧ እቃዎች",
      nav_about: "ስለ እኛ",
      nav_areas: "የአገልግሎት ክልል",
      nav_contact: "ያግኙን",
      btn_request: "ቧንቧ ባለሙያ ይጠይቁ",

      // Brand
      brand_name: "አባይ ቧንቧ እና እቃዎች",
      brand_tagline: "አስተማማኝ ውሃ። አስተማማኝ አገልግሎት።",

      // Hero
      hero_eyebrow: "ሙያዊ የቧንቧ አገልግሎት",
      hero_title_1: "በአዲስ አበባ አስተማማኝ የቧንቧ አገልግሎት",
      hero_description: "ከተበላሹ እና ከሚፈሱ ቧንቧዎች ጀምሮ እስከ አዳዲስ ዝርጋታዎችና አስፈላጊ የቧንቧ እቃዎች ድረስ አባይ ለመኖሪያ ቤቶችና ለንግድ ተቋማት አስተማማኝ መፍትሄ ይሰጣል።",
      hero_cta: "ቧንቧ ባለሙያ ይጠይቁ",
      hero_call: "ደውሉልን",
      hero_whatsapp: "WhatsApp",
      hero_telegram: "Telegram",
      hero_badge_status: "የአባይ ቧንቧ ባለሙያ ዝግጁ ነው",
      hero_badge_sub: "አዲስ አበባ እና አካባቢዋ",

      // Trust points
      trust_1_title: "ግልጽ የዋጋ ግምት",
      trust_1_sub: "ያለ ድብቅ ክፍያ",
      trust_2_title: "ሙያዊ አገልግሎት",
      trust_2_sub: "ብቁ ባለሙያዎች",
      trust_3_title: "አዲስ አበባን ያገለግላል",
      trust_3_sub: "በሁሉም ክፍለ ከተሞች",

      // Services
      services_eyebrow: "አገልግሎቶቻችን",
      services_heading: "የሚተማመኑባቸው የቧንቧ አገልግሎቶች",
      services_description: "ለመኖሪያ ቤቶች፣ አፓርታማዎች እና ንግድ ተቋማት የሚሰጡ የተሟሉ ሙያዊ የቧንቧ ስራዎች።",
      learn_more: "ቀጠሮ ይያዙ",

      svc_1_title: "የውሃ ፍሳሽ ጥገና",
      svc_1_desc: "የውሃ ብክነትን እና የቤት ንብረት ጉዳትን ለመከላከል የሚፈሱ ቧንቧዎችን፣ ማያያዣዎችንና መጋጠሚያዎችን በፍጥነት መለየትና መጠገን።",

      svc_2_title: "የቧንቧ ጥገና እና ዝርጋታ",
      svc_2_desc: "በPPR፣ PVC እና በብረት ቧንቧዎች ደረጃቸውን የጠበቁ አዳዲስ መስመሮችን መዘርጋት እና ያረጁትን በአስተማማኝ ሁኔታ መቀየር።",

      svc_3_title: "የቧንቧ እና ቫልቭ ጥገና",
      svc_3_desc: "የሚንጠባጠቡ ቧንቧዎችን፣ ያረጁ ቫልቮችን፣ የፍሳሽ መቆጣጠሪያዎችን እና ማቀላቀያዎችን (Mixers) የመጠገንና የመቀየር ስራ።",

      svc_4_title: "የተደፈኑ ፍሳሽ ማስወገጃዎች መክፈት",
      svc_4_desc: "የተደፈኑ የሰንክ፣ የሻወር እና የወለል ፍሳሽ ማስወገጃ ቧንቧዎችን በዘመናዊ እቃዎችና ቴክኒክ ሙሉ በሙሉ ማጽዳት።",

      svc_5_title: "የሽንት ቤት፣ ሰንክ እና ሻወር ገጠማ",
      svc_5_desc: "አዳዲስ የሽንት ቤት ገንዳዎች፣ የእጅ መታጠቢያ ሰንኮች፣ ሻወሮችና የመታጠቢያ ቤት እቃዎችን በጥራት መግጠምና መጠገን።",

      svc_6_title: "የቦይለር እና የውሃ ማሞቂያ አገልግሎት",
      svc_6_desc: "የኤሌክትሪክ ውሃ ማሞቂያ (ቦይለር) ማሽኖችን መግጠም፣ ጥገና እና የቧንቧ መስመሮችን የማስተካከል አገልግሎት።",

      // How it works
      how_eyebrow: "አሰራራችን",
      how_heading: "አገልግሎት ማግኘት በጣም ቀላል ነው",
      how_description: "በአራት ቀላል እርምጃዎች የባለሙያ ድጋፍ ያግኙ።",

      step_1_title: "አባይን ያግኙ",
      step_1_desc: "በስልክ፣ በWhatsApp ወይም በTelegram በቀጥታ መልዕክት ይላኩልን።",

      step_2_title: "የችግሩን ሁኔታ ይግለጹ",
      step_2_desc: "ያጋጠመዎትን የቧንቧ ብልሽት እና ያሉበትን የአዲስ አበባ አካባቢ ይንገሩን።",

      step_3_title: "የዋጋ ግምት ይቀበሉ",
      step_3_desc: "ስራው ከመጀመሩ በፊት ለስራው እና ለሚያስፈልጉ እቃዎች የሚሆነውን ግምት እንነጋገራለን።",

      step_4_title: "ቀጠሮዎን ያስይዙ",
      step_4_desc: "ለእርስዎ አመቺ በሆነ ሰዓት ባለሙያው መጥቶ ስራውን እንዲያከናውን ያረጋግጡ።",

      // Supplies Section
      supplies_eyebrow: "የቧንቧ እቃዎች ክፍል",
      supplies_heading: "ለማንኛውም ስራ የሚያስፈልጉ የቧንቧ እቃዎች",
      supplies_description: "ለተቋራጮች፣ ለቴክኒሻኖች እና ለቤት ባለቤቶች ጥራት ያላቸው የቧንቧ መለዋወጫዎች እና እቃዎች በቅርቡ ይቀርባሉ።",
      supplies_banner_badge: "የእቃዎች ዝግጅት • በቅርቡ ለችርቻሮ የሚቀርብ",
      supplies_banner_title: "ጥራት ያላቸው የቧንቧ እቃዎችና መለዋወጫዎች",
      supplies_banner_desc: "አባይ ጥራት ያላቸውን የPPR ቧንቧዎች፣ ቫልቮች፣ ማያያዣዎች እና የመታጠቢያ ቤት እቃዎችን ለደንበኞች በተመጣጣኝ ዋጋ ለማቅረብ እየተዘጋጀ ይገኛል።",
      supplies_banner_btn: "ስለ እቃዎች ይጠይቁ",

      supply_cat_1_title: "ቧንቧዎችና ማገናኛዎች",
      supply_cat_1_desc: "PPR፣ PVC እና የብረት ቧንቧዎች ከሙሉ ማገናኛ ፊቲንጎች ጋር።",
      supply_cat_2_title: "የውሃ ቧንቧዎችና ቫልቮች",
      supply_cat_2_desc: "የኪችንና ባዝሩም ሚክሰሮች፣ የበር ቫልቮች (Gate Valves) እና ስቶፕ ኮኮች።",
      supply_cat_3_title: "ማያያዣዎችና ተጨማሪዎች",
      supply_cat_3_desc: "ቴፍሎን ቴፕ፣ ፍሌክሲብል ቱቦዎች፣ ዩኒየኖች እና ማሸጊያዎች።",
      supply_cat_4_title: "የንጽህና መጠበቂያ እቃዎች",
      supply_cat_4_desc: "የእጅ መታጠቢያ ሰንኮች፣ የሽንት ቤት መለዋወጫዎች እና የሻወር ጭንቅላቶች።",
      supply_cat_5_title: "የውሃ አቅርቦትና ፍሳሽ እቃዎች",
      supply_cat_5_desc: "የወለል ፍሳሽ ማስወገጃዎች (Floor drains)፣ ትራፖች እና የታንከር ፊቲንጎች።",
      supply_cat_status: "በቅርቡ ይቀርባል",

      // About
      about_eyebrow: "ስለ አባይ",
      about_heading: "በእምነት የተገነባ። በጥራት ላይ ያተኮረ።",
      about_description: "አባይ ቧንቧ እና እቃዎች (ABAY Plumbing & Supplies) በአዲስ አበባ ከተማ ውስጥ ለሚገኙ መኖሪያ ቤቶችና ንግድ ተቋማት የቧንቧ አገልግሎቶችን እና አስፈላጊ የቧንቧ እቃዎችን በቀላሉ ተደራሽ ለማድረግ ይሰራል። ትኩረታችን በግልጽ ግንኙነት፣ በታማኝ የዋጋ ግምት እና አስተማማኝ አገልግሎት ላይ ነው።",
      about_val_1_title: "ግልጽ እና ፍትሃዊ ግምት",
      about_val_1_desc: "ስራ ከመጀመሩ በፊት የሚጠበቁትን ወጪዎች በግልጽ እንወያያለን፤ ምንም ድብቅ ክፍያ የለም።",
      about_val_2_title: "ሙያዊ የስራ አፈጻጸም",
      about_val_2_desc: "ባለሙያዎቻችን ለስራው ተገቢውን እውቀትና ዘመናዊ መገልገያ መሳሪያዎችን ይዘው ይቀርባሉ።",
      about_val_3_title: "ለደንበኛ እርካታ ቅድሚያ መስጠት",
      about_val_3_desc: "ለእያንዳንዱ ጥሪና መልዕክት ፈጣን ምላሽ በመስጠት ችግርዎን በዘላቂነት እንፈታለን።",

      // Service Area
      area_heading: "አዲስ አበባን እናገለግላለን",
      area_description: "በአዲስ አበባ ከተማ ውስጥ በማንኛውም ክፍለ ከተማ አገልግሎታችንን ለማግኘት ቡድናችንን ያነጋግሩ።",

      // Contact & Booking
      booking_eyebrow: "ያግኙን",
      booking_heading: "የቧንቧ ባለሙያ ድጋፍ ይፈልጋሉ?",
      booking_description: "የሚፈልጉትን አገልግሎት በቅጹ ይላኩልን ወይም በቀጥታ በስልክ፣ WhatsApp ወይም Telegram ያግኙን።",

      contact_phone_title: "በቀጥታ ይደውሉ",
      contact_phone_val: "+251 911 000 000",
      contact_whatsapp_title: "በWhatsApp ያነጋግሩን",
      contact_whatsapp_val: "+251 911 000 000",
      contact_telegram_title: "በTelegram ያግኙን",
      contact_telegram_val: "@AbayPlumbing",

      form_name_label: "ሙሉ ስም",
      form_name_placeholder: "ስምዎትን ያስገቡ",
      form_name_error: "እባክዎ ሙሉ ስምዎን ያስገቡ።",

      form_phone_label: "ስልክ ቁጥር",
      form_phone_placeholder: "0911000000 ወይም +251 9...",
      form_phone_error: "ትክክለኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ (ለምሳሌ 0911000000)።",

      form_area_label: "አካባቢ / ክፍለ ከተማ",
      form_area_placeholder: "ክፍለ ከተማ ይምረጡ",
      form_area_error: "እባክዎ ክፍለ ከተማዎን ይምረጡ።",

      form_service_label: "የሚፈልጉት አገልግሎት",
      form_service_placeholder: "አገልግሎት ይምረጡ",
      form_service_error: "እባክዎ የሚፈልጉትን አገልግሎት ይምረጡ።",

      form_desc_label: "የችግሩ ዝርዝር መግለጫ",
      form_desc_placeholder: "ያጋጠመዎትን ችግር ባጭሩ ይግለጹ (ለምሳሌ፡ በኪችን ሰንክ ስር ቧንቧ ይፈሳል...)",

      form_date_label: "የሚመርጡት ቀን",
      form_time_label: "የሚመርጡት ሰዓት",
      form_time_placeholder: "ሰዓት ይምረጡ",
      opt_morning: "ጠዋት (ከ2:00 – 6:00)",
      opt_afternoon: "ከሰዓት (ከ6:00 – 11:00)",
      opt_flexible: "አመቺ በሆነ ሰዓት",

      form_submit_btn: "ጥያቄዎን ይላኩ",
      form_note: "ይህ ቅጽ ጥያቄዎትን ለመመዝገብ ያገለግላል። ቡድናችን የጉዳዩን ዝርዝር ለመነጋገርና ቀጠሮውን ለማረጋገጥ በቀጥታ ይደውልልዎታል።",

      confirm_title: "ጥያቄዎ በተሳካ ሁኔታ ተልኳል!",
      confirm_desc: "እናመሰግናለን! መረጃዎ ተመዝግቧል። የቴክኒክ ቡድናችን ዝርዝሩን አረጋግጦ ቀጠሮዎን ለማስያዝ በአጭር ጊዜ ውስጥ ይደውልልዎታል።",
      confirm_btn_again: "አዲስ ጥያቄ ይላኩ",

      // Footer
      footer_about: "በአዲስ አበባ ከተማ አስተማማኝ የቧንቧ አገልግሎት እና ጥራት ያላቸው የቧንቧ እቃዎች አቅራቢ።",
      footer_nav_title: "ፈጣን አገናኞች",
      footer_services_title: "አገልግሎቶች",
      footer_supplies_title: "የቧንቧ እቃዎች",
      footer_contact_title: "አድራሻ",
      footer_location: "አዲስ አበባ፣ ኢትዮጵያ",
      footer_privacy: "የግላዊነት ፖሊሲ",
      footer_terms: "የአገልግሎት ደንቦች",
      footer_rights: "© 2026 አባይ ቧንቧ እና እቃዎች (ABAY Plumbing & Supplies)። መብቱ በህግ የተጠበቀ ነው።"
    },

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
      brand_name: "ABAY Plumbing & Supplies",
      brand_tagline: "Reliable Water. Reliable Service.",

      // Hero
      hero_eyebrow: "PROFESSIONAL PLUMBING SERVICES",
      hero_title_1: "Reliable Plumbing Services Across Addis Ababa",
      hero_description: "From leaking pipes and faulty taps to plumbing installation and essential plumbing supplies, ABAY helps homes and businesses find practical plumbing solutions.",
      hero_cta: "Request a Plumber",
      hero_call: "Call Now",
      hero_whatsapp: "WhatsApp",
      hero_telegram: "Telegram",
      hero_badge_status: "ABAY Plumber on Duty",
      hero_badge_sub: "Addis Ababa Metropolitan Area",

      // Trust points
      trust_1_title: "Clear Estimates",
      trust_1_sub: "No hidden fees",
      trust_2_title: "Professional Service",
      trust_2_sub: "Skilled technicians",
      trust_3_title: "Serving Addis Ababa",
      trust_3_sub: "All sub-cities",

      // Services
      services_eyebrow: "Our Expertise",
      services_heading: "Plumbing Services You Can Rely On",
      services_description: "Comprehensive, dependable plumbing solutions for homes, apartments, and businesses.",
      learn_more: "Request Service",

      svc_1_title: "Water Leak Repairs",
      svc_1_desc: "Rapid detection and durable repair of leaking pipes, joints, and hidden connections to prevent water damage and high bills.",

      svc_2_title: "Pipe Repair and Installation",
      svc_2_desc: "Professional pipe replacement and new network installations using quality PPR, PVC, and galvanized fittings.",

      svc_3_title: "Tap and Valve Repairs",
      svc_3_desc: "Fixing dripping faucets, replacing worn stop valves, angle cocks, and installing modern kitchen and bathroom mixers.",

      svc_4_title: "Blocked Drain Solutions",
      svc_4_desc: "Clearing clogged kitchen sinks, showers, floor traps, and drainage lines with specialized diagnostic and cleaning tools.",

      svc_5_title: "Toilet, Sink, and Shower Installation",
      svc_5_desc: "Expert installation and servicing of sanitary ware, toilet flush systems, washbasins, and shower sets.",

      svc_6_title: "Water Heater Services",
      svc_6_desc: "Safe installation, maintenance, and connection fixes for electric water heaters and boilers.",

      // How it works
      how_eyebrow: "How It Works",
      how_heading: "Getting Help Is Simple",
      how_description: "Four straightforward steps to solve your plumbing challenge.",

      step_1_title: "Contact ABAY",
      step_1_desc: "Call or message us directly via phone, WhatsApp, or Telegram.",

      step_2_title: "Describe Your Plumbing Problem",
      step_2_desc: "Tell us about the issue and specify your neighborhood in Addis Ababa.",

      step_3_title: "Receive a Price Estimate",
      step_3_desc: "We discuss anticipated labor and required materials transparently before work starts.",

      step_4_title: "Arrange Your Service",
      step_4_desc: "Confirm a convenient appointment date and time for our technician's visit.",

      // Supplies Section
      supplies_eyebrow: "Plumbing Supplies Division",
      supplies_heading: "Plumbing Essentials for Every Project",
      supplies_description: "Quality plumbing fixtures, pipes, and hardware for contractors, technicians, and property owners.",
      supplies_banner_badge: "Supplies Division • Planned Retail Showcase",
      supplies_banner_title: "Curated Plumbing Materials & Fittings",
      supplies_banner_desc: "ABAY is developing a dependable supply of genuine PPR pipes, heavy-duty valves, sanitary accessories, and installation fittings for Addis Ababa projects.",
      supplies_banner_btn: "Inquire About Materials",

      supply_cat_1_title: "Pipes and Fittings",
      supply_cat_1_desc: "PPR, PVC, and galvanized pipes with matching couplings, elbows, and tees.",
      supply_cat_2_title: "Taps and Valves",
      supply_cat_2_desc: "Kitchen and basin mixers, brass gate valves, and check valves.",
      supply_cat_3_title: "Connectors and Accessories",
      supply_cat_3_desc: "Teflon sealing tape, braided flexible hoses, unions, and rubber gaskets.",
      supply_cat_4_title: "Bathroom Plumbing Fixtures",
      supply_cat_4_desc: "Washbasin sets, toilet cistern mechanisms, and shower mixers.",
      supply_cat_5_title: "Water Supply and Drainage Materials",
      supply_cat_5_desc: "Floor drains, traps, cleanout covers, and water tank connection fittings.",
      supply_cat_status: "Coming Soon",

      // About
      about_eyebrow: "About Us",
      about_heading: "Built on Trust. Focused on Quality.",
      about_description: "ABAY Plumbing & Supplies aims to make plumbing services and essential plumbing materials easier to access for homes and businesses across Addis Ababa. We focus on clear communication, transparent estimates, and dependable service.",
      about_val_1_title: "Clear Estimates",
      about_val_1_desc: "We discuss expected costs openly before starting any work, so you always know what to expect.",
      about_val_2_title: "Professional Service",
      about_val_2_desc: "Our technicians arrive prepared with the right tools, knowledge, and respect for your property.",
      about_val_3_title: "Customer-Focused Support",
      about_val_3_desc: "We prioritize clear communication and timely responses to every inquiry.",

      // Service Area
      area_heading: "Serving Addis Ababa, Ethiopia",
      area_description: "Contact our team to confirm service availability in your area of Addis Ababa.",

      // Contact & Booking
      booking_eyebrow: "Need Assistance?",
      booking_heading: "Need Plumbing Assistance?",
      booking_description: "Tell us what you need, and we will help you arrange the next step.",

      contact_phone_title: "Call Us",
      contact_phone_val: "+251 911 000 000",
      contact_whatsapp_title: "Chat on WhatsApp",
      contact_whatsapp_val: "+251 911 000 000",
      contact_telegram_title: "Message on Telegram",
      contact_telegram_val: "@AbayPlumbing",

      form_name_label: "Full Name",
      form_name_placeholder: "Enter your full name",
      form_name_error: "Please enter your full name.",

      form_phone_label: "Phone Number",
      form_phone_placeholder: "0911000000 or +251 9...",
      form_phone_error: "Please enter a valid Ethiopian phone number (e.g., 0911000000).",

      form_area_label: "Area in Addis Ababa",
      form_area_placeholder: "Select your sub-city",
      form_area_error: "Please select your sub-city.",

      form_service_label: "Service Required",
      form_service_placeholder: "Select a service",
      form_service_error: "Please select a service type.",

      form_desc_label: "Description of the Problem",
      form_desc_placeholder: "Briefly describe the issue (e.g., leaking pipe under kitchen sink, drain blocked...)",

      form_date_label: "Preferred Date",
      form_time_label: "Preferred Time",
      form_time_placeholder: "Select a time",
      opt_morning: "Morning (8:00 AM – 12:00 PM)",
      opt_afternoon: "Afternoon (12:00 PM – 5:00 PM)",
      opt_flexible: "Flexible / Any Time",

      form_submit_btn: "Submit Request",
      form_note: "This form records your request. Our team will contact you directly to discuss the details and schedule the service.",

      confirm_title: "Request Submitted Successfully!",
      confirm_desc: "Thank you! Your request has been recorded. Our team will contact you directly to discuss the details and confirm the appointment.",
      confirm_btn_again: "Submit Another Request",

      // Footer
      footer_about: "Reliable plumbing services and quality plumbing materials for homes and businesses across Addis Ababa, Ethiopia.",
      footer_nav_title: "Navigation",
      footer_services_title: "Services",
      footer_supplies_title: "Plumbing Supplies",
      footer_contact_title: "Contact",
      footer_location: "Addis Ababa, Ethiopia",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_rights: "© 2026 ABAY Plumbing & Supplies. All rights reserved."
    }
  };

  // ── Language Controller (Default: Amharic) ──────────────────
  let currentLang = localStorage.getItem('abay_lang') || 'am';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('abay_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
    document.body.setAttribute('data-lang', lang);

    const dict = translations[lang] || translations.am;

    // Update all text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update active button state in language switchers
    document.querySelectorAll('.lang-switch button, .footer-lang button').forEach(btn => {
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

  // Initialize Language Switcher Buttons
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && (targetLang === 'am' || targetLang === 'en')) {
        applyLanguage(targetLang);
      }
    });
  });

  // Apply default language on load
  applyLanguage(currentLang);


  // ── Mobile Navigation ──────────────────────────────────────
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


  // ── Smooth Scroll for Anchor Links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 76;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });


  // ── Header Shadow & Active Link on Scroll ──────────────────
  const siteHeader = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function handleScroll() {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    const scrollPos = window.scrollY + 120;
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


  // ── Form Date Minimum (Today) ──────────────────────────────
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }


  // ── Ethiopian Phone Validation ─────────────────────────────
  function isValidEthiopianPhone(phone) {
    // Strips spaces, dashes, parentheses
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    // Valid formats:
    // +2519XXXXXXXX or +2517XXXXXXXX (13 chars)
    // 09XXXXXXXX or 07XXXXXXXX (10 chars)
    // 9XXXXXXXX or 7XXXXXXXX (9 chars)
    const ethiopianPhoneRegex = /^(\+251[79]\d{8}|0[79]\d{8}|[79]\d{8})$/;
    return ethiopianPhoneRegex.test(cleaned);
  }


  // ── Booking Form Validation & Submission ───────────────────
  const bookingForm = document.getElementById('booking-form');
  const formConfirmation = document.getElementById('form-confirmation');
  const resetFormBtn = document.getElementById('reset-form-btn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      let hasError = false;

      // 1. Full Name
      const nameGroup = document.getElementById('group-name');
      const nameInput = document.getElementById('fullname');
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameGroup.classList.add('error');
        hasError = true;
      } else {
        nameGroup.classList.remove('error');
      }

      // 2. Phone Number
      const phoneGroup = document.getElementById('group-phone');
      const phoneInput = document.getElementById('phone');
      if (!phoneInput.value.trim() || !isValidEthiopianPhone(phoneInput.value)) {
        phoneGroup.classList.add('error');
        hasError = true;
      } else {
        phoneGroup.classList.remove('error');
      }

      // 3. Area in Addis Ababa
      const areaGroup = document.getElementById('group-area');
      const areaSelect = document.getElementById('area');
      if (!areaSelect.value) {
        areaGroup.classList.add('error');
        hasError = true;
      } else {
        areaGroup.classList.remove('error');
      }

      // 4. Service Type
      const serviceGroup = document.getElementById('group-service');
      const serviceSelect = document.getElementById('service-type');
      if (!serviceSelect.value) {
        serviceGroup.classList.add('error');
        hasError = true;
      } else {
        serviceGroup.classList.remove('error');
      }

      if (hasError) {
        const firstError = bookingForm.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Successful Client-side validation
      // Display clear submission confirmation
      bookingForm.style.display = 'none';
      if (formConfirmation) {
        formConfirmation.classList.add('active');
        formConfirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    // Clear error on input
    ['fullname', 'phone', 'area', 'service-type'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          const group = input.closest('.form-group');
          if (group) group.classList.remove('error');
        });
        input.addEventListener('change', () => {
          const group = input.closest('.form-group');
          if (group) group.classList.remove('error');
        });
      }
    });
  }

  // Reset form button in confirmation state
  if (resetFormBtn && bookingForm && formConfirmation) {
    resetFormBtn.addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.style.display = 'block';
      formConfirmation.classList.remove('active');
    });
  }

});
