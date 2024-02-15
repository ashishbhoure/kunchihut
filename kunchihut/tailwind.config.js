/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/lib/esm/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("flowbite/plugin")],
// };

module.exports = {
  plugins: [require("flowbite/plugin")],

  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
};
