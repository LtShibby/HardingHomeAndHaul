<template>
  <div class="pt-16">
    <div v-if="service" class="min-h-screen">
      <!-- Service Header -->
      <section class="py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i :class="[`fas ${service.icon} text-6xl mb-6`, iconColor]" aria-hidden="true"></i>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{{ service.title }}</h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{{ service.blurb }}</p>
          <div class="text-3xl font-bold mb-8" :class="priceColor">{{ service.priceHint }}</div>
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
      </section>

      <!-- Service Details -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">What We Include</h2>
              <ul class="space-y-4">
                <li v-for="detail in service.details" :key="detail" class="flex items-start">
                  <i class="fas fa-check text-tampa-green text-xl mr-3 mt-1" aria-hidden="true"></i>
                  <span class="text-gray-700 text-lg">{{ detail }}</span>
                </li>
              </ul>
            </div>
            <!-- <div>
              <h2 class="text-3xl font-bold text-gray-800 mb-6">Service Gallery</h2>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="i in 4" :key="i" class="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div class="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <i class="fas fa-image text-4xl text-gray-500" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold">1</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p class="text-gray-600">Text or call us for a free estimate</p>
            </div>
            <div class="text-center">
              <div class="bg-tampa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold">2</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Schedule Service</h3>
              <p class="text-gray-600">We'll schedule a convenient time for you</p>
            </div>
            <div class="text-center">
              <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold">3</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">We Get It Done</h3>
              <p class="text-gray-600">Professional service with guaranteed satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-tampa-blue">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready for {{ service.title }}?</h2>
          <p class="text-xl text-blue-100 mb-8">
            Get your free estimate today
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a :href="site.smsHref" class="bg-white text-tampa-blue hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
              <i class="fas fa-mobile-alt mr-2" aria-hidden="true"></i>
              Text for Free Estimate
            </a>
            <a :href="site.phoneHref" class="bg-tampa-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              <i class="fas fa-phone mr-2" aria-hidden="true"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- 404 if service not found -->
    <div v-else class="pt-16 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
        <p class="text-xl text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
        <router-link to="/services" class="btn-primary">
          View All Services
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../config/site.js'

const route = useRoute()

const service = computed(() => {
  return site.services.find(s => s.slug === route.params.slug)
})

const iconColor = computed(() => {
  return 'text-tampa-blue'
})

const priceColor = computed(() => {
  return 'text-tampa-green'
})
</script>
