/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        san:'Orbitron, sans-serif',
      },
      screens: {
        'xsm': '330px',
        'xsmm': '425px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
