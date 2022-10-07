/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './src/**/*.{html,js}'
    // './node_modules/flowbite/**/*.js'
  ],
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
