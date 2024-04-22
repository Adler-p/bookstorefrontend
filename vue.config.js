module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_BASE_URL
    : '/',

  configureWebpack: {
    plugins: [
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        'jquery': 'jquery/src/jquery.js'
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://calm-mountain-10484-296975bbfc99.herokuapp.com/',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
