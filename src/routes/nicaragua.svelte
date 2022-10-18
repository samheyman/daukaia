<script>
	import { t } from '$lib/translations';
	const pageTitle = $t('about.page-title');
	// import Image from '../_components/Image.svelte';
	// import TeacherImage from '/images/IMG_8660.jpg';
</script>

<svelte:head>
	<title>Daukaia • Nicaragua</title>
	<meta name="twitter:title" content={'Daukaia - ' + 'Nicaragua'} />
	<meta name="twitter:description" content="About Daukaia" />
	<meta name="description" content="About Daukaia" />
</svelte:head>

<main class="nicaragua no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>{@html $t('about.hero.paragraph')}</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>
	<section class="white-bg description">
		<div class="full-blead centered">
			<h1>Nicaragua nicaragüita</h1>
			<p>{$t('nicaragua.description')}</p>
		</div>
	</section>
	<!-- <section class="hero">
		<div class="container">
			<h1>Nicaragua nicaragüita</h1>
			<p>
				{@html $t('nicaragua.description')}
			</p>
			<p>
				{@html $t('nicaragua.opportunities')}
			</p>
		</div>
	</section> -->
	<section class="numbers">
		<div class="container">
			<div class="even-columns">
				<div class="number centered">
					<span>25%</span>
					<p>{$t('nicaragua.numbers.poverty')}</p>
				</div>
				<div class="number centered">
					<span>19%</span>
					<p>{$t('nicaragua.numbers.malnourished')}</p>
				</div>
				<div class="number centered">
					<span>30%</span>
					<p>{$t('nicaragua.numbers.education')}</p>
				</div>
				<div class="number centered">
					<span>80%</span>
					<p>{$t('nicaragua.numbers.school')}</p>
				</div>
			</div>
		</div>
	</section>
	<section class="no-padding">
		<div class="full-bleed image-container image--nicaragua " />
	</section>
	<section class="ocotal">
		<div class="container">
			<h1>Ocotal</h1>
			<h2>{$t('nicaragua.ocotal.header')}</h2>
			<p>
				{@html $t('nicaragua.ocotal.description1')}
			</p>
			<p>
				{@html $t('nicaragua.ocotal.description2')}
			</p>
			<p>
				{@html $t('nicaragua.ocotal.description3')}
			</p>
		</div>
	</section>
	<section class="no-padding">
		<div class="full-bleed image-container image--ocotal " />
	</section>
	<section class="challenges">
		<div class="container">
			<h1>{$t('nicaragua.challenges.header')}</h1>
			<p>
				{@html $t('nicaragua.challenges.paragraph1')}
			</p>
			<p>
				{@html $t('nicaragua.challenges.paragraph2')}
			</p>
			<p>
				{@html $t('nicaragua.challenges.paragraph3')}
			</p>
		</div>
	</section>
</main>

<style>
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.35)),
			url('/images/ocotal.png');

		/* Set a specific height */
		min-height: 66vh;
		/* outline: 1px solid red; */
		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		/* position: relative; */
	}
	.hero-text {
		position: absolute;
		/* display: flex; */
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}

	.hero-text.container {
		padding: 2rem;
		width: min(100%, 600px);
		/* background-color: hsl(0, 0%, 0%, 0.3); */
	}

	.hero-text h1 {
		font-size: 4.25rem;
		line-height: 5rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}
	.image-container {
		height: 450px;
		width: 100%;
		overflow-y: hidden;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.image--nicaragua {
		background-image: url('/images/nicaragua.png');
	}
	.image--ocotal {
		background-image: url('/images/ocotal.png');
	}
	.description h1 {
		font-size: 1.25rem;
		text-transform: uppercase;
		font-weight: 500;
		color: var(--clr-accent);
		margin: 0;
	}

	.description p {
		font-size: 2rem;
		margin: 1.5rem 0;
		width: min(800px, 100%);
	}
	.numbers {
		/* border-top: 1px solid var(--clr-accent); */
		/* padding: 2rem; */
		background-color: #f5f5f5;
		padding-top: 5rem;
	}

	.number {
		padding: 0 1rem;
	}

	.number span {
		display: block;
		color: white;
		font-weight: 700;
		font-size: 1.916rem;
		background-color: var(--clr-accent);
		border-radius: 9px;
		width: 80px;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.ocotal h2 {
		font-size: 1.8rem;
		border-bottom: 3px solid var(--clr-accent);
		padding-bottom: 0.4rem;
	}
	.ocotal p {
		margin: 1rem 0;
	}

	.challenges p {
		margin: 1rem 0;
	}
</style>
