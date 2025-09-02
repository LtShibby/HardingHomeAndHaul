<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
