// tailwind.config.js — Voima Initiative Design System

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // BRAND COLORS 
      colors: {
        primary: {
          50:  '#FFF4EE',
          100: '#FFE0CC',
          200: '#FFC09A',
          300: '#FF9E67',
          400: '#F47B3A',
          500: '#E8621E',  // Main brand
          600: '#C4481A',
          700: '#9A3315',
          800: '#72230E',
          900: '#3D1206',
        },
        neutral: {
          50:  '#FAFAF8',   // Page bg
          100: '#F2F1EE',   // Card surfaces
          200: '#E4E2DC',   // Borders
          300: '#CBC9C2',
          400: '#9B9891',
          500: '#76746D',
          600: '#5C5A55',   // Secondary text
          700: '#44423E',
          800: '#2C2B28',   // Body text
          900: '#1A1916',   // Headings
        },
        teal: {
          50:  '#E1F5EE',
          100: '#9FE1CB',
          400: '#1D9E75',
          600: '#0F6E56',
        },
      },

      //  TYPOGRAPHY 
      fontFamily: {
        display: ['Lobster', 'Georgia', 'serif'],
        body:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1rem' }],
        'sm':   ['0.875rem', { lineHeight: '1.375rem' }],
        'base': ['1rem',     { lineHeight: '1.625rem' }],
        'lg':   ['1.125rem', { lineHeight: '1.75rem' }],
        'xl':   ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem' }],
        '3xl':  ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':  ['2.25rem',  { lineHeight: '2.6rem' }],
        '5xl':  ['3rem',     { lineHeight: '1.1' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.05' }],
        '7xl':  ['4.5rem',   { lineHeight: '1' }],
      },

      //  SPACING 
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },

      //  BORDER RADIUS 
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      //  ANIMATION 
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'count-up': 'countUp 2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      //  SHADOWS 
      boxShadow: {
        'card':   '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.09)',
        'glass':  '0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)',
        'nav':    '0 1px 0 rgba(0,0,0,0.06)',
        'btn':    '0 1px 2px rgba(232,98,30,0.3), 0 4px 16px rgba(232,98,30,0.2)',
      },

      //  BACKDROP BLUR 
      backdropBlur: {
        'nav': '16px',
        'card': '12px',
      },

      //  MAX WIDTH 
      maxWidth: {
        'site': '1200px',
        'prose-lg': '760px',
      },

      //  BACKGROUND IMAGE 
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #E8621E 0%, #F47B3A 50%, #FAA65A 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(26,25,22,0.72) 0%, rgba(26,25,22,0.20) 100%)',
        'section-warm': 'linear-gradient(180deg, #FAFAF8 0%, #F2F1EE 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};