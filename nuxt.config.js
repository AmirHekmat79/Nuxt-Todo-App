export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "toDoList",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-png", href: "/checklist.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script&family=Fjalla+One&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/fontawesome",
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
