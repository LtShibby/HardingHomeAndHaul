<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-tampa-blue">
            {{ site.shortName }}
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'text-tampa-blue': $route.name === 'Home' }"
            >
              Home
            </router-link>
            <router-link 
              to="/services" 
              class="nav-link"
              :class="{ 'text-tampa-blue': $route.name === 'Services' }"
            >
              Services
            </router-link>
            <router-link 
              to="/about" 
              class="nav-link"
              :class="{ 'text-tampa-blue': $route.name === 'About' }"
            >
              About
            </router-link>
            <router-link 
              to="/gallery" 
              class="nav-link"
              :class="{ 'text-tampa-blue': $route.name === 'Gallery' }"
            >
              Gallery
            </router-link>
            <router-link 
              to="/contact" 
              class="nav-link"
              :class="{ 'text-tampa-blue': $route.name === 'Contact' }"
            >
              Contact
            </router-link>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-tampa-blue focus:outline-none p-2"
            aria-label="Toggle mobile menu"
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link 
          to="/" 
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          Home
        </router-link>
        <router-link 
          to="/services" 
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          Services
        </router-link>
        <router-link 
          to="/about" 
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          About
        </router-link>
        <router-link 
          to="/gallery" 
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          Gallery
        </router-link>
        <router-link 
          to="/contact" 
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { site } from '../config/site.js'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-tampa-blue px-3 py-2 rounded-md text-sm font-medium transition-colors;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-tampa-blue block px-3 py-2 rounded-md text-base font-medium;
}
</style>
