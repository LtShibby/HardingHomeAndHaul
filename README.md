# Harding Home & Haul Services - Vue 3 Website

A production-ready multi-page website built with Vue 3, Vue Router, and TailwindCSS for Harding Home & Haul Services, a Tampa-based local business.

## 🚀 Features

- **Vue 3** with Composition API (`<script setup>`)
- **Vue Router** with history mode and SEO-friendly meta tags
- **TailwindCSS** with custom Tampa-inspired color palette
- **Responsive Design** - Mobile-first approach
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized** - Dynamic meta tags, structured content
- **FontAwesome Icons** via CDN
- **Google Fonts** (Montserrat)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── NavBar.vue      # Navigation with mobile menu
│   ├── AppFooter.vue   # Footer with contact info
│   ├── ServiceCard.vue # Service display card
│   ├── StatBar.vue     # Statistics display
│   └── ReviewCard.vue  # Customer review card
├── config/
│   └── site.js         # Business configuration
├── layouts/
│   └── MainLayout.vue  # Main layout wrapper
├── pages/              # Route components
│   ├── Home.vue        # Landing page
│   ├── Services.vue    # Services overview
│   ├── ServiceDetail.vue # Individual service pages
│   ├── About.vue       # About us page
│   ├── Gallery.vue     # Before/after gallery
│   ├── Contact.vue     # Contact form
│   └── NotFound.vue    # 404 page
├── router/
│   └── index.js        # Vue Router configuration
├── App.vue             # Root component
├── main.js             # Application entry point
└── index.css           # TailwindCSS imports
```

## 🛠️ Tech Stack

- **Vue 3.4+** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3.4+** - Utility-first CSS framework
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Design System

### Colors
- `tampa-blue`: #4A90E2
- `tampa-green`: #7ED321
- `tampa-light-blue`: #E3F2FD
- `tampa-light-green`: #F1F8E9

### Typography
- **Font**: Montserrat (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd harding-home-haul-vue
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Routes

- `/` - Home page with hero, services overview, and CTA
- `/services` - All services with FAQ section
- `/services/:slug` - Individual service detail pages
- `/about` - Company story, stats, and team
- `/gallery` - Before/after project gallery
- `/contact` - Contact form and business information
- `/*` - 404 Not Found page

## ⚙️ Configuration

All business information is centralized in `/src/config/site.js`:

- Company name, phone, email
- Service areas and offerings
- Social media links
- SEO metadata
- Service details and pricing

**To update business info**: Edit `site.js` and changes will reflect across the entire website.

## 🎯 Key Features

### SEO & Performance
- Dynamic page titles and meta descriptions
- Semantic HTML structure
- Optimized images and assets
- Fast loading with Vite

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### Mobile Responsive
- Mobile-first design approach
- Touch-friendly navigation
- Optimized for all screen sizes
- Fast mobile performance

### Contact Integration
- Click-to-call phone links
- SMS integration for estimates
- Contact form with validation
- Email links

## 🔧 Customization

### Adding New Services
1. Edit `/src/config/site.js`
2. Add new service object to `services` array
3. Service will automatically appear in navigation and pages

### Styling Changes
1. Modify Tailwind classes in components
2. Update color palette in `tailwind.config.cjs`
3. Add custom CSS in `src/index.css`

### Content Updates
- **Business Info**: Edit `src/config/site.js`
- **Page Content**: Edit individual `.vue` files in `src/pages/`
- **Navigation**: Edit `src/components/NavBar.vue`

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy `dist/` folder to Netlify

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing

## 🧪 Testing

The application includes:
- Form validation
- Responsive design testing
- Cross-browser compatibility
- Accessibility testing

## 📄 License

MIT License - feel free to use this template for your own projects.

## 🤝 Support

For questions about this website template, please contact the development team.

---

**Harding Home & Haul Services**  
Tampa, FL  
(352) 803-4809  
HardingHomeAndHaul@gmail.com