/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/common/Navbar.jsx",
    "./src/components/common/MeetOurTeam.jsx",
    "./src/components/core/Home.jsx",
    "./src/components/core/Learn.jsx",
    "./src/components/core/Contactus.jsx",
    "./src/components/core/Aboutus.jsx",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0070f3',
        pink: {
          100: '#FB5584',
          200: '#FF6588',
          300: '#FF6591',
        },
      },
    },
  },
  plugins: [],
}

