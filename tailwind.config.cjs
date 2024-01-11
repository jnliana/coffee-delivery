/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("./src/assets/images/hero-pattern.svg")'
      },
      borderRadius: {
        sm: '0.375rem',
        semifull: '3rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440'
      },
      colors: {
        yellow: {
          50: '#F1E9C9',
          100: '#DBAC2C',
          200: '#C47F17'
        },
        purple: {
          50: '#EBE5F9',
          100: '#8047F8',
          200: '#4B2995'
        },
        black: {
          50: '#8D8686',
          100: '#574F4D',
          200: '#403937',
          300: '#272221'
        },
        grey: {
          50: '#F3F2F2',
          100: '#EEEDED',
          200: '#E6E5E5',
          300: '#D7D5D5'
        },
        white: {
          50: '#FAFAFA',
          100: '#FFFFFF'
        }

      },
      fontFamily: {
        sans: ['"Baloo 2"', 'sans-serif'],
        serif: ['Roboto', ' sans-serif']
      }
    }
  }
}
