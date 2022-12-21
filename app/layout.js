import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import localFont from "@next/font/local";
import "./globals.css";

const GTWalsheimPro = localFont({
	src: "../assets/fonts/GTWalsheimPro.ttf",
	variable: "--font-GTWalsheimPro",
	display: "swap",
	preload: true,
});

const DMSerifDisplay = localFont({
	src: "../assets/fonts/DMSerifDisplay.ttf",
	variable: "--font-dm-serif-display",
	display: "swap",
	preload: true,
	weight: "400",
});

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta name="author" content="Wisdom Ojimah" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.svg" />
			</head>
			<head />

			<body
				className={`antialiased scroll-smooth overscroll-contain selection:bg-rose-500 selection:text-white text-lg font-GTWalsheimPro leading-normal tracking-wider ${GTWalsheimPro.variable} ${DMSerifDisplay.variable} break-words [word-break:break-word] [word-wrap:break-word] lg:text-base transform-gpu overscroll-contain`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default Layout;
