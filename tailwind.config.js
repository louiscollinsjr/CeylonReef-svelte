/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fa',
          100: '#d9eef5',
          200: '#b3dcea',
          300: '#7cc3db',
          400: '#3fa3c5',
          500: '#2E8B9E',
          600: '#1F4E78',
          700: '#1a4265',
          800: '#153552',
          900: '#112a42',
        },
        accent: {
          50: '#fdf6f1',
          100: '#fbeadd',
          200: '#f7d4bb',
          300: '#f2b88e',
          400: '#E8A87C',
          500: '#d4875a',
          600: '#c06a3e',
          700: '#a05432',
          800: '#82452c',
          900: '#6a3a27',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#C2C2C2',
          400: '#999999',
          500: '#707070',
          600: '#525252',
          700: '#3D3D3D',
          800: '#333333',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'archivo': ['Archivo', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'display-3': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.5' }],
        '4xl': ['2.25rem', { lineHeight: '1.5' }],
        '5xl': ['3rem', { lineHeight: '1.5' }],
        '6xl': ['3.75rem', { lineHeight: '1.5' }],
        '7xl': ['4.5rem', { lineHeight: '1.5' }],
        '8xl': ['6rem', { lineHeight: '1.5' }],
        '9xl': ['8rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
