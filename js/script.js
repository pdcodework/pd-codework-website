/**
 * PD CODEWORK — Digital Solutions
 * Master JavaScript File (ES6+)
 * Vanilla JS — Zero unnecessary runtime dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Dynamic Current Year in Footer
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Sticky Navbar & Scroll State
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.main-navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Toggle Navbar style
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Toggle Back To Top Button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load

  // Back to top click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Auto-Close on Link Click
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-collapse .btn');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Active Navigation Highlighting on Scroll (ScrollSpy)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.navbar-nav a[href*="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Scroll Reveal Animations (IntersectionObserver)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-item');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    document.body.classList.add('js-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.04,
      rootMargin: '0px 0px 80px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 6. Interactive Service Modal Data (8 Comprehensive Solutions)
  // --------------------------------------------------------------------------
  const serviceDetails = {
    'web-dev': {
      title: '01 — Custom Website & High-Speed Web Development',
      badge: 'Web Design & Performance',
      icon: 'bi-code-slash',
      summary: 'High-converting, responsive websites handcrafted with clean semantic code, sub-second load times, and structured SEO architecture.',
      features: [
        '100% Fluid Mobile, Tablet & Desktop Responsive Layouts',
        'Google Core Web Vitals 95+ PageSpeed Architecture',
        'Clean Vanilla HTML5/CSS3 & Modern JavaScript Micro-Animations',
        'Technical On-Page SEO, OpenGraph Tags & Schema Metadata',
        'High-Converting Lead Capture Funnels & WhatsApp Quick-Action'
      ],
      technologies: 'HTML5, CSS3/Vanilla, JavaScript ES6+, Bootstrap 5, Schema.org SEO'
    },
    'mobile-apps': {
      title: '02 — Android & iOS Mobile Application Development',
      badge: 'Native & Cross-Platform Mobile',
      icon: 'bi-phone-fill',
      summary: 'High-performance mobile applications for Android and iOS engineered with fluid 60fps animations, intuitive UI, and cloud backend sync.',
      features: [
        'Cross-Platform Android & iOS Codebases with Flutter & React Native',
        'Native Device Features: Push Notifications, GPS, Camera & Offline Storage',
        'Secure In-App Authentication, Biometrics & User Profiles',
        'Payment Gateways Integration (Stripe, Razorpay, Google Pay, Apple Pay)',
        'End-to-End Google Play Store & Apple App Store Publishing Support'
      ],
      technologies: 'Flutter, React Native, Dart, Firebase, Android SDK, iOS Swift'
    },
    'custom-software': {
      title: '03 — Custom Software & Manufacturing ERP Solutions',
      badge: 'Bespoke Software & ERP Systems',
      icon: 'bi-gear-wide-connected',
      summary: 'Easy-to-use custom software, manufacturing ERPs, inventory trackers, and client-need-based operational platforms that eliminate business chaos.',
      features: [
        'Custom Manufacturing & Factory Operations Management Software',
        'Real-Time Inventory Tracking, Purchase Orders & Supplier Portals',
        'Automated Invoicing, GST/Tax Billing & Financial Ledgers',
        'Role-Based Employee Access Control, Attendance & Shift Management',
        'Interactive Analytics Dashboards with Exportable Excel & PDF Reports'
      ],
      technologies: 'Node.js, Express.js, React, PostgreSQL / MongoDB, Cloud APIs'
    },
    'ecommerce': {
      title: '04 — High-Converting E-Commerce Stores & WhatsApp Sales',
      badge: 'E-Commerce & Digital Storefronts',
      icon: 'bi-cart-check-fill',
      summary: 'Scalable e-commerce websites and direct WhatsApp ordering storefronts built for maximum sales conversion, fast checkout, and high retention.',
      features: [
        'Custom E-Commerce Storefronts (Custom Web, Shopify, WooCommerce)',
        'Direct 1-Click WhatsApp Ordering & Instant Catalog Browsing',
        'Seamless Multi-Currency Payment Gateways (Stripe, Razorpay, PayPal, COD)',
        'Automated Order Tracking, SMS/Email Alerts & Inventory Sync',
        'Abandoned Cart Recovery Funnels & Upsell Recommendation Engines'
      ],
      technologies: 'Shopify Liquid, WooCommerce, Stripe, Razorpay, WhatsApp Business API'
    },
    'seo-growth': {
      title: '05 — Top SEO Ranking & Local GEO Business Growth',
      badge: 'Search Engine Optimization & Local SEO',
      icon: 'bi-graph-up-arrow',
      summary: 'Dominate Google search results and local Google Maps rankings to attract organic, high-intent buyer traffic and grow your local footprint.',
      features: [
        'Keyword Strategy, Competitor Gap Analysis & Content Roadmaps',
        'Local SEO & Google Business Profile (Google Maps) #1 Ranking Optimization',
        'Technical SEO: Crawlability, Sitemaps, Robots.txt, HTTPS & Rich Snippets',
        'High-Authority Backlink Acquisition & Digital PR Strategies',
        'Monthly Transparent Ranking Reports, Traffic Insights & Conversion Auditing'
      ],
      technologies: 'Google Search Console, Google Analytics 4, Ahrefs, Schema Markup'
    },
    'social-marketing': {
      title: '06 — Social Media Marketing & Paid Growth Funnels',
      badge: 'Performance Marketing & Lead Gen',
      icon: 'bi-megaphone-fill',
      summary: 'Data-driven social media advertising campaigns, high-ROI paid ad funnels, and automated lead nurturing to scale sales predictable.',
      features: [
        'Targeted Meta (Facebook & Instagram) and Google Ad Campaign Management',
        'High-Converting Ad Creatives, Video Scripts & Copywriting',
        'Automated Multi-Channel Lead Nurturing (WhatsApp + Email Sequences)',
        'Full-Funnel Pixel Tracking, Conversion API & Retargeting Infrastructure',
        'Audience A/B Testing & ROAS Optimization for Maximum ROI'
      ],
      technologies: 'Meta Ads Manager, Google Ads, Meta Pixel, Conversion API, Zapier'
    },
    'ai-automation': {
      title: '07 — AI Automation Solutions & WhatsApp Bots',
      badge: 'Autonomous AI & Workflow Bots',
      icon: 'bi-cpu-fill',
      summary: 'Intelligent conversational agents, multi-step customer qualification pipelines, and automated CRM synchronizations that run 24/7.',
      features: [
        'WhatsApp Business API Automated Sales, Support & Booking Bots',
        'Custom OpenAI GPT-4o & Claude 3.5 Intelligent Knowledge Integrations',
        'Automated Multi-Step Lead Qualification & Meeting Scheduling',
        'Real-Time CRM Synchronization (Zoho, HubSpot, Salesforce, Notion)',
        'Automated Document Processing, Invoice OCR & AI Workflow Pipelines'
      ],
      technologies: 'OpenAI GPT-4o, Claude 3.5, n8n, LangChain, WhatsApp Cloud API'
    },
    'cloud-maintenance': {
      title: '08 — API, Payment Gateways & 24/7 Cloud SLA Maintenance',
      badge: 'Cloud Engineering & 24/7 SLA',
      icon: 'bi-cloud-check-fill',
      summary: 'Connecting third-party services into seamless data streams with dedicated 24/7 server monitoring, security patching, and uptime guarantees.',
      features: [
        'RESTful & GraphQL High-Speed Secure API Architecture',
        '99.9% Production Uptime SLA Guarantee with Real-Time Health Checks',
        'Automated Daily Cloud Database Backups & Disaster Recovery',
        'SSL Certificates, Cloudflare CDN, DDoS Protection & Security Audits',
        'Direct Developer Priority Helpdesk with <2h Emergency Response'
      ],
      technologies: 'AWS, Vercel, Cloudflare DNS, Docker, PostgreSQL, Redis'
    },
    '1': {
      title: '01 — Custom Website Development',
      badge: 'Web Design & Performance',
      icon: 'bi-code-slash',
      summary: 'High-converting, responsive websites handcrafted with clean semantic code, sub-second load times, and structured SEO architecture.',
      features: [
        '100% Fluid Mobile, Tablet & Desktop Responsive Layouts',
        'Google Core Web Vitals 95+ PageSpeed Architecture',
        'Clean Vanilla HTML5/CSS3 & Modern JavaScript Micro-Animations',
        'Technical On-Page SEO, OpenGraph Tags & Schema Metadata',
        'High-Converting Lead Capture Funnels & WhatsApp Quick-Action'
      ],
      technologies: 'HTML5, CSS3, JavaScript ES6+, Bootstrap 5, Schema.org SEO'
    },
    '2': {
      title: '02 — Android & iOS Mobile Apps',
      badge: 'Native & Cross-Platform Mobile',
      icon: 'bi-phone-fill',
      summary: 'High-performance mobile applications for Android and iOS engineered with fluid 60fps animations, intuitive UI, and cloud backend sync.',
      features: [
        'Cross-Platform Android & iOS Codebases with Flutter & React Native',
        'Native Device Features: Push Notifications, GPS & Offline Storage',
        'Secure In-App Authentication, Biometrics & User Profiles',
        'Payment Gateways Integration (Stripe, Razorpay, Google Pay, Apple Pay)',
        'Google Play Store & Apple App Store Publishing'
      ],
      technologies: 'Flutter, React Native, Dart, Firebase, Android SDK, iOS Swift'
    },
    '3': {
      title: '03 — Custom Software & Manufacturing ERP',
      badge: 'Bespoke Software & ERP Systems',
      icon: 'bi-gear-wide-connected',
      summary: 'Easy-to-use custom software, manufacturing ERPs, inventory trackers, and client-need-based operational platforms.',
      features: [
        'Custom Manufacturing & Factory Operations Management Software',
        'Real-Time Inventory Tracking, Purchase Orders & Supplier Portals',
        'Automated Invoicing, GST/Tax Billing & Financial Ledgers',
        'Role-Based Employee Access Control & Shift Management',
        'Interactive Analytics Dashboards with Exportable Reports'
      ],
      technologies: 'Node.js, Express.js, React, PostgreSQL / MongoDB, Cloud APIs'
    },
    '4': {
      title: '04 — E-Commerce Stores & WhatsApp Sales',
      badge: 'E-Commerce & Digital Storefronts',
      icon: 'bi-cart-check-fill',
      summary: 'Scalable e-commerce websites and direct WhatsApp ordering storefronts built for maximum sales conversion and fast checkout.',
      features: [
        'Custom E-Commerce Storefronts (Custom Web, Shopify, WooCommerce)',
        'Direct 1-Click WhatsApp Ordering & Instant Catalog Browsing',
        'Multi-Currency Payment Gateways (Stripe, Razorpay, PayPal, COD)',
        'Automated Order Tracking, SMS/Email Alerts & Inventory Sync',
        'Abandoned Cart Recovery Funnels'
      ],
      technologies: 'Shopify Liquid, WooCommerce, Stripe, Razorpay, WhatsApp API'
    },
    '5': {
      title: '05 — SEO Ranking & Local GEO Growth',
      badge: 'SEO & Google Maps Local Growth',
      icon: 'bi-graph-up-arrow',
      summary: 'Dominate Google search results and local Google Maps rankings to attract organic, high-intent buyer traffic.',
      features: [
        'Keyword Strategy, Competitor Gap Analysis & Content Roadmaps',
        'Local SEO & Google Business Profile (Google Maps) #1 Ranking',
        'Technical SEO: Crawlability, Sitemaps, Robots.txt & Rich Snippets',
        'High-Authority Backlink Acquisition',
        'Monthly Transparent Ranking Reports & Traffic Insights'
      ],
      technologies: 'Google Search Console, Google Analytics 4, Ahrefs, Schema Markup'
    }
  };


  const serviceModalElement = document.getElementById('serviceDetailModal');
  if (serviceModalElement) {
    serviceModalElement.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      const serviceId = button.getAttribute('data-service-id');
      const data = serviceDetails[serviceId];

      if (data) {
        document.getElementById('serviceModalTitle').textContent = data.title;
        document.getElementById('serviceModalBadge').textContent = data.badge;
        document.getElementById('serviceModalSummary').textContent = data.summary;
        document.getElementById('serviceModalTech').textContent = data.technologies;

        const featureList = document.getElementById('serviceModalFeatures');
        featureList.innerHTML = '';
        data.features.forEach(item => {
          const li = document.createElement('li');
          li.className = 'mb-2 d-flex align-items-start gap-2';
          li.innerHTML = `<i class="bi bi-check-circle-fill text-primary mt-1"></i> <span>${item}</span>`;
          featureList.appendChild(li);
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. Interactive Project Modal Data (7 Comprehensive Solutions)
  // --------------------------------------------------------------------------
  const projectDetails = {
    'restaurant': {
      title: 'Cloud Kitchen & Restaurant Online Ordering Engine',
      badge: '01 · Custom Web Platform',
      image: 'images/project-restaurant.jpg',
      category: 'Hospitality & Web Development',
      description: 'A modern, high-speed restaurant website built to elevate culinary branding and streamline direct customer ordering. It features interactive food menus with dietary filter tags, table reservation forms, instant 1-click WhatsApp cart checkouts, and complete Google SEO optimization.',
      highlights: [
        '⚡ 99/100 Google Core Web Vitals performance with sub-second LCP speed',
        'Direct 1-click WhatsApp checkout bypassing expensive third-party commission fees',
        'Interactive culinary menu with real-time dietary badges & price selectors',
        'Table reservation booking with calendar date & guest count validation',
        '+45% increase in direct online table bookings and customer retention'
      ],
      stack: ['HTML5', 'Vanilla CSS3', 'JavaScript ES6+', 'Bootstrap 5', 'WhatsApp API']
    },
    'mobile-app': {
      title: 'Shift Logistics & Live Driver Tracking (iOS & Android)',
      badge: '02 · Mobile Application',
      image: 'images/project-mobile.jpg',
      category: 'Logistics & Cross-Platform Mobile',
      description: 'A cross-platform mobile application engineered with Flutter for Android and iOS. Built for freight and logistics operations, it features real-time GPS fleet tracking, push notifications, driver status updates, offline caching, and secure in-app payments with Apple Pay & Google Pay.',
      highlights: [
        '📱 Smooth 60fps native animations across iOS and Android with single codebase',
        'Live turn-by-turn vehicle tracking and ETA calculations via Google Maps SDK',
        'Biometric authentication (FaceID & Fingerprint) for secure driver logins',
        'Offline trip caching with automated background cloud synchronization',
        'Supports 10,000+ active daily couriers with sub-second backend sync'
      ],
      stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Apple Pay', 'Android SDK']
    },
    'erp-software': {
      title: 'Mantra ERP — Factory Production & Inventory System',
      badge: '03 · Manufacturing & Custom ERP',
      image: 'images/project-erp.jpg',
      category: 'Manufacturing & Enterprise Software',
      description: 'A custom, user-friendly manufacturing ERP and business management platform designed specifically for factory operations. Features real-time warehouse inventory tracking, automated GST/tax billing, production line assembly scheduling, and automated revenue analytics.',
      highlights: [
        '🏭 -35% reduction in factory downtime with automated raw material alerts',
        '100% compliant GST invoicing, supplier purchase orders & ledger reconciliation',
        'Role-based access control for plant managers, shift supervisors & accountants',
        'Exportable financial reports in PDF and Excel formats with real-time charts',
        'Scalable PostgreSQL backend with automated daily cloud disaster recovery backups'
      ],
      stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Chart.js']
    },
    'ecommerce-store': {
      title: 'Luxura Living — Luxury E-Commerce & WhatsApp Cart',
      badge: '04 · E-Commerce & Digital Store',
      image: 'images/project-ecommerce.jpg',
      category: 'E-Commerce & WhatsApp Commerce',
      description: 'An ultra-fast luxury lifestyle storefront engineered for high conversion rates. Features lightning-fast product filtering, multi-currency Stripe checkouts, and a direct 1-click WhatsApp order button that converts casual mobile visitors into buyers.',
      highlights: [
        '🛒 3.2x checkout conversion rate compared to standard template stores',
        'Seamless multi-currency payments supporting Stripe, Razorpay & Cash on Delivery',
        '1-Click WhatsApp cart ordering with automated pre-filled product SKU details',
        'Automated order status alerts via SMS and Email with live package tracking',
        'Fluid mobile-first interface optimized for under 0.8-second initial page load'
      ],
      stack: ['Shopify Liquid', 'Vanilla CSS', 'Stripe API', 'Razorpay', 'WhatsApp Cloud API']
    },
    'seo-campaign': {
      title: 'Apex Healthcare — #1 Google Maps Local SEO Campaign',
      badge: '05 · SEO & Local GEO Growth',
      image: 'images/project-marketing.jpg',
      category: 'Search Engine Optimization & Local GEO Growth',
      description: 'A comprehensive technical and local GEO SEO growth sprint for a multi-location healthcare network. We optimized on-page semantic architecture, structured Schema.org data, and dominated Google Maps local rankings for competitive regional keywords.',
      highlights: [
        '📍 #1 Google Search and Google Maps ranking for 89+ high-intent local keywords',
        '+424% increase in organic local phone calls and direct location direction requests',
        'Comprehensive technical SEO overhaul eliminating crawl errors and duplicate metadata',
        'Automated monthly keyword tracking and transparent GA4 conversion reporting',
        'High-authority regional citations and automated review acquisition funnel'
      ],
      stack: ['Technical SEO', 'Google Business Profile', 'Google Analytics 4', 'Schema.org']
    },
    'marketing-funnel': {
      title: 'Meta & Google High-ROI Performance Ad Funnels',
      badge: '06 · Performance Marketing & Paid Ads',
      image: 'images/project-business.jpg',
      category: 'Paid Advertising & Lead Generation Funnels',
      description: 'A high-converting paid ad acquisition funnel across Facebook, Instagram, and Google Ads for a high-ticket B2B service provider. Integrated with automated WhatsApp lead nurturing and instant CRM pipeline synchronization.',
      highlights: [
        '🎯 4.2x verified ROAS (Return on Ad Spend) across 90-day campaign cycles',
        '450+ high-ticket qualified client discovery bookings generated directly',
        'Conversion API (CAPI) and Meta Pixel setup for precise audience retargeting',
        'Automated multi-step WhatsApp and Email lead qualification follow-ups',
        'Continuous weekly creative A/B testing and copywriting optimization'
      ],
      stack: ['Meta Ads Manager', 'Google Ads', 'Meta CAPI', 'Zapier Automation', 'HubSpot']
    },
    'ai-bot': {
      title: 'OmniBot — 24/7 AI Sales & Support Assistant',
      badge: '07 · AI Automation & Bots',
      image: 'images/project-ai.jpg',
      category: 'AI & Workflow Automation',
      description: 'An intelligent autonomous conversational AI agent connected to WhatsApp Business API and website chat. It handles 24/7 client intake, answers technical FAQs using custom LLM knowledge bases, qualifies prospect budgets, and books discovery calls directly into Google Calendar.',
      highlights: [
        '🤖 15+ hours of manual support time saved weekly per sales rep',
        'Powered by OpenAI GPT-4o with customized company knowledge vector retrieval',
        'Instant multi-channel notifications to sales reps via Slack and Email',
        'Automated lead intake data sync directly to Zoho & Google Sheets',
        'Built-in human handover trigger whenever complex edge cases arise'
      ],
      stack: ['OpenAI GPT-4o', 'Claude 3.5', 'WhatsApp Cloud API', 'n8n', 'Node.js']
    },
    '1': {
      title: 'Cloud Kitchen & Restaurant Online Ordering Engine',
      badge: '01 · Custom Web Platform',
      image: 'images/project-restaurant.jpg',
      category: 'Hospitality & Web Development',
      description: 'A modern, high-speed restaurant website built to elevate culinary branding and streamline direct customer ordering with WhatsApp checkouts.',
      highlights: [
        '⚡ 99/100 Google Core Web Vitals performance with sub-second LCP speed',
        'Direct 1-click WhatsApp checkout bypassing expensive third-party fees',
        '+45% increase in direct online table bookings'
      ],
      stack: ['HTML5', 'Vanilla CSS3', 'JavaScript ES6+', 'WhatsApp API']
    },
    '2': {
      title: 'Shift Logistics & Live Driver Tracking App',
      badge: '02 · Mobile Application',
      image: 'images/project-mobile.jpg',
      category: 'Logistics & Cross-Platform Mobile',
      description: 'A cross-platform mobile application engineered with Flutter for Android and iOS with real-time GPS tracking and offline caching.',
      highlights: [
        '📱 Smooth 60fps native animations across iOS and Android',
        'Live GPS tracking via Google Maps SDK',
        'Supports 10,000+ active daily couriers'
      ],
      stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API']
    },
    '3': {
      title: 'OmniBot — 24/7 AI Sales & Support Assistant',
      badge: '07 · AI Automation & Bots',
      image: 'images/project-ai.jpg',
      category: 'AI & Workflow Automation',
      description: 'Intelligent conversational AI agent connected to WhatsApp Business API and website chat, qualifying leads 24/7.',
      highlights: [
        '🤖 15+ hours of manual support time saved weekly',
        'Powered by OpenAI GPT-4o with customized knowledge retrieval',
        'Instant CRM data synchronization'
      ],
      stack: ['OpenAI GPT-4o', 'WhatsApp Cloud API', 'n8n']
    }
  };

  // Helper to render project modal content
  const renderProjectModal = (projectId, modalBody) => {
    const data = projectDetails[projectId];
    if (!data || !modalBody) return;

    modalBody.innerHTML = `
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <div class="rounded-3 overflow-hidden border shadow-sm">
            <img src="${data.image}" alt="${data.title}" class="img-fluid w-100" style="object-fit: cover; max-height: 280px;">
          </div>
        </div>
        <div class="col-lg-6">
          <span class="badge bg-warning text-dark px-2 py-1 rounded-pill small fw-bold mb-2">${data.badge}</span>
          <h4 class="h5 fw-bold text-dark mb-2">${data.title}</h4>
          <p class="text-muted small mb-3">${data.description}</p>
        </div>
      </div>
      <div class="mt-4 pt-3 border-top">
        <h5 class="h6 fw-bold text-dark mb-3"><i class="bi bi-award-fill text-warning me-1"></i> Key Results &amp; Deliverables:</h5>
        <ul class="list-unstyled d-flex flex-column gap-2 mb-4 small text-dark">
          ${data.highlights.map(hl => `<li class="d-flex align-items-start gap-2"><i class="bi bi-check-circle-fill text-success mt-1"></i> <span>${hl}</span></li>`).join('')}
        </ul>
        <h5 class="h6 fw-bold text-dark mb-2"><i class="bi bi-code-square text-primary me-1"></i> Tech Stack:</h5>
        <div class="d-flex flex-wrap gap-1">
          ${data.stack.map(tech => `<span class="tech-tag-badge">${tech}</span>`).join('')}
        </div>
      </div>
    `;
  };

  // Bind project modals (supporting both projectModal and projectDetailModal)
  const projectModalElement = document.getElementById('projectModal') || document.getElementById('projectDetailModal');
  if (projectModalElement) {
    projectModalElement.addEventListener('show.bs.modal', (event) => {
      const button = event.relatedTarget;
      if (!button) return;
      const projectId = button.getAttribute('data-project-id');
      const modalBody = projectModalElement.querySelector('.modal-body') || document.getElementById('projectModalBody');
      if (modalBody && projectId) {
        renderProjectModal(projectId, modalBody);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Contact Form Validation & Web3Forms Live Email API Submission
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const WEB3FORMS_ACCESS_KEY = '238b8744-d0d0-4473-989b-e7922c690e8f';

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Check form validity with Bootstrap validation classes
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      contactForm.classList.add('was-validated');

      // Submit Button Loading State
      const submitBtn = contactForm.querySelector('button[type="submit"]') || document.getElementById('submitBtn');
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Send Project Inquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending Inquiry...</span> <span class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>`;
      }

      // Extract Form Values (Handles both contact.html and index.html forms)
      const fullName = document.getElementById('fullName')?.value.trim() || 'Client';
      const businessName = document.getElementById('businessName')?.value.trim() || 'Not specified';
      const email = document.getElementById('email')?.value.trim() || '';
      const phone = document.getElementById('phone')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || document.getElementById('projectDetails')?.value.trim() || '';
      
      // Selected services (checkboxes on contact.html OR select dropdown on index.html)
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
      const selectService = document.getElementById('serviceRequired')?.value || '';
      const servicesText = checkedBoxes.length > 0 ? checkedBoxes.join(', ') : (selectService || 'Custom Digital Engineering');

      // Selected timeline
      const timelineEl = document.querySelector('input[name="timeline"]:checked') || document.getElementById('budgetRange');
      const timeline = timelineEl ? timelineEl.value : 'ASAP (1-2 Weeks)';

      // Construct WhatsApp prefilled message
      const waMsg = encodeURIComponent(
        `*New Project Inquiry — PD CODEWORK*\n\n` +
        `👤 *Name:* ${fullName}\n` +
        `🏢 *Business:* ${businessName}\n` +
        `📧 *Email:* ${email}\n` +
        `📞 *Phone:* ${phone}\n` +
        `🚀 *Services:* ${servicesText}\n` +
        `⏱️ *Timeline:* ${timeline}\n\n` +
        `📝 *Project Details:*\n${message}`
      );
      const waUrl = `https://wa.me/919657847967?text=${waMsg}`;

      // Construct Mailto Link
      const emailSubject = encodeURIComponent(`Project Inquiry: ${servicesText} — ${fullName} (${businessName})`);
      const mailtoBody = encodeURIComponent(
        `Hello PD CODEWORK Team,\n\n` +
        `I would like to discuss a project inquiry.\n\n` +
        `Name: ${fullName}\n` +
        `Business Name: ${businessName}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone}\n` +
        `Services Required: ${servicesText}\n` +
        `Target Timeline: ${timeline}\n\n` +
        `Project Scope & Details:\n${message}\n\n` +
        `Looking forward to receiving your technical roadmap!`
      );
      const mailtoUrl = `mailto:info.pdcodework@gmail.com?subject=${emailSubject}&body=${mailtoBody}`;

      // Payload for Web3Forms API
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: fullName,
        email: email,
        phone: phone,
        business_name: businessName,
        services_required: servicesText,
        target_timeline: timeline,
        message: message,
        subject: `🚀 New Project Inquiry from ${fullName} (${businessName}) — PD CODEWORK`,
        from_name: `PD CODEWORK Inquiry Engine`
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.status === 200 && (result.success || result.message)) {
          // Target Alert Box
          const targetAlert = formAlert || formSuccessAlert;
          if (targetAlert) {
            targetAlert.className = 'alert alert-success border border-success p-4 rounded-4 shadow-sm mb-4';
            targetAlert.innerHTML = `
              <div class="d-flex align-items-center gap-3 mb-2">
                <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center flex-shrink-0" style="width:40px;height:40px;">
                  <i class="bi bi-check-lg fs-4"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-0 text-dark">Inquiry Sent to Our Inbox!</h5>
                  <small class="text-success fw-bold">Delivered to info.pdcodework@gmail.com · 2-Hour Response SLA Guaranteed</small>
                </div>
              </div>
              <p class="small text-muted mb-3 mt-2">
                Thank you <strong>${fullName}</strong>! We've received your inquiry for <strong>${servicesText}</strong>. To discuss this right now, jump directly into a WhatsApp chat with our founder:
              </p>
              <div class="d-flex flex-wrap gap-2">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-success px-3 py-2 fw-bold">
                  <i class="bi bi-whatsapp me-1"></i> Continue on WhatsApp
                </a>
                <a href="${mailtoUrl}" class="btn btn-sm btn-outline-dark px-3 py-2 fw-bold">
                  <i class="bi bi-envelope-fill me-1"></i> Open Email Client
                </a>
              </div>
            `;
            targetAlert.classList.remove('d-none');
            targetAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Reset Form
          contactForm.reset();
          contactForm.classList.remove('was-validated');
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (error) {
        // Fallback notification with WhatsApp and Email triggers
        const targetAlert = formAlert || formSuccessAlert;
        if (targetAlert) {
          targetAlert.className = 'alert alert-warning border border-warning p-4 rounded-4 shadow-sm mb-4';
          targetAlert.innerHTML = `
            <div class="d-flex align-items-center gap-3 mb-2">
              <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center flex-shrink-0" style="width:40px;height:40px;">
                <i class="bi bi-exclamation-triangle-fill fs-5"></i>
              </div>
              <div>
                <h5 class="fw-bold mb-0 text-dark">Message Ready to Send</h5>
                <small class="text-dark-50 fw-semibold">Connect directly via WhatsApp or Email below:</small>
              </div>
            </div>
            <p class="small text-muted mb-3 mt-2">
              Please click below to send your prepared project details instantly:
            </p>
            <div class="d-flex flex-wrap gap-2">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-success px-3 py-2 fw-bold">
                <i class="bi bi-whatsapp me-1"></i> Send via WhatsApp
              </a>
              <a href="${mailtoUrl}" class="btn btn-sm btn-dark px-3 py-2 fw-bold">
                <i class="bi bi-envelope-fill me-1"></i> Send via Email
              </a>
            </div>
          `;
          targetAlert.classList.remove('d-none');
          targetAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. Quick WhatsApp Helper Trigger & Floating Questions Button
  // --------------------------------------------------------------------------
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const floatingQuestionsBtn = document.getElementById('floatingQuestionsBtn');

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello PD CODEWORK! I visited your website and would like to discuss a project.");
    window.open(`https://wa.me/919657847967?text=${msg}`, '_blank');
  };

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', openWhatsApp);
  }

  if (floatingQuestionsBtn) {
    floatingQuestionsBtn.addEventListener('click', openWhatsApp);
  }

  // --------------------------------------------------------------------------
  // 10. Portfolio Filter Tabs (projects.html)
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const projectItems = document.querySelectorAll('.project-item');

  if (filterBtns.length > 0 && projectItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle Active State on Buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

});

