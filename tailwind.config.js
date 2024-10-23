/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#27B5FC"
      },
      gridTemplateColumns: {
        'footer': '1.3fr 1fr 1fr 1fr'
      }, 
      container: {
        screens: {
          xl: '1220px'
        }
      }
    },
  },
  plugins: [],
};
