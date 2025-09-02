<template>
    <div class="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <!-- Fallback before Leaflet mounts -->
      <div v-if="!mapLoaded" class="w-full h-full bg-gradient-to-br from-tampa-light-blue to-tampa-light-green flex items-center justify-center">
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-tampa-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.5"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Service Area</h3>
          <p class="text-sm text-gray-600 mb-4">Tampa Bay Metro (Hillsborough, Pinellas, south Pasco, north Manatee)</p>
          <div class="flex flex-wrap justify-center gap-2">
            <span v-for="area in fallbackAreas" :key="area" class="bg-white text-tampa-blue px-2 py-1 rounded-full text-xs font-medium">
              {{ area }}
            </span>
          </div>
        </div>
      </div>
  
      <!-- Leaflet map -->
      <div ref="mapEl" class="w-full h-full"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import * as L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  // Tampa downtown (reference/label only)
  const TAMPA_CENTER = { lat: 27.9506, lng: -82.4572 }
  
  const mapEl = ref(null)
  const mapLoaded = ref(false)
  let mapInstance = null
  let polygonLayer = null
  let cityMarkers = []
  
  const fallbackAreas = [
    'Tampa', 'St. Petersburg', 'Clearwater', 'Brandon',
    'Riverview', 'Wesley Chapel', 'Largo', 'Palm Harbor'
  ]
  
  // Tampa Bay service polygon (outer hull, clockwise)
  const SERVICE_POLYGON_PATH = [
    // Pasco / Pinellas north
    { lat: 28.1461, lng: -82.7568 }, // Tarpon Springs
    { lat: 28.1150, lng: -82.7000 }, // East Lake / Keystone
    { lat: 28.1900, lng: -82.5900 }, // Odessa
    { lat: 28.2397, lng: -82.3279 }, // Wesley Chapel
    { lat: 28.1200, lng: -82.2500 }, // Thonotosassa east
    // Hillsborough east/south
    { lat: 27.9831, lng: -82.2753 }, // Seffner
    { lat: 27.9378, lng: -82.2859 }, // Brandon
    { lat: 27.8661, lng: -82.3265 }, // Riverview
    { lat: 27.7731, lng: -82.4070 }, // Apollo Beach
    { lat: 27.7209, lng: -82.4335 }, // Ruskin
    // Manatee north / Skyway
    { lat: 27.6000, lng: -82.5600 }, // Terra Ceia / Palmetto edge
    { lat: 27.6376, lng: -82.6430 }, // Skyway north/east
    // Pinellas west/south
    { lat: 27.6769, lng: -82.7370 }, // St. Pete south
    { lat: 27.7300, lng: -82.7600 }, // Gulfport
    { lat: 27.8000, lng: -82.8000 }, // St. Pete beaches
    { lat: 27.9098, lng: -82.7884 }, // Largo
    { lat: 27.9659, lng: -82.8001 }, // Clearwater
    { lat: 28.0836, lng: -82.7530 }, // Palm Harbor
    { lat: 28.1461, lng: -82.7568 }  // back to Tarpon Springs
  ]
  
  // Optional city points
  const CITIES = [
    { name: 'Tampa',          lat: 27.9506, lng: -82.4572 },
    { name: 'St. Petersburg', lat: 27.7676, lng: -82.6403 },
    { name: 'Clearwater',     lat: 27.9659, lng: -82.8001 },
    { name: 'Brandon',        lat: 27.9378, lng: -82.2859 },
    { name: 'Riverview',      lat: 27.8661, lng: -82.3265 },
    { name: 'Wesley Chapel',  lat: 28.2397, lng: -82.3279 }
  ]
  
  onMounted(() => {
    if (!mapEl.value) return
  
    // Create map
    mapInstance = L.map(mapEl.value, {
      center: [TAMPA_CENTER.lat, TAMPA_CENTER.lng],
      zoom: 10,
      zoomSnap: 0.5,
      wheelDebounceTime: 40,
      worldCopyJump: true
    })
  
    // Basemap — OSM tiles (free, but use your own provider for prod traffic)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // Keep attribution, it’s required
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance)
  
    // Service polygon
    polygonLayer = L.polygon(
      SERVICE_POLYGON_PATH.map(({ lat, lng }) => [lat, lng]),
      {
        color: '#1F6FE5',       // stroke
        weight: 2,
        opacity: 0.9,
        fillColor: '#1F6FE5',
        fillOpacity: 0.14,
        smoothFactor: 1
      }
    ).addTo(mapInstance)
  
    // Fit bounds with padding
    const bounds = polygonLayer.getBounds()
    mapInstance.fitBounds(bounds, { padding: [24, 24] })
  
    // Circle markers for cities (iconless, so no asset bundling mess)
    cityMarkers = CITIES.map(({ name, lat, lng }) => {
      const m = L.circleMarker([lat, lng], {
        radius: name === 'Tampa' ? 7 : 5,
        color: '#ffffff',
        weight: 2,
        fillColor: name === 'Tampa' ? '#1F6FE5' : '#22C55E',
        fillOpacity: 1
      }).addTo(mapInstance)
      m.bindTooltip(name, { direction: 'top', offset: [0, -6], opacity: 0.9 })
      return m
    })
  
    mapLoaded.value = true
  })
  
  onUnmounted(() => {
    if (mapInstance) {
      mapInstance.remove()
      mapInstance = null
      polygonLayer = null
      cityMarkers = []
    }
  })
  </script>
  
  <style>
  /* Ensure Leaflet controls play nice with rounded container */
  .leaflet-control-zoom a {
    border-radius: 0.5rem;
  }
  .leaflet-control-zoom a + a {
    margin-top: 0.25rem;
  }
  </style>
  