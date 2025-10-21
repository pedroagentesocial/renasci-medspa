/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				logo: '#C8A08C',
				primary: '#E94594',
				dark: '#1A1A1A',
				soft: '#FFF8F6',
				graytxt: '#5E5E5E',
				white: '#FFFFFF'
			},
			fontFamily: {
				display: ['Poppins', 'ui-sans-serif', 'system-ui'],
				body: ['DM Sans', 'ui-sans-serif', 'system-ui']
			},
			boxShadow: {
				card: '0 10px 30px rgba(0,0,0,.08)'
			},
			borderRadius: {
				'2xl': '1.25rem'
			}
		},
	},
	plugins: [],
}