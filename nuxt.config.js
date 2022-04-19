/**
 =========================================================
 * SmartHoldem Platform v2
 =========================================================
 * Coded by TechnoL0g
 =========================================================
 *
 */
export default {
    nitro: {
      preset: 'server'
    },
    rootDir: __dirname,
    server: {
        port: 9088,
        host: '127.0.0.1',
        timing: false
    },
    //mode: 'universal',
    //target: 'server',
    ssr: true,
    /*
    ** Headers of the page
    */
    head: {
        title: 'XBTS DEX',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'}
        ],
        bodyAttrs: {
            class: '' // `white-content` белый режим. sidebar-mini - сайдбар
        }
    },
    router: {
        linkExactActiveClass: 'active',
        base: '/',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '/deposit/:currency',
                component: resolve(__dirname, 'pages/deposit.vue')
            }),
                /*
                routes.push({
                    name: 'custom',
                    path: '/:lang/*',
                    component: resolve(__dirname, 'pages/GeneralViews/NotFoundPage.vue')
                }),
*/
                routes.push({
                    name: 'custom',
                    path: '/*',
                    component: resolve(__dirname, 'pages/GeneralViews/NotFoundPage.vue')
                })

        }
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
     ** Global CSS
     */
    css: [
        'assets/css/replace.css',
        'assets/css/nucleo-icons.css',
        'assets/sass/sth.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        `~/plugins/dashboard-plugin.js`,
       //{ src:  '~/plugins/client.js', ssr: false },
        //`~/plugins/router`,
        //{ src: '~/plugins/world-map.js', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
        'nuxt-i18n',
        '@nuxtjs/axios'
    ],
    axios: {},
    i18n: {
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected_sth',
            redirectOn: 'root',  // recommended
            alwaysRedirect: true,
            fallbackLocale: 'en'
        },

        locales: [
            {
                code: 'en',
                file: 'en.js',
                name: 'English',
            },
            {
                code: 'ru',
                file: 'ru.js',
                name: 'Русский',
            },
            {
                code: 'zh',
                file: 'zh.js',
                name: '简体中文',
            },
            {
                code: 'es',
                file: 'es.js',
                name: 'Español',
            },
            {
                code: 'de',
                file: 'de.js',
                name: 'Deutsch',
            },
            /*
          {
            code: 'ar',
            file: 'ar.js',
            name: 'Arabic'
          }
             */
        ],

    },
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },
        babel: {
            plugins: [
                [
                    'component',
                    {
                        'libraryName': 'element-ui',
                        'styleLibraryName': 'theme-chalk'
                    }
                ]
            ]
        }
    }
}
