<script>
	import { t } from '$lib/translations';
</script>

<footer>
	<div class="association-details">
		<div class="container">
			<p>{$t('footer.name')}</p>
			<p>{$t('footer.bank-details')}</p>
			<p>{$t('footer.registration')}</p>
			<p>hola@daukaia.org</p>
		</div>
	</div>
	<div class=" copyright">
		<p>©2022. {$t('footer.copyright')}</p>
		<div>
			<a href="#">Privacy policy</a>
			<a href="#">Cookie policy</a>
		</div>
	</div>
</footer>

<style>
	footer {
		flex-shrink: 0;
		border-top: 3px solid var(--clr-accent);
		background-color: #f6f6f6;
		position: relative;
		bottom: 0;
	}
	p {
		color: #818181;
		font-size: 0.9rem;
		text-align: center;
		margin: 0;
		line-height: 1.4 !important;
	}
	.association-details,
	.copyright {
		width: 100%;
	}
	.association-details {
		margin: 30px auto;
	}
	.copyright {
		background-color: #262626;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
	}

	.copyright > div {
		margin: 0;
		padding: 0;
		line-height: 1 !important;
		/* height: 10px; */
	}
	.copyright p {
		color: #bababa;
		font-size: 0.75rem;
		text-align: center;
		margin: 0px auto;
	}
	.copyright a {
		display: inline-block;
		color: #bababa;
		font-size: 0.75rem;
		text-decoration: none;
	}
	.copyright a:last-child {
		border-left: 1px solid #bababa;
		padding-left: 10px;
		margin-left: 5px;
	}
</style>
