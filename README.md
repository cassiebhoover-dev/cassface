# Cassie Hoover — Portfolio

Personal portfolio site for Cassie Hoover, Senior Product Designer.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter + Playfair Display (via `next/font/google`)

## Sections

- **Hero** — Headline, subtext, and CTAs
- **About** — Bio, skills, and availability status
- **Selected Work** — Case study cards
- **Contact** — Email, LinkedIn, Dribbble, Read.cv
- **Footer**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

| What | Where |
|------|-------|
| Bio text & skills | `components/About.tsx` |
| Case studies | `components/CaseStudies.tsx` |
| Contact links | `components/Contact.tsx` |
| Site metadata | `app/layout.tsx` |
| Colors & fonts | `tailwind.config.js` + `app/globals.css` |

To add a real photo, replace the placeholder `div` in `components/About.tsx` with a Next.js `<Image />` component.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a new deployment.
