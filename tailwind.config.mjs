/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				logo: '#C8A08C',
				primary: '#E94594',
				call: '#1DD1A1',
				dark: '#1A1A1A',
				soft: '#FFF8F6',
				graytxt: '#5E5E5E',
				white: '#FFFFFF',
				text: '#1A1A1A',
				background: '#FFFFFF'
			},
			fontFamily: {
				display: ['Poppins', 'ui-sans-serif', 'system-ui'],
				body: ['DM Sans', 'ui-sans-serif', 'system-ui']
			},
			boxShadow: {
				card: '0 10px 30px rgba(0,0,0,.08)',
				glow: '0 8px 24px rgba(233,69,148,.25)',
				'card-hover': '0 10px 30px rgba(0,0,0,.12)',
				'primary-glow': '0 10px 25px rgba(233, 69, 148, 0.25)'
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				underline: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				pulseSoft: {
					'0%': { boxShadow: '0 0 0 0 rgba(29,209,161,.45)' },
					'70%': { boxShadow: '0 0 0 14px rgba(29,209,161,0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(29,209,161,0)' }
				},
				'pulse-gentle': {
					'0%, 100%': { 
						transform: 'scale(1)',
						boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
					},
					'50%': { 
						transform: 'scale(1.02)',
						boxShadow: '0 8px 30px rgba(233,69,148,0.15)'
					}
				}
			},
			animation: {
				fadeUp: 'fadeUp 220ms ease-out',
				fadeIn: 'fadeIn 180ms ease-out',
				scaleIn: 'scaleIn 160ms ease-out',
				underline: 'underline 200ms ease-out',
				slideUp: 'slideUp 220ms ease-out',
				pulseSoft: 'pulseSoft 1.8s ease-out infinite',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite'
			},
			borderRadius: {
				'2xl': '1.25rem'
			},
			transitionDuration: {
				'160': '160ms',
				'180': '180ms',
				'200': '200ms',
				'220': '220ms'
			},
			transitionTimingFunction: {
				'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
			}
		},
	},
	plugins: [animate],
}
