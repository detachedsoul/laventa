import "app/globals.css";

import localFont from "next/font/local";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

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

const NotFound = () => {
    useEffect (() => {
        if (localStorage.theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add("light");
		}
    }, []);

    return (
        <>
            <Head>
                <meta name="author" content="Wisdom Ojimah" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Laventa | Page Not Found</title>
                <meta name="description" content="Page not found 404 error" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className={ `bg-white overflow-x-hidden text-slate-900 dark:bg-brand-black dark:text-white antialiased scroll-smooth selection:bg-brand-red selection:text-white text-lg font-GTWalsheimPro leading-normal tracking-wider ${GTWalsheimPro.variable} ${satoshi.variable} break-words [word-break:break-word] [word-wrap:break-word] grid place-content-center p-4 min-h-screen` }>
                <div className="space-y-4">
                    <h1 className="header text-3xl">
                        Sorry, we couldn’t find the page you’re looking for.
                    </h1>

                    <p className="leading-loose">
                        You can <Link className="text-sky-700 dark:text-sky-600 error-page-link" href="/">go back to the homepage,</Link> <Link className="text-pink-600 error-page-link" href="/categories">view our product catalog,</Link> or <Link className="text-indigo-600 error-page-link" href="/blog">view our blog posts</Link>
                    </p>
                </div>
            </main>
        </>
    );
};

export default NotFound;
