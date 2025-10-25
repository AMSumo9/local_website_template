import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			  },
			colors: {
				// These will be dynamically populated via CSS variables
				'brand-primary': 'var(--brand-primary-color, #2563EB)', // Default blue
				'brand-primary-dark': 'var(--brand-primary-dark-color, #1D4ED8)',
				'brand-accent': 'var(--brand-accent-color, #DBEAFE)',
			},
		},
	},
	plugins: [
		typography(), // Adds the 'prose' class for styling markdown content
	],
}
