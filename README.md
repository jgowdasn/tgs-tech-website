# TGS Gifts - Corporate Gifting Website

A beautiful, modern corporate gifting website built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Image Directories

Please add your images to the following locations:

### `/public/images/` - Main images folder

1. **Hero Background Images** (recommended: 1920x1080px)
   - `hero-bg-1.jpg` - Corporate gifting background
   - `hero-bg-2.jpg` - Wedding gifts background
   - `hero-bg-3.jpg` - School/Academic gifts background

2. **About Section**
   - `about.jpg` - Team/Office image (recommended: 800x600px)
   - `og-image.jpg` - Social media share image (1200x630px)

### `/public/images/products/` - Product images (recommended: 400x400px)
- `tshirt.jpg`
- `bottle.jpg`
- `diary.jpg`
- `pen.jpg`
- `bag.jpg`
- `powerbank.jpg`
- `mug.jpg`
- `polo.jpg`

### `/public/images/gallery/` - Gallery images (recommended: 800x600px)
- `1.jpg` through `12.jpg`

## Configuration

### EmailJS Setup (Contact Form)
1. Sign up at https://www.emailjs.com/
2. Create a service and template
3. Update the following in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### WhatsApp Number
Update the WhatsApp number in these files:
- `src/components/Contact.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/components/Footer.jsx`

Replace `919876543210` with your actual number (format: country code + number without +)

### Company Details
Update company information in:
- `src/components/Contact.jsx` - Contact details
- `src/components/Footer.jsx` - Footer information
- `src/components/About.jsx` - About content
- `index.html` - Meta tags and SEO

## Features

- Responsive design for all devices
- Smooth animations with Framer Motion
- Image carousel in Hero section
- Product filtering by category
- Gallery with lightbox
- Portfolio/Our Work showcase
- Customer testimonials
- Contact form with EmailJS integration
- Floating WhatsApp button
- SEO optimized

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Swiper.js
- React Icons
- EmailJS

## Deployment

Build the project and deploy the `dist` folder to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

```bash
npm run build
```
