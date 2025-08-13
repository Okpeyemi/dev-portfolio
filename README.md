# Dev Portfolio – Okpeyemi

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-149eca?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

Portfolio développeur moderne construit avec Next.js (App Router), TypeScript et Tailwind CSS. Il présente un site one‑page avec sections Hero, À propos, Compétences, Projets et Contact, une navigation fluide et une UI soignée.

Note: Ce README est basé sur une exploration rapide du dépôt. Adaptez-le si nécessaire.

---

## Aperçu

- One‑page responsive avec défilement fluide entre sections
- UI cohérente basée sur Tailwind et variables CSS
- Composants accessibles (Radix UI)
- Animations fluides (Framer Motion)
- Carrousel (Embla), graphiques (Recharts), toasts (Sonner)
- Prêt pour i18n avec next-intl
- Mode sombre via classes (next-themes prêt si nécessaire)

---

## Fonctionnalités

- Sections:
  - Accueil (Hero), À propos, Compétences, Projets, Contact
- Header avec navigation par section
- Indicateur de progression de défilement
- Liens sociaux persistants
- Layout et métadonnées SEO de base
- Tailwind configuré avec thème étendu et variables CSS

---

## Stack technique

- Framework: Next.js 15 (App Router)
- Langage: TypeScript
- UI: Tailwind CSS, Radix UI, lucide-react
- Animations: Framer Motion
- Utilitaires: class-variance-authority, tailwind-merge, clsx, date-fns
- UX: embla-carousel-react, recharts, sonner, react-day-picker, react-resizable-panels
- Formulaires: react-hook-form + @hookform/resolvers
- i18n: next-intl (optionnel), thèmes: next-themes (optionnel)

---

## Prérequis

- Node.js ≥ 18.18 (recommandé: 20 LTS)
- PNPM ou NPM (choisissez un seul gestionnaire)
  - Le dépôt contient pnpm-lock.yaml et package-lock.json; utilisez l’un ou l’autre, pas les deux.

---

## Installation

Clonez le repo puis installez les dépendances:

PNPM:
```bash
pnpm install
```

NPM:
```bash
npm install
```

---

## Lancer le projet

Développement:
```bash
npm run dev
# ou: pnpm dev
# http://localhost:3000
```

Build + production locale:
```bash
npm run build
npm start
# ou: pnpm build && pnpm start
```

Lint:
```bash
npm run lint
# ou: pnpm lint
```

Scripts disponibles (package.json):
- dev: next dev
- build: next build
- start: next start
- lint: next lint

---

## Personnalisation rapide

- Métadonnées (titre/description): app/layout.tsx → export const metadata
- Styles globaux: app/globals.css
- Thème/couleurs: tailwind.config.ts (extend.colors) + variables CSS dans :root
- Page d’accueil / sections: app/page.tsx et components/sections/*
- Config Next: next.config.mjs

---

## Arborescence (extrait)

```
.
├─ app/
│  ├─ layout.tsx          # Layout global, metadata
│  ├─ page.tsx            # Page principale (sections)
│  └─ globals.css         # Styles globaux (Tailwind)
├─ components/
│  ├─ layout/             # Header, Footer, SocialLinks, ScrollIndicator
│  └─ sections/           # Hero, About, Skills, Projects, Contact
├─ public/                # Assets (favicon, images…)
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ next.config.mjs
└─ package.json
```

---

## Notes

- Next.js est configuré avec images.unoptimized et ignore certains avertissements de build (ESLint/TS) via next.config.mjs.
- Dark mode activé via darkMode: "class" (Tailwind).
- i18n: next-intl est installé; ajoutez vos namespaces/locales si vous activez l’internationalisation.

---

## Déploiement

- Recommandé: Vercel (zéro configuration pour Next.js)
- Autres: Docker/Node traditionnels (npm run build && npm start)

---

## Licence

Aucune licence explicite trouvée dans le dépôt. Ajoutez un fichier LICENSE si nécessaire (MIT recommandé pour un portfolio).

---

## Auteur

- GitHub: @Okpeyemi
