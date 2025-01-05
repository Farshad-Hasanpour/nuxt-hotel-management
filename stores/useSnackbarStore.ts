import {reload} from "vite-node/hmr";

interface SnackbarState {
	show: boolean
	type: string
	msg: string
	timeout: number | undefined,
	reload: boolean,
}

export const useSnackbarStore = defineStore('snackbarStore', () => {
	const defaultTimeout = 8000;
	const defaultReload = true;

	const snackbar = reactive<SnackbarState>({
		show: false,
		type: 'error',
		msg: '',
		timeout: defaultTimeout,
		reload: defaultReload,
	});

	async function showSnackbar(
		{msg, type, reload, timeout}: {
			msg: string,
			type?: string,
			reload?: boolean,
			timeout?: number,
		}
	) {
		snackbar.msg = msg;
		snackbar.type = type || 'error';
		snackbar.reload = reload || defaultReload;
		snackbar.timeout = timeout || defaultTimeout;
		snackbar.show = true;
	}

	function closeSnackbar(){
		snackbar.show = false;
	}

	return {
		snackbar,
		showSnackbar,
		closeSnackbar,
	}
})
