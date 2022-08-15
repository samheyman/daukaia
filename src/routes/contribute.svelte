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
				<div class="method centered">
					<h1>{$t('contribute.generosity.header')}</h1>
					<div style="text-align:left">
						<ul>
							<li>
								{$t('contribute.generosity.bank-card.description')}

								<ul>
									<li>{@html $t('contribute.generosity.bank-card.migranodearena')}</li>
									<li>{@html $t('contribute.generosity.bank-card.donately')}</li>
								</ul>
							</li>
							<li>{@html $t('contribute.generosity.direct-debit')}</li>

							<li>{@html $t('contribute.generosity.transfer')}</li>
							<li>{@html $t('contribute.generosity.facebook')}</li>
						</ul>
					</div>
				</div>
				<div class="method centered">
					<h1>{$t('contribute.time.header')}</h1>
					<div style="text-align:left">
						<ul><li>{$t('contribute.time.volunteering')}</li></ul>
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
	}
</style>
