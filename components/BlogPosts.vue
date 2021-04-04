<template>
	<ul class="blog-posts">
		<a v-for="post in posts" :key="post.slug" :href="`/posts/${post.slug}`">
			<li class="title is-size-1 mt-1">{{ post.title }}</li>
		</a>
	</ul>
</template>

<script>
	export default {
		name: 'BlogPosts',
		props: {
			posts: {
				type: Array,
				required: true,
			},
		},
	}
</script>

<style></style>
