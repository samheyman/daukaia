<script>
	import { t, locales, locale, loadTranslations } from '$lib/translations';
	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<a href="/"><img class="logo" src="/images/daukaia-logo.png" alt="Daukaia logo" /></a>
		<button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
			<img
				class="icon-hamburger"
				src="/images/icons/icon-hamburger.svg"
				alt=""
				aria-hidden="true"
			/>
			<img class="icon-close" src="/images/icons/icon-close.svg" alt="" aria-hidden="true" />
			<span class="visually-hidden">Menu</span>
		</button>
		<div class="flex flex-row flex-row-center hide-on-mobile">
			<div class="links ">
				<a
					class:active={!$page.url.pathname.includes('mission') &&
						!$page.url.pathname.includes('about') &&
						!$page.url.pathname.includes('nicaragua') &&
						!$page.url.pathname.includes('contribute') &&
						!$page.url.pathname.includes('contact')}
					href="/">Home</a
				>
				<a class:active={$page.url.pathname.includes('mission')} href="/mission"
					>{$t('navbar.mission')}</a
				>
				<a class:active={$page.url.pathname.includes('nicaragua')} href="/nicaragua">Nicaragua</a>

				<a class:active={$page.url.pathname.includes('about')} href="/about">{$t('navbar.about')}</a
				>

				<a class:active={$page.url.pathname.includes('contact')} href="/contact"
					>{$t('navbar.contact')}</a
				>
			</div>
			<div class="call-to-action">
				<a
					class="inverted"
					class:active={$page.url.pathname.includes('contribute')}
					href="/contribute">{$t('navbar.contribute')}</a
				>
			</div>
			<select bind:value={$locale}>
				{#each $locales as value}
					<option {value}>{$t(`lang.${value}`)}</option>
				{/each}
			</select>
		</div>
	</nav>
</header>

<style>
	header {
		position: absolute;
		background-color: transparent;
		z-index: 1;
		width: 100%;
		padding: 20px;
	}
	nav {
		display: flex;
		justify-content: space-between;
		background-color: transparent;
		align-items: center;
	}
	a {
		text-decoration: none;
		display: inline-block;
		line-height: 100%;
		font-size: 1rem;
	}
	.links {
		background-color: #000;
		padding: 10px 20px;
		display: flex;
		align-items: center;
	}
	.call-to-action {
		background-color: var(--clr-accent);
		margin-left: 2px;
		padding: 11px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.call-to-action a {
		color: #000;
		font-weight: 600;
	}
	.call-to-action:hover {
		color: #000;
		background-color: var(--clr-accent-light);
	}
	.links a {
		color: #fff;
		margin-left: 25px;
	}

	select {
		margin-left: 25px;
	}
	.links a:not(:first-child) {
		border-left: 1px solid white;
		padding-left: 20px;
	}
	.links a:hover {
		color: var(--clr-accent-light);
	}
	a.active {
		color: var(--clr-accent);
	}
	a.inverted.active {
		color: white;
	}
	select {
		background-color: transparent;
		color: #000;
		font-size: 1rem;
		font-family: inherit;
		text-shadow: 0 1px 0 var(--clr-neutral-300);
		width: 60px;
		margin-left: 20px;
	}
	select option {
		background: rgba(0, 0, 0, 0.3);
		color: #000;
		text-shadow: 0 1px 0 var(--clr-neutral-300);
	}
	.logo {
		height: 80px;
	}
	.logo:hover {
		border: 2px solid var(--clr-accent);
		border-radius: 50%;
	}
	.mobile-nav-toggle {
		display: none;
	}

	@media (max-width: 50em) {
		.mobile-nav-toggle {
			display: block;
			position: fixed;
			top: 2rem;
			right: 1rem;
			cursor: pointer;
			background: transparent;
			border: 0;
			padding: 0.5em;
		}

		.mobile-nav-toggle .icon-close {
			display: none;
		}
	}
</style>
