<template>
	<div>
		<h1>{{ article.title }}</h1>
		<nuxt-content :document="article"></nuxt-content>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	export default {
		async asyncData({ $content, params }) {
			const article = await $content('articles', params.slug).fetch()
			return { article }
		},
	}
</script>

<style></style>
