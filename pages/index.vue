<template>
	<div class="home-wrapper">
		<section class="who-am-i">
			<am-section-header class="mt-3" title="Myself"></am-section-header>
			<p>
				I currently work as a frontend engineer at
				<a href="https://locale.ai">locale.ai</a>.I make short videos
				about everyday techhacks on instagram. ( Currently 13K+
				followers ). I've a couple of side projects coming in, follow me
				on
				<a href="https://instagram.com/akash.k.mohan">Instagram</a> to
				stay updated.
			</p>
		</section>

		<section>
			<am-section-header
				class="mt-3"
				title="Blogs"
				description="My Opinions, Tech Writeups, Startup Thoughts etc"
			></am-section-header>

			<blog-posts :posts="articles"></blog-posts>
		</section>

		<section>
			<!-- <am-section-header
				class="mt-3"
				title="Journal"
				description="Short Everyday Journals from my life as a Software Engineer And Indie Maker"
			></am-section-header> -->

			<!-- <journal-entries :journals="journals"></journal-entries> -->
		</section>
	</div>
</template>

<script>
	import BlogPosts from '../components/BlogPosts.vue'
	import AmSectionHeader from '../components/AmSectionHeader.vue'

	export default {
		components: {
			AmSectionHeader,
			BlogPosts,
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
	.who-am-i {
		line-height: 24px;
	}
</style>
