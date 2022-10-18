<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('contribute.title')}</title>
</svelte:head>

<main class="contribute no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>{@html $t('contribute.hero.paragraph')}</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>

	<section class="">
		<div class="container">
			<div class="">
				<h1>{$t('contribute.generosity.header')}</h1>
				<p>{$t('contribute.generosity.paragraph')}</p>
				<ul>
					<!-- <li>{@html $t('contribute.generosity.transfer')}</li>
							<li>{@html $t('contribute.generosity.facebook')}</li> -->
					<li>
						<!-- {@html $t('contribute.generosity.donorbox')}<br /><br /> -->

						<script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe
							src="https://donorbox.org/embed/daukaia"
							name="donorbox"
							allowpaymentrequest="allowpaymentrequest"
							seamless="seamless"
							frameborder="0"
							scrolling="no"
							height="900px"
							width="100%"
							style="max-width: 500px; min-width: 250px; max-height:none!important"
						/>
					</li>
				</ul>
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
			</div>
		</div>
	</section>
	<section class="bg-neutral-400">
		<div class="container centered">
			<h1>{$t('contribute.title')}</h1>
			<p>"{$t('contribute.quote')}"</p>
			<span style="padding-top:1.5rem">-- {$t('contribute.quote-author')}</span>
		</div>
	</section>
	<section class="methods">
		<div class="container">
			<div class="even-columns">
				<div class="method ">
					<h1>{$t('contribute.time.header')}</h1>
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
		background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.45)),
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
		font-size: 2.25rem;
		line-height: 2.5rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}
	.methods {
		background-color: var(--clr-accent);
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
