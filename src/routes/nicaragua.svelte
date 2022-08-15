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

<main class="nicaragua">
	<section class="hero">
		<div class="container">
			<h1>Nicaragua nicaragüita</h1>
			<p>
				{@html $t('nicaragua.description')}
			</p>
			<p>
				{@html $t('nicaragua.opportunities')}
			</p>
		</div>
	</section>
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
