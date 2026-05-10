/* =========================================================
   Manish Academy — Front-end JS
   Handles partials injection, nav, reveal, FAQ, forms, filters.
   ========================================================= */
(function () {
  "use strict";

  const BRAND = {
    name: "Manish Academy",
    tagline: "Coaching Institute",
    phone: "+91 98765 43210",
    phoneTel: "+919876543210",
    whatsapp: "919876543210",
    email: "admissions@manishacademy.in",
    address: "Education Tower, Sector 14, Civil Lines, Prayagraj, UP 211001",
  };

  // ---------- Icons (inline SVG) ----------
  const ic = {
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.88 1.21 3.08.15.2 2.09 3.2 5.07 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2.17c-5.46 0-9.88 4.42-9.88 9.88 0 1.74.45 3.44 1.31 4.93L2 22l5.15-1.35a9.86 9.86 0 0 0 4.89 1.24h.01c5.46 0 9.88-4.42 9.88-9.88 0-2.64-1.03-5.12-2.89-6.99a9.84 9.84 0 0 0-7-2.9zm0 18.05h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.53 3.69-8.21 8.22-8.21a8.16 8.16 0 0 1 5.81 2.41 8.17 8.17 0 0 1 2.41 5.81c0 4.53-3.69 8.2-8.21 8.2z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="14" y2="17"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    fb: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2V2.1c-.3 0-1.5-.1-2.8-.1C11.4 2 10 3.7 10 6.8V10H7v4h3v8h3z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    yt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C15.8 4 12 4 12 4s-3.8 0-6.8.3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.4v1.5c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.8.3 6.8.3s3.8 0 6.8-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.5C22 8.8 21.8 7.2 21.6 7.2zM9.9 14.3V8l5.2 3.2-5.2 3.1z"/></svg>`,
    tw: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.4 8.47L23 22h-6.875l-4.93-6.23L5.4 22H2.142l7.93-9.06L2 2h7.05l4.455 5.89L18.244 2Zm-1.205 18.19h1.886L7.08 3.7H5.082L17.04 20.19Z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  };

  // Logo mark (graduation cap)
  const logoSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4"/><path d="M22 10v6"/></svg>`;

  // ---------- Header ----------
  const NAV_ITEMS = [
    { href: "index.html", label: "Home", match: ["", "index.html"] },
    { href: "about.html", label: "About Us", match: ["about.html"] },
    { href: "courses.html", label: "Courses", match: ["courses.html"] },
    { href: "results.html", label: "Results", match: ["results.html"] },
    { href: "faculty.html", label: "Faculty", match: ["faculty.html"] },
    { href: "contact.html", label: "Contact", match: ["contact.html"] },
  ];

  function currentPage() {
    const path = window.location.pathname.split("/").pop() || "";
    return path.toLowerCase();
  }

  function buildHeader() {
    const page = currentPage();
    const links = NAV_ITEMS.map((item) => {
      const active = item.match.includes(page) ? "is-active" : "";
      return `<li><a class="nav__link ${active}" href="${item.href}">${item.label}</a></li>`;
    }).join("");

    const mobileLinks = NAV_ITEMS.map((item) => {
      const active = item.match.includes(page) ? "is-active" : "";
      return `<a class="mobile-nav__link ${active}" href="${item.href}">${item.label}${ic.chevron}</a>`;
    }).join("");

    return `
      <header class="nav" id="siteNav" role="banner">
        <div class="container nav__row">
          <a class="brand" href="index.html" aria-label="${BRAND.name} home">
            <span class="brand__mark" aria-hidden="true">${logoSvg}</span>
            <span class="brand__name">${BRAND.name}<small>${BRAND.tagline}</small></span>
          </a>
          <nav aria-label="Primary">
            <ul class="nav__links">${links}</ul>
          </nav>
          <div class="nav__cta">
            <a class="nav__phone" href="tel:${BRAND.phoneTel}">${ic.phone}${BRAND.phone}</a>
            <a class="btn btn-primary btn-sm" href="contact.html">Book a Counselling</a>
            <button class="nav__burger" id="navBurger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">${ic.menu}</button>
          </div>
        </div>
        <div class="mobile-nav" id="mobileNav" aria-hidden="true">
          <div class="mobile-nav__links">${mobileLinks}</div>
          <div class="mobile-nav__cta">
            <a class="btn btn-dark" href="tel:${BRAND.phoneTel}">${ic.phone} Call ${BRAND.phone}</a>
            <a class="btn btn-primary" href="contact.html">Book a Free Counselling</a>
          </div>
        </div>
      </header>`;
  }

  // ---------- Footer ----------
  function buildFooter() {
    return `
      <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="footer__top">
            <div class="footer__brand">
              <a class="brand" href="index.html" aria-label="${BRAND.name} home">
                <span class="brand__mark" aria-hidden="true">${logoSvg}</span>
                <span class="brand__name" style="color:#fff">${BRAND.name}<small>${BRAND.tagline}</small></span>
              </a>
              <p class="footer__about">Preparing serious aspirants for IIT-JEE, NEET, CUET, NDA and Foundation since 2008. Small batches, strong faculty, measurable results.</p>
              <div class="footer__social" aria-label="Social links">
                <a href="#" aria-label="Facebook">${ic.fb}</a>
                <a href="#" aria-label="Instagram">${ic.ig}</a>
                <a href="#" aria-label="YouTube">${ic.yt}</a>
                <a href="#" aria-label="Twitter">${ic.tw}</a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul class="footer__links">
                <li><a href="about.html">About Us</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="faculty.html">Our Faculty</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="contact.html">Admissions</a></li>
              </ul>
            </div>
            <div>
              <h4>Programs</h4>
              <ul class="footer__links">
                <li><a href="courses.html#jee">IIT-JEE (Main &amp; Advanced)</a></li>
                <li><a href="courses.html#neet">NEET UG</a></li>
                <li><a href="courses.html#cuet">CUET UG</a></li>
                <li><a href="courses.html#nda">NDA &amp; Defence</a></li>
                <li><a href="courses.html#foundation">Foundation (9th&ndash;12th)</a></li>
              </ul>
            </div>
            <div>
              <h4>Get in Touch</h4>
              <ul class="footer__contact">
                <li>${ic.pin}<span>${BRAND.address}</span></li>
                <li>${ic.phone}<a href="tel:${BRAND.phoneTel}">${BRAND.phone}</a></li>
                <li>${ic.mail}<a href="mailto:${BRAND.email}">${BRAND.email}</a></li>
                <li>${ic.clock}<span>Mon&ndash;Sat, 8:00 AM &ndash; 8:30 PM</span></li>
              </ul>
            </div>
          </div>
          <div class="footer__bottom">
            <p>&copy; <span id="year"></span> ${BRAND.name}. All rights reserved.</p>
            <p><a href="#">Privacy Policy</a> &middot; <a href="#">Terms of Use</a></p>
          </div>
        </div>
      </footer>`;
  }

  // ---------- Floating buttons ----------
  function buildFloats() {
    const waMsg = encodeURIComponent("Hi Manish Academy, I want to know about admissions.");
    return `
      <a class="float-call" href="tel:${BRAND.phoneTel}" aria-label="Call ${BRAND.name}">${ic.phone}</a>
      <a class="float-wa" href="https://wa.me/${BRAND.whatsapp}?text=${waMsg}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ic.whatsapp}</a>`;
  }

  // ---------- Mount partials ----------
  function mount() {
    const header = document.getElementById("siteHeader");
    if (header) header.outerHTML = buildHeader();
    const footer = document.getElementById("siteFooter");
    if (footer) footer.outerHTML = buildFooter();
    const floats = document.getElementById("siteFloats");
    if (floats) floats.outerHTML = buildFloats();

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Nav behavior ----------
  function initNav() {
    const nav = document.getElementById("siteNav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const burger = document.getElementById("navBurger");
    const mobile = document.getElementById("mobileNav");
    if (burger && mobile) {
      burger.addEventListener("click", () => {
        const isOpen = mobile.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(isOpen));
        burger.innerHTML = isOpen ? ic.close : ic.menu;
        mobile.setAttribute("aria-hidden", String(!isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
      });
      mobile.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          mobile.classList.remove("is-open");
          burger.innerHTML = ic.menu;
          burger.setAttribute("aria-expanded", "false");
          mobile.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        }
      });
    }
  }

  // ---------- Reveal on scroll ----------
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  // ---------- FAQ ----------
  function initFaq() {
    document.querySelectorAll(".faq__item").forEach((item) => {
      const q = item.querySelector(".faq__q");
      const a = item.querySelector(".faq__a");
      if (!q || !a) return;
      q.setAttribute("aria-expanded", "false");
      q.addEventListener("click", () => {
        const open = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", String(open));
        if (open) {
          a.style.maxHeight = a.scrollHeight + "px";
        } else {
          a.style.maxHeight = "0px";
        }
      });
    });
  }

  // ---------- Results filters ----------
  function initFilters() {
    const chips = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-filter-item]");
    if (!chips.length || !items.length) return;
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const target = chip.getAttribute("data-filter");
        items.forEach((el) => {
          const tags = (el.getAttribute("data-filter-item") || "").split(" ");
          const show = target === "all" || tags.includes(target);
          el.style.display = show ? "" : "none";
        });
      });
    });
  }

  // ---------- Form ----------
  function initForm() {
    const form = document.getElementById("inquiryForm");
    if (!form) return;
    const alertBox = form.querySelector(".form-alert");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll(".field").forEach((f) => f.classList.remove("has-error"));

      const required = form.querySelectorAll("[data-required]");
      required.forEach((el) => {
        const v = (el.value || "").trim();
        if (!v) {
          valid = false;
          el.closest(".field")?.classList.add("has-error");
        }
        if (el.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
          valid = false;
          el.closest(".field")?.classList.add("has-error");
        }
        if (el.type === "tel" && v && !/^[\d\s+()-]{7,}$/.test(v)) {
          valid = false;
          el.closest(".field")?.classList.add("has-error");
        }
      });

      if (!valid) return;

      if (alertBox) {
        alertBox.classList.add("is-visible");
        alertBox.textContent = "Thank you! We have received your inquiry. Our counsellor will contact you within 24 hours.";
      }
      form.reset();
      setTimeout(() => alertBox && alertBox.classList.remove("is-visible"), 6000);
    });
  }

  // ---------- Run ----------
  document.addEventListener("DOMContentLoaded", () => {
    mount();
    initNav();
    initReveal();
    initFaq();
    initFilters();
    initForm();
  });
})();
