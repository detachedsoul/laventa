"use client";

import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import links from "@data/links";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [drodownIsOpen, setDropdownIsOpen] = useState(false);
	const [theme, setTheme] = useState('light');

	const handleNavToggle = () => { setIsOpen(() => !isOpen) };
	const handleDropdownToggle = () => { setDropdownIsOpen(() => !drodownIsOpen) };

	useEffect (() => {
		setDropdownIsOpen(() => false);
	}, [isOpen]);

	useEffect (() => {
		setIsOpen(() => false);
		setDropdownIsOpen(() => false);
	}, [pathname]);

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme(() => localStorage.getItem('theme'));
		} else {
			document.documentElement.classList.add('light');
			localStorage.setItem('theme', 'light');
			setTheme(() => localStorage.getItem('theme'));
		}
	}, []);

	const toggleTheme = () => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.replace('dark', 'light');
			localStorage.setItem('theme', 'light');
			setTheme(() => localStorage.getItem('theme'));
		} else {
			document.documentElement.classList.replace('light', 'dark');
			localStorage.setItem('theme', 'dark');
			setTheme(() => localStorage.getItem('theme'));
		}
	};

	return (
		<header className="flex items-center gap-4 justify-between bg-white py-5 sticky top-0 z-[1024] border-b border-slate-200 lg:py-3 px-[3%] dark:bg-brand-black dark:text-white dark:border-slate-50/[0.06]">
			<button
				className="lg:hidden lg:not-sr-only"
				aria-label="Navbar toggle button"
				onClick={handleNavToggle}
			>
				<i className="fr fi-rr-menu-burger"></i>
			</button>

			<Link className="hidden not-sr-only lg:inline-block" href="/">
				<Image
					className="w-16 h-auto"
					src={Logo}
					alt="Laventa"
					height="auto"
				/>
			</Link>

			<nav
				className={ `bg-white absolute top-0 left-0 flex flex-col gap-4 p-4 w-full z-[1024] transition-transform duration-500 ease-linear lg:static lg:p-0 lg:bg-transparent lg:w-auto min-h-screen lg:min-h-0 dark:bg-brand-black ${
					isOpen
						? "translate-y-0"
						: "-translate-y-full lg:translate-y-0"
				}`}
			>
				<div className="flex items-center justify-between gap-4 border-b border-gray-400 pb-4 lg:hidden lg:not-sr-only">
					<Link href="/">
						<Image
							className="w-16 h-auto"
							src={Logo}
							alt="Laventa"
							height="auto"
						/>
					</Link>

					<button aria-label="Close navbar" onClick={handleNavToggle}>
						<i className="fr fi-rr-cross"></i>
					</button>
				</div>

				<ul
					className={`flex flex-col gap-10 overscroll-contain min-h-[calc(100vh-6.5rem)] lg:min-h-0 lg:flex-row custom-scrollbar ${
						drodownIsOpen
							? "overflow-y-auto  lg:overflow-y-hidden"
							: "overflow-y-hidden"
					}`}
				>
					{links.map((link, id) => (
						<li
							className={`${link.isDropdown ? "relative" : ""}`}
							key={id}
						>
							{link.isDropdown ? (
								<>
									<button
										className={`flex items-center gap-4 w-full relative px-4 lg:px-0 lg:gap-3 ${
											drodownIsOpen
											? "text-brand-red dark:text-slate-200"
											: "hover:text-brand-red dark:hover:text-slate-300"
										}`}
										type="button"
										onClick={handleDropdownToggle}
									>
										<i className={`fr ${link.icon}`}></i>

										{link.label}
									</button>

									<div
										className={ `bg-slate-50 lg:bg-white lg:shadow-dropdown absolute p-4 w-full z-[1024] rounded-lg transition-transform ease-linear duration-500 flex flex-col gap-4 lg:p-8 lg:fixed lg:w-auto origin-top top-[calc(100%+1.5rem)] lg:left-0 lg:right-0 dark:bg-brand-black dark:border dark:border-slate-100/[0.06] lg:dark:border-none ${
											drodownIsOpen
												? "translate-y-0"
												: "-translate-y-[150%]"
										}`}
									>
										<h3 className="header text-xl border-b border-gray-400 pb-2">
											Categories
										</h3>

										<ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
											{link.categories.map(
												(category, id) => (
													<li key={id}>
														<Link
															className="flex gap-4 items-start w-full transition-all ease-linear rounded-lg p-4 lg:gap-3 hover:bg-brand-light-black dark:hover:text-white group"
															href={
																category.route
															}
														>
															<i
																className={ `fr ${category.icon} bg-slate-200 lg:bg-slate-100 rounded-lg px-4 pt-4 pb-2 dark:bg-brand-light-black dark:group-hover:bg-brand-black` }
															></i>

															<div className="flex flex-col gap-0.5 transition-all ease-linear group-hover:text-white">
																<p className=" font-bold lg:text-lg">
																	{
																		category.category
																	}
																</p>

																<p className="text-lg lg:text-base">
																	{
																		category.description
																	}
																</p>
															</div>
														</Link>
													</li>
												),
											)}
										</ul>
									</div>
								</>
							) : (
								<Link
									className={`flex items-center gap-4 w-full px-4 lg:px-0  lg:gap-3 ${
										pathname === link.route
											? "text-brand-red dark:text-slate-300"
											: "hover:text-brand-red dark:hover:text-slate-300"
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

				<Link href="/search" aria-label="Search bar toggle button">
					<i className="fr fi-rr-search"></i>
				</Link>

				<Link href="/cart" aria-label="Shopping cart">
					<i className="fr fi-rr-shopping-cart"></i>
				</Link>
			</div>
		</header>
	);
};

export default Header;
