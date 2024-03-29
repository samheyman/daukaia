import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	translations: {
		en: { lang },
		es: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'navbar',
			loader: async () => (await import('./en/navbar.json')).default
		},
		{
			locale: 'es',
			key: 'navbar',
			loader: async () => (await import('./es/navbar.json')).default
		},
		{
			locale: 'en',
			key: 'homepage',
			loader: async () => (await import('./en/homepage.json')).default
		},
		{
			locale: 'es',
			key: 'homepage',
			loader: async () => (await import('./es/homepage.json')).default
		},
		{
			locale: 'en',
			key: 'about',
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'es',
			key: 'about',
			loader: async () => (await import('./es/about.json')).default
		},
		{
			locale: 'en',
			key: 'mission',
			loader: async () => (await import('./en/mission.json')).default
		},
		{
			locale: 'es',
			key: 'mission',
			loader: async () => (await import('./es/mission.json')).default
		},
		{
			locale: 'en',
			key: 'nicaragua',
			loader: async () => (await import('./en/nicaragua.json')).default
		},
		{
			locale: 'es',
			key: 'nicaragua',
			loader: async () => (await import('./es/nicaragua.json')).default
		},
		{
			locale: 'en',
			key: 'contribute',
			loader: async () => (await import('./en/contribute.json')).default
		},
		{
			locale: 'es',
			key: 'contribute',
			loader: async () => (await import('./es/contribute.json')).default
		},
		{
			locale: 'en',
			key: 'contact',
			loader: async () => (await import('./en/contact.json')).default
		},
		{
			locale: 'es',
			key: 'contact',
			loader: async () => (await import('./es/contact.json')).default
		},
		{
			locale: 'en',
			key: 'footer',
			loader: async () => (await import('./en/footer.json')).default
		},
		{
			locale: 'es',
			key: 'footer',
			loader: async () => (await import('./es/footer.json')).default
		}
		// {
		// 	locale: 'en',
		// 	key: 'home',
		// 	routes: ['/'], // you can use regexes as well!
		// 	loader: async () => (await import('./en/home.json')).default
		// },
		// {
		// 	locale: 'en',
		// 	key: 'about',
		// 	routes: ['/about'],
		// 	loader: async () => (await import('./en/about.json')).default
		// },
		// {
		// 	locale: 'cs',
		// 	key: 'common',
		// 	loader: async () => (await import('./cs/common.json')).default
		// },
		// {
		// 	locale: 'cs',
		// 	key: 'home',
		// 	routes: ['/'],
		// 	loader: async () => (await import('./cs/home.json')).default
		// },
		// {
		// 	locale: 'cs',
		// 	key: 'about',
		// 	routes: ['/about'],
		// 	loader: async () => (await import('./cs/about.json')).default
		// }
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
