<template>
  <div class="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
    <div class="text-center max-w-2xl mx-auto px-4">
      <div class="mb-8">
        <i class="fas fa-search text-8xl text-tampa-blue mb-4" aria-hidden="true"></i>
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p class="text-xl text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
      </div>
      
      <div class="space-y-4">
        <router-link to="/" class="btn-primary inline-block mr-4">
          <i class="fas fa-home mr-2" aria-hidden="true"></i>
          Go Home
        </router-link>
        <router-link to="/services" class="btn-secondary inline-block">
          <i class="fas fa-tools mr-2" aria-hidden="true"></i>
          View Services
        </router-link>
      </div>
      
      <div class="mt-12">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Popular Pages</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link 
            v-for="page in popularPages" 
            :key="page.name"
            :to="page.path" 
            class="text-tampa-blue hover:text-blue-600 transition-colors"
          >
            {{ page.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const popularPages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
]
</script>
