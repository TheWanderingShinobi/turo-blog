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
					primary: '#004080',
					secondary: '#FFA500',
					accent: '#37cdbe',
					neutral: '#E0E0E0',
					'base-100': '#333333'
				}
			}
		]
	}
}
