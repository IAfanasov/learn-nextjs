/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '/learn-nextjs/',
  output: 'export',
};

export default nextConfig;
