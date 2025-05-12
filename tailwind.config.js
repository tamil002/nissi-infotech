/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/bg-1.jpg')",
        "about": "url('/bg-2.jpg')",
        "service": "url('/bg-3.jpg')",
        "career": "url('/bg-4.jpg')",
        "contact": "url('/bg-5.jpg')"
      }
    },
  },
  plugins: [

    require('daisyui'),

  ],
}