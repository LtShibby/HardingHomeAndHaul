<template>
  <div class="card text-center hover:shadow-xl transition-shadow">
    <i :class="[`fas ${service.icon} text-4xl mb-4`, iconColor]" aria-hidden="true"></i>
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ service.title }}</h3>
    <p class="text-gray-600 mb-4">{{ service.blurb }}</p>
    <span class="text-2xl font-bold mb-4 block" :class="priceColor">{{ service.priceHint }}</span>
    <router-link 
      :to="`/services/${service.slug}`"
      class="btn-primary inline-block"
    >
      Learn More
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'blue' // 'blue' or 'green'
  }
})

const iconColor = computed(() => {
  return props.variant === 'green' ? 'text-tampa-green' : 'text-tampa-blue'
})

const priceColor = computed(() => {
  return props.variant === 'green' ? 'text-tampa-green' : 'text-tampa-blue'
})
</script>
