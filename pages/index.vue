<template>
	<div class="home-wrapper">
		<section>
			<am-section-header
				class="mt-3"
				title="Blogs"
				description="My Opinions, Tech Writeups, Startup Thoughts etc"
			></am-section-header>

			<blog-posts :posts="articles"></blog-posts>
		</section>

		<section>
			<am-section-header
				class="mt-3"
				title="Journal"
				description="Short Everyday Journals from my life as a Software Engineer And Indie Maker"
			></am-section-header>

			<journal-entries :journals="journals"></journal-entries>
		</section>
	</div>
</template>

<script>
	import BlogPosts from '../components/BlogPosts.vue'
	import AmSectionHeader from '../components/AmSectionHeader.vue'
	import JournalEntries from '../components/JournalEntries.vue'

	export default {
		components: {
			AmSectionHeader,
			BlogPosts,
			JournalEntries,
		},
		async asyncData({ $content, params }) {
			const articles = await $content('articles')
				.only(['title', 'slug'])
				.sortBy('createdAt', 'desc')
				.fetch()

			const journals = await $content('journal')
				.sortBy('createdAt', 'desc')
				.fetch()

			return {
				articles,
				journals,
			}
		},
	}
</script>

<style>
	.home-wrapper {
		padding: 0px 24px;
	}
</style>
