"use client";

import Logo from "@assets/img/logo.svg";
import DropdownLinks from "@components/DropdownLinks";
import Image from "next/image";
import Link from "next/link";
import links from "@data/links";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import useFetch from "@helpers/useFetch";

const fetchCategories = async (url) => {
	const res = await fetch(url);

	const { data } = await res.json();

	return data;
};

const Header = () => {
	const categories = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories?populate=categoryImage`, fetchCategories).data;
	const isLoading = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories?populate=categoryImage`, fetchCategories).isLoading;
	const error = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories?populate=categoryImage`, fetchCategories).error;

	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [drodownIsOpen, setDropdownIsOpen] = useState(false);
	const [theme, setTheme] = useState("light");

	const handleNavToggle = () => {
		setIsOpen(() => !isOpen);

		isOpen
			? (document.body.style.overflowY = "auto")
			: (document.body.style.overflowY = "hidden");
	};

	const handleDropdownToggle = () => {
		setDropdownIsOpen(() => !drodownIsOpen);
	};

	useEffect(() => {
		setDropdownIsOpen(() => false);
	}, [isOpen, pathname]);

	useEffect(() => {
		setIsOpen(() => false);
		document.body.style.overflowY = "auto";
	}, [pathname]);

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setTheme(() => localStorage.getItem("theme"));
		} else {
			document.documentElement.classList.add("light");
			localStorage.setItem("theme", "light");
			setTheme(() => localStorage.getItem("theme"));
		}
	}, []);

	const toggleTheme = () => {
		if (localStorage.theme === "dark") {
			document.documentElement.classList.replace("dark", "light");
			localStorage.setItem("theme", "light");
			setTheme(() => localStorage.getItem("theme"));
		} else {
			document.documentElement.classList.replace("light", "dark");
			localStorage.setItem("theme", "dark");
			setTheme(() => localStorage.getItem("theme"));
		}
	};

	if (typeof window !== "undefined") {
		// Allow scrolling of the page when on desktop screens regardless of whether the nav state is true or not
		window.addEventListener("resize", () => {
			if (window.matchMedia("(min-width: 1024px)").matches) {
				document.body.style.overflowY = "auto";
			} else {
				isOpen
					? (document.body.style.overflowY = "hidden")
					: (document.body.style.overflowY = "auto");
			}
		});
	}

	return (
		<header className="flex items-center gap-4 justify-between bg-white py-5 sticky top-0 z-[1024] border-b border-slate-200 lg:py-4 px-[3%] dark:bg-brand-black dark:text-white dark:border-slate-50/[0.06]">
			<button
				className="lg:hidden lg:not-sr-only"
				aria-label="Navbar toggle button"
				onClick={handleNavToggle}
			>
				<i className="fr fi-rr-menu-burger"></i>
			</button>

			<Link
				className="hidden not-sr-only lg:inline-block"
				href="/"
			>
				<Image
					className="w-16 h-auto"
					src={Logo}
					alt="Laventa"
					height="auto"
					width="100%"
				/>
			</Link>

			<nav
				className={`bg-white absolute top-0 left-0 flex flex-col gap-4 p-4 w-full z-[1024] transition-transform duration-500 ease-linear lg:static lg:p-0 lg:bg-transparent lg:w-auto min-h-screen lg:min-h-0 dark:bg-brand-black ${
					isOpen
						? "translate-y-0"
						: "-translate-y-full lg:translate-y-0"
				}`}
			>
				<div className="flex items-center justify-between gap-4 border-b border-gray-400 pb-4 lg:hidden lg:not-sr-only dark:border-slate-100/[0.06]">
					<Link href="/">
						<Image
							className="w-16 h-auto"
							src={Logo}
							alt="Laventa"
							height="auto"
							width="100%"
						/>
					</Link>

					<button
						aria-label="Close navbar"
						onClick={handleNavToggle}
					>
						<i className="fr fi-rr-cross"></i>
					</button>
				</div>

				<ul
					className={`flex flex-col gap-10 overscroll-contain min-h-[calc(100vh-6.5rem)] lg:min-h-0 lg:flex-row custom-scrollbar ${
						drodownIsOpen
							? "overflow-y-auto lg:overflow-y-hidden"
							: "overflow-y-hidden"
					}`}
				>
					{links.map((link, id) => (
						<li
							className={`${link.isDropdown && "relative"}`}
							key={id}
						>
							{link.isDropdown ? (
								<>
									<button
										className={`flex items-center gap-4 w-full relative px-4 lg:px-0 lg:gap-3 ${
											drodownIsOpen
												? "text-brand-red dark:text-rose-500"
												: "hover:text-brand-red"
										}`}
										type="button"
										onClick={handleDropdownToggle}
									>
										<i className={`fr ${link.icon}`}></i>

										{link.label}
									</button>

									<div
										className={`bg-slate-50 lg:bg-white lg:shadow-dropdown absolute p-4 w-full z-[1024] rounded-lg transition-transform ease-linear duration-500 flex flex-col gap-4 lg:p-8 lg:fixed lg:w-auto origin-top top-[calc(100%+1.5rem)] lg:left-0 lg:right-0 dark:bg-brand-black dark:border dark:border-slate-100/[0.06] lg:dark:border-none ${
											drodownIsOpen
												? "translate-y-0"
												: "-translate-y-[200%]"
										}`}
									>
										<h3 className="header text-xl border-b border-gray-400 pb-2 dark:border-slate-100/[0.06]">
											Categories
										</h3>

										<DropdownLinks
											categories={categories} error={error} isLoading={isLoading}
										/>

										{/* {categories &&
											categories.length > 0 && (
												<p>
													There are no product
													category yet. Please check
													back at a later time.
												</p>
											)
										} */}

										{/* {error && (
											<p className="font-bold text-brand-red dark:text-rose-500">
												There was an error fetching categories.
											</p>
										)} */}
									</div>
								</>
							) : (
								<Link
									className={`flex items-center gap-4 w-full px-4 lg:px-0  lg:gap-3 ${
										pathname === link.route
											? "text-brand-red dark:text-rose-500"
											: "hover:text-brand-red"
									}`}
									href={link.route}
								>
									<i className={`fr ${link.icon}`}></i>

									{link.label}
								</Link>
							)}
						</li>
					))}
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<button
					aria-label="Theme switcher"
					onClick={() => toggleTheme()}
				>
					<i
						className={`fr ${
							theme === "dark" ? "fi-rr-sun" : "fi-rr-moon"
						}`}
					></i>
				</button>

				<Link
					href="/categories"
					aria-label="Search bar toggle button"
				>
					<i className="fr fi-rr-search"></i>
				</Link>

				<Link
					href="/cart"
					aria-label="Shopping cart"
				>
					<i className="fr fi-rr-shopping-cart"></i>
				</Link>
			</div>
		</header>
	);
};

export default Header;
