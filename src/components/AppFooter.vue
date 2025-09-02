<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold text-tampa-blue mb-4">{{ site.shortName }}</h3>
          <p class="text-gray-300 mb-4">
            Your trusted local partner for all your home and hauling needs in Tampa.
          </p>
          <div class="flex space-x-4">
            <a 
              :href="site.social.facebook" 
              class="text-gray-400 hover:text-tampa-blue transition-colors"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook text-2xl" aria-hidden="true"></i>
            </a>
            <a 
              :href="site.social.instagram" 
              class="text-gray-400 hover:text-tampa-blue transition-colors"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram text-2xl" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-300">
            <li v-for="service in site.services" :key="service.slug">
              <router-link 
                :to="`/services/${service.slug}`"
                class="hover:text-tampa-blue transition-colors"
              >
                {{ service.title }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Contact & Service Area -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact & Service Area</h4>
          <div class="text-gray-300 mb-4">
            <p class="mb-2">
              <i class="fas fa-phone mr-2" aria-hidden="true"></i>
              <a :href="site.phoneHref" class="hover:text-tampa-blue transition-colors">
                {{ site.phone }}
              </a>
            </p>
            <p class="mb-2">
              <i class="fas fa-envelope mr-2" aria-hidden="true"></i>
              <a :href="`mailto:${site.email}`" class="hover:text-tampa-blue transition-colors">
                {{ site.email }}
              </a>
            </p>
            <p class="mb-4">
              <i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
              {{ site.city }}
            </p>
          </div>
          <div>
            <h5 class="font-semibold mb-2">Service Areas:</h5>
            <p class="text-gray-300 mb-2">
              Tampa and surrounding areas. 
            </p>
            <p class="text-gray-300 mb-2">
              Check out our service area map by clicking the link below!
            </p>
            <router-link 
              to="/#service-area" 
              class="text-tampa-blue hover:text-tampa-green transition-colors text-sm"
            >
              View Service Area Map →
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 {{ site.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { site } from '../config/site.js'
</script>
