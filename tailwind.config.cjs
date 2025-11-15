module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgdark: '#071025',
        'soft-text': '#E6F0FF',
        teal: {
          300: '#6EE7B7',
          400: '#2DD4BF',
        },
        purple: {
          500: '#7C3AED',
          600: '#6D28D9'
        },
        sunset: {
          400: '#FB923C',
          500: '#F43F5E'
        }
      },
      backgroundImage: {
        'teal-purple': 'linear-gradient(135deg,#2dd4bf 0%,#6d28d9 100%)',
        'sunset': 'linear-gradient(135deg,#fb923c 0%,#f43f5e 100%)'
      }
    }
  },
  plugins: []
}
