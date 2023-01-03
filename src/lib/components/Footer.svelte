<script>
	import { t } from '$lib/translations';
</script>

<footer>
	<section class="container">
		<div class="top-section">
			<div>
				<h1>Contact</h1>
				<a href="mailto:hola@daukaia.org">hola@daukaia.org</a>
			</div>
			<div>
				<img class="logo" src="/images/daukaia-logo.png" alt="Daukaia logo" />
			</div>

			<div>
				<h1>Follow us</h1>
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
		</div>
	</section>
	<!-- <div class="association-details">
		<div class="container">
			<p>{$t('footer.name')}</p>
			<p>{$t('footer.bank-details')}</p>
			<p>{$t('footer.registration')}</p>
			<p>hola@daukaia.org</p>
		</div>
	</div> -->
	<div class="copyright">
		<p>© Copyright Daukaia | Website by Sam Heyman</p>
		<!-- <div>
			<a href="#">Privacy policy</a>
			<a href="#">Cookie policy</a>
		</div> -->
	</div>
</footer>

<style>
	footer {
		flex-shrink: 0;
		border-top: 3px solid var(--clr-accent);
		background-color: #333;
		position: relative;
		bottom: 0;
	}
	p {
		color: #bababa;
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
	.top-section {
		margin: 0;
		padding: 4rem 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		color: white;
		/* min-height: 20rem; */
	}
	.top-section > :first-child {
		/* border: 1px solid red; */
	}
	/* .top-section > :first-child > h1 {
		font-size: 2rem;
		margin: 0;
	} */
	.top-section > :nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-section > :first-child,
	.top-section > :nth-child(3) {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding-top: 1rem;
		/* padding-left: 20%; */
	}
	.top-section > :not(:nth-child(2)) > h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	.top-section a {
		color: inherit;
		text-transform: none;
		text-decoration: none;
	}
	.social-icons {
		display: flex;
	}
	.social-icon {
		height: 30px;
		margin: 0 0.5rem;
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
