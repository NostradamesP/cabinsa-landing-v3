# CABINSA SRL — Landing Page

> Movimiento de tierra, relleno, nivelación y alquiler de equipos pesados con operador · Earthwork, site preparation and heavy equipment rental

Landing page corporativa (one-page) para **CABINSA SRL**, empresa de la República Dominicana dedicada al movimiento de tierra, relleno y nivelación de terrenos, así como al alquiler de equipos pesados con operador. Sitio 100% estático, sin dependencias de build.

---

## 🇪🇸 Español

### Descripción

Página de presentación empresarial en una sola vista con las siguientes secciones:

- **Hero:** "Del terreno bruto al terreno listo para construir" con métricas en 3 pasos.
- **Qué hacemos:** preparación inicial, relleno y nivelación, soporte operativo.
- **Proceso:** 4 pasos (evaluación del sitio, planificación y movilización, ejecución en campo, terminación y entrega).
- **Equipos y personal:** retroexcavadoras, palas, camiones, compactadores y motoniveladoras.
- **Servicios:** relleno de terrenos, nivelación y aplanado, movimiento de material, preparación de solares, compactación y alquiler con personal.
- **Beneficios:** precisión, rendimiento, estabilidad y comunicación.
- **Contacto:** formulario de cotización que envía la solicitud por WhatsApp.

### Stack

- HTML5 + CSS3 + JavaScript (vanilla), sin framework ni gestor de paquetes.
- Tipografía **Inter** (Google Fonts) e imágenes de Unsplash.

### Estructura

```txt
cabinsa-landing-v3/
├── index.html              # Página completa
├── assets/
│   └── cabinsa-logo.png    # Logo CABINSA SRL
├── css/
│   └── styles.css          # Estilos (variables de marca, responsive)
└── js/
    └── app.js              # Menú, animaciones reveal y formulario WhatsApp
```

### Configuración del WhatsApp

El número se configura en `js/app.js`:

```js
const WHATSAPP_NUMBER = "18099797867";
```

Debe estar en formato internacional, sin `+`, espacios ni guiones.

### Contacto

- Teléfono: `+1 809-979-7867`
- Instagram: [@cabinsasrl](https://instagram.com/cabinsasrl)

### Despliegue

Al ser un sitio estático, puede publicarse en cualquier hosting (GitHub Pages, Netlify, Vercel, etc.) copiando el contenido de la raíz.

---

## 🇺🇸 English

### Overview

Corporate one-page landing site for **CABINSA SRL**, a Dominican Republic company specializing in earthwork, fill, leveling and heavy equipment rental with operator. Fully static site with no build dependencies.

Sections include hero, what we do, process, equipment & personnel, services, benefits and a WhatsApp-powered quote request form.

### Stack

- HTML5 + CSS3 + vanilla JavaScript. No framework or package manager required.
- **Inter** font (Google Fonts) and Unsplash imagery.

### Project structure

```txt
cabinsa-landing-v3/
├── index.html              # Single-page site
├── assets/
│   └── cabinsa-logo.png    # CABINSA SRL logo
├── css/
│   └── styles.css          # Styles (brand variables, responsive)
└── js/
    └── app.js              # Menu, scroll reveals and WhatsApp form
```

### WhatsApp configuration

Set the number in `js/app.js`:

```js
const WHATSAPP_NUMBER = "18099797867";
```

Use international format without `+`, spaces or dashes.

### Contact

- Phone: `+1 809-979-7867`
- Instagram: [@cabinsasrl](https://instagram.com/cabinsasrl)

### Deployment

As a static site it can be hosted anywhere (GitHub Pages, Netlify, Vercel, etc.) by uploading the root contents.

---

© CABINSA SRL
