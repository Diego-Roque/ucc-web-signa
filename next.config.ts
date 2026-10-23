import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el servidor de desarrollo desde otros dispositivos de la red local (celular)
  allowedDevOrigins: ["10.128.10.227"],
};

export default nextConfig;
