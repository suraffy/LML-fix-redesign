import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

type ColorShades = {
  [key: string]: string;
};

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xs: '480px',
      },
      colors: (() => {
        const colorNames = ['gray', 'blackA', 'yellow', 'mauve', 'violet', 'purple', 'indigo'];
        const shades = 12;

        const colors: ColorShades = {};

        colorNames.forEach((color) => {
          for (let i = 1; i <= shades; i++) {
            colors[`${color}${i}`] = `var(--${color}-${i})`;
          }
        });

        return colors;
      })(),

      keyframes: {
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { transform: 'translateX(50%)' },
          to: { transform: 'translateX(0)' },
        },
        contentHide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(50%)' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease-in-out',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        slideDown: 'slideDown 300ms ease-in-out',
        slideUp: 'slideUp 300ms ease-in-out',
        overlayShow: 'overlayShow 300ms ease',
        contentShow: 'contentShow 300ms ease',
        contentHide: 'contentHide 300ms ease',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
} satisfies Config;

export default config;
