<template>
	<v-app>
		<NuxtLayout>
			<NuxtPage/>
		</NuxtLayout>
		<v-snackbar
			v-model="snackbarStore.snackbar.show"
			:close-on-back="false"
			location="top"
			:text="snackbarStore.snackbar.msg"
			:timeout="snackbarStore.snackbar.timeout"
			:color="snackbarStore.snackbar.type"
		>
			<template #actions>
				<v-btn
					v-if="snackbarStore.snackbar.reload"
					icon="mdi-reload"
					size="small"
					@click="reload()"
				/>
			</template>
		</v-snackbar>
	</v-app>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const snackbarStore = useSnackbarStore();

useSeoMeta({
	title: appConfig.appName,
	themeColor: '#333'
})

function reload(){
	window.location.reload();
}
</script>
