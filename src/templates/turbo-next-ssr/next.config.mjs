import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  svgrOptions: {
    titleProp: true,
    icon: true,
  },
});

export default nextConfig;
