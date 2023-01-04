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
			backgroundImage: {
				hero: "linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)",
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class"
		})
	],
};
