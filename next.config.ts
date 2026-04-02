import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/writing',
        destination: '/writings',
        permanent: true,
      },
      {
        source: '/writing/:slug',
        destination: '/writings/columns/:slug',
        permanent: true,
      },
      {
        source: '/archive',
        destination: '/writings',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
