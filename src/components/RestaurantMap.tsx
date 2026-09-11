"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "@/lib/site-data";

const CENTER: [number, number] = [siteConfig.geo.lat, siteConfig.geo.lng];
const BRAND = "#ff2e88";

export default function RestaurantMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.init) return;
    el.dataset.init = "1";

    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = await import("leaflet");

      map = L.map(el, {
        center: CENTER,
        zoom: 16,
        zoomControl: false,
        attributionControl: true,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19,
        // Tuiles assombries pour s'accorder au thème nuit (l'attribution reste lisible,
        // elle est rendue hors de ce calque).
        className: "map-tiles-dark",
      }).addTo(map);

      L.circle(CENTER, {
        radius: 90,
        color: BRAND,
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 0.18,
      }).addTo(map);

      L.circleMarker(CENTER, {
        radius: 7,
        color: "#ffffff",
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 1,
      }).addTo(map);
    })();

    return () => {
      map?.remove();
      delete el.dataset.init;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[320px] w-full bg-navy-light"
      role="img"
      aria-label={`Emplacement de ${siteConfig.name}, ${siteConfig.street}, ${siteConfig.postalCode} ${siteConfig.city}`}
    />
  );
}
