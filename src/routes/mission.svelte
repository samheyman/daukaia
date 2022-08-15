<script>
	import { t } from '$lib/translations';
	const pageTitle = $t('about.page-title');
	// import Image from '../_components/Image.svelte';
	// import TeacherImage from '/images/IMG_8660.jpg';
</script>

<svelte:head>
	<title>Daukaia • {$t('about.page-title')}</title>
	<meta name="twitter:title" content={'Daukaia - ' + $t('about.page-title')} />
	<meta name="twitter:description" content="About Daukaia" />
	<meta name="description" content="About Daukaia" />
</svelte:head>

<main class="mission">
	<section class="hero">
		<div class="container">
			<p class="mission-statement">
				{$t('mission.statement')}
			</p>
		</div>
	</section>
	<section class="meaning centered">
		<div class="container">
			<p class="mission-statement">
				{$t('mission.daukaia-meaning')}
			</p>
		</div>
	</section>
</main>

<style>
	.mission {
		/* background-color: #e7e0e0; */
		padding: 80px 0;
	}

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.meaning {
		background-color: var(--clr-accent);
		color: white;
	}
</style>
