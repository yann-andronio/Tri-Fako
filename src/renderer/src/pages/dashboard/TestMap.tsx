// src/components/TestMap.tsx
import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


const TestMap = () => {
  useEffect(() => {
    // Initialisation de la carte
    const map = L.map('map').setView([-18.8792, 47.5079], 6) // Madagascar

    // Ajout du fond de carte (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)


    // Exemple de marqueurs
    L.marker([-18.8792, 47.5079]).addTo(map).bindPopup('Poubelle à Antananarivo')

    L.marker([-20.2861, 44.3175]).addTo(map).bindPopup('Poubelle à Morondava')

    // Nettoyage à la destruction du composant
    return () => {
      map.remove()
    }
  }, [])

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '500px',
        marginTop: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}
    ></div>
  )
}

export default TestMap
