export default defineNuxtConfig({
 css: ['~/assets/css/main.css'],
 postcss: {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
   },
   },

 devtools: {enabled: false,},
 modules: ['@nuxt/image', 'motion-v/nuxt'],
})
