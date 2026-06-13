// tailwind.config.js — Voima Initiative Design System

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // BRAND COLORS - Voima Initiative Design System
      colors: {
        primary: {
          50:  '#FFF5F5',
          100: '#FDE8EA',
          200: '#F8C8CD',
          300: '#F19BA3',
          400: '#D44A56',
          500: '#BC1D26',  // Main brand (Voima Red)
          600: '#A11922',
          700: '#7E131A',
          800: '#5C0D12',
          900: '#39070A',
        },
        neutral: {
          0:   '#FFFFFF',
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',   // Secondary text
          700: '#404040',
          800: '#262626',   // Body text
          900: '#171717',   // Headings
        },
        success: {
          50:  '#E6F6F1',
          500: '#1D9E75',
        },
        warning: {
          500: '#F59E0B',
        },
        danger: {
          500: '#DC2626',
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