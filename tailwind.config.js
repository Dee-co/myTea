/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./Src/**/*.{js,jsx,ts,tsx}", "./Src/Components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font family here
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}