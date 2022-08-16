<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('homepage.pageTitle')}</title>
	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<main class="no-padding homepage">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1 class="fs-primary-heading">{@html $t('homepage.hero.paragraph')}</h1>
			<div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div>

			<!-- <p>{$t('homepage.hero.paragraph')}</p> -->
			<!-- <a class="button" href="/mission">{$t('homepage.hero.callToAction')}</a> -->
		</div>
	</section>
	<section class="un-sustainability">
		<div class="full-blead centered">
			<h1>{$t('homepage.un.header')}</h1>
			<p>{$t('homepage.un.description')}</p>
			<img src="/images/un_sustainability.png" alt="ONG" width="400" />
		</div>
	</section>
</main>

<style>
	.homepage {
		--accent-clr: hsl(33, 87%, 56%);
	}
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
		position: absolute;
		/* display: flex; */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}

	h1 {
		font-size: 2.25rem;
		line-height: 1.25;
		text-shadow: 0 0 5px #666;
	}

	.un-sustainability {
		background-color: #fff;
	}

	.un-sustainability h1 {
		margin: 0;
	}

	.un-sustainability p {
		margin: 2rem;
		max-width: min(60ch, 80vw);
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
