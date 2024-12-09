/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
				aboreto: ['Aboreto', 'serif'],
				playfair: ['Playfair', 'serif'],
			},
			colors: {
				'dark-brown': '#544d45',
			},
		},
	},
	plugins: [],
}
