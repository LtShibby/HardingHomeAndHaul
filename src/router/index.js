import { createRouter, createWebHistory } from 'vue-router'
import { site } from '../config/site.js'

// Import pages
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import ServiceDetail from '../pages/ServiceDetail.vue'
import About from '../pages/About.vue'
import Gallery from '../pages/Gallery.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: site.seo.title,
      description: site.seo.description
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: `Services - ${site.name}`,
      description: `Professional ${site.services.map(s => s.title.toLowerCase()).join(', ')} services in Tampa and surrounding areas.`
    }
  },
  {
    path: '/services/:slug',
    name: 'ServiceDetail',
    component: ServiceDetail,
    meta: {
      title: (route) => {
        const service = site.services.find(s => s.slug === route.params.slug)
        return service ? `${service.title} - ${site.name}` : `Service - ${site.name}`
      },
      description: (route) => {
        const service = site.services.find(s => s.slug === route.params.slug)
        return service ? service.blurb : site.seo.description
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: `About Us - ${site.name}`,
      description: `Learn about ${site.name}, a local Tampa business providing reliable home and hauling services.`
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: `Gallery - ${site.name}`,
      description: `See before and after photos of our work in Tampa and surrounding areas.`
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: `Contact Us - ${site.name}`,
      description: `Get in touch with ${site.name} for a free estimate. Call ${site.phone} or text for quick service.`
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: `Page Not Found - ${site.name}`,
      description: site.seo.description
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Handle hash navigation (e.g., #service-area)
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

// Update document title and meta description on route change
router.afterEach((to) => {
  const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title
  const description = typeof to.meta.description === 'function' ? to.meta.description(to) : to.meta.description
  
  document.title = title || site.seo.title
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', description || site.seo.description)
})

export default router
