# omarsWeb

A minimal developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — name, bio, social links, and summaries of Projects & Experience |
| `/projects` | Full list of projects from `data/projects.ts` |
| `/experience` | Full list of experience from `data/experience.ts` |
| `/contact` | Contact information (email, GitHub, LinkedIn) |

## Folder Structure

```
omarsWeb/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Tailwind base styles
│   ├── page.tsx            # Home page
│   ├── projects/page.tsx   # Projects page
│   ├── experience/page.tsx # Experience page
│   └── contact/page.tsx    # Contact page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── data/
│   ├── projects.ts         # Project data
│   └── experience.ts       # Experience data
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Customising Content

- Edit `data/projects.ts` to add or update your projects.
- Edit `data/experience.ts` to add or update your experience.
- Update `app/page.tsx` with your name, bio, and social links.
- Update `app/contact/page.tsx` with your real contact details.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.

No extra configuration needed.
