module.exports = {
	content: ["./app/**/*.js", "./components/**/*.js", "./pages/**/*.js", "./data/**/*.js"],
	css: ["./assets/uicons.css"],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
};
