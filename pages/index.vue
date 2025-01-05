<template>
	<div>{{res}}</div>
</template>

<script setup lang="ts">
const {$http} = useNuxtApp();

const res = await useAsyncData('reservations', async () => {
	return await $http(`/reservations`, {
		method: 'GET',
	});
});
</script>
