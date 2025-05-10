# Content Model & Slug Schema  
> Sprint 2 – Task T3 · Dev-AI hand-off  
> Fonte: sitemap, wireframe low-fi, persona insights, design tokens  

---

## 1 · Mappa dei Content Type

| # | Content Type     | Cardinalità | Finalità UX                                                                |
|---|------------------|-------------|----------------------------------------------------------------------------|
| 1 | **homePage**     | Singleton   | Hero personale, UVP, overview case-studies & CTA principale                |
| 2 | **caseStudy**    | Collezione  | Storytelling di progetto → prova di competenza / risultato                 |
| 3 | **blogPost**     | Collezione  | Approfondimenti, SEO long-tail, nurturing                                  |
| 4 | **aboutPage**    | Singleton   | Bio estesa, competenze, valori                                             |
| 5 | **contactPage**  | Singleton   | Form contatto, canali social, CTA secondario                               |
| 6 | **notFoundPage** | Singleton   | 404 personalizzata + redirect CTA                                          |

---

## 2 · Schema Slug / URL

| Content Type  | Pattern slug                           | Esempio URL                                   |
|---------------|----------------------------------------|-----------------------------------------------|
| homePage      | `/`                                    | `/`                                           |
| caseStudy     | `case-studies/:slug/`                  | `/case-studies/acme-growth-redesign/`         |
| blogPost      | `blog/:yyyy/:mm/:slug/`                | `/blog/2025/04/ai-assisted-research/`         |
| aboutPage     | `/about/`                              | `/about/`                                     |
| contactPage   | `/contact/`                            | `/contact/`                                   |
| notFoundPage  | `/404.html` (o route catch-all)        | `/404.html`                                   |

> Lo **slug** è generato in *kebab-case* a partire dal campo `title`.

---

## 3 · Reference Campi (Front-Matter)

### 3.1 · **homePage** (singleton)

| Campo            | Tipo             | Required | Descrizione                                          |
|------------------|------------------|----------|------------------------------------------------------|
| `layout`         | string           | ✔︎       | Template, es. `home`                                 |
| `title`          | string           | ✔︎       | `<title>` SEO (≤ 60 car.)                            |
| `description`    | string           | ✔︎       | Meta description (≤ 160 car.)                        |
| `hero_heading`   | string (md)      | ✔︎       | UVP bold, supporta `<br>`                            |
| `hero_subcopy`   | string (md)      | —        | Sottotitolo / proof point                            |
| `primary_cta`    | object           | ✔︎       | `{ label, url }`                                     |
| `case_highlight` | array<string>    | —        | 3 ID di case-study da mostrare                       |
| `blog_highlight` | array<string>    | —        | ID ultimi 3 post                                     |
| `seo_image`      | string (path)    | —        | Social card                                          |

---

### 3.2 · **caseStudy**

| Campo           | Tipo               | Required | Descrizione                                                    |
|-----------------|--------------------|----------|----------------------------------------------------------------|
| `layout`        | string             | ✔︎       | `case-study`                                                   |
| `title`         | string             | ✔︎       | H1 + `<title>`                                                 |
| `excerpt`       | string             | ✔︎       | Teaser (≤ 200 car.)                                            |
| `date`          | ISO date           | ✔︎       | Pubblicazione                                                  |
| `client`        | string             | ✔︎       | Nome cliente / azienda                                         |
| `services`      | array<string>      | ✔︎       | Tag controllati: `UX`, `Frontend`, `API`, …                    |
| `metrics`       | array<object>      | —        | `{ label, value }` es. `NDR +12 %`                             |
| `persona_jtbd`  | string (enum)      | —        | Collega alla persona/Job-To-Be-Done                            |
| `cover_image`   | string (path)      | —        | Hero visual                                                    |
| `gallery`       | array<string>      | —        | Immagini extra                                                 |
| `body`          | markdown / MDX     | ✔︎       | Contenuto lungo                                                |

---

### 3.3 · **blogPost**

| Campo         | Tipo            | Required | Descrizione                           |
|---------------|-----------------|----------|---------------------------------------|
| `layout`      | string          | ✔︎       | `blog-post`                           |
| `title`       | string          | ✔︎       | H1 + `<title>`                        |
| `description` | string          | ✔︎       | Meta description                      |
| `date`        | ISO date        | ✔︎       | Pubblicazione                         |
| `tags`        | array<string>   | —        | ≤ 5 keyword SEO                       |
| `readingTime` | number          | —        | Minuti (calcolato in build se assente)|
| `cover_image` | string (path)   | —        | Hero                                  |
| `body`        | markdown / MDX  | ✔︎       |                                       |

---

### 3.4 · **aboutPage**

| Campo       | Tipo         | Required | Descrizione                     |
|-------------|--------------|----------|---------------------------------|
| `layout`    | string       | ✔︎       | `about`                         |
| `title`     | string       | ✔︎       | H1 + `<title>`                  |
| `description`| string      | ✔︎       | Meta                            |
| `bio_md`    | path (md)    | ✔︎       | Corpo testo markdown            |
| `skills`    | array<string>| —        | Es. `React`, `Next.js`, …       |
| `avatar`    | string (path)| —        | Ritratto                        |

---

### 3.5 · **contactPage**

| Campo       | Tipo            | Required | Descrizione                                    |
|-------------|-----------------|----------|------------------------------------------------|
| `layout`    | string          | ✔︎       | `contact`                                      |
| `title`     | string          | ✔︎       |                                                |
| `description`| string         | ✔︎       |                                                |
| `form_id`   | string          | ✔︎       | Provider form (Netlify, Formspree, ecc.)       |
| `channels`  | array<object>   | —        | `{ type: "email" \| "linkedin", url }`         |

---

### 3.6 · **notFoundPage**

| Campo   | Tipo   | Required | Descrizione           |
|---------|--------|----------|-----------------------|
| `layout`| string | ✔︎       | `404`                 |
| `title` | string | ✔︎       |                      |
| `cta`   | object | —        | `{ label, url }`      |

---

## 4 · Linee Guida per i Template

* Ogni file di contenuto utilizza **Front-Matter YAML** con i campi sopra definiti.  
* I valori booleani/numerici seguono lo standard YAML core schema.  
* Le immagini vanno in `/public/img/...` e i path nel front-matter sono **relativi alla root**.  
* Per i content-type singleton (`homePage`, `aboutPage`, `contactPage`, `notFoundPage`) il filename consigliato è `index.md` nella rispettiva cartella.  
* Slug di `caseStudy` e `blogPost` sono ricavati automaticamente dal nome file (kebab-case).  

---

## 5 · Design Token Reference (estratto)

| Token path                         | Valore  |
|-----------------------------------|---------|
| `color.brand.primary.600`         | `#1869CC` |
| `color.brand.primary.900`         | `#0A1D37` |
| `color.brand.accent.500`          | `#C0FF33` |
| `color.feedback.error.500`        | `#E02424` |
| `color.feedback.success.500`      | `#26A269` |

Import JS/TS:

```js
import tokens from "@/tokens.json";
const primary = tokens.color.brand.primary["600"]; // #1869CC