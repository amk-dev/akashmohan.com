<template>
	<div class="journal-entry">
		<h2 class="journal-entry-title is-size-1">{{ journalEntry.title }}</h2>
		<p class="journal-entry-body is-size-1">{{ journalBody }}</p>
	</div>
</template>

<script>
	export default {
		name: 'JournalEntry',
		props: {
			journalEntry: {
				type: Object,
				required: true,
			},
		},
		computed: {
			journalBody() {
				return this.journalEntry.body.children[0].children[0].value
			},
		},
	}
</script>

<style>
	.journal-entry {
		font-family: 'Homemade Apple', cursive;
	}
	.journal-entry-title {
		text-decoration: underline;
		font-weight: 400;
	}
	.journal-entry-body {
		line-height: 32px;
	}
</style>
