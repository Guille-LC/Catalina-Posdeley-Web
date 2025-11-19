/** @type {import('next').NextConfig} */
const nextConfig = {
  Images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
