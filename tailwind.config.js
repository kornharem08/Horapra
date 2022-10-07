/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts,html}',
    './layouts/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './pages/**/*.{html,js,vue}',
    './index.html',
    './src/**/*.{html,js}',
    './dist/**/*.{html,js,vue}'
    // './node_modules/flowbite/**/*.js'
  ],
  variants: {
    display: ['responsive']
  },
  theme: {
    extend: {
      colors: {
        main: '#BE9365',
        submain: '#D6C1A7'
      },
      fontFamily: {
        OpunMai: ['OpunMai', 'sans-serif'],
        Opun: ['Opun', 'sans-serif']
      }
    }
  }
  // plugins: [require('flowbite/plugin')]
}
