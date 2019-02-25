module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  weapp: {},
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
  }
}
