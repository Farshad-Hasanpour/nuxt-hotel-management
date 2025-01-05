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
			VTextField: {
				variant: 'outlined',
				density: 'comfortable',
				color: 'secondary',
				bgColor: 'surface-light',
				class: 'tw-w-full'
			},
			VBtn: {
				class: 'overflow-hidden tw-shrink-0',
			},
			VPrimaryBtn: {
				variant: 'flat',
				rounded: 'pill',
				color: 'primary',
				class: 'overflow-hidden tw-shrink-0 tw-h-[48px]',
			},
			VSecondaryBtn: {
				variant: 'outlined',
				rounded: 'pill',
				color: 'white',
				class: 'overflow-hidden font-weight-bold tw-border-2 tw-shrink-0 tw-h-[48px]',
			},
			VIconBtn: {
				variant: 'text',
				rounded: 'full',
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
