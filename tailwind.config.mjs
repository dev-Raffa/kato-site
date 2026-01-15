/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4CBC7D',
				secondary: '#135234',
				tertiary: '#A2BA3A',
				dark: '#343a40',
				light: '#f0f0f0',
                grey: '#5c5c5c'
			},
			fontFamily: {
				sans: ['"Titillium Web"', 'sans-serif'],
			},
		},
	},
	plugins: [
    ],
}