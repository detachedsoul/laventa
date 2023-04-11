"use client";

import TransactionSuccessful from "@assets/img/transaction-successful.svg";
import TransactionFailed from "@assets/img/transaction-failed.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Popup = ({
	isSuccess,
	message,
	isActive,
	setIsActive,
    setIsProcessing,
	receiptURL = null,
}) => {
	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflowY = "hidden";
		} else {
			document.querySelector("body").style.overflowY = "auto";
		}

		window.addEventListener("resize", () => {
			if (isActive) {
				document.querySelector("body").style.overflowY = "hidden";
			} else {
				document.querySelector("body").style.overflowY = "auto";
			}
		});
	}, [isActive]);

	return (
		<div
			className={`fixed inset-0 h-screen custom-scrollbar w-full bg-[rgba(0,0,0,.5)] z-[1024] transition-transform ease-linear duration-500 ${
				isActive ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className="relative top-1/4 custom-scrollbar overflow-y-auto grid lg:w-1/3 lg:left-[calc(33.333333%)] place-content-center px-[3%]">
				<div className="bg-white shadow-card rounded-xl p-8 text-brand-black text-center space-y-4">
					<Image
						className="aspect-sqaure mx-auto"
						src={
							isSuccess
								? TransactionSuccessful
								: TransactionFailed
						}
						alt="Transaction status"
						width={70}
						height={70}
					/>

					<div className="space-y-2">
						<h1
							className={`text-2xl text-center font-medium ${
								isSuccess
									? "text-emerald-500"
									: "text-brand-red"
							}`}
						>
							{isSuccess
								? "Transaction Successful"
								: "Transaction Failed"}
						</h1>

						<p>{message}</p>

						{isSuccess && (
							<p>
								Click the link below to view the receipt for the
								transaction.
							</p>
						)}
					</div>

					{isSuccess ? (
						<Link
							className="popup-btn inline-block bg-emerald-500 dark:bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 hover:ring-emerald-500 focus:ring-emerald-500 dark:hover:bg-emerald-600 dark:focus:bg-emerald-600 dark:focus:ring-emerald-500 dark:hover:ring-emerald-500 border-emerald-500 focus:border-emerald-500 hover:border-emerald-500"
							href={receiptURL}
							onClick={() => {
                                setIsActive(() => false);
                                setIsProcessing(() => false);
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
						>
							View receipt
						</Link>
					) : (
                        <button
							className="popup-btn bg-brand-red dark:bg-brand-red hover:bg-brand-dark-rose focus:bg-brand-dark-rose hover:ring-brand-red focus:ring-brand-red dark:hover:bg-brand-dark-rose dark:focus:bg-brand-dark-rose dark:focus:ring-brand-red dark:hover:ring-brand-red border-brand-red focus:border-brand-red hover:border-brand-red"
							type="button"
							onClick={() => {
                                setIsActive(() => false);
                                setIsProcessing(() => false);
                            }}
						>
							Try again
						</button>
                    )}
				</div>
			</div>
		</div>
	);
};

export default Popup;
