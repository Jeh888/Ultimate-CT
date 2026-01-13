/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep teal - primary brand colour (Harley Street inspired)
        primary: {
          50: '#f0f7f7',
          100: '#d9ebeb',
          200: '#b3d6d6',
          300: '#80b8b8',
          400: '#4d9999',
          500: '#2d7a7a',
          600: '#1f5f5f',
          700: '#1a4f4f',
          800: '#164040',
          900: '#0f2e2e',
          950: '#091c1c',
        },
        // Warm gold accent
        accent: {
          50: '#faf8f3',
          100: '#f4f0e4',
          200: '#e8dfc6',
          300: '#d9c9a1',
          400: '#c9b17a',
          500: '#b89b5e',
          600: '#a68548',
          700: '#8a6c3c',
          800: '#715836',
          900: '#5e4a2f',
        },
        // Cream backgrounds
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf7f0',
          300: '#f5f1e8',
          400: '#ebe5d8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
