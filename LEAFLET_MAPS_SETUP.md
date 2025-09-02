# Leaflet Maps Integration Setup

## Overview
The Service Area section now includes an interactive Leaflet map showing the Tampa Bay service coverage area with a custom polygon boundary.

## Setup Instructions

### 1. Installation
Leaflet is already installed as a dependency. No additional setup required!

```bash
npm install leaflet  # Already done
```

### 2. Features
- **Interactive Map**: Shows Tampa Bay area with custom service boundary
- **Service Polygon**: Custom polygon showing exact service coverage area
- **City Markers**: Circle markers for major cities (Tampa, St. Pete, Clearwater, etc.)
- **OpenStreetMap Tiles**: Free, reliable map tiles
- **Responsive Design**: Works on all device sizes
- **Fallback Display**: Shows a styled fallback while map loads

### 3. Service Coverage Area
The map shows the complete Tampa Bay metro area including:
- **Hillsborough County**: Tampa, Brandon, Riverview, Wesley Chapel
- **Pinellas County**: St. Petersburg, Clearwater, Largo, Palm Harbor
- **Pasco County**: New Port Richey, Tarpon Springs
- **Manatee County**: Palmetto, Terra Ceia

### 4. Map Features
- **Custom Polygon**: Blue service area boundary
- **City Markers**: 
  - Tampa (larger blue marker)
  - Other cities (smaller green markers)
- **Tooltips**: Hover over markers to see city names
- **Zoom Controls**: Standard Leaflet zoom controls
- **Responsive**: Automatically fits to service area bounds

### 5. Technical Details
- **No API Key Required**: Uses free OpenStreetMap tiles
- **Lightweight**: Leaflet is much smaller than Google Maps
- **Fast Loading**: No external API calls needed
- **Custom Styling**: Matches website color scheme

## Map Styling
The map uses a clean, professional appearance:
- **Service Area**: Blue polygon (#1F6FE5) with transparency
- **Tampa Marker**: Blue circle marker (larger)
- **City Markers**: Green circle markers (smaller)
- **Map Tiles**: Standard OpenStreetMap styling
- **Controls**: Rounded zoom controls matching website theme
