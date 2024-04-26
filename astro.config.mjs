import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	image: {
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: 'Trello',
			social: {
				github: 'https://mygithub.url.com',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Overview', link: '/getting-started/' },
						{ label: 'Installation', link: '/getting-started/installation/' },
						{ label: 'Usage', link: '/getting-started/usage/' },
						{ label: 'FAQs', link: '/getting-started/faq/' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Project Structure', link: '/guides/project-structure/' },
						{ label: 'Environment', link: '/guides/environment/' },
						{ label: 'Custom Hooks', link: '/guides/hooks/' },
						{ label: 'Internationalization (i18n)', link: '/guides/i18n/' },
						{ label: 'TypeScript', link: '/guides/typescript/' },
						{ label: 'Code Review Process', link: '/guides/code-review-process/' },
						{ label: 'Building for Production', link: '/guides/build/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Tools', link: '/reference/tools/' },
					],
				},
			],
		}),
	],
});
