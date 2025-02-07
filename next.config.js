/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    NEXT_PUBLIC_STRIPE_SUCCESS_URL: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL,
    NEXT_PUBLIC_STRIPE_CANCEL_URL: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL,
  },
};

module.exports = nextConfig;
