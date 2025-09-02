<template>
  <div class="pt-16">
    <!-- Services Header -->
    <section class="py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional, reliable, and affordable solutions for all your home and hauling needs
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            v-for="(service, index) in site.services" 
            :key="service.slug"
            :service="service"
            :variant="index % 2 === 0 ? 'blue' : 'green'"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600">Common questions about our services</p>
        </div>
        <div class="space-y-6">
          <div v-for="faq in faqs" :key="faq.question" class="card">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-tampa-blue">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
        <p class="text-xl text-blue-100 mb-8">
          Contact us today for a free estimate on any of our services
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
import ServiceCard from '../components/ServiceCard.vue'

const faqs = [
  {
    question: "How quickly can you provide service?",
    answer: "We typically provide same-day or next-day service for most requests. Emergency services are available 24/7."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all our services. Just text or call us to get started."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, and Apple Pay. Payment is due upon completion of service."
  }
]
</script>
