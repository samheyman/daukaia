<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('contact.title')}</title>
</svelte:head>
<main class="no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>Do you also believe that a better world is possible?</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>
	<section class="first bg-neutral-100">
		<div class="container">
			<h1>Contact us</h1>
			<p>
				We're here to talk to you if you have any questions, would like more information or would
				like to join us!
			</p>
			<!-- <div class="email-address centered">
				<a href="mailto:hola@daukaia.org">hola@daukaia.org</a>
			</div> -->
			<!-- <div class="even-columns">
				<div class="left centered">
					<h1>{$t('contact.statement2')}</h1>
					<div class="email-address centered">
						<a href="mailto:hola@daukaia.org">hola@daukaia.org</a>
					</div>
				</div>
				<div class="right" />
			</div> -->
		</div>
	</section>
	<section class="first bg-accent-500">
		<div class="container">
			<div class="even-columns">
				<div class="left centered">
					<!-- <h1>{$t('contact.statement2')}</h1> -->
					<div class="email-address centered">
						<a href="mailto:hola@daukaia.org">hola@daukaia.org</a>
					</div>
				</div>
				<div class="right" />
			</div>
		</div>
	</section>

	<section class="social bg-neutral-100">
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
	<section class="report bg-neutral-400">
		<div class="container centered">
			<h1>{$t('contact.download')}</h1>
			<a target="_blank" href="https://www.canva.com/design/DAE6fPLPQjk/FRIlejpSXZDlVQiDQhxtwQ/view"
				><img src="/images/report_2022.png" /></a
			>
			<p>({$t('contact.spanish')})</p>
		</div>
	</section>
</main>

<style>
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
			url('/images/homework.png');

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
		top: 50%;
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
		font-size: 3.25rem;
		line-height: 4rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}

	.first h1 {
		font-size: 1.25rem;
		text-transform: uppercase;
		font-weight: 500;
		/* color: var(--clr-accent); */
		margin: 0;
		text-align: center;
	}

	.first p {
		margin: 20px 0;
		text-align: center;
	}
	.left {
		padding: 3rem;
	}
	.left h1 {
		font-weight: 500;
		line-height: 1.25;
		font-size: 2.5rem;
	}
	.right {
		content: '';
		background-image: url(/images/girl.png);
		background-repeat: none;
		background-size: cover;
		border-radius: 10px;
		min-height: 500px;
	}

	.email-address {
		background-color: white;
		border-radius: 10px;
		padding: 3rem 4rem;
	}
	.email-address a {
		color: inherit;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 500;
	}
	.contact {
		/* background-color: var(--clr-accent); */
	}
	.social {
		padding: 6rem 0;
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
	}
	.report h1 {
		font-size: 2rem;
		/* color: white; */
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
		/* color: #fff; */
		margin: 1.5rem 0 0;
	}
</style>
