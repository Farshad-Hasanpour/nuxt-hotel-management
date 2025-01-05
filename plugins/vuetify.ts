import { createVuetify } from 'vuetify'
import {VBtn} from "vuetify/lib/components/VBtn";
import { fa, en } from 'vuetify/locale';

export default defineNuxtPlugin((app) => {
	app.vueApp.use(createVuetify({
		locale: {
			locale: 'fa',
			fallback: 'en',
			messages: { fa, en },
		},
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					dark: false,
					colors: {
						primary: '#fb5800',
					},
				}
			}
		},
		aliases: {
			VPrimaryBtn: VBtn,
			VSecondaryBtn: VBtn,
			VIconBtn: VBtn,
		},
		defaults: {
			VBtn: {
				class: 'tw-overflow-hidden tw-shrink-0',
			},
			VPrimaryBtn: {
				variant: 'flat',
				rounded: 'pill',
				color: 'primary',
				class: 'tw-overflow-hidden tw-shrink-0',
			},
			VSecondaryBtn: {
				variant: 'outlined',
				rounded: 'pill',
				color: 'white',
				class: 'tw-overflow-hidden tw-font-bold tw-border-2 tw-shrink-0',
			},
			VIconBtn: {
				variant: 'text',
				rounded: 'full',
			},
			VTextField: {
				variant: 'outlined',
				density: 'comfortable',
				color: 'secondary',
				bgColor: 'surface-light',
			},
			VAutocomplete: {
				variant: 'outlined',
				density: 'comfortable',
				color: 'secondary',
				bgColor: 'surface-light',
			},
			VCard: {
				flat: true,
			},
			VDivider: {
				opacity: '0.8',
				thickness: '2',
				length: '100%'
			},
			VForm: {
				validateOn: 'invalid-input',
				class: 'tw-flex tw-flex-wrap tw-items-stretch'
			},
			VCheckbox: {
				density: 'compact',
				color: 'secondary',
			},
			VAvatar: {
				rounded: 'full',
				color: 'primary',
				size: 32,
				class: 'pa-0'
			}
		}
	}))
})
