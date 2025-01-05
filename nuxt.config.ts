import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

const isDevelopment = process.env.NODE_ENV === 'development';
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: false},
	runtimeConfig: {
		apiSecret: '',
		public: {
			isDev: process.env.NODE_ENV === 'development',
			apiBase: process.env.NUXT_APP_PUBLIC_API_BASE,
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		}
	},
	css: [
		'~/assets/scss/index.scss',
		'@mdi/font/css/materialdesignicons.css'
	],
	build: {
		transpile: ['vuetify'],
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({
					autoImport: true,
					styles: {
						configFile: './assets/scss/variables/vuetify-settings.scss',
					},
				}))
			})
		},
		'@pinia/nuxt',
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: '@use "~/assets/scss/variables/globals.scss" as *;'
				}
			},
		},
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
