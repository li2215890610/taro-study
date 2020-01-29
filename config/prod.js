module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    publicPath: './',
    /**
    router: {
      mode: 'browser', // 或者是 "hash"
      customRoutes: { // 自定义路由名称
        '/pages/index/index': '/index',
        '/pages/home/home': '/home',
      }
    }
     */
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
