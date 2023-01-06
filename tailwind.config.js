/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.js", "./components/**/*.js"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				GTWalsheimPro: ["var(--font-GTWalsheimPro)"],
				satoshi: ["var(--font-satoshi)"],
			},
			boxShadow: {
				dropdown: "0px 10px 70px rgb(0 0 0 / 15%)",
				card: "rgba(0, 0, 0, 0.03) 0px 0.25rem 0.5625rem -0.0625rem,rgba(0, 0, 0, 0.05) 0px 0.275rem 1.25rem -0.0625rem"
			},
			backgroundImage: {
				hero: "linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)",
			},
			colors: {
				"brand-red": "#87081d",
				"brand-black": "#181818",
				"brand-dark-sky": "#053d57",
				"brand-dark-rose": "#6f0618",
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class"
		})
	],
};
