<template>
	<header class="am-section-header">
		<div class="am-section-title title is-size-1">{{ title }}</div>
		<div class="am-section-description is-size-2 mt-1">
			{{ description }}
		</div>
	</header>
</template>

<script>
	export default {
		name: 'AmSectionHeader',
		props: {
			title: {
				required: true,
				type: String,
			},
			description: {
				required: true,
				type: String,
			},
		},
	}
</script>

<style></style>
