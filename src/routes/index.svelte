<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • $t('homepage.page.title'}</title>
	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<h1>Daukaia</h1>

<a href="/about">About my site</a>
<footer>
	<a href="/tutorial">Tutorial</a>
	<a href="/docs">Docs</a>
	<a href="/examples">Examples</a>
	<a href="/blog">Blog</a>
	<a href="/faq">FAQ</a>
	<a href="https://opencollective.com/svelte">Open Collective</a>
</footer>

<style>
	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 4rem;
	}
	footer a {
		color: var(--text);
		padding: 0.5rem 1rem;
		display: block;
	}
</style>
