/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [require('daisyui'), require('@tailwindcss/typography'), require('daisyui')],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#a991f7',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff'
				}
			}
		]
	}
}
