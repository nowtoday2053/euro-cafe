# Euro Café Website

A modern, elegant website for Euro Café, a family-owned Mediterranean/European café in Fountain Hills, Arizona.

## Features

- Modern, responsive design with mobile-first approach
- Multiple pages: Home, About, Menu, Gallery, Contact
- SEO optimized with local targeting
- Google Analytics integration ready
- Easy menu updates via JSON
- Fast loading with optimized images
- Accessible navigation and smooth transitions

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - Reusable React components
- `/data` - JSON data files (menu, etc.)
- `/public` - Static assets (images, etc.)

## Menu Updates

Edit `/data/menu.json` to update menu items. The structure is organized by categories.

## Customization

- Colors: Edit `tailwind.config.js` to adjust the color palette
- Content: Update page components in `/app` directory
- Images: Replace placeholder images in `/public/images`

## Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.




