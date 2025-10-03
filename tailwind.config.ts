import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        basalt: {
          50: '#f7f7f7',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#ababab',
          400: '#808080',
          500: '#5c5c5c',
          600: '#3d3d3d',
          700: '#2b2b2b',
          800: '#1a1a1a',
          900: '#0f0f0f',
        },
        copper: {
          50: '#fef6f0',
          100: '#fdeadb',
          200: '#fad1b6',
          300: '#f6b286',
          400: '#f18b54',
          500: '#e96d2f',
          600: '#d95420',
          700: '#b43f1a',
          800: '#90331c',
          900: '#752c1a',
        },
        terracotta: {
          50: '#faf5f2',
          100: '#f5e8e1',
          200: '#e9cec0',
          300: '#dbae98',
          400: '#cb8868',
          500: '#bf6b47',
          600: '#b1563c',
          700: '#934533',
          800: '#773a2f',
          900: '#603229',
        },
        dicle: {
          50: '#f2f8f5',
          100: '#dfeee6',
          200: '#c0ddce',
          300: '#95c5ad',
          400: '#67a586',
          500: '#478868',
          600: '#366d53',
          700: '#2d5744',
          800: '#264637',
          900: '#20392e',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'strong': '0 20px 60px rgba(0, 0, 0, 0.25)',
        'basalt': '0 8px 32px rgba(15, 15, 15, 0.3)',
        'copper': '0 0 30px rgba(233, 109, 47, 0.25)',
        'inner': 'inset 0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ottoman: ['Cinzel', 'Georgia', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    }
  },
  plugins: []
}
export default config

