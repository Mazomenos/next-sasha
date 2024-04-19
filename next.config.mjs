/** @type {import('next').NextConfig} */
const nextConfig = {
        // ... other configurations
      
        webpack: (config, { isServer }) => {
          // Add SVG rule
          config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          });
      
          return config;
        },
      };

export default nextConfig;
