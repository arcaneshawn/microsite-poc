export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-slicemachine-project',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["vue-essential-slices/src/styles/styles.scss"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/svg"],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["@nuxtjs/prismic", {
      "endpoint": "https://sliceymachinetest.cdn.prismic.io/api/v2",
      "apiOptions": {
        "routes": [
          {
            "type": "pagev2",
            "path": "/:uid"
          },
          {
            "type": "subpage",
            "path": "/:parentpage/:uid",
            "resolvers": {
              "parentpage": "parentpage"
            }
          }
      ]}
    }],
    ["nuxt-sm"]
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    extend(config, { isDev, isClient }) {
      config.module.rules = config.module.rules.map(rule => {
        if (String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)) {
          return {
            ...rule,
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
          };
        }
        return rule;
      })
    }
  },
  storybook: {
    stories: ["~/slices/**/*.stories.js"]
  },
  ignore: ["**/*.stories.js"]
};
