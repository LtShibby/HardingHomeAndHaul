<!-- src/components/HeroIllustration.vue -->
<template>
  <section class="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
    <!-- soft background -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-tampa-light-blue via-white to-tampa-light-green"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
      <div class="grid items-center gap-10 md:grid-cols-2">
        <!-- Text / CTA -->
        <div class="text-center md:text-left">
          <h1 id="hero-heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {{ site.name }}
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            {{ site.tagline }}
          </p>

          <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              :href="site.smsHref"
              class="group inline-flex items-center justify-center rounded-xl bg-tampa-blue px-6 py-3 text-base font-semibold text-white shadow-lg shadow-tampa-blue/25 transition hover:scale-[1.02] hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Text for a free estimate"
            >
              <svg class="mr-2 h-5 w-5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
              </svg>
              Text for Free Estimate
            </a>
            <a
              :href="site.phoneHref"
              class="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:scale-[1.02] hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label="Call now"
            >
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {{ site.phone }}
            </a>
          </div>

          <p class="mt-6 text-sm text-gray-500">
            Serving {{ site.areas.join(', ') }} — {{ site.city }}
          </p>
        </div>

        <!-- Minimal Illustration -->
        <div class="mx-auto w-full max-w-2xl">
          <svg class="h-auto w-full" viewBox="0 0 900 420" role="img" aria-labelledby="sceneTitle">
            <title id="sceneTitle">Truck hauling, lawn mowing, and sidewalk pressure washing</title>

            <!-- Ground -->
            <rect x="0" y="280" width="900" height="140" fill="#F1F8E9" />
            <!-- Sidewalk -->
            <rect x="0" y="330" width="900" height="54" fill="#E5E7EB" />
            <rect x="0" y="330" width="900" height="2" fill="#D1D5DB" />

            <!-- Lawn stripes (animated subtle) -->
            <g transform="translate(0, 280)" opacity="0.25">
              <rect x="0" y="0" width="900" height="50" fill="#9EE28C" />
              <g class="stripes" transform="translate(-40,0)">
                <rect v-for="i in 40" :key="i" :x="i*24" y="0" width="12" height="50" fill="#7ED321" />
              </g>
            </g>

            <!-- TRUCK -->
            <g id="truck" transform="translate(80, 225)">
              <!-- bed -->
              <rect x="0" y="40" width="260" height="70" rx="10" fill="#4A90E2" />
              <!-- cab -->
              <path d="M220,40 h40 a18,18 0 0 1 18,18 v52 h-58z" fill="#4A90E2" />
              <!-- window -->
              <rect x="230" y="50" width="28" height="18" rx="3" fill="#BFE0FF" />

              <!-- cargo (minimal boxes/shapes) -->
              <g class="bob" transform="translate(20, 0)">
                <rect x="14" y="20" width="46" height="28" rx="3" fill="#FED7AA"/>
                <rect x="62" y="8" width="38" height="26" rx="3" fill="#FDE68A"/>
                <rect x="106" y="18" width="34" height="22" rx="3" fill="#C7F9E1"/>
                <!-- lamp -->
                <g transform="translate(150,12)">
                  <rect x="0" y="10" width="6" height="18" fill="#9CA3AF"/>
                  <circle cx="3" cy="8" r="8" fill="#FDE68A" />
                </g>
                <!-- chair silhouette -->
                <g transform="translate(184,14)">
                  <rect x="0" y="10" width="10" height="14" fill="#94A3B8"/>
                  <rect x="2" y="0" width="22" height="10" fill="#94A3B8"/>
                  <rect x="22" y="10" width="4" height="14" fill="#94A3B8"/>
                </g>
              </g>

              <!-- wheels -->
              <g transform="translate(48, 120)">
                <g>
                  <circle cx="0" cy="0" r="18" fill="#111827"/>
                  <circle cx="0" cy="0" r="7" fill="#6B7280"/>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 0 0;360 0 0"
                    dur="6s"
                    repeatCount="indefinite"/>
                </g>
              </g>
              <g transform="translate(210, 120)">
                <g>
                  <circle cx="0" cy="0" r="18" fill="#111827"/>
                  <circle cx="0" cy="0" r="7" fill="#6B7280"/>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 0 0;360 0 0"
                    dur="6s"
                    repeatCount="indefinite"/>
                </g>
              </g>
            </g>

            <!-- MOWER -->
            <g id="mower" transform="translate(520, 290)">
              <!-- freshly cut strip -->
              <rect x="-10" y="-10" width="170" height="20" fill="#C8F5B7" opacity="0.7"/>
              <!-- mower body -->
              <rect x="0" y="-18" width="60" height="22" rx="6" fill="#111827"/>
              <rect x="12" y="-26" width="34" height="10" rx="2" fill="#4B5563"/>
              <!-- handle -->
              <path d="M52 -18 L82 -52" stroke="#374151" stroke-width="4" stroke-linecap="round"/>
              <!-- wheels -->
              <circle cx="12" cy="8" r="8" fill="#111827"/>
              <circle cx="48" cy="8" r="8" fill="#111827"/>
              <!-- blade hint -->
              <rect x="10" y="-12" width="40" height="2" fill="#22C55E" class="bob"/>
            </g>

            <!-- PRESSURE WASHER PERSON -->
            <g id="washer" transform="translate(720, 300)">
              <!-- person (minimal) -->
              <circle cx="0" cy="-30" r="10" fill="#64748B"/>
              <rect x="-6" y="-20" width="12" height="28" rx="3" fill="#475569"/>
              <line x1="-6" y1="0" x2="-16" y2="16" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
              <line x1="6" y1="0" x2="40" y2="-10" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
              <!-- wand -->
              <rect x="40" y="-12" width="34" height="4" rx="2" fill="#1F2937"/>
              <!-- spray -->
              <polygon class="spray" points="74,-10 120,-20 120,0 74,-2" fill="#93C5FD" opacity="0.6"/>
            </g>

            <!-- cleaned streak on sidewalk -->
            <rect x="760" y="335" width="120" height="22" fill="#F3F4F6" opacity="0.9" rx="2"/>

            <!-- tiny clouds for life -->
            <g fill="#F3F4F6" opacity="0.9">
              <ellipse cx="130" cy="90" rx="28" ry="10"/>
              <ellipse cx="160" cy="86" rx="20" ry="8"/>
              <ellipse cx="620" cy="70" rx="26" ry="9"/>
              <ellipse cx="646" cy="66" rx="18" ry="7"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { site } from '../config/site.js'
</script>

<style scoped>


@keyframes bob {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-1.5px); }
}
.bob { animation: bob 2s ease-in-out infinite; }

@keyframes mower-stripes {
  0% { transform: translateX(-40px); }
  100% { transform: translateX(40px); }
}
.stripes { animation: mower-stripes 1.8s linear infinite; }

@keyframes spray {
  0% { opacity: 0.2; }
  50% { opacity: 0.85; }
  100% { opacity: 0.2; }
}
.spray { animation: spray 1.2s ease-in-out infinite; }
</style>
