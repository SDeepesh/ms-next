module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        black: '#454545',
        gray: '#282828',
        'gray-light': '#9A9A9A',
        'gray-lighter': '#f7f7f7',
        'gray-custom': '#7b7b7b',
        'gray-cdf': '#DDDDDD',
        main: '#31A9FD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
