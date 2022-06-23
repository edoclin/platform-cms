export default {
  head: {
    title: 'cms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'ant-design-vue/dist/antd.css'
  ],

  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/js-cookie'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],

  axios: {
    proxy: true
  },
  proxy: {
    "/api": {
      changeOrigin: true,
      target: 'http://localhost:8080/server', // 允许跨域的服务器地址
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  build: {
  }
}
