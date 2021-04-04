<template>
	<div class="am-wrapper">
		<nuxt-link class="has-no-underline" to="/">
			<am-profile></am-profile>
		</nuxt-link>
		<Nuxt />
	</div>
</template>

<script>
	import AmProfile from '~/components/AmProfile.vue'
	export default {
		components: {
			AmProfile,
		},
	}
</script>

<style>
	body {
		background: #eeeeee;
		font-family: 'Lato', sans-serif;
	}
	h1,
	h2,
	h3 {
		margin: 0;
	}
	.title {
		font-weight: 700;
	}
	/* .is-size-1 {
		font-size: 24px;
	}
	.is-size-2 {
		font-size: 18px;
	} */

	.is-size-1 {
		font-size: 24px;
	}
	.is-size-2 {
		font-size: 18px;
	}
	.is-size-3 {
		font-size: 14px;
	}
	.mt-1 {
		margin-top: 14px;
	}
	.mt-2 {
		margin-top: 24px;
	}
	.mt-3 {
		/* margin-top: 56px; */
		margin-top: 24px;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	a {
		color: #000;
	}
	.has-no-underline {
		text-decoration: none;
	}

	.am-wrapper {
		max-width: 656px;
	}

	@media screen and (min-width: 425px) and (max-width: 768px) {
		.am-wrapper {
			width: 85%;
			margin: 0 auto;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		.am-wrapper {
			width: 75%;
			margin: 0 auto;
		}
	}

	@media screen and (min-width: 1024px) {
		.am-wrapper {
			width: 55%;
			margin: 0 auto;
		}
	}
</style>
