// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: ["nuxt-directus", '@formkit/nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt',],
    runtimeConfig: {
        public: {
            directusUrl: process.env.DIRECTUS_URL,
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
        },
    },
    // theme: 'genesis',
    vite: {
        optimizeDeps: {
            include: [
                '@heroicons/vue/20/solid',
                '@heroicons/vue/24/solid',
                '@heroicons/vue/24/outline',
                '@headlessui/vue',
                'vue',
                'pinia',
                ],
        },
    },
})