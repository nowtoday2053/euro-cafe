# Euro Café Website - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables** (Optional)
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_SITE_URL=https://www.eurocafe.com
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization Guide

### Updating Menu Items

Edit `/data/menu.json` to update menu items. The structure is:
```json
{
  "categories": [
    {
      "name": "Category Name",
      "items": [
        {
          "name": "Item Name",
          "description": "Item description",
          "price": "$XX.XX"
        }
      ]
    }
  ]
}
```

### Updating Business Information

1. **Address & Contact Info**: Update in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
   - `app/page.tsx` (location section)

2. **Hours**: Update in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`
   - `app/page.tsx` (hours section)

3. **Facebook Page**: Update Facebook link references in:
   - `components/Footer.tsx`
   - `app/page.tsx`
   - `app/contact/page.tsx`

### Updating Images

1. **Replace Placeholder Images**: 
   - Current images use Unsplash placeholders
   - Replace URLs in page components with your actual images
   - Recommended: Use Next.js Image component with optimized images
   - Store images in `/public/images/` directory

2. **Gallery Images**: 
   - Update `galleryImages` object in `app/gallery/page.tsx`
   - Or connect to a CMS/image service

### Google Analytics Setup

1. Get your Google Analytics Measurement ID (format: G-XXXXXXXXXX)
2. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`
3. Or update directly in `components/GoogleAnalytics.tsx`

### Google Maps Embed

1. Get your business location coordinates
2. Generate embed code from Google Maps
3. Update the iframe `src` in `app/contact/page.tsx`

### Color Customization

Edit `tailwind.config.js` to adjust the color palette:
- `sage`: Sage green
- `terracotta`: Terracotta orange
- `cream`: Cream background
- `olive`: Olive green
- `earth`: Earth brown

### SEO Updates

1. **Meta Tags**: Update in:
   - `app/layout.tsx` (global)
   - Individual page layout files for page-specific SEO

2. **Sitemap**: Update `app/sitemap.ts` with your actual domain

3. **robots.txt**: Update `public/robots.txt` with your domain

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

This Next.js app can be deployed on:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Next.js

## Future Enhancements

- Connect menu to a CMS (Contentful, Sanity, etc.)
- Add online ordering integration
- Implement email newsletter signup
- Add blog/news section
- Create catering/events page
- Add reservation system

## Support

For questions or issues, refer to the Next.js documentation or contact your developer.

