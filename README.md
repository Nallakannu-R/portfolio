# Nallakannu — Developer Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Lucide icons, and Framer Motion. It includes a dark/light theme, animated role introduction, scroll-aware navigation, editable journey timeline, project details, internship and certification cards, an embedded resume PDF, and an email contact form.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Create a production build with `npm run build`, or inspect it locally with `npm run preview`.

## Personalize before publishing

Profile details, internships, certifications, and project links live in [`src/data/portfolio.js`](./src/data/portfolio.js). Replace any certificate preview/verification URL placeholders when you have those links. PropertyDocs and the digital-wellbeing AI project are marked as in progress; add their repository and demo URLs when available.

The resume you supplied is served from `public/resume.pdf` and is publicly downloadable with the deployed site. Replace that file when your resume changes.

Timeline edits are kept in React state for the current page session; edit [`initialTimeline`](./src/data/portfolio.js) to make changes permanent in the site.

The contact form sends submissions through [FormSubmit](https://formsubmit.co/) to the email address configured in the profile. On first use, FormSubmit may email that address a confirmation link that must be approved before delivery starts. FormSubmit is a third-party service; review its terms and privacy policy before publishing.

## Publish to GitHub

1. Create a new, empty repository on GitHub (for example, `nallakannu-portfolio`).
2. From this folder, initialize and push the source:

   ```bash
   git init
   git add .
   git commit -m "Build personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/nallakannu-portfolio.git
   git push -u origin main
   ```

3. Replace `YOUR-USERNAME` with your GitHub username. Do not commit credentials, private keys, or personal information you do not want public.

## Deploy to Vercel

1. Sign in to [Vercel](https://vercel.com/) and import the GitHub repository.
2. Keep the detected Vite settings: build command `npm run build`, output directory `dist`, and install command `npm install`.
3. Deploy. Vercel will provide a `*.vercel.app` URL. Future pushes to `main` deploy automatically.
4. In the Vercel project, open **Settings → Domains**, add `nallakannu.is-a.dev`, and follow the current DNS verification instructions. Vercel may show a project-specific CNAME target; use the value Vercel provides.

`vercel.json` includes a single-page-app rewrite so deep links resolve to the React app.

## Request `nallakannu.is-a.dev`

The name is subject to availability, the is-a.dev maintainers' approval, and the service's current rules. Check availability and read the latest [is-a.dev registration documentation](https://docs.is-a.dev/) before requesting it.

1. Deploy the site to Vercel first and add the custom domain in Vercel so you can copy the exact DNS target and complete its verification.
2. Follow the official registration guide to fork [`is-a-dev/register`](https://github.com/is-a-dev/register), prepare the domain request and open a pull request. The maintainers currently ask applicants not to use AI to generate the request; follow their instructions and write the request yourself.
3. Request the `nallakannu.is-a.dev` hostname and configure its **CNAME** record to the Vercel target shown for your project (commonly `cname.vercel-dns.com`, but use the current Vercel/registration instructions if they differ). The record is submitted through the is-a.dev registration process, not by changing nameservers.
4. Monitor the pull request for review feedback. Once approved/merged and DNS has propagated, finish any domain verification in Vercel and check that HTTPS is active.

Domain approval and DNS propagation are not guaranteed. Do not claim or publish the domain until the request is approved and Vercel verifies it.

## Project structure

```text
public/
  favicon.svg
  og-image.svg
  resume.pdf
src/
  components/
    Timeline.jsx
    TypingText.jsx
  data/
    portfolio.js
  App.jsx
  index.css
  main.jsx
index.html
postcss.config.js
tailwind.config.js
vercel.json
vite.config.js
```
