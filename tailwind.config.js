/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ia-white': '#ffffff',
        'ia-surface': '#ededed',
        'ia-blue': '#009cde',
        'ia-blue-soft': '#40b5e6',
        'ia-title': '#333333',
        'ia-copy': '#454545',
      },
      boxShadow: {
        'ia-card': '0 18px 45px rgba(0, 0, 0, 0.14)',
        'ia-hero': '0 22px 55px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  plugins: [],
}
