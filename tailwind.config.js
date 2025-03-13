/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        babyBlue: "#6493A4", 
      },
      fontFamily: {
        'vcr-osd-mono': ['vcr-osd-mono'], 
        'minecraft': ['minecraft'],
      },
      boxShadow: {
        'baby-blue-glow': '0 0 10px #6493A4, 0 0 20px #6493A4, 0 0 40px #6493A4',
      },
    },
  },
  plugins: [],
};
