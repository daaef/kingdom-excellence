const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./nuxt.config.{js,ts}`,
        ],
    variants: {
        extend: {},
    },
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        formKitTailwind
        ],
}