const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  trailingSlash: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/:path*/',
        permanent: false,
      },
    ]
  },
  assetPrefix: isProd ?'https://daopark.xyz/':'',
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }));
    return config
  },
}
