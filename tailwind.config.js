// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floou-green': '#6A994E', // Warna hijau utama dari tombol
        'floou-light-green': '#A7C957',
        'floou-bg': '#F6F5F1', // Warna background
        'floou-brown': '#BC9C81', // Warna hero section
      }
    },
  },
  plugins: [],
}