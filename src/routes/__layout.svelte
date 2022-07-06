<script context="module">
	// import '/static/styles/reset.css';
	// import '/static/styles/global.css';
	import { t, locales, locale, loadTranslations } from '$lib/translations';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async () => {
		// const { pathname } = url;

		const defaultLocale = 'en'; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		// await loadTranslations(initLocale, pathname); // keep this just before the `return`
		await loadTranslations(initLocale); // keep this just before the `return`

		return {};
	};
</script>

<div class="content">
	<Header />
	<slot />
</div>
<Footer />

<style>
	.content {
		flex: 1 0 auto;
	}
</style>
