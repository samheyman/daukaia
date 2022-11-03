<script>
	import { onMount } from 'svelte';

	import { t, locales, locale, loadTranslations } from '$lib/translations';
	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;

	let primaryHeader;
	let navToggle;
	let primaryNav;
	let links;

	onMount(() => {
		primaryHeader = document.querySelector('.primary-header');
		navToggle = document.querySelector('.mobile-nav-toggle');
		primaryNav = document.querySelector('.primary-navigation');
		links = document.querySelectorAll('.link');

		if (navToggle != null && primaryNav != null) {
			navToggle.addEventListener('click', () => {
				primaryNav.hasAttribute('data-visible')
					? navToggle.setAttribute('aria-expanded', false)
					: navToggle.setAttribute('aria-expanded', true);
				primaryNav.toggleAttribute('data-visible');
				// primaryHeader.toggleAttribute('data-overlay');
			});
			[...links].map((link) =>
				link.addEventListener('click', () => {
					console.log('Click');
					primaryNav.removeAttribute('data-visible');
					navToggle.setAttribute('aria-expanded', false);
				})
			);
		}
	});
</script>

<header>
	<div class="container">
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
			<nav class="primary-navigation" id="primary-navigation">
				<ul aria-label="Primary" role="list" class="nav-list">
					<!-- <li>
					<a
						class="link"
						class:active={!$page.url.pathname.includes('mission') &&
							!$page.url.pathname.includes('about') &&
							!$page.url.pathname.includes('nicaragua') &&
							!$page.url.pathname.includes('contribute') &&
							!$page.url.pathname.includes('contact')}
						href="/">Home</a
					>
				</li> -->
					<li>
						<a class="link" class:active={$page.url.pathname.includes('mission')} href="/mission"
							>{$t('navbar.mission')}</a
						>
					</li>

					<li>
						<a class="link" class:active={$page.url.pathname.includes('about')} href="/about"
							>{$t('navbar.about')}</a
						>
					</li>

					<li>
						<a class="link" class:active={$page.url.pathname.includes('contact')} href="/contact"
							>{$t('navbar.contact')}</a
						>
					</li>
					<li>
						<a
							class="link"
							class:active={$page.url.pathname.includes('nicaragua')}
							href="/nicaragua">Nicaragua</a
						>
					</li>
					<li>
						<a
							class="inverted"
							class:active={$page.url.pathname.includes('contribute')}
							href="/contribute">{$t('navbar.contribute')}</a
						>
					</li>
				</ul>
			</nav>
			<div class="flex flex-row flex-row-center hide-on-mobile">
				<div class="links ">
					<!-- <a
					class:active={!$page.url.pathname.includes('mission') &&
						!$page.url.pathname.includes('about') &&
						!$page.url.pathname.includes('nicaragua') &&
						!$page.url.pathname.includes('contribute') &&
						!$page.url.pathname.includes('contact')}
					href="/">Home</a
				> -->
					<a class:active={$page.url.pathname.includes('mission')} href="/mission"
						>{$t('navbar.mission')}</a
					>

					<a class:active={$page.url.pathname.includes('about')} href="/about"
						>{$t('navbar.about')}</a
					>
					<a class:active={$page.url.pathname.includes('nicaragua')} href="/nicaragua">Nicaragua</a>

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
	</div>
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
	nav .container {
		max-width: min(100%, 1200px);
	}
	a {
		text-decoration: none;
		display: inline-block;
		line-height: 100%;
		font-size: 1rem;
	}
	.links {
		background-color: hsl(0 0% 0% / 50%);
		padding: 10px 20px;
		display: flex;
		align-items: center;
	}
	.call-to-action {
		background-color: var(--clr-accent);
		/* background-color: #000; */
		/* margin-left: 2px; */
		padding: 11px 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.call-to-action a {
		color: #fff;
		/* font-weight: 700; */
		/* background-color: var(--clr-accent-light); */
	}
	.call-to-action:hover {
		color: #000;
		background-color: var(--clr-accent-light);
	}
	.links a {
		color: #fff;
		margin: 0 12px;
		font-weight: 500;
	}

	.links a:not(:first-child) {
		/* border-left: 1px solid white; */
		padding-left: 20px;
	}
	.links a:hover,
	.links a:focus {
		color: var(--clr-accent-light);
		outline: none;
	}
	a.active {
		color: var(--clr-accent);
	}
	a.inverted.active {
		color: white;
	}
	select {
		margin-left: 25px;
		appearance: none;
		background-color: hsl(0 0% 0% / 50%);
		/* border: 1px solid #fff; */
		color: #fff;
		font-size: 1rem;
		font-family: inherit;
		/* text-shadow: 0 1px 0 var(--clr-neutral-300); */
		/* width: 4.8rem; */
		margin-left: 20px;
		font-weight: 500;
		padding: 0 0.5rem;
		border: 0;
		outline: none;
	}
	select[data-chosen] {
		outline: 12px solid red;
	}
	select:focus {
		/* border: 1px solid var(--clr-accent); */
	}
	select option {
		background: rgba(0, 0, 0, 0.3);
		/* color: #000; */
		text-shadow: 0 1px 0 var(--clr-neutral-300);
		font-weight: 500;
		margin: 25px 0;
		height: 2rem;
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

	@media (max-width: 60em) {
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

	.primary-navigation {
		display: none;
	}
	@media (max-width: 60em) {
		.primary-navigation {
			display: none;
			position: fixed;
			padding: 3rem;
			inset: 7rem 1rem auto;
			max-width: 25rem;
			margin-left: auto;
			background: var(--clr-neutral-100);
			border-radius: var(--size-100);
			box-shadow: 0 0 0.75em rgb(0, 0, 0, 0.05);
		}

		.primary-header[data-overlay]::before {
			content: '';
			position: fixed;
			inset: 0;
			/* height: 100vh; */
			background-image: linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.8));
		}

		.nav-list {
			display: grid;
			gap: 2rem;
			text-align: center;
			font-weight: var(--fw-bold);
		}

		.mobile-nav-toggle .icon-close {
			display: none;
		}
	}
</style>
