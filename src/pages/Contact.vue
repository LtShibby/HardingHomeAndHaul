<template>
  <div class="pt-16 md:pt-20">
    <!-- Contact Header -->
    <section class="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-5">Get In Touch</h1>
        <p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-2 px-2">
          Ready to get started? Contact us today for a free estimate!
        </p>
        <p class="text-sm sm:text-base md:text-lg text-gray-700/90 max-w-2xl mx-auto px-2">
          Fast, reliable, local. Text, call, or send the form — whatever’s easiest.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-gray-50 to-tampa-light-blue/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <!-- Contact Information Card -->
          <div class="bg-white rounded-2xl shadow-xl p-5 sm:p-7 lg:p-10">
            <div class="text-center mb-6 sm:mb-8">
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-tampa-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <!-- phone icon -->
                <svg aria-hidden="true" class="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">Call or Text Us</h3>
              <p class="text-xs sm:text-sm text-gray-600">We respond quickly to all inquiries</p>
            </div>

            <div class="space-y-3.5 sm:space-y-5">
              <!-- Phone -->
              <div class="flex flex-col sm:flex-row sm:items-center p-3 sm:p-4 bg-tampa-light-green rounded-xl hover:bg-tampa-light-green/80 transition-colors">
                <div class="mr-0 sm:mr-4 mb-3 sm:mb-0 flex h-12 w-12 items-center justify-center rounded-lg bg-tampa-blue shrink-0">
                  <svg aria-hidden="true" class="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="flex w-full min-w-0 items-center gap-3">
                  <div class="min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600 mb-0.5">Phone</p>
                    <a :href="site.phoneHref" class="block truncate text-lg sm:text-xl font-bold text-gray-900 hover:text-tampa-blue transition-colors" aria-label="Call us now">
                      {{ site.phone }}
                    </a>
                  </div>
                  <button
                    @click="copy(site.phone, $event)"
                    type="button"
                    class="ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Copy phone number"
                  >
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Email -->
              <div class="flex flex-col sm:flex-row sm:items-center p-3 sm:p-4 bg-tampa-light-green rounded-xl hover:bg-tampa-light-green/80 transition-colors">
                <div class="mr-0 sm:mr-4 mb-3 sm:mb-0 flex h-12 w-12 items-center justify-center rounded-lg bg-tampa-blue shrink-0">
                  <svg aria-hidden="true" class="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
                  </svg>
                </div>
                <div class="flex w-full min-w-0 items-center gap-3">
                  <div class="min-w-0">
                    <p class="text-xs sm:text-sm text-gray-600 mb-0.5">Email</p>
                    <a :href="`mailto:${site.email}`" class="block break-words text-base sm:text-lg font-semibold text-gray-900 hover:text-tampa-blue transition-colors" aria-label="Email us">
                      {{ site.email }}
                    </a>
                  </div>
                  <button
                    @click="copy(site.email, $event)"
                    type="button"
                    class="ml-auto inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Copy email"
                  >
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Location -->
              <div class="flex p-3 sm:p-4 bg-tampa-light-green rounded-xl">
                <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-tampa-blue shrink-0">
                  <svg aria-hidden="true" class="h-5 w-5 sm:h-6 sm:w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"/><circle cx="12" cy="11" r="2.5"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-xs sm:text-sm text-gray-600 mb-0.5">Service Area</p>
                  <p class="text-base sm:text-lg font-semibold text-gray-900 break-words">{{ site.city }}</p>
                </div>
              </div>
            </div>

            <!-- Service Areas -->
            <div class="mt-6 sm:mt-8 border-t border-gray-200 pt-6 sm:pt-8">
              <h4 class="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">We Serve</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="area in site.areas"
                  :key="area"
                  class="rounded-full bg-tampa-blue px-3 py-1 text-xs sm:text-sm text-white"
                >
                  {{ area }}
                </span>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-6 sm:mt-8 text-center">
              <a
                :href="site.smsHref"
                class="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-tampa-green px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-green-600"
                aria-label="Text us for a free estimate"
              >
                <svg aria-hidden="true" class="mr-2.5 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"/>
                </svg>
                Text for Free Estimate
              </a>
            </div>
          </div>

          <!-- Email / Form Card -->
          <div class="bg-white rounded-2xl shadow-xl p-5 sm:p-7 lg:p-10">
            <div class="text-center mb-6 sm:mb-8">
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-tampa-green rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg aria-hidden="true" class="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">Email Us</h3>
              <p class="text-xs sm:text-sm text-gray-600">Send details now or use the quick email button</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submit" class="space-y-4 sm:space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700" for="name">Name</label>
                  <input id="name" v-model.trim="form.name" type="text" required autocomplete="name" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tampa-blue" />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700" for="phone">Phone</label>
                  <input id="phone" v-model.trim="form.phone" type="tel" inputmode="tel" required autocomplete="tel" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tampa-blue" />
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700" for="service">Service Needed</label>
                <select id="service" v-model="form.service" class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tampa-blue">
                  <option value="">Select a service</option>
                  <option value="junk">Junk Removal & Hauling</option>
                  <option value="moving">Moving Help</option>
                  <option value="yard">Yard Cleanup & Pressure Washing</option>
                  <option value="furniture">Furniture Assembly & Small Fixes</option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700" for="message">Message</label>
                <textarea id="message" v-model.trim="form.message" rows="4" placeholder="Tell us about your project..." class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tampa-blue"></textarea>
              </div>

              <!-- honeypot -->
              <input v-model="form.company" type="text" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

              <button type="submit" class="w-full rounded-xl bg-tampa-blue py-3 sm:py-4 font-semibold text-white transition-colors hover:bg-blue-600">
                Send Request
              </button>

              <!-- Prefilled email fallback -->
              <div class="text-center">
                <a :href="emailHref" class="mt-3 inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-300 bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-400">
                  Open Email App Instead
                </a>
                <p class="mt-2 text-xs text-gray-500">Opens your email app with a pre-filled message</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Copy Success Toast -->
    <div
      v-if="showCopyToast"
      :style="{ left: toastPosition.x + 'px', top: toastPosition.y + 'px' }"
      class="fixed bg-green-600 text-white px-3.5 py-2 rounded-lg shadow-lg z-[100] flex items-center gap-2 animate-bounce motion-reduce:animate-none pointer-events-none"
      role="status" aria-live="polite"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
      <span class="text-sm font-medium">Copied!</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted, onUnmounted } from 'vue'
import { site } from '../config/site.js'

// prefilled email fallback
const emailHref = computed(() => {
  const subject = encodeURIComponent('Service Inquiry - Harding Home & Haul')
  const body = encodeURIComponent(`Hello Harding Home & Haul,

I'm interested in your services. Here are my details:

Name:
Phone:
Service Needed:
Project Location:
Project Details:

Please contact me at your earliest convenience.

Thank you!`)
  return `mailto:${site.email}?subject=${subject}&body=${body}`
})

const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: '',
  company: '' // honeypot
})

const showCopyToast = ref(false)
const toastPosition = ref({ x: 0, y: 0 })

function submit () {
  if (form.company) return // bot
  if (!form.name || !form.phone) {
    alert('Please include your name and phone number.')
    return
  }
  alert('Thanks! We will text you shortly to schedule a free estimate.')
  Object.keys(form).forEach(k => (form[k] = ''))
}

/**
 * Copy helper with viewport clamping so the toast never renders off-screen
 */
function copy (text, event) {
  if (!navigator.clipboard) return
  navigator.clipboard.writeText(text)

  // cursor-based position with offsets
  const offsetX = 10
  const offsetY = 30
  let x = event.clientX + offsetX
  let y = event.clientY - offsetY

  // Clamp to viewport (account for toast size approx)
  const TOAST_W = 140
  const TOAST_H = 44
  const vw = window.innerWidth
  const vh = window.innerHeight

  x = Math.min(Math.max(8, x), vw - TOAST_W - 8)
  y = Math.min(Math.max(8, y), vh - TOAST_H - 8)

  toastPosition.value = { x, y }
  showCopyToast.value = true

  window.clearTimeout(copy._t)
  copy._t = window.setTimeout(() => {
    showCopyToast.value = false
  }, 1800)
}

// LocalBusiness JSON-LD
const jsonLd = computed(() => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    areaServed: site.areas,
    telephone: `+1-${site.phone.replace(/\D/g, '')}`,
    email: site.email,
    url: 'https://hardinghomeandhaul.com',
    image: 'https://hardinghomeandhaul.com/og.jpg',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: site.city }
  }
  return JSON.stringify(data)
})

let jsonLdScript = null
onMounted(() => {
  jsonLdScript = document.createElement('script')
  jsonLdScript.type = 'application/ld+json'
  jsonLdScript.textContent = jsonLd.value
  document.head.appendChild(jsonLdScript)
})
onUnmounted(() => {
  if (jsonLdScript) document.head.removeChild(jsonLdScript)
})
</script>
