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

<div class="mission stretch">
	<div class="container center">
		<h1>Our mission</h1>
	</div>
</div>

<style>
	.mission {
		padding-top: 80px;
		background-color: #e7e0e0;
	}
</style>
