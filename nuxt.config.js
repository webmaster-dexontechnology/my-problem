import { apiPlugin } from '@storyblok/vue'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'


export default defineNuxtConfig({
  // Preview & Production approach: Uncomment this 👇🏼
  // ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  css: [
    '@unocss/reset/tailwind.css',
  ],
  modules: [
    '@formkit/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/algolia',
    'dexon-nuxt-cookie',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        use: [apiPlugin]
      },
    ],
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,

    // Setup Mail
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,

    // Contact Mail
    TESTMAIL: process.env.TESTMAIL,
    INFOMAIL: process.env.INFOMAIL,
    CAREERMAIL: process.env.CAREERMAIL,
    CUSTOMERMAIL: process.env.CUSTOMERMAIL,
    ANTIMAIL: process.env.ANTIMAIL,
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'es'],
    defaultLocale: 'en', // default locale
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      htmlAttrs: { dir: 'ltr', lang: 'en' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  pwa,
  algolia: {
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    globalIndex: 'Dexon',
    lite: true,
    cache: false,
    instantSearch: true,
    recommend: true,
  },
  cookieControl: {
    css: false,
    cssPolyfill: true,
    barPosition: 'bottom-right',
    blockIframe: true,
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          // if multilanguage
          name: {
            en: 'Default Cookies',
          },
          // else
          name: 'คุกกี้เริ่มต้น',
          // if multilanguage
          description: {
            en: 'Used for cookie control',
          },
          // else
          description: 'ใช้สำหรับการควบคุมคุกกี้',
          cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
        },
      ],
      optional: [
        {
          name: 'Google Analitycs',
          // if you don't set identifier, slugified name will be used
          identifier: 'ga',
          // if multilanguage
          description: {
            en: 'Used for manage tag management on the website.',
          },
          // else
          description: 'ใช้สำหรับจัดการบริหาร Tag บนเว็บไซต์',

          initialState: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-HPFS9HYZFR',
          async: true,
          cookies: ['_ga', '_gat', '_gid'],
          accepted: () => {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              'event': 'gtm.js',
            })
          },
          declined: () => {
          },
        },
      ],
    },
    locales: ['en', 'th'],
    localeTexts: {
      en: {
        manageCookies: 'Manage Cookies',
      },
      th: {
        manageCookies: 'จัดการคุกกี้',
      },
    },
  },
  build: {
    transpile: ['RGBELoader', 'EffectComposer', 'RenderPass', 'DotScreenPass', 'GlitchPass', 'ShaderPass', 'RGBShiftShader', 'GammaCorrectionShader', 'UnrealBloomPass', 'SMAAPass', 'GLTFLoader', 'OrbitControls', 'TransformControls', 'DRACOLoader'],
  },
  // Preview & Production approach: Uncomment this 👇🏼
  /* runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
  }, */
})
