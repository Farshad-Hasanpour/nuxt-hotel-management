<template>
	<v-card class="pa-2">
		<client-only>
			<v-form ref="filterFormRef">
				<div class="mx-auto tw-w-[250px]">
					<v-autocomplete
						v-model="roomsByStatus"
						:items="roomStatuses"
						item-title="title"
						item-value="id"
						label="وضعیت اتاق"
						full-width
					/>
				</div>
			</v-form>
		</client-only>
		<div>

		</div>
	</v-card>
</template>

<script setup lang="ts">
import {useLocalStorage} from "@vueuse/core";

const filterFormRef = ref<any>(null);

//TODO: get room statues from api
const roomStatuses = computed(() => ([
	{
		id: 'ready',
		title: 'آماده',
	},
	{
		id: 'pending_cleanup',
		title: 'آماده سازی',
	},
	{
		id: 'reserved',
		title: 'رزرو',
	}
]))
const roomsByStatus = useLocalStorage('rooms-by-status', null);

onMounted(() => {
	filterFormRef.value?.validate();
})

</script>
