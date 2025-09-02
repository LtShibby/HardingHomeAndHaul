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
  'Riverview', 'Wesley Chapel', 'Largo', 'Palm Harbor',
  'New Port Richey', 'Hudson', 'Spring Hill', 'Brooksville'
]

// Tampa Bay + Pasco + Hernando service polygon (outer hull, clockwise)
const SERVICE_POLYGON_PATH = [
  // Hernando north edge (Spring Hill / Brooksville / Weeki Wachee)
  { lat: 28.55, lng: -82.75 },  // Weeki Wachee (Gulf coast)
  { lat: 28.55, lng: -82.40 },  // Brooksville east

  // Pasco east side
  { lat: 28.33, lng: -82.20 },  // Dade City area
  { lat: 28.12, lng: -82.20 },  // Thonotosassa east (already had, keep lower)

  // Hillsborough south
  { lat: 27.98, lng: -82.27 },  // Seffner
  { lat: 27.94, lng: -82.29 },  // Brandon
  { lat: 27.87, lng: -82.33 },  // Riverview
  { lat: 27.77, lng: -82.41 },  // Apollo Beach
  { lat: 27.72, lng: -82.43 },  // Ruskin

  // Manatee north / Skyway
  { lat: 27.60, lng: -82.56 },  // Terra Ceia / Palmetto edge
  { lat: 27.64, lng: -82.64 },  // Skyway north/east

  // Pinellas south/west
  { lat: 27.68, lng: -82.85 },  // St. Pete south
  { lat: 27.73, lng: -82.85 },  // Gulfport
  { lat: 27.80, lng: -82.85 },  // St. Pete Beach
  { lat: 27.91, lng: -82.85 },  // Largo
  { lat: 27.97, lng: -82.85 },  // Clearwater
  { lat: 28.08, lng: -82.85 },  // Palm Harbor
  { lat: 28.15, lng: -82.85 },  // Tarpon Springs

  // Pasco coast (Holiday / New Port Richey / Hudson)
  { lat: 28.22, lng: -82.85 },  // New Port Richey
  { lat: 28.38, lng: -82.85 },  // Hudson
  { lat: 28.55, lng: -82.85 }   // close loop back at Weeki Wachee
]

// Optional city points
const CITIES = [
  { name: 'Tampa',          lat: 27.9506, lng: -82.4572 },
  { name: 'St. Petersburg', lat: 27.7676, lng: -82.6403 },
  { name: 'Clearwater',     lat: 27.9659, lng: -82.8001 },
  { name: 'Brandon',        lat: 27.9378, lng: -82.2859 },
  { name: 'Riverview',      lat: 27.8661, lng: -82.3265 },
  { name: 'Wesley Chapel',  lat: 28.2397, lng: -82.3279 },
  { name: 'New Port Richey',lat: 28.2449, lng: -82.7193 },
  { name: 'Spring Hill',    lat: 28.4789, lng: -82.5307 },
  { name: 'Brooksville',    lat: 28.5553, lng: -82.3879 }
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
  