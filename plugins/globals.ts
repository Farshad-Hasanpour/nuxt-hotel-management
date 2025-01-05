
export default defineNuxtPlugin((nuxtApp) => {
	const snackbarStore = useSnackbarStore();

	const runtimePublic = useRuntimeConfig().public || {};
	nuxtApp.provide('http', $fetch.create({
		baseURL: runtimePublic.apiBase as string | undefined,
		headers: {
			Accept: 'application/json',
		},
		timeout: Number(runtimePublic.apiTimeout) || undefined,
		onRequest({ options }){

		},
		onResponse({response}) {
			const msg = response._data?.message;
			msg && snackbarStore.showSnackbar({
				msg,
				type: 'success',
			});
		},
		onResponseError(error: any){
			const msg = error.response?._data?.message;

			msg && snackbarStore.showSnackbar({
				msg,
				type: 'error',
			});
		}
	}))
});
