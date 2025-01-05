import type {Config} from 'tailwindcss'

export default {
	prefix: 'tw-',
	important: '#__nuxt',
	corePlugins: {
		preflight: false,
	},
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		screens: {
			sm: '600px',
			md: '960px',
			lg: '1280px',
			xl: '1920px',
			xxl: '2560',
		},
		fontFamily: {
			'shabnam': ['Shabnam', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config

