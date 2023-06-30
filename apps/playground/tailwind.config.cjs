/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/@mytunes/utils-frontend/src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          750: '#333333',
          850: '#212121',
        },
      },
    },
  },
  plugins: [],
  variants: {},
}
