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

<main class="about">
	<section class="hero">
		<div class="container">
			<p class="mission-statement">
				{@html $t('about.mission-statement')}
			</p>
		</div>
	</section>

	<section class="image no-padding">
		<div class="full-bleed">
			<img alt="Teacher talking to children" src="/images/IMG_7961.jpg" />
		</div>
	</section>
	<!-- <div class="vision">
		<h1>{$t('about.vision')}</h1>
		<h2 />
		<p />
	</div> -->

	<!-- <div class="quote container">
		<div>{$t('about.quote.quote-header')}</div>
		<div>{$t('about.quote.quote')}</div>
		<div>{$t('about.quote.quote-paragraph')}</div>
	</div> -->

	<section class="the-team">
		<div class="container centered">
			<h1>{$t('about.team.header')}</h1>
			<p>
				{$t('about.team.about')}
			</p>
			<h2>{$t('about.team.local-team')}</h2>

			<div class="profiles even-columns">
				<div class="profile">
					<img class="profile-picture" src="/images/team/martha.png" />
					<h3>Martha Haydée Avilés</h3>

					<b>{$t('about.team.martha.title')}</b>
					<p>{$t('about.team.martha.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/esther.png" />
					<h3>Esther Pérez</h3>

					<b>{$t('about.team.esther.title')}</b>
					<p>{$t('about.team.esther.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/maye.png" />
					<h3>Maye González</h3>

					<b>{$t('about.team.maye.title')}</b>
					<p>{$t('about.team.maye.description')}</p>
				</div>
			</div>

			<h2>{$t('about.team.team')}</h2>

			<div class="profiles even-columns">
				<div class="profile">
					<img class="profile-picture" src="/images/team/eline.png" />
					<h3>Eline Lund</h3>

					<b>{$t('about.team.eline.title')}</b>
					<p>{$t('about.team.eline.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/alberto.png" />
					<h3>Alberto Alonso</h3>

					<b>{$t('about.team.alberto.title')}</b>
					<p>{$t('about.team.alberto.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/javier.png" />
					<h3>Javier Fernández</h3>

					<b>{$t('about.team.javier.title')}</b>
					<p>{$t('about.team.javier.description')}</p>
				</div>
			</div>

			<div class="profiles even-columns">
				<div class="profile">
					<img class="profile-picture" src="/images/team/laura.png" />
					<h3>Laura Ayerdi</h3>

					<b>{$t('about.team.laura.title')}</b>
					<p>{$t('about.team.laura.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/rebecca.png" />
					<h3>Rebecca Nekstad</h3>

					<b>{$t('about.team.rebecca.title')}</b>
					<p>{$t('about.team.rebecca.description')}</p>
				</div>
				<div class="profile">
					<img class="profile-picture" src="/images/team/ricardo.png" />
					<h3>Ricardo Zabalegui</h3>

					<b>{$t('about.team.ricardo.title')}</b>
					<p>{$t('about.team.ricardo.description')}</p>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="container other-help">
			<h2>{$t('about.work-with')}</h2>
			<div class="even-columns ">
				<div>
					<div>
						<b>{$t('about.collaboration.monegros.name')}</b>
						<p>{$t('about.collaboration.monegros.description')}</p>
					</div>
					<a target="blank" href="https://monegrosconicaragua.wordpress.com/quienes-somos/"
						>{$t('about.website')}</a
					>
				</div>
				<div>
					<div>
						<b>{$t('about.collaboration.school.name')}</b>
						<p>{$t('about.collaboration.school.description')}</p>
					</div>
					<a
						target="blank"
						href="https://www.instagram.com/explore/locations/1033722005/escuela-hermanos-zamora-ocotal-ns?hl=da"
						>{$t('about.website')}</a
					>
				</div>

				<div>
					<div>
						<b>{$t('about.collaboration.mined.name')}</b>
						<p>{$t('about.collaboration.mined.description')}</p>
					</div>
					<a
						target="blank"
						href="https://www.mined.gob.ni/mined-y-minsa-preparan-plan-de-educacion-de-la-salud-para-acompanar-el-buen-inicio-de-curso-escolar-2021/"
						>{$t('about.website')}</a
					>
				</div>
				<div>
					<div>
						<b>{$t('about.collaboration.universities.name')}</b>
						<p>{$t('about.collaboration.universities.description')}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="call-to-action ">
		<div class="container centered">
			<p>{$t('about.call-to-action.header')}</p>
			<h2>{$t('about.call-to-action.text')}</h2>
			<a class="btn btn--white" href="/contact">{$t('about.call-to-action.button')}</a>
		</div>
	</section>
</main>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 80px 0;
	}
	.mission-statement {
		font-size: 3rem;
		max-width: 28ch;
		line-height: 1.25;
		font-weight: 600;
		/* color: var(--clr-accent); */
	}

	.about {
		/* background-color: #cecece; */
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

	.image {
		/* height: 500px; */
		/* max-height: 65vh; */
		/* width: 100%; */
		/* overflow-y: hidden; */
		/* outline: 1px solid red; */
	}
	.image img {
		/* display: block; */
		width: 100%;
		/* height: 100%; */
		/* object-fit: cover; */

		/* height: auto; */
		/* max-height: var(--max-height, 100%); */
	}
	.the-team {
		background-color: #fef9f4;
	}
	.the-team h1 {
		font-size: 2.5rem;
	}
	.the-team h2 {
		font-size: 2rem;
		margin: 3rem 0 2rem;
	}
	.the-team p {
		font-size: 1.125rem;
		max-width: 80ch;
	}
	.profiles {
		margin: 1rem 0;
		align-items: flex-start;
	}

	.profile {
		/* border: 1px solid grey; */
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100%;
		padding: 2rem;
		background-color: white;
		box-shadow: 0 2px 4px 0 rgb(26 25 77 / 12%);
		border-radius: 12px;
	}

	@media (min-width: 60em) {
		.profile:not(:first-child) {
			margin-left: 1rem;
		}
	}
	.profile h3 {
		font-size: 1.375rem;
		font-weight: 600;
		text-align: center;
		margin-top: 1rem;
	}
	.profile b {
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
		color: var(--clr-accent);
		width: 20ch;
		margin-bottom: 10px;
	}
	.profile p {
		text-align: left;
		font-size: 1rem;
	}

	.profile-picture {
		border-radius: 50%;
		max-height: 150px;
		border: 8px solid var(--clr-accent);
	}

	.other-help > div {
		background-color: var(--clr-accent-100);
	}
	.other-help h2 {
		margin-bottom: 2rem;
	}

	.other-help > div > div {
		display: flex;
		margin-top: 1rem;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		box-shadow: 0 2px 4px 0 rgb(26 25 77 / 12%);
		border-radius: 12px;
		text-align: center;
		background-color: #fef9f4;
	}
	@media (min-width: 60em) {
		.other-help div:not(:first-child) {
			margin-left: 1rem;
		}
	}
	.other-help b {
		color: var(--clr-accent);
		font-size: 1.375rem;
		font-weight: 600;
		text-align: center;
	}
	.other-help p {
		margin-top: 1rem;
		font-size: 1rem;
	}
	.other-help a {
		font-size: 1rem;
		color: var(--clr-accent);
	}
	.call-to-action {
		background-color: var(--clr-accent);
	}
	.call-to-action p {
		color: white;
		font-size: 1.25rem;
		font-weight: 600;
	}
</style>
