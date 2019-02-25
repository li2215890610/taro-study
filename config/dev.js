module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  h5: {
    // https://nervjs.github.io/taro/docs/config-detail.html
    router: {
      mode: 'browser', // 或者是 "hash"
      // customRoutes: { // 自定义路由名称
      //   '/pages/index/index': '/index',
      //   '/pages/home/home': '/home',
      // }
    }
  }
}
