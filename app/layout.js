import "@assets/uicons/css/uicons.css";
import "./globals.css";

import Footer from "@components/Footer";
import Header from "@components/Header";
import SplitNewsletter from "@components/SplitNewsletter";
import localFont from "next/font/local";

const GTWalsheimPro = localFont({
	src: "../assets/fonts/GTWalsheimPro.ttf",
	variable: "--font-GTWalsheimPro",
	display: "swap",
	preload: true,
});

const satoshi = localFont({
	src: "../assets/fonts/Satoshi.ttf",
	variable: "--font-satoshi",
	display: "swap",
	preload: true,
	weight: "400",
});

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta
					name="author"
					content="Wisdom Ojimah"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.svg"
				/>
			</head>
			<head />

			<body
				className={`bg-white overflow-x-hidden text-slate-900 dark:bg-brand-black dark:text-white antialiased scroll-smooth selection:bg-brand-red selection:text-white text-base font-GTWalsheimPro leading-normal tracking-wider ${GTWalsheimPro.variable} ${satoshi.variable} break-words [word-break:break-word] [word-wrap:break-word]`}
			>
				<Header />
				{children}
				<SplitNewsletter />
				<Footer />
			</body>
		</html>
	);
};

export default Layout;
