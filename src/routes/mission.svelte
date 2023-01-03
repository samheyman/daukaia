<script>
	import { t } from '$lib/translations';
	const pageTitle = $t('about.page-title');
	// import Image from '../_components/Image.svelte';
	// import TeacherImage from '/images/IMG_8660.jpg';
</script>

<svelte:head>
	<title>Daukaia • {$t('about.page-title')}</title>
	<meta name="twitter:title" content={'Daukaia - ' + $t('about.page-title')} />
	<meta name="twitter:description" content="About Daukaia" />
	<meta name="description" content="About Daukaia" />
</svelte:head>

<main class="mission no-padding">
	<section class="hero-image ">
		<div class="hero-text container">
			<h1>{@html $t('mission.hero.paragraph')}</h1>
			<!-- <div class="word-spin">
				{@html $t('homepage.hero.paragraph-words')}
			</div> -->
		</div>
	</section>
	<section class="first">
		<div class="container">
			<h1>Our mission</h1>
			<!-- <p class="mission-statement">
				{$t('mission.statement')}
			</p> -->
			<p>
				Our vision is a community where all children have a real chance of becoming independent
				adults who can pursue a career, make empowered, autonomous life choices and become change
				agents that contribute to the greater good. Furthermore all children deserve the chance to
				grow in a nurturing environment with continuity of care, fundamental to their health and
				development.
			</p>
		</div>
	</section>
	<section class="meaning centered">
		<div class="container centered">
			<!-- <h1>Daukaia</h1> -->
			<h3 class="definition">
				{$t('mission.daukaia-meaning')}
			</h3>
		</div>
	</section>
	<section class="bg-neutral-400 centered">
		<div class="container centered pillars">
			<h1>Our 4 pillars</h1>
			<p>
				At Daukaia our work is organized around pillars that contribute to better life outcomes:
				education, personal development and health (nutrition and hygiene).
			</p>
			<div class="pillar">
				<div class="left"><h2>Nutrition</h2></div>
				<div class="right">
					<p>
						Malnutrition is a threat to healthy development. The typical diet is generally based on
						rice and black beans, because these are affordable and widely available products, but
						also because there is a lack of knowledge around nutrition.
					</p>
					<ul>
						<li>
							<b>Education</b><br /> We educate and raise awareness around foods, nutrition and healthy
							eating habits, encouraging the children to share their knowledge with their families and
							make healthy choices.
						</li>
						<li>
							<b> Meals</b><br /> We provide daily meals or snacks that offer a basic but nutritious
							complement to the typical diet. In addition to their nutritional value, the meals are an
							important moment of socializing and creating a sense of family and belonging.
						</li>

						<li>
							<b>Competence</b><br />
							In 2023, we will launch the project “Growing Strong” with the expected support of Casa
							Pueblito, through which we will create a vegetable garden (the soil is already being prepared),
							build an outdoor kitchen and teach our children to grow vegetables and cook their own food,
							with the collaboration of a gardener and a nutritionist. This will increase the nutritional
							value of our meals, while empowering them to make healthy choices.
						</li>
					</ul>
				</div>
			</div>
			<div class="pillar">
				<div class="left"><h2>Hygene</h2></div>
				<div class="right">
					<p>
						Lack of hygiene is a factor that negatively affects our health and social relations.
						Maintaining personal hygiene and cleanliness habits help prevent the spread of
						infectious diseases and is also an important ingredient in fostering healthy, fulfilled
						lives.
					</p>
					<ul>
						<li>
							<b>Personal hygiene</b><br />
							We promote and develop habits such as washing hands, cutting nails and brushing teeth,
							which are important in preventing health issues. Nurses at the local health station regularly
							provide sessions around a variety of topics.
						</li>
						<li>
							<b>Cleanliness</b><br />
							The children are responsible for cleaning their own plates, cutlery and glasses after each
							meal, and participate in keeping the classroom clean and tidy. This teaches them positive
							habits, often not expected at home, and contributes to their autonomy.
						</li>
						<li>
							<b>Sex Education & Womens Health </b><br />
							We have special focus on sex education, including education around adolescence, anatomy,
							sexual reproduction, contraception, HIV and consent, especially for the older children.
							We are also planning a future project to offer condoms and menstrual cups to combat some
							of the challenges described earlier. One of our Daukaia Norge members has a background
							as a health professional and is committed to developing projects focused on female and
							reproductive health as well as improving our health offerings at Daukaia.
						</li>
					</ul>
				</div>
			</div>
			<div class="pillar">
				<div class="left"><h2>Education</h2></div>
				<div class="right">
					<p>
						The number of years for which a child remains within the formal education system is one
						of the greatest predictors of future personal, professional and economic well being. For
						this reason, the main focus of our work is helping children succeed at school.
					</p>
					<ul>
						<li>
							<b>Homework support</b><br />We provide a space where children can do their homework,
							support each other, access knowledge through books and the internet, and receive help
							from our educators.
						</li>
						<li>
							<b>Content review </b><br />Each day, our educators prepare sessions in which they go
							through academic content, based on the information provided by the teachers. These
							sessions focus on understanding, play-based learning and making the content relevant
							to the children.
						</li>
						<li>
							<b>Basic skills</b><br />Reading, writing and arithmetics are basic skills on which we
							maintain special focus throughout all educational activities.
						</li>
						<li>
							<b>Personalized support</b><br />The educators are aware of each child’s academic
							needs, interests and motivations, and constantly personalize their instruction and
							support.
						</li>
					</ul>
					<p>
						Though the children we support are primarily those identified by the local schools
						because of their difficulties and poor results, we have a track record of academic
						success. In 2019, 31 of the 48 children of our project ended the school year with the
						highest qualification (“Aprendizaje Avanzado”), and many have become their teacher’s
						assistants at school. For the first time, during Covid-19, some of our children had to
						repeat a grade, but in 2022 we are back on track towards our previous results. We are
						also able to offer support that is compassionate and non-violent, which sadly is not the
						case of the education system in Nicaragua. The child is able to learn in a safe,
						non-judgemental environment focusing on enhancing their skills and supporting their
						personal difficulties.
					</p>
				</div>
			</div>
			<div class="pillar">
				<div class="left"><h2>Personal development</h2></div>
				<div class="right">
					<p>
						Personal development is the result of a set of skills and mindsets that help the person
						thrive. “A ‘competent human’ is self-sufficient, able to focus attention and plan, has a
						future orientation, is adaptable to change, has a sense of responsibility, has a belief
						that one can have an effect and is capable of commitment” (Haste, 2001).
					</p>

					<ul>
						<li>
							<b>Self-awareness</b><br />
							Being aware of one’s own values, emotions, strengths, motives and needs is important in
							the quest for fulfillment and for finding a sense of purpose in life, as well as developing
							empathy for others.
						</li>

						<li>
							<b>Soft skills </b><br />
							Studies show that soft skills such as autonomy, teamwork, communication skills and problem
							solving contribute to personal, emotional and social wellbeing (Duckworth & Yaeger, 2015).
						</li>

						<li>
							<b>Thinking skills</b><br />
							We generate opportunities to develop the ability to question and think logically, critically
							and creatively.
						</li>

						<li>
							<b>Self-regulation</b><br />
							The ability to manage one’s behavior and emotions according to the situation is key to
							learning, avoiding conflict and reaching goals.
						</li>

						<li>
							<b>Growth mindset </b><br />
							We actively promote a growth mindset (Dweck, 2006), through the understanding that our
							minds are malleable and that intelligence isn’t a fixed trait but develops over time as
							we learn from challenges. A growth mindset nurtures curiosity, confidence and a positive
							attitude toward learning.
						</li>

						<li>
							<b>Agency</b><br />
							Agency is a person’s “belief in their power to impact their own future and that of the
							broader world” (Hannon & Peterson, 2021). Through leadership and agency, our children experience
							a sense of contribution and are empowered as change agents.
						</li>
					</ul>
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
		background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)),
			url('/images/IMG_7944.jpg');

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
		width: min(100%, 800px);
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
		margin: 20px 0;
		text-align: center;
	}

	.meaning {
		background-color: var(--clr-accent);
		color: white;
	}

	.definition {
		text-align: center;
		max-width: min(100%, 50ch);
		margin: 1rem 0;
		font-size: 3rem;
	}
	.pillar {
		display: flex;
		border-top: 1px solid var(--orange);
		margin: 2rem 0;
		padding: 2rem 0;
	}
	.pillars h1 {
		font-size: 1.25rem;
		text-transform: uppercase;
		font-weight: 500;
		/* color: var(--clr-accent); */
		margin: 0;
		text-align: center;
	}
	.pillars p {
		font-size: 2rem;
		margin: 1.5rem 0;
		width: min(800px, 100%);
		line-height: normal;
	}
	.pillar .left,
	.pillar .right {
		width: 100%;
	}

	.pillar .left h2 {
		text-align: left;
		color: var(--orange);
	}

	.pillar .right p {
		text-align: left;
		font-size: 1.225rem;
	}
	.pillar ul {
		margin: 0 0 0 1rem;
		padding: 0;
		text-align: left;
	}
</style>
