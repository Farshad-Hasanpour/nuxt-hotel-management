<template>
	<v-app-bar
		class="px-2 tw-h-16"
		tile
		flat
	>
		<div class="tw-w-full d-flex tw-items-center tw-h-full py-1">
			<v-toolbar-title>{{appConfig.appName}}</v-toolbar-title>
			<v-spacer></v-spacer>
		</div>
	</v-app-bar>

	<v-main class="pt-16">
		<v-container>
			<slot></slot>
		</v-container>
	</v-main>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style>
</style>
