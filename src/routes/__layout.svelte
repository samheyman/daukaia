<script context="module">
	// import '/static/styles/reset.css';
	// import '/static/styles/global.css';
	import { t, locales, locale, loadTranslations } from '$lib/translations';
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

<script>
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/contact">Contact</a>
</nav>
<select bind:value={$locale}>
	{#each $locales as value}
		<option {value}>{$t(`lang.${value}`)}</option>
	{/each}
</select>
<slot />
<Footer />

<style>
	body {
		margin: 0;
		padding: 0;
	}
</style>
