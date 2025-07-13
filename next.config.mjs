import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
    messages: {
        locales: ['en', 'vi'],
        path: './src/locales'
    }
})

/** @type {import('next').NextConfig;} */
const nextConfig = {}

export default withNextIntl(nextConfig)