import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 réencode par défaut en qualité 75, ce qui adoucit nettement
    // des photos déjà petites. On autorise une qualité haute pour les visuels
    // du restaurant.
    qualities: [75, 95],
  },
  /* config options here */
};

export default nextConfig;
