<template>
	<figure class="am-profile">
		<img src="~/assets/am-profile.png" alt="This Is Something Great" />
		<figcaption>
			<h2 class="am-name title is-size-2">Akash K</h2>
			<h3 class="am-description is-size-3">
				Javascript Engineer / Indie Maker
			</h3>
		</figcaption>
	</figure>
</template>

<script>
	export default {
		name: 'AmProfile',
	}
</script>

<style>
	.am-profile {
		margin: 0px;
		display: flex;
		align-items: flex-end;
		padding: 12px 24px;
	}
	.am-profile figcaption {
		margin-left: 12px;
	}
	.am-profile img {
		width: 64px;
		height: 64px;
	}
	.am-description {
		font-weight: 400;
	}
</style>
