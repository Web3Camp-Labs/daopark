module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }));
    return config
  },
}
