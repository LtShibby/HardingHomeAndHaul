<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-tampa-light-blue to-tampa-light-green min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {{ site.name }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {{ site.tagline }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="site.smsHref" class="btn-primary">
              <i class="fas fa-mobile-alt mr-2" aria-hidden="true"></i>
              Text for Free Estimate
            </a>
            <a :href="site.phoneHref" class="btn-secondary">
              <i class="fas fa-phone mr-2" aria-hidden="true"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p class="text-xl text-gray-600">We're committed to providing exceptional service with a personal touch</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-clock text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">We Show Up On Time</h3>
            <p class="text-gray-600">Punctuality is our promise. We respect your time and schedule.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-dollar-sign text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Up-Front Pricing, No Surprises</h3>
            <p class="text-gray-600">Transparent pricing with no hidden fees. What you see is what you pay.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-credit-card text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Local & Reliable</h3>
            <p class="text-gray-600">Card and Apple Pay accepted. Local business you can trust.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p class="text-xl text-gray-600">Professional, reliable, and affordable solutions for your home and hauling needs</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <section class="py-20 bg-tampa-light-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Service Area</h2>
        <p class="text-xl text-gray-600 mb-8">
          Proudly serving {{ site.areas.join(', ') }} and surrounding areas
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <span 
            v-for="area in site.areas" 
            :key="area"
            class="bg-white text-tampa-blue px-4 py-2 rounded-full font-medium shadow-md"
          >
            {{ area }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '../config/site.js'
import ServiceCard from '../components/ServiceCard.vue'

const featuredServices = computed(() => site.services.slice(0, 3))
</script>
