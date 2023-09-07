/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				purple: "#9747FF",
				blue: "#3289C9",
				yellow: "#EDDE00",
				orange: "#E74623",
				gray: "#D3D4DC",
				partnersBackground: "#404040",
				gold: "#F6AF03",
				navyBlue: "#0540F2"
			},
			fontFamily: {
				barlow: ['barlow', 'sans-serif'],
				cormorant: ['Cormorant Garamond', 'sans-serif'],
			  },
		},
		screens: {
			sm: '776px'
		}
	},
	plugins: [],
}
