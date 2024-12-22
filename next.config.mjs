/** @type {import('next').NextConfig} */
import CopyWebpackPlugin from 'copy-webpack-plugin';

const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'instagram.fbom65-1.fna.fbcdn.net', 'wallpaperaccess.com', 'github.com'], // Add this line to allow images from Unsplash
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.plugins.push(
          new CopyWebpackPlugin({
            patterns: [
              {from: 'src/app/api/templates', to: 'templates'},
            ]
          })
        )
      }
      return config;
    },
  }
  
  export default nextConfig;
  
