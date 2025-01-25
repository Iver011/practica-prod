/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
const withPWA = require('next-pwa')({
    dest: 'public'
  });
  module.exports = withPWA({});
  