<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>Daukaia • {$t('homepage.pageTitle')}</title>
	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
</svelte:head>

<main class="no-padding homepage">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>{@html $t('homepage.hero.paragraph')}</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>
	<section class="white-bg about-us large-padding">
		<div class="full-blead centered">
			<h1 class="section-header">Who we are</h1>
			<p class="section-paragraph">
				We are a passionate collective of local and global changemakers committed to giving the
				children of Ocotal in Nicaragua the opportunity of a fulfilling life. Most of all, we’re
				normal people wanting to make a difference.
			</p>
			<p class="section-paragraph">
				We believe in the transformative power of community, and foster long-term impact through a
				holistic, grassroots approach that combines education, empowerment, and sustainable
				practices.
			</p>
		</div>
	</section>
	<section class="bg-neutral-400 about-us large-padding">
		<div class="full-blead centered">
			<h1 class="section-header">What we do</h1>
			<p class="section-paragraph">
				We support children in Ocotal, Nicaragua, through education, health, personal development
				and community support so they can overcome challenges and thrive.
			</p>
			<p class="section-paragraph">
				We offer a safe and nurturing space for children and their families, where they can access
				emotional support, build strong relationships, and engage in community activities that
				promote well-being and collaboration.
			</p>
			<p class="section-paragraph">
				We encourage children to explore their creativity, develop their talents, and find
				sustainable ways to contribute to their community and the environment, transforming their
				world from the ground up.
			</p>
			<div
				style="display:flex;flex-direction:row;align-items: center;justify-content:space-evenly;margin-top: 2rem; width: min(1000px, 100%)"
			>
				<a href="/mission">Volunteer</a>
				<a href="/mission">Become an Ambassador</a>
				<a href="/mission">Daukaia for schools</a>
				<a href="/mission">Partnership with companies</a>
			</div>
		</div>
	</section>
	<section class="bg-accent-500 small-padding">
		<div class="container centered quote">
			<!-- <h1>{$t('contribute.title')}</h1> -->
			<p><span style="font-style: italic">Daukaia</span> : (verb) to do; to build; to teach</p>
			<span>-- [Miskito]</span>
		</div>
	</section>
	<section class="white-bg ">
		<div class="betty">
			<img
				src="/images/betty.png"
				alt="photo of Betty, one of the students, standing against a wall"
			/>
			<div>
				<p class="section-paragraph">This is Betty.</p>
				<p class="section-paragraph">
					The photo was taken when we first met her in 2012. We worked with Betty for three years to
					help her find her own voice, get an education and build her grit and confidence. Today,
					she is a young and driven accountant, feeling fulfilled at work and helping her family
					thrive.
				</p>
				<p class="section-paragraph">
					"I'm proud of who I am. I have strong values, I am determined, I care about my family and
					about doing good. I will always be grateful to Daukaia."<br /><br />- Betty, age 25
				</p>
			</div>
		</div>
	</section>
	<section class="bg-neutral-400 small-padding">
		<div class="container centered quote">
			<!-- <h1>{$t('contribute.title')}</h1> -->
			<p>Proud partner of Casa Pueblito</p>
			<img style="height:140px;margin-top:2rem" src="/images/casa_pueblito.png" />
		</div>
	</section>
	<section class="bg-neutral-200 join-us large-padding">
		<div class="full-blead centered">
			<h1 class="section-header">Join us</h1>
			<p class="section-paragraph">
				We need passionate, innovative individuals like you to join us as Ambassadors, volunteers or
				donors. Whether through a bake sale, a creative project, or spreading our mission, your
				unique talents and efforts can light up the path to a brighter future for a child. Maybe you
				want to involve your class, your company or a group of friends?
			</p>
			<p class="section-paragraph">
				Your support empowers children like Betty to build better lives for themselves and their
				families by providing the safety, skills, and mindset they need to follow their dreams and
				contribute positively to the world.
			</p>
			<p class="section-paragraph">
				Discover more about our work and how you can make a lasting impact on a child’s life:
			</p>
			<div
				style="display:flex;flex-direction:row;align-items: center;justify-content:space-evenly;margin-top: 2rem; width: min(1200px, 100%)"
			>
				<a href="/mission">Learn more</a><a href="/mission">Get involved</a><a href="/mission"
					>Donate</a
				>
			</div>
		</div>
	</section>
	<!-- <section class="bg-neutral-200 pillars large-padding">
		<div class="full-blead centered">
			<h1 class="section-header">What we do</h1>
			<div class="container">
				<div class="even-columns">
					<div class="item centered">
						<img src="/images/second-home.png" />
						<h4>A second home</h4>
						<p>
							We provide a safe and loving environment in which the children can develop, make
							friends, learn, have fun, be listened to and get support and help to thrive.
						</p>
					</div>
					<div class="item centered">
						<img src="/images/brushing-teeth.png" />
						<h4>Our 4 pillars</h4>
						<p>
							We help build healthy habits focused around four pillars: nutrition, health, education
							and personal development.
						</p>
					</div>
					<div class="item centered">
						<img src="/images/teaching.png" />
						<h4>Change agents</h4>
						<p>
							Our goal is to offer these young people the opportunity of a fulfilling life, decent
							work and the ability to face new challenges, while having a ripple effect in their
							community.
						</p>
					</div>
					
				</div>
			</div>
			<a href="/mission">Read more about our mission</a>
		</div>
	</section> -->

	<!-- <section class="social bg-neutral-400">
		<div class="container centered">
			<h1>Celebrating 10 years!</h1>
			<p>{$t('contact.follow-us.description')}</p>
			<a href="/about">Read more about our history</a>
		</div>
	</section> -->
	<!-- <section class="social bg-neutral-500">
		<div class="container centered">
			<h1>{$t('contact.follow-us.header')}</h1>
			<p>{$t('contact.follow-us.description')}</p>
			
		</div>
	</section> -->
	<!--<section class="report bg-neutral-400">
		<div class="container centered">
			<h1>{$t('contact.download')}</h1>
			<a target="_blank" href="https://www.canva.com/design/DAE6fPLPQjk/FRIlejpSXZDlVQiDQhxtwQ/view"
				><img src="/images/report_2022.png" /></a
			>
			<p>({$t('contact.spanish')})</p>
		</div>
	</section> -->
	<!-- <section class="un-sustainability">
		<div class="full-blead centered">
			<h1>{$t('homepage.un.header')}</h1>
			<p>{$t('homepage.un.description')}</p>
			<img src="/images/un_sustainability.png" alt="ONG" width="400" />
		</div>
	</section> -->
</main>

<style>
	.homepage {
		--accent-clr: hsl(33, 87%, 56%);
	}
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		/* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('/images/IMG_8660.jpg'); */
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)),
			url('/images/IMG_8660.jpg');

		/* Set a specific height */
		min-height: 100vh;
		/* outline: 1px solid red; */
		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		/* position: relative; */
	}

	/* Place text in the middle of the image */
	.hero-text {
		position: absolute;
		/* display: flex; */
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}

	.hero-text.container {
		padding: 2rem;
		width: min(100%, 894px);
		/* background-color: hsl(0, 0%, 0%, 0.3); */
	}

	.homepage h1 {
		font-size: 4.25rem;
		line-height: 5rem;
		text-transform: uppercase;
		text-align: center;
		/* text-shadow: 0 0 5px #666; */
	}

	.hero-text h1 span {
		color: var(--clr-accent);
	}

	.about-us {
		/* margin: 4rem 0; */
	}

	h1.section-header {
		font-size: 2.25rem;
		text-transform: uppercase;
		font-weight: 500;
		color: var(--clr-accent);
		margin: 0;
	}

	p.section-paragraph {
		font-size: 1.25rem;
		margin: 1rem 0;
		width: min(1000px, 100%);
		line-height: normal;
		/* text-align: left; */
	}

	.about-us a {
		color: var(--clr-accent);
	}
	.quote {
		padding: 0rem 0;
	}
	.quote p {
		font-size: 1.5rem;
		margin: 0;
		width: min(800px, 100%);
		line-height: normal;
		/* font-style: italic; */
		font-weight: 700;
	}
	.quote span {
		padding-top: 1rem;
		color: inherit;
	}

	.betty {
		margin: 0 auto;
		/* border: 1px solid red; */
		width: min(1200px, 100%);
		display: flex;
		flex-direction: row;
	}

	.betty > div {
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: min(100%, 45ch);
	}

	.join-us a {
		color: var(--green);
	}
	.pillars {
		/* color: #fff; */
		/* padding: 6rem 0; */
	}

	.pillars a {
		color: #000;
	}

	.pillars .item {
		text-transform: uppercase;
		font-weight: 600;
		color: #fff;
		margin-bottom: 1.5rem;
		padding: 0 2rem;
	}
	.pillars h4 {
		color: #333;
		font-weight: 600;
	}
	.pillars p {
		color: #333;
		padding-top: 1rem;
		text-transform: none;
		font-weight: 400;
	}

	.pillars img {
		height: 180px;
		border-radius: 50%;
		margin: 2rem 0;
	}

	.un-sustainability {
		background-color: #fff;
	}

	.un-sustainability h1 {
		margin: 0;
	}

	.un-sustainability p {
		margin: 2rem;
		max-width: min(60ch, 80vw);
	}

	a.button {
		padding: 8px 22px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.2s;
		cursor: pointer;
		background-color: white;
		color: black;
		border: 1px solid #f8f8f8;
		border-radius: 5px;
	}
	.button:hover {
		/* background-color: hsl(39, 81%, 75%); */

		/* color: white; */
		border: 1px solid var(--clr-accent-light);
	}
	.social {
		padding: 6rem 0;
	}

	.social h1 {
		margin: 0;
	}
	.social p {
		margin: 2rem 0 3rem 0;
		max-width: min(100vw, 60ch);
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
	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 4rem;
	}
	footer a {
		color: var(--text);
		padding: 0.5rem 1rem;
		display: block;
	}
</style>
