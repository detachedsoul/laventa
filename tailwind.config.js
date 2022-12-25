/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.js", "./components/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				GTWalsheimPro: ["var(--font-GTWalsheimPro)"],
				DMSerifDisplay: ["var(--font-dm-serif-display)"],
			},
			boxShadow: {
				dropdown: "0px 10px 70px rgb(0 0 0 / 15%)",
			},
		},
	},
	plugins: [],
};
