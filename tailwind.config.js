/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '50%': { opacity: 1, transform: 'scale(.95)' },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      colors: {
        red: '#DB1D1B ',
        'red-50': '#FFECEF',
        'red-100': '#FFCED5',
        'space-cadet': '#141E3E',
        gray: '#898F9F',
        'gray-100': '#D6D8DC',
        'light-coral': '#EE7674',
      },
      padding: {
        'container-sm': '0.75rem',
        'container-lg': '5rem',
      },
      backgroundImage: {
        'header-image': 'url(/public/full-banner-home.png)',
        'services-hero': 'url(/public/full-banner-servicos.png)',
        'about-hero': 'url(/public/BANNER-SOBRE.jpg)',
        'contact-hero': 'url(/public/full-banner-contato.png)',
        'fundo-faq': 'url(/public/fundo-faq-novo.png)',
        'bg-geral': 'url(/public/bg-geral.png)',
        'textura-servicos': 'url(/public/textura-servicos.png)'
      },
      backgroundSize: {
        'section-lg': '840px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
