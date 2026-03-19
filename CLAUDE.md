# Clodi — Landing Page

## Stack
- HTML5 + Tailwind CSS CDN 3.3.0 (sin build step)
- CSS custom en `css/styles.css`
- JS vanilla en `js/main.js` + `js/tailwind.config.js`
- Formulario de contacto: Brevo (Sendinblue) embed con reCAPTCHA v3
- Iconos: Lucide UMD (`unpkg.com/lucide@0.263.1/dist/umd/lucide.min.js`) + Material Symbols

## Estructura
```
index.html          # Página principal (única)
css/styles.css      # Estilos custom (Tailwind via CDN)
js/main.js          # Lógica: i18n, modales, tabs, animaciones KPI, menú móvil
js/tailwind.config.js # Colores: primary=#5840e3, teal=#14b8a6
assets/
  clodilogo.svg             # Logo horizontal
  clodi_ISOTIPO.svg         # Isotipo (favicon)
  Gemini_Generated_Image_oh7qvwoh7qvwoh7q.png  # Clo de frente (hero)
  Clo izquierda.png         # Clo mirando a la izquierda
  Clo derecha.png           # Clo mirando a la derecha
manifest.json       # PWA manifest
```

## Secciones (con IDs para navegación)
| ID | Sección |
|----|---------|
| `#modulos` | Módulos de la app (EPP, IPER, Inspecciones, IA) |
| `#comparativa` | Clodi vs. Gestión Manual |
| `#plataforma` | Features / Normativa chilena (DS 44, DS 594, Ley 16.744) |
| `#lideres` | CTA final |

## Sistema i18n
- `translations` en `main.js` con claves ES/EN
- `data-i18n="key.path"` en elementos HTML → `applyTranslations(lang)`
- `data-i18n-list="key.path"` para listas de links
- Toggle: bandera Chile ↔ USA en navbar

## Patrones CSS clave
- `.module-panel` / `.module-panel.active` → `display:none/block` para tabs de módulos
- `.module-mockup` / `.module-mockup.active` → mismo patrón para mockups por módulo
- `.mobile-menu-panel` / `.mobile-menu-panel.open` → menú hamburger con max-height transition
- `.mascot-img` → `mix-blend-mode: multiply` para remover fondo blanco de imágenes Gemini
- `.mascot-float` → animación CSS flotante 5s

## Animaciones KPI (al cargar página)
- `data-count="N"` + `data-count-format="int|decimal|percent|money"` → contador ease-out cúbico
- `data-bar="X%"` → barra de progreso transición 1.6s desde 0%
- Función: `animateKPIs()` en `main.js`, dispara en `window.load`

## Mascota "Clo"
- Hero: frente, con animación float + overlay blanco bottom-right (cubre watermark Gemini)
- Comparativa: `Clo izquierda.png`, `absolute right` con `overflow-hidden` para cortar pies/watermark
- Features: frente con `scaleX(-1)` mirando al contenido

## Notas importantes
- reCAPTCHA 401 en localhost es normal — el site key está registrado para `clodi.cl`
- Tailwind CDN warning en consola es esperado en desarrollo
- `lucide.createIcons()` tiene guardia `if (typeof lucide !== "undefined")` por si falla la CDN
- Menú hamburger oculta "Contacta ventas" en móvil (`hidden lg:block`)
