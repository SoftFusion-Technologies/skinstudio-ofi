/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans'],
        roboto: ['Roboto', 'sans'],
        lora: ['Lora', 'sans']
      },
      width: {
        120: '120px'
      },
      colors: {
        borraDeVino: '#8C001A',
        primary: '#232949',
        moradologo: '#9F8EEC',
        moradoscuro: '#9181d7',
        verdelogo: '#C0CE4C',
        sombra: '#00000025',
        Gray: '#9ca3af',
        tropicalindigo: '#8980F5',
        mayablue: '#7EBCE6',
        tiffanyblue: '#69D1C5',
        keppel: '#3BA99C',
        darkcyan: '#21897E',
        flame: '#E4572E',
        persianorange: '#DE9151',
        azulonda: '#2A7392'
      },
      boxShadow: {
        before: '-10px 10px 0 #FFF',
        before2: '-10px -10px 0 #FFF',
        after: '-10px 10px 0 #FFF',
        after2: '-10px 10px 0 #8C001A'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-out',
        'fade-out': 'fade-out 300ms ease-out'
      }
    }
  },
  plugins: []
};
