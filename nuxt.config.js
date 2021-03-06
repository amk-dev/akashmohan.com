export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Akash Mohan | Javascript Engineer',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Opinions, Tech Writeups, Startup Thoughts, Journals',
			},
			{ property: 'og:url', content: 'https://akashmohan.com' },
			{ property: 'og:type', content: 'website' },
			{
				property: 'og:title',
				content: 'Akash Mohan 🚀 | Javascript Engineer',
			},
			{
				property: 'og:description',
				content: 'Opinions, Tech Writeups, Startup Thoughts, Journals',
			},
			{
				property: 'og:image',
				content: 'https://akashmohan.com/ogimage.png',
			},
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ property: 'twitter:domain', content: 'akashmohan.com' },
			{ property: 'twitter:url', content: 'https://akashmohan.com' },
			{
				name: 'twitter:title',
				content: 'Akash Mohan 🚀 | Javascript Engineer',
			},
			{
				name: 'twitter:description',
				content: 'Opinions, Tech Writeups, Startup Thoughts, Journals',
			},
			{
				name: 'twitter:image',
				content: 'https://akashmohan.com/ogimage.png',
			},
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#5bbad5',
			},
			{ name: 'msapplication-TileColor', content: '#2d89ef' },
			{ name: 'theme-color', content: '#ffffff' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Lato:wght@400;700&display=swap',
			},
		],
	},

	css: ['normalize.css/normalize.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
	],

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
