<template>
  <div class="pt-16">
    <!-- Gallery Header -->
    <section class="py-20 bg-gradient-to-br from-tampa-light-blue to-tampa-light-green">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Work Gallery</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          See the transformation we bring to your projects with our before and after photos
        </p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="card overflow-hidden">
            <div class="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <i class="fas fa-image text-4xl text-gray-500" aria-hidden="true"></i>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ project.description }}</p>
              <span class="inline-block bg-tampa-light-blue text-tampa-blue px-3 py-1 rounded-full text-sm font-medium">
                {{ project.service }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before & After Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Before & After Transformations</h2>
          <p class="text-xl text-gray-600">See the dramatic improvements we've made for our customers</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="transformation in transformations" :key="transformation.id" class="card">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ transformation.title }}</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 class="text-sm font-medium text-gray-600 mb-2">Before</h4>
                <div class="h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center">
                  <i class="fas fa-image text-2xl text-gray-500" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-600 mb-2">After</h4>
                <div class="h-32 bg-gradient-to-br from-tampa-light-green to-tampa-light-blue rounded flex items-center justify-center">
                  <i class="fas fa-check text-2xl text-tampa-green" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-600 text-sm">{{ transformation.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-tampa-blue">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
        <p class="text-xl text-blue-100 mb-8">
          Let us help you create your own before and after story
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

const projects = [
  {
    id: 1,
    title: "Complete Garage Cleanout",
    description: "Removed years of accumulated items and debris",
    service: "Junk Removal"
  },
  {
    id: 2,
    title: "Yard Transformation",
    description: "Pressure washing and landscaping cleanup",
    service: "Yard Cleanup"
  },
  {
    id: 3,
    title: "Moving Day Success",
    description: "Professional moving assistance and setup",
    service: "Moving Help"
  },
  {
    id: 4,
    title: "Furniture Assembly",
    description: "Complete home office setup and organization",
    service: "Assembly"
  },
  {
    id: 5,
    title: "Storm Cleanup",
    description: "Post-storm debris removal and property restoration",
    service: "Cleanup"
  },
  {
    id: 6,
    title: "Basement Organization",
    description: "Decluttering and hauling unwanted items",
    service: "Junk Removal"
  },
  {
    id: 7,
    title: "Driveway Restoration",
    description: "Pressure washing and surface cleaning",
    service: "Pressure Washing"
  },
  {
    id: 8,
    title: "Home Relocation",
    description: "Full-service moving and furniture placement",
    service: "Moving Help"
  },
  {
    id: 9,
    title: "Playground Assembly",
    description: "Safe and secure playground equipment setup",
    service: "Assembly"
  }
]

const transformations = [
  {
    id: 1,
    title: "Garage Makeover",
    description: "Transformed a cluttered garage into a clean, organized space ready for parking and storage."
  },
  {
    id: 2,
    title: "Yard Revival",
    description: "Brought life back to an overgrown yard with professional cleanup and pressure washing."
  },
  {
    id: 3,
    title: "Moving Success",
    description: "Made a stressful move smooth and efficient with professional assistance and care."
  },
  {
    id: 4,
    title: "Home Office Setup",
    description: "Created a productive workspace with furniture assembly and organization services."
  }
]
</script>
