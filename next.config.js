const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  trailingSlash: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },

  assetPrefix: isProd ?'https://daopark.xyz/':'',
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }));
    return config
  },
}
