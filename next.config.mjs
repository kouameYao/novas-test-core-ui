/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔒 Configuration sécurisée des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novasend.app',
        port: '',
        pathname: '/**'
      }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60
  },

  // 🔒 Sécurité et validation activées
  eslint: {
    ignoreDuringBuilds: false, // ✅ Activé pour la production
    dirs: ['app', 'components', 'features', 'lib', 'hooks', 'store']
  },

  typescript: {
    ignoreBuildErrors: false // ✅ Activé pour la production
  },

  // 🔒 Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },

  // 🔒 Configuration de production
  poweredByHeader: false,
  compress: true,

  experimental: {
    instrumentationHook: false,
    serverComponentsExternalPackages: ['better-auth']
  },

  // 🔒 Variables d'environnement publiques validées
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  }
};

export default nextConfig;
