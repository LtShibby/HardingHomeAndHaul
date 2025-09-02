<template>
  <div class="pt-16">
    <!-- Contact Header -->
    <section class="py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to get started? Contact us today for a free estimate!
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <div class="bg-tampa-light-green p-8 rounded-lg">
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
              <div class="space-y-4">
                <div class="flex items-center">
                  <i class="fas fa-phone text-tampa-blue text-xl mr-4" aria-hidden="true"></i>
                  <a :href="site.phoneHref" class="text-xl font-semibold text-gray-800 hover:text-tampa-blue transition-colors">
                    {{ site.phone }}
                  </a>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-envelope text-tampa-blue text-xl mr-4" aria-hidden="true"></i>
                  <a :href="`mailto:${site.email}`" class="text-lg text-gray-700 hover:text-tampa-blue transition-colors">
                    {{ site.email }}
                  </a>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-map-marker-alt text-tampa-blue text-xl mr-4" aria-hidden="true"></i>
                  <span class="text-lg text-gray-700">{{ site.city }}</span>
                </div>
              </div>
              <div class="mt-8">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Service Areas</h3>
                <p class="text-gray-700 mb-4">
                  Proudly serving {{ site.areas.join(', ') }} and surrounding areas
                </p>
                <a :href="site.smsHref" class="btn-primary inline-block">
                  <i class="fas fa-mobile-alt mr-2" aria-hidden="true"></i>
                  Text for Free Estimate
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <form @submit.prevent="submitForm" class="bg-gray-50 p-8 rounded-lg">
              <h2 class="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              
              <div class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tampa-blue" 
                    required
                  >
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tampa-blue" 
                    required
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tampa-blue"
                  >
                </div>
                
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select 
                    id="service" 
                    v-model="form.service"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tampa-blue"
                  >
                    <option value="">Select a service</option>
                    <option v-for="service in site.services" :key="service.slug" :value="service.slug">
                      {{ service.title }}
                    </option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    rows="4" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tampa-blue" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full bg-tampa-green hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Message -->
    <div v-if="showSuccess" class="fixed top-20 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
      <div class="flex items-center">
        <i class="fas fa-check-circle mr-2" aria-hidden="true"></i>
        <span>Thank you for your message! We'll get back to you soon.</span>
        <button @click="showSuccess = false" class="ml-4 text-white hover:text-gray-200">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { site } from '../config/site.js'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>
