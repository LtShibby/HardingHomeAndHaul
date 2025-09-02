<template>
  <div class="card">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-tampa-light-blue rounded-full flex items-center justify-center mr-4">
        <i class="fas fa-user text-tampa-blue text-xl" aria-hidden="true"></i>
      </div>
      <div>
        <h4 class="font-semibold text-gray-800">{{ review.name }}</h4>
        <div class="flex text-yellow-400">
          <i v-for="i in 5" :key="i" class="fas fa-star" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <p class="text-gray-600 italic">"{{ review.text }}"</p>
  </div>
</template>

<script setup>
const props = defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>
