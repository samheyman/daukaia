<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('contact.title')}</title>
</svelte:head>
<main>
	<section class="contact ">
		<div class="container">
			<div class="even-columns">
				<div class="left centered">
					<h1>{$t('contact.statement2')}</h1>
					<div class="email-address centered">
						<a href="mailto:hola@daukaia.org">hola@daukaia.org</a>
					</div>
				</div>
				<div class="right" />
			</div>
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
		</div>
	</section>
</main>

<style>
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
		background-color: var(--clr-accent);
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
		background-color: var(--green);
	}
	.report h1 {
		font-size: 2rem;
		color: white;
	}
	.report img {
		height: 100px;
	}
	.report a {
		border: 2px solid white;
		padding: 1rem;
		border-radius: 10px;
		background-color: var(--orange);
	}
</style>
