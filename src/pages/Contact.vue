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
    <section class="py-20 bg-gradient-to-br from-gray-50 to-tampa-light-blue">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to tackle your next project? We're here to help with fast, reliable service.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Contact Information Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-tampa-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-phone text-white text-2xl" aria-hidden="true"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Call or Text Us</h3>
              <p class="text-gray-600">We respond quickly to all inquiries</p>
            </div>

            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-center p-4 bg-tampa-light-green rounded-xl hover:bg-tampa-light-green/80 transition-colors">
                <div class="w-12 h-12 bg-tampa-blue rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-phone text-white" aria-hidden="true"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Phone</p>
                  <a :href="site.phoneHref" class="text-xl font-bold text-gray-900 hover:text-tampa-blue transition-colors">
                    {{ site.phone }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-center p-4 bg-tampa-light-green rounded-xl hover:bg-tampa-light-green/80 transition-colors">
                <div class="w-12 h-12 bg-tampa-blue rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-white" aria-hidden="true"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Email</p>
                  <a :href="`mailto:${site.email}`" class="text-lg font-semibold text-gray-900 hover:text-tampa-blue transition-colors">
                    {{ site.email }}
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-center p-4 bg-tampa-light-green rounded-xl">
                <div class="w-12 h-12 bg-tampa-blue rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-white" aria-hidden="true"></i>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Service Area</p>
                  <p class="text-lg font-semibold text-gray-900">{{ site.city }}</p>
                </div>
              </div>
            </div>

            <!-- Service Areas -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <h4 class="text-lg font-semibold text-gray-900 mb-4">We Serve</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="area in site.areas" :key="area" 
                      class="px-3 py-1 bg-tampa-blue text-white text-sm rounded-full">
                  {{ area }}
                </span>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8 text-center">
              <a :href="site.smsHref" 
                 class="inline-flex items-center justify-center bg-tampa-green text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105">
                <i class="fas fa-mobile-alt mr-3" aria-hidden="true"></i>
                Text for Free Estimate
              </a>
            </div>
          </div>

          <!-- Email Us Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-tampa-green rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-envelope text-white text-2xl" aria-hidden="true"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p class="text-gray-600">Click below to send us an email with your project details</p>
            </div>

            <div class="space-y-6">
              <!-- Quick Contact Info -->
              <div class="bg-tampa-light-green p-6 rounded-xl">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">What to include in your email:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <i class="fas fa-check text-tampa-green mr-3 mt-1" aria-hidden="true"></i>
                    <span>Your name and contact information</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-tampa-green mr-3 mt-1" aria-hidden="true"></i>
                    <span>Type of service needed</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-tampa-green mr-3 mt-1" aria-hidden="true"></i>
                    <span>Project location and details</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-tampa-green mr-3 mt-1" aria-hidden="true"></i>
                    <span>Preferred contact method</span>
                  </li>
                </ul>
              </div>

              <!-- Email Button -->
              <div class="text-center">
                <a :href="emailHref" 
                   class="inline-flex items-center justify-center bg-tampa-blue text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  <i class="fas fa-envelope mr-3" aria-hidden="true"></i>
                  Email Us Now
                </a>
                <p class="text-sm text-gray-500 mt-3">
                  This will open your email app with a pre-filled message
                </p>
              </div>

              <!-- Alternative Contact Methods -->
              <div class="border-t border-gray-200 pt-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-4 text-center">Or contact us directly:</h4>
                <div class="flex flex-col sm:flex-row gap-3">
                  <a :href="site.phoneHref" 
                     class="flex-1 bg-tampa-green text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors">
                    <i class="fas fa-phone mr-2" aria-hidden="true"></i>
                    Call {{ site.phone }}
                  </a>
                  <a :href="site.smsHref" 
                     class="flex-1 bg-tampa-blue text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-blue-600 transition-colors">
                    <i class="fas fa-mobile-alt mr-2" aria-hidden="true"></i>
                    Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '../config/site.js'

// Create pre-filled email with subject and body
const emailHref = computed(() => {
  const subject = encodeURIComponent('Service Inquiry - Harding Home & Haul')
  const body = encodeURIComponent(`Hello Harding Home & Haul,

I'm interested in your services. Here are my details:

Name: 
Phone: 
Email: 
Service Needed: 
Project Location: 
Project Details: 

Please contact me at your earliest convenience.

Thank you!`)
  
  return `mailto:${site.email}?subject=${subject}&body=${body}`
})
</script>
