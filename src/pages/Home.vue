<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <HeroIllustration />

    <!-- Why Choose Us Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Us</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600">We're committed to providing exceptional service with a personal touch</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-clock text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">We Show Up On Time</h3>
            <p class="text-sm sm:text-base text-gray-600">Punctuality is our promise. We respect your time and schedule.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-dollar-sign text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Up-Front Pricing, No Surprises</h3>
            <p class="text-sm sm:text-base text-gray-600">Transparent pricing with no hidden fees. What you see is what you pay.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-credit-card text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Local & Reliable</h3>
            <p class="text-sm sm:text-base text-gray-600">Card and Apple Pay accepted. Local business you can trust.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Services</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600">Professional, reliable, and affordable solutions for your home and hauling needs</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard 
            v-for="(service, index) in featuredServices" 
            :key="service.slug"
            :service="service"
            :variant="index % 2 === 0 ? 'blue' : 'green'"
          />
        </div>
        <div class="text-center mt-12">
          <router-link to="/services" class="btn-primary">
            View All Services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Service Area Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-tampa-light-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Service Area</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Proudly serving {{ site.areas.join(', ') }} and surrounding areas
          </p>
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4">
            <span 
              v-for="area in site.areas" 
              :key="area"
              class="bg-white text-tampa-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-md"
            >
              {{ area }}
            </span>
          </div>
        </div>
        
        <!-- Service Area Map -->
        <div class="max-w-4xl mx-auto">
          <ServiceAreaMap />
          <p class="text-center text-sm text-gray-600 mt-4">
            We provide services within a 25-mile radius of Tampa, FL
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '../config/site.js'
import HeroIllustration from '../components/HeroIllustration.vue'
import ServiceCard from '../components/ServiceCard.vue'
import ServiceAreaMap from '../components/ServiceAreaMap.vue'

const featuredServices = computed(() => site.services.slice(0, 3))
</script>
