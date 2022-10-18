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
			<h1>{@html $t('homepage.hero.paragraph')}</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>
	<section class="white-bg about-us">
		<div class="full-blead centered">
			<h1>Who we are</h1>
			<p>
				We believe that by granting access to resources, knowledge, opportunities and the developing
				of skills, strengths and values, we will help towards resolution of the impact of economic
				and social challenges in Ocotal.
			</p>
			<a href="/about">Read more about us</a>
		</div>
	</section>
	<section class="social">
		<div class="container centered">
			<h1>{$t('contact.follow-us.header')}</h1>
			<p>{$t('contact.follow-us.description')}</p>
			<div class="social-icons">
				<div class="link">
					<a href="https://www.facebook.com/Daukaia/" target="_blank"
						><img class="social-icon" src="/images/icons/facebook.svg" /></a
					>
				</div>
				<div class="link">
					<a href="https://www.instagram.com/daukaia/" target="_blank"
						><img class="social-icon" src="/images/icons/instagram.svg" /></a
					>
				</div>
				<div class="link">
					<a href="https://twitter.com/daukaia" target="_blank"
						><img class="social-icon" src="/images/icons/twitter.svg" /></a
					>
				</div>
				<div class="link">
					<a href="https://www.linkedin.com/company/daukaia/" target="_blank"
						><img class="social-icon" src="/images/icons/linkedin.svg" /></a
					>
				</div>
				<div class="link">
					<a href="https://www.youtube.com/user/daukaia" target="_blank"
						><img class="social-icon" src="/images/icons/youtube.svg" /></a
					>
				</div>
			</div>
		</div>
	</section>
	<section class="report">
		<div class="container centered">
			<h1>{$t('contact.download')}</h1>
			<a target="_blank" href="https://www.canva.com/design/DAE6fPLPQjk/FRIlejpSXZDlVQiDQhxtwQ/view"
				><img src="/images/report_2022.png" /></a
			>
			<p>({$t('contact.spanish')})</p>
		</div>
	</section>
	<!-- <section class="un-sustainability">
		<div class="full-blead centered">
			<h1>{$t('homepage.un.header')}</h1>
			<p>{$t('homepage.un.description')}</p>
			<img src="/images/un_sustainability.png" alt="ONG" width="400" />
		</div>
	</section> -->
</main>

<style>
	.homepage {
		--accent-clr: hsl(33, 87%, 56%);
	}
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)),
			url('/images/IMG_8660.jpg');

		/* Set a specific height */
		min-height: 100vh;
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
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}

	.hero-text.container {
		padding: 2rem;
		width: min(100%, 794px);
		/* background-color: hsl(0, 0%, 0%, 0.3); */
	}

	.hero-text h1 {
		font-size: 4.25rem;
		line-height: 5rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}

	.hero-text h1 span {
		color: var(--clr-accent);
	}

	.about-us h1 {
		font-size: 1.25rem;
		text-transform: uppercase;
		font-weight: 500;
		color: var(--clr-accent);
		margin: 0;
	}

	.about-us p {
		font-size: 2rem;
		margin: 1.5rem 0;
		width: min(800px, 100%);
		line-height: normal;
	}

	.about-us a {
		color: var(--clr-accent);
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
	.social {
		padding: 6rem 0;
		background-color: #f5f5f5;
	}
	.social-icons {
		display: flex;
	}
	.social h1 {
		margin: 0;
	}
	.social p {
		margin: 2rem 0 3rem 0;
		max-width: min(100vw, 60ch);
	}
	.social-icon {
		height: 60px;
		margin: 0 0.5rem;
	}
	.report {
		background-color: var(--green);
	}
	.report h1 {
		font-size: 2rem;
		color: white;
		margin: 0 0 1.5rem 0;
	}
	.report img {
		height: 70px;
	}
	.report a {
		/* border: 2px solid white; */
		padding: 0.6rem;
		border-radius: 10px;
		background-color: var(--orange);
	}

	.report p {
		color: #fff;
		margin: 1.5rem 0 0;
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
