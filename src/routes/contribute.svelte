<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('contribute.title')}</title>
</svelte:head>

<main class="contribute no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>Giving children the gift of a bright future</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>

	<section class="">
		<div class="container">
			<div class="first">
				<h1>Contribute</h1>
				<p>{$t('contribute.generosity.paragraph')}</p>

				<!-- <p> -->
				<!-- &#127466;&#127480; -->
				<!-- {@html $t('contribute.generosity.spain-residents')}
						</p>
						<ul>
							<li>
								{$t('contribute.generosity.bank-card.description')}:
								<br />
								{@html $t('contribute.generosity.bank-card.migranodearena')}
								{@html $t('contribute.generosity.bank-card.donately')}
							</li>
							<li>{@html $t('contribute.generosity.direct-debit')}</li>
						</ul> -->
				<script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe
					src="https://donorbox.org/embed/daukaia"
					name="donorbox"
					allowpaymentrequest="allowpaymentrequest"
					seamless="seamless"
					frameborder="0"
					scrolling="no"
					height="900px"
					width="400px"
					style="max-width: 500px; min-width: 250px; max-height:none!important"
				/>
			</div>
		</div>
	</section>
	<!-- <section class="bg-neutral-400">
		<div class="container centered">
			<script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe
				src="https://donorbox.org/embed/daukaia"
				name="donorbox"
				allowpaymentrequest="allowpaymentrequest"
				seamless="seamless"
				frameborder="0"
				scrolling="no"
				height="900px"
				width="400px"
				style="max-width: 500px; min-width: 250px; max-height:none!important"
			/>
		</div>
	</section> -->
	<section class=" bg-accent-500">
		<div class="container centered quote">
			<!-- <h1>{$t('contribute.title')}</h1> -->
			<p>"{$t('contribute.quote')}"</p>
			<span style="padding-top:1.5rem">-- {$t('contribute.quote-author')}</span>
		</div>
	</section>
	<section class="methods bg-neutral-100">
		<div class="container">
			<div class="even-columns">
				<div class="method ">
					<h1>Contribute</h1>
					<p />
					<div style="text-align:left">
						<ul><li>{$t('contribute.time.volunteering')}</li></ul>
						<img class="" src="/images/children.png" />
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2)),
			url('/images/IMG_7960.jpg');

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
		font-size: 3.25rem;
		line-height: 4rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}
	.first {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
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
		margin: 20px 0 80px;
		text-align: center;
		max-width: min(100%, 70ch);
	}
	.quote {
		color: white;
	}
	.methods {
		/* background-color: var(--clr-accent); */
	}

	.method {
		background-color: white;
		border-radius: 10px;
		padding: 2rem;
	}
	.method:first-child {
		margin-right: 2rem;
	}
	.method h1 {
		font-size: 2rem;
	}
	ul {
		margin-left: 2rem;
		padding: 0;
		list-style-type: none;
		margin: 10px 0;
	}
	li {
		padding: 10px 0;
	}
</style>
