<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('contribute.title')}</title>
</svelte:head>

<main class="contribute">
	<section>
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
					<h1>{$t('contribute.generosity.header')}</h1>
					<p>{$t('contribute.generosity.paragraph')}</p>
					<div style="text-align:left">
						<ul>
							<li>{@html $t('contribute.generosity.transfer')}</li>
							<li>{@html $t('contribute.generosity.facebook')}</li>
							<li>
								{@html $t('contribute.generosity.donorbox')}<br /><br />

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
						<p>
							<!-- &#127466;&#127480; -->
							{@html $t('contribute.generosity.spain-residents')}
						</p>
						<ul>
							<li>
								{$t('contribute.generosity.bank-card.description')}:
								<br />
								{@html $t('contribute.generosity.bank-card.migranodearena')}
								{@html $t('contribute.generosity.bank-card.donately')}
							</li>
							<li>{@html $t('contribute.generosity.direct-debit')}</li>
						</ul>
					</div>
				</div>
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
