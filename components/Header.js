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

	const handleNavToggle = () => { setIsOpen(() => !isOpen) };
	const handleDropdownToggle = () => { setDropdownIsOpen(() => !drodownIsOpen) };

	useEffect (() => {
		setDropdownIsOpen(() => false);
	}, [isOpen]);

	useEffect (() => {
		setIsOpen(() => false);
		setDropdownIsOpen(() => false);
	}, [pathname]);

	return (
		<header className="flex items-center gap-4 justify-between bg-white p-4 sticky top-0 z-50 lg:py-3">
			<button
				className="lg:hidden lg:not-sr-only"
				aria-label="Navbar toggle button"
				onClick={handleNavToggle}
			>
				<i className="fr fi-rr-menu-burger"></i>
			</button>

			<Link href="/">
				<Image
					className="w-16 h-auto"
					src={Logo}
					alt="Laventa"
					height="auto"
				/>
			</Link>

			<nav
				className={`bg-white absolute top-0 left-0 flex flex-col gap-4 p-4 w-full z-50 transition-transform duration-500 ease-linear lg:static lg:p-0 lg:bg-transparent lg:w-auto min-h-screen lg:min-h-0 ${
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

				<ul className={`flex flex-col gap-4 overscroll-contain min-h-[calc(100vh-7rem)] lg:min-h-0 lg:flex-row ${drodownIsOpen ? "overflow-y-auto" : "overflow-y-hidden"}`}>
					{links.map((link, id) => (
						<li
							className={`${link.isDropdown ? "relative" : ""}`}
							key={id}
						>
							{link.isDropdown ? (
								<>
									<button
										className={`flex items-center gap-4 w-full bg-gradient-to-r rounded-lg px-4 py-3 relative lg:pt-1 lg:px-3 lg:pb-1.5 lg:gap-3 ${
											drodownIsOpen
												? "from-rose-500/80 to-rose-500/90 text-white"
												: "hover:from-rose-500/80 hover:to-rose-500/90 hover:text-white"
										}`}
										type="button"
										onClick={handleDropdownToggle}
									>
										<i className={`fr ${link.icon}`}></i>

										{link.label}
									</button>

									<div
										className={`bg-white shadow-dropdown absolute p-4 w-full rounded-lg transition-transform ease-linear duration-500 z-50 flex flex-col gap-4 lg:p-8 lg:fixed lg:w-auto origin-top top-[calc(100%+1rem)] lg:left-0 lg:right-0 ${
											drodownIsOpen
												? "translate-y-0"
												: "-translate-y-[150%]"
										}`}
									>
										<h3 className="header text-xl lg:text-xl border-b border-gray-400 pb-2">
											Categories
										</h3>

										<ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
											{link.categories.map(
												(category, id) => (
													<li key={id}>
														<Link
															className="flex gap-4 items-start w-full transition-all ease-linear bg-gradient-to-r hover:from-rose-500/80 hover:to-rose-500/90 rounded-lg p-4 lg:gap-3 group"
															href={
																category.route
															}
														>
															<i
																className={`fr ${category.icon} bg-slate-100 rounded-lg px-4 pt-4 pb-2`}
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
									className={`flex items-center gap-4 w-full bg-gradient-to-r rounded-lg px-4 py-3 relative lg:pt-1 lg:px-3 lg:pb-1.5 lg:gap-3 ${
										pathname === link.route
											? "from-rose-500/80 to-rose-500/90 text-white"
											: "hover:from-rose-500/80 hover:to-rose-500/90 hover:text-white"
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
				<button aria-label="Theme switcher">
					<i className="fr fi-rr-moon"></i>
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
