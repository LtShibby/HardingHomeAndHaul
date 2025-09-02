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
