<template>
	<div class="am-article">
		<h1 class="title am-article-title">{{ article.title }}</h1>
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

<style>
	/* .nuxt-content  */
	.am-article {
		padding: 24px;
	}
	.am-article-title {
		font-size: 24px;
	}
</style>
