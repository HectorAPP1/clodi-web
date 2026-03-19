# Clodi — Landing Page

Landing page oficial de [Clodi](https://clodi.cl), plataforma HSE para gestión de seguridad industrial, riesgos laborales, EPP y auditorías. Construida por ingenieros en prevención de riesgos para el mercado chileno.

## Stack

- **HTML5** + **Tailwind CSS** 3.3.0 vía CDN
- **CSS custom** → `css/styles.css`
- **JS vanilla** → `js/main.js`
- **Formulario** → Brevo (Sendinblue) con reCAPTCHA v3
- **Iconos** → Lucide + Material Symbols (Google)
- **Mascota** → Clo 🦙 (imágenes Gemini AI)

## Estructura

```
├── index.html                  # Página única
├── manifest.json               # PWA manifest
├── css/
│   └── styles.css              # Estilos custom
├── js/
│   ├── main.js                 # Lógica principal
│   └── tailwind.config.js      # Configuración de colores
└── assets/
    ├── clodilogo.svg           # Logo horizontal
    ├── clodi_ISOTIPO.svg       # Isotipo / favicon
    ├── Gemini_Generated_Image_oh7qvwoh7qvwoh7q.png  # Clo de frente
    ├── Clo izquierda.png       # Clo mirando izquierda
    └── Clo derecha.png         # Clo mirando derecha
```

## Secciones

| Sección | ID | Descripción |
|---------|-----|-------------|
| Hero | — | Titular, CTA, KPI cards animados, mascota Clo |
| Módulos | `#modulos` | EPP, Matriz IPER, Inspecciones, IA Asistida — con mockups interactivos |
| Comparativa | `#comparativa` | Clodi vs. Gestión Manual — tabla con Clo al costado |
| Normativa | `#plataforma` | DS 44, DS 594, Ley 16.744 — features cards |
| CTA | `#lideres` | "Hecha por ingenieros, para ingenieros" |
| Footer | — | Links, redes sociales, copyright |

## Funcionalidades

- **i18n ES/EN** — toggle bandera con traducciones completas vía `data-i18n`
- **Menú hamburger** — slide-down animado en móvil con links a secciones y botón de contacto
- **Tabs de módulos** — cambia texto + mockup de app simultáneamente
- **Animación KPI** — contadores y barras de progreso animados desde 0 al cargar
- **Modal de contacto** — formulario Brevo integrado
- **Mascota Clo** — animación flotante en hero, decorativa en otras secciones

## Desarrollo local

```bash
git clone https://github.com/HectorAPP1/Landing-Clodi.git
cd Landing-Clodi
# Abrir index.html con Live Server (VS Code) o cualquier servidor local
```

> **Nota:** El reCAPTCHA del formulario solo funciona en el dominio `clodi.cl`. En localhost aparecerá un error 401 que es esperado y no afecta el desarrollo.

## Normativa cubierta

- **DS 44** — Reglamento de seguridad minera
- **DS 594** — Higiene industrial / agentes físicos, químicos y biológicos
- **Ley 16.744** — Accidentes del trabajo y enfermedades profesionales
- **ISO 45001** — Estándar base de gestión SST

## Autor

Desarrollado por el equipo Clodi — ingenieros en prevención de riesgos.
