# Noah Li Personal Website

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React
- Vite
- Tailwind CSS (v4)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo at [Vercel](https://vercel.com/).
3. Confirm build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Project Structure

- `src/App.jsx` - Main page content and section structure
- `src/App.css` - Component-level styling classes
- `src/index.css` - Global styles and scroll-reveal animation styles
- `public/` - Static assets (favicon, profile image, resume, etc.)

## Customization Notes

- Update section content in `src/App.jsx`:
  - `About Me`
  - `Experience`
  - `Projects`
  - `Fun Facts`
- Update styles in `src/App.css`.
- Light/Dark mode is controlled by the navbar theme toggle.

## Important Assets

If an image or file does not appear in production, make sure the file exists in `public/` and that paths match exactly (case-sensitive on many hosts).

Examples used by this site:

- `/NLphoto-SF.jpg`
- `/Resume-Spring27-NL.pdf`
- `/favicon.svg`
