# Omega Pharmacy — Landing Page

A responsive, single-page marketing site for **Omega Pharmacy**.

The goal was to deliver a polished, production-style landing page: clear information hierarchy, pharma-appropriate visual design, smooth interactions, and full responsiveness from mobile through desktop.

---

## Live preview

Run the app locally (see [Getting started](#getting-started)) and open the URL shown in the terminal (typically `http://localhost:5173`).

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| Icons | [Lucide React](https://lucide.dev/) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

No backend or external APIs — the contact form is handled on the client with local state and a success message.

---

## Features

- **Single-page layout** — Home, About, Products, and Contact sections with in-page navigation
- **Smooth scrolling** — Anchor links scroll to sections with a fixed navbar offset
- **Scroll-triggered animations** — Reusable `ScrollReveal` for fade/slide-in content as sections enter the viewport
- **Hero section** — Headline, trust badge, dual CTAs, stats, and a product collage (vial + floating capsule)
- **About** — Mission copy and four feature cards (quality, innovation, reach, compliance)
- **Products** — Three cards (Capsule, Injectable, Syrup) with local assets and hover effects
- **CTA band** — Gradient call-to-action between products and contact
- **Contact** — Name, email, and message form with validation UX and success feedback
- **Footer** — Address, phone, quick links, and copyright
- **Responsive UI** — Mobile hamburger menu, stacked layouts on small screens, grids on larger breakpoints

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)
- npm (comes with Node.js)

### Install and run

```bash
# Clone or download the repository, then:
cd assignment

npm install
npm run dev
```

### Other scripts

```bash
npm run build    # Production build → dist/
npm run preview  # Serve the production build locally
npm run lint     # Run ESLint
```

---

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed header, mobile menu, nav links
│   ├── Hero.jsx         # Hero copy, CTAs, stats
│   ├── HeroCollage.jsx  # Hero product imagery
│   ├── About.jsx        # Mission + feature cards
│   ├── Products.jsx     # Product showcase cards
│   ├── CTA.jsx          # Mid-page call-to-action
│   ├── Contact.jsx      # Contact form + details
│   ├── Footer.jsx       # Footer links and info
│   └── ScrollReveal.jsx # Intersection-based reveal animations
├── assets/
│   ├── capsule.png
│   ├── vial.png
│   └── syrup.png
├── utils/
│   └── scrollTo.js      # Smooth scroll helper (navbar offset)
├── App.jsx              # Page composition + global anchor handling
├── main.jsx
└── index.css            # Theme tokens, animations, Tailwind imports
```

---

## Design notes

- **Palette** — White backgrounds, pharma blue gradients (`pharma-*` tokens), slate grays for body text
- **Typography** — Inter, strong headings, relaxed body line-height
- **Motion** — Subtle float on hero assets, card hover lift/scale/shadow, transition utilities on interactive elements
- **Accessibility** — Semantic sections, `scroll-mt-*` for fixed header clearance, meaningful `alt` text on product images

---

## Author

**Harshit Sharma**  
_harshitr2308@gmail.com / https://www.linkedin.com/in/harshitcode/._

---

## License

This project was created for evaluation purposes. All rights reserved unless otherwise stated by the assigning companyy.
ss