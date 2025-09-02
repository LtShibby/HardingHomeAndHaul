<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="text-center">
      <div class="text-3xl font-bold text-tampa-blue mb-2">{{ stat1.value }}</div>
      <div class="text-gray-600">{{ stat1.label }}</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-tampa-green mb-2">{{ stat2.value }}</div>
      <div class="text-gray-600">{{ stat2.label }}</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-tampa-blue mb-2">{{ stat3.value }}</div>
      <div class="text-gray-600">{{ stat3.label }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stat1: {
    type: Object,
    required: true
  },
  stat2: {
    type: Object,
    required: true
  },
  stat3: {
    type: Object,
    required: true
  }
})
</script>
