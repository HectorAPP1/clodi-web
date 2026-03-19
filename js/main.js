// ── Lucide icons ──────────────────────────────────────────────
if (typeof lucide !== "undefined") lucide.createIcons();

// ── Traducciones ──────────────────────────────────────────────
const translations = {
    es: {
        nav: { product: "Producto", solutions: "Soluciones", pricing: "Normativa", about: "Nosotros", login: "Iniciar sesión", cta: "Contacta ventas" },
        hero: {
            badge: "Plataforma HSE activa",
            h1a: "Seguridad Industrial",
            h1b: "Inteligente.",
            sub: "Digitaliza tu gestión HSE — riesgos, EPP y auditorías — en una plataforma que cumple con la normativa chilena y opera en tiempo real.",
            cta1: "Solicita tu demo", cta2: "Ver especificaciones"
        },
        stats: {
            s1v: "100%", s1l: "Cumplimiento normativo",
            s2v: "<2min",  s2l: "Reportes generados",
            s3v: "ISO 45001", s3l: "Estándar base"
        },
        features: {
            title: "Diseñado para", highlight: "la normativa chilena.",
            sub: "DS 44, DS 594 y Ley 16.744 integrados en cada módulo. Evidencia lista para el inspector, sin preparación extra.",
            f1t: "Cumplimiento DS 44 y Ley 16.744", f1p: "Checklist de DS 44 integrado con puntaje automático. Registro de accidentes y enfermedades laborales según Ley 16.744 con trazabilidad completa para la SUSESO y la ACHS.",
            f2t: "Higiene Industrial DS 594", f2p: "Registra exposiciones a agentes físicos, químicos y biológicos. Genera la evidencia exigida por el DS 594 para fiscalizaciones del ISP y SEREMI de Salud.",
            f3t: "Prevención activa de riesgos laborales", f3p: "Matriz IPER según metodología William Fine. Identifica peligros, cuantifica el riesgo residual y genera el Plan de Acción automáticamente. Evidencia exportable en segundos ante cualquier fiscalización de la DT o SEREMI."
        },
        cta: {
            title: "Hecha por ingenieros,", highlight: "para ingenieros.",
            sub: "Clodi nació en faena. Construida por ingenieros en prevención de riesgos que entienden lo que fiscaliza la DT. Simple, digital y lista para usar desde el día uno.",
            btn1: "Solicitar acceso", btn2: "Hablar con el equipo"
        },
        footer: {
            desc: "Software y app de gestión de seguridad industrial (HSE) para la prevención de riesgos laborales en Chile y Latam.",
            col1: "Soluciones", l1: ["Matriz de Riesgos", "Control de EPP", "Auditorías", "Fiscalización Digital"],
            col2: "Empresa",    l2: ["Acerca de Clodi", "Precios", "Podcast", "Contacto"],
            col3: "Recursos",   l3: ["Guías HSE", "Plantillas", "Soporte", "Estado del servicio"],
            copy: "© 2026 Clodi Inc. Todos los derechos reservados."
        }
    },
    en: {
        nav: { product: "Product", solutions: "Solutions", pricing: "Compliance", about: "About", login: "Sign In", cta: "Contact Sales" },
        hero: {
            badge: "HSE Platform Active",
            h1a: "Industrial Safety",
            h1b: "Intelligent.",
            sub: "Digitize your HSE management — risks, PPE, and audits — in a platform that meets international standards and operates in real time.",
            cta1: "Request a demo", cta2: "View specifications"
        },
        stats: {
            s1v: "100%", s1l: "Regulatory compliance",
            s2v: "<2min",  s2l: "Reports generated",
            s3v: "ISO 45001", s3l: "Base standard"
        },
        features: {
            title: "Built for", highlight: "Chilean compliance.",
            sub: "DS 44, DS 594 and Law 16,744 integrated into every module. Evidence ready for inspectors, no extra prep.",
            f1t: "DS 44 & Law 16,744 Compliance", f1p: "Integrated DS 44 checklist with automatic scoring. Accident and occupational disease records per Law 16,744 with full traceability for SUSESO and ACHS.",
            f2t: "Industrial Hygiene DS 594", f2p: "Log exposures to physical, chemical and biological agents. Generate evidence required by DS 594 for ISP and SEREMI Health inspections.",
            f3t: "Active Occupational Risk Prevention", f3p: "IPER Risk Matrix using the William Fine method. Identify hazards, quantify residual risk, and auto-generate the Action Plan. Export evidence in seconds for any DT or SEREMI inspection."
        },
        cta: {
            title: "Built by engineers,", highlight: "for the field.",
            sub: "Clodi was born on the job site. Built by safety engineers who know what inspectors look for. Simple, digital, and ready from day one.",
            btn1: "Request Access", btn2: "Talk to the Team"
        },
        footer: {
            desc: "Industrial safety management software and app (HSE) for occupational risk prevention across Chile and Latam.",
            col1: "Solutions", l1: ["Risk Matrix", "PPE Control", "Audits", "Digital Inspection"],
            col2: "Company",   l2: ["About Clodi", "Pricing", "Podcast", "Contact"],
            col3: "Resources", l3: ["HSE Guides", "Templates", "Support", "Service Status"],
            copy: "© 2026 Clodi Inc. All rights reserved."
        }
    }
};

const flagSVG = {
    es: `<rect width="24" height="12" fill="#ffffff"/>
         <rect y="12" width="24" height="12" fill="#d52b1e"/>
         <rect width="12" height="12" fill="#0039a6"/>
         <path d="M6 3l.6 1.8h1.8l-1.5 1.2.6 1.8-1.5-1.2-1.5 1.2.6-1.8-1.5-1.2h1.8z" fill="#ffffff"/>`,
    en: `<rect width="24" height="24" fill="#B22234"/>
         <rect y="1.85" width="24" height="1.85" fill="#fff"/>
         <rect y="5.55" width="24" height="1.85" fill="#fff"/>
         <rect y="9.25" width="24" height="1.85" fill="#fff"/>
         <rect y="12.95" width="24" height="1.85" fill="#fff"/>
         <rect y="16.65" width="24" height="1.85" fill="#fff"/>
         <rect y="20.35" width="24" height="1.85" fill="#fff"/>
         <rect width="10.3" height="12.95" fill="#3C3B6E"/>`
};

let currentLang = "es";

function resolve(obj, path) {
    return path.split(".").reduce((v, k) => v?.[k], obj);
}

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const val = resolve(t, el.getAttribute("data-i18n"));
        if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-list]").forEach(el => {
        const arr = resolve(t, el.getAttribute("data-i18n-list"));
        if (Array.isArray(arr)) {
            el.querySelectorAll("li a").forEach((a, i) => {
                if (arr[i]) a.textContent = arr[i];
            });
        }
    });
    document.getElementById("lang-label").textContent = lang.toUpperCase();
    document.getElementById("lang-flag").innerHTML = flagSVG[lang];
}

function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";
    applyTranslations(currentLang);
}

// ── Modal de contacto ─────────────────────────────────────────
function openContactModal(prefillEmail) {
    if (prefillEmail) {
        const modalEmail = document.getElementById("EMAIL");
        if (modalEmail) modalEmail.value = prefillEmail;
    }
    document.getElementById("contactModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeContactModal() {
    document.getElementById("contactModal").classList.add("hidden");
    document.body.style.overflow = "auto";
}

// ── Tabs de módulos ───────────────────────────────────────────
function switchModule(name) {
    document.querySelectorAll(".module-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".module-mockup").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".module-tab").forEach(t => t.classList.remove("active"));
    const panel = document.getElementById("panel-" + name);
    if (panel) panel.classList.add("active");
    const mockup = document.getElementById("mockup-" + name);
    if (mockup) mockup.classList.add("active");
    const tab = document.querySelector(`[data-tab="${name}"]`);
    if (tab) tab.classList.add("active");
}

// ── Menú móvil ────────────────────────────────────────────────
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("mobile-menu-icon");
    const isOpen = menu.classList.toggle("open");
    icon.textContent = isOpen ? "close" : "menu";
    menu.setAttribute("aria-hidden", !isOpen);
}

function closeMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("mobile-menu-icon");
    menu.classList.remove("open");
    icon.textContent = "menu";
    menu.setAttribute("aria-hidden", "true");
}

// ── Animación contadores KPI ──────────────────────────────────
function animateKPIs() {
    const DURATION = 1600;

    // Barras: arrancan en 0 y transicionan al valor real
    document.querySelectorAll("[data-bar]").forEach(el => {
        const target = el.getAttribute("data-bar");
        el.style.width = "0%";
        el.style.transition = `width ${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        requestAnimationFrame(() => requestAnimationFrame(() => { el.style.width = target; }));
    });

    // Números: cuentan desde 0 hasta el valor objetivo
    document.querySelectorAll("[data-count]").forEach(el => {
        const target  = parseFloat(el.getAttribute("data-count"));
        const format  = el.getAttribute("data-count-format") || "int";
        const start   = performance.now();

        function fmt(v) {
            if (format === "decimal")  return v.toFixed(1) + "%";
            if (format === "percent")  return Math.floor(v) + "%";
            if (format === "money")    return "$" + Math.floor(v).toLocaleString("es-CL");
            return Math.floor(v).toString();
        }

        function tick(now) {
            const p    = Math.min((now - start) / DURATION, 1);
            const ease = 1 - Math.pow(1 - p, 3);   // ease-out cubic
            el.textContent = fmt(target * ease);
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}

window.addEventListener("load", animateKPIs);

// ── Sticky nav shadow on scroll ───────────────────────────────
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("shadow-sm", window.scrollY > 10);
});
