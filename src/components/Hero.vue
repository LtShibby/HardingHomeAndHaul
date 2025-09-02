<!-- src/components/Hero.vue -->
<template>
  <section
    id="home"
    class="relative overflow-hidden bg-white"
    aria-labelledby="hero-heading"
  >
    <!-- subtle background gradient + grid -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-tampa-light-blue via-white to-tampa-light-green"></div>
      <svg
        class="absolute -top-24 -right-24 h-[42rem] w-[42rem] opacity-20"
        viewBox="0 0 512 512"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stop-color="#4A90E2" />
            <stop offset="100%" stop-color="#7ED321" />
          </linearGradient>
        </defs>
        <path
          fill="url(#g)"
          d="M372 64c58 44 120 111 120 184s-62 140-144 176S164 452 96 404 0 278 24 214 110 78 196 60s118-40 176 4Z"
        />
      </svg>

      <!-- soft grid -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1
          id="hero-heading"
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          {{ site.name }}
        </h1>
        <p class="mt-5 text-lg leading-7 text-gray-600 sm:text-xl">
          {{ site.tagline }}
        </p>

        <!-- CTAs -->
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            :href="site.smsHref"
            class="group inline-flex items-center justify-center rounded-xl bg-tampa-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-tampa-blue/25 transition hover:scale-[1.02] hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Text us for a free estimate"
          >
            <svg
              class="mr-2 h-5 w-5 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
            </svg>
            Text for Free Estimate
          </a>

          <a
            :href="site.phoneHref"
            class="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:scale-[1.02] hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            aria-label="Call now"
          >
            <svg
              class="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
            </svg>
            Call {{ site.phone }}
          </a>
        </div>

        <!-- trust row -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200 backdrop-blur">
            <span class="h-2 w-2 rounded-full bg-tampa-green"></span> Same-day availability
          </div>
          <div class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200 backdrop-blur">
            <span class="h-2 w-2 rounded-full bg-gray-900"></span> Up-front pricing
          </div>
          <div class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200 backdrop-blur">
            <span class="h-2 w-2 rounded-full bg-tampa-blue"></span> Card & Apple Pay accepted
          </div>
        </div>

        <!-- micro meta line -->
        <p class="mt-6 text-sm text-gray-500">
          Serving {{ site.areas.join(', ') }} — {{ site.city }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../config/site.js'
</script>
