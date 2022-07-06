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

<div class="about stretch">
	<div class="container header">
		<h1>{$t('about.title')}</h1>
		<p>
			We are an NGO made up of committed and professional young people who pursue the social
			integration of children in Ocotal through education.
		</p>
		<!-- <button>Call to action</button> -->
		<div class="kpis">
			<div>
				<div class="value">2800</div>
				<div class="label">label</div>
			</div>
			<div>
				<div class="value">150</div>
				<div class="label">label</div>
			</div>
			<div>
				<div class="value">4</div>
				<div class="label">label</div>
			</div>
			<div>
				<div class="value">234</div>
				<div class="label">label</div>
			</div>
		</div>
	</div>

	<div class="image">
		<img alt="Teacher talking to children" src="/images/IMG_7961.jpg" />
	</div>

	<div class="quote container">
		<div>{$t('about.quote.quote-header')}</div>
		<div>{$t('about.quote.quote')}</div>
		<div>{$t('about.quote.quote-paragraph')}</div>
		<!-- <button>Call to action</button> -->
	</div>
	<div class="the-team" />
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 80px 0;
	}

	.header p {
		text-align: center;
	}

	.about {
		padding: 90px 0;
		background-color: #cecece;
		width: 100%;
		/* grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		min-height: calc(100vh - var(--nav-h));
		padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
		max-width: var(--main-width);
		margin: 0 auto;
		tab-size: 2; */
	}
	.about:first-child {
		margin: 0 0 2rem 0;
		padding: 0 0 4rem 0;
		border-bottom: var(--border-w) solid #6767785b; /* based on --second */
	}
	.about:first-child h2 {
		font-size: 4rem;
		font-weight: 400;
		color: var(--second);
	}
	.kpis {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 80px 0;
	}
	.kpis div {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.kpis .value {
		font-size: 30px;
		font-weight: 700;
	}

	.kpis .label {
	}
	.image {
		height: 65vh;
		max-height: 65vh;
		width: 100%;
		/* outline: 1px solid red; */
	}
	.image img {
		/* display: block; */
		width: 100%;
		height: 100%;
		object-fit: cover;

		/* height: auto; */
		/* max-height: var(--max-height, 100%); */
	}
</style>
