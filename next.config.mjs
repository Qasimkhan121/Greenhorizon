import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["webapi.ghorizon.ae"],
  },
};

export default withNextIntl(nextConfig);
