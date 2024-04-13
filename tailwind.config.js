/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        'card': '600px',
        'logo': '520px',
      },
      width: {
        'card': '400px',
        'logo': '380px',
      },
      boxShadow: {
        'card': ' 8px 9px rgba(204, 204, 204, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}

