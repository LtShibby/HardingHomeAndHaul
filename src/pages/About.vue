<template>
  <div class="pt-16">
    <!-- About Header -->
    <section class="py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about our story and commitment to serving the Tampa community
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Based in Tampa, {{ site.name }} is a local, family-run operation focused on fast, reliable service and fair pricing. 
              Whether it's hauling junk, cleaning up yards, or lending a hand with moving, we're here to help.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Our team takes pride in treating every job as if it were our own home, ensuring quality workmanship and customer satisfaction every time. 
              We believe in building lasting relationships with our community through honest, dependable service.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              From small residential projects to large commercial cleanouts, we have the experience and equipment to handle any job with professionalism and care.
            </p>
          </div>
          <div class="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div class="h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <i class="fas fa-image text-6xl text-gray-500" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-tampa-light-blue">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">By the Numbers</h2>
          <p class="text-xl text-gray-600">Our commitment to excellence shows in our results</p>
        </div>
        <StatBar 
          :stat1="{ value: '5+', label: 'Years Experience' }"
          :stat2="{ value: '500+', label: 'Happy Customers' }"
          :stat3="{ value: '24/7', label: 'Available Service' }"
        />
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <p class="text-xl text-gray-600">What drives us to provide exceptional service</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-handshake text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Trust & Reliability</h3>
            <p class="text-gray-600">We show up when we say we will, with the right equipment and a professional attitude.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-heart text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
            <p class="text-gray-600">As a local business, we're invested in the success and well-being of our Tampa community.</p>
          </div>
          <div class="text-center">
            <div class="bg-tampa-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-star text-2xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Quality Service</h3>
            <p class="text-gray-600">We take pride in our work and won't consider a job complete until you're satisfied.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p class="text-xl text-gray-600">The people behind the service</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="text-center">
            <div class="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <i class="fas fa-user text-4xl text-gray-500" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Team Member {{ i }}</h3>
            <p class="text-gray-600">Professional, reliable, and dedicated to quality service</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-tampa-blue">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
        <p class="text-xl text-blue-100 mb-8">
          Experience the difference of working with a local, family-owned business
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
</template>

<script setup>
import { site } from '../config/site.js'
import StatBar from '../components/StatBar.vue'
</script>
