import type {$Fetch, NitroFetchRequest} from "nitropack/types";

declare module '#app' {
	interface NuxtApp {
		$http: $Fetch<unknown, NitroFetchRequest>,
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$http: $Fetch<unknown, NitroFetchRequest>,
	}
}

export {}
