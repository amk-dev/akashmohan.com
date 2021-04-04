<template>
	<div class="journal-entries">
		<journal-entry
			v-for="journal in journals"
			:key="journal.slug"
			:journal-entry="journal"
			class="mt-2"
		></journal-entry>
	</div>
</template>

<script>
	import JournalEntry from './JournalEntry.vue'

	export default {
		name: 'JournalEntries',
		components: {
			JournalEntry,
		},
		props: {
			journals: {
				type: Array,
				required: true,
			},
		},
	}
</script>

<style></style>
