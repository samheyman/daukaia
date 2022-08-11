<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('homepage.pageTitle')}</title>
	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<main class="no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1 class="fs-primary-heading">{$t('homepage.hero.title')}</h1>
			<p>{$t('homepage.hero.paragraph')}</p>
			<a class="button" href="/mission">{$t('homepage.hero.callToAction')}</a>
		</div>
	</section>
</main>

<style>
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
			url('/images/IMG_8660.jpg');

		/* Set a specific height */
		min-height: 85vh;
		/* outline: 1px solid red; */
		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		/* position: relative; */
	}

	/* Place text in the middle of the image */
	.hero-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
	a.button {
		padding: 8px 22px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.2s;
		cursor: pointer;
		background-color: white;
		color: black;
		border: 1px solid #f8f8f8;
		border-radius: 5px;
	}
	.button:hover {
		/* background-color: hsl(39, 81%, 75%); */

		/* color: white; */
		border: 1px solid var(--clr-accent-light);
	}
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
