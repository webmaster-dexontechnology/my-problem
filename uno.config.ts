import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const colors = {
  primary: '#140A4B',
  secondary: {
    red: {
      100: '#EE2334',
      200: '#EC1651',
    },
    blue: {
      100: '#1b4dff',
    },
    gray: {
      50: '#f4f7fb',
      100: '#F4F7F9',
      200: '#EFF3F6',
      300: '#DDE2E6',
      400: '#CCD4D9',
      500: '#B4BEC5',
    },
  },
  shadow: {
    light: '#6158AA',
    dark: '#140A4B',
  },
}

const fontSize = {
  'xs': ['0.8rem', { lineHeight: '1.9' }],
  'sm': ['0.875rem', { lineHeight: '1.9' }],
  'base': ['1rem', { lineHeight: '1.9' }],
  'lg': ['1.125rem', { lineHeight: '1.9' }],
  'xl': ['1.25rem', { lineHeight: '1.9' }],
  '2xl': ['1.5rem', { lineHeight: '1.9' }],
  '3xl': ['1.875rem', { lineHeight: '1.2' }],
  '4xl': ['2.25rem', { lineHeight: '1.2' }],
  '5xl': ['3rem', { lineHeight: '1.2' }],
  '6xl': ['3.75rem', { lineHeight: '1.2' }],
  '7xl': ['4.5rem', { lineHeight: '1.2' }],
  '8xl': ['6rem', { lineHeight: '1.2' }],
  '9xl': ['8rem', { lineHeight: '1.2' }],
}

const boxShadow = {
  'custom-sm': '0 1px 8px 0px rgb(97 88 170 / 0.1), 0 0.5px 3px -4px rgb(97 88 170 / 0.15)',
  'custom-md': '0 2px 12px 0px rgb(97 88 170 / 0.1), 0 1px 8px -5px rgb(97 88 170 / 0.1)',
  'custom-lg': '0 4px 20px 0px rgb(97 88 170 / 0.1), 0 2px 12px -7px rgb(97 88 170 / 0.1)',
  'custom-xl': '0 8px 35px 0px rgb(97 88 170 / 0.1), 0 3px 18px -9px rgb(97 88 170 / 0.1)',
  'custom-2xl': '0 12px 50px 0px rgb(97 88 170 / 0.1), 0 4px 26px -11px rgb(97 88 170 / 0.1)',
  'custom-3xl': '0 14px 65px 0px rgba(97 88 170 / 0.1), 0 10px 32px -12px rgb(97 88 170 / 0.1)',
}

export default defineConfig({
  shortcuts: [],
  theme: {
    spacing: {
      'mobile-navbar': '50px',
      'desktop-navbar': '58px',
      'desktop': '150px',
      'mobile': '100px',
      'custom-xs': '10px',
      'custom-sm': '15px',
      'custom-md': '25px',
      'custom-lg': '30px',
      'custom-xl': '45px',
      'custom-2xl': '60px',
      'custom-3xl': '75px',
    },
    boxShadow,
    fontSize,
    colors,
    breakpoints: {
      'xs': '375px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '2560px',
    },
    screens: {
      'xs': '375px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '2560px',
    },
    container: {
      center: true,
      screens: {
        'xs': '100%',
        'sm': '100%',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1366px',
        '3xl': '2560px',
      },
    },
    extend: {
      fontSize: {
        md: ['1rem', { lineHeight: '1.9' }],
      },
      animation: {
        'fade': 'fade 0.4s ease-in-out',
        'slideDown': 'slideDown 1s ease-in',
      },
      keyframes: {
        ping: {
          '75%': {
            transform: 'scale(1',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.3)',
            opacity: 0,
          },
        },
        smallPing: {
          '75%': {
            transform: 'scale(0.8)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1.15)',
            opacity: 1,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0%': {
            scale: 0,
            opacity: 0,
          },
          '100%': {
            opacity: 1,
            scale: 1,
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-70px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: ['Montserrat:300,400,500,600,700', 'Kanit:300,400,500,600,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
