"use client";

import { useState } from "react";
import Image from "next/image";
import acceptedCards from "@assets/img/cards-alt.png";
import Link from "next/link";

const Checkout = () => {
    const togglePaymentMethod = (e) => {
        const accordionContainerHiddenClasses = [
            "accordion-container-hidden",
        ];

        const accordionContainerActiveClasses = [
            "accordion-container-active",
        ];

        const accordionContentHiddenClasses = [
            "accordion-content-container-hidden"
        ];

        const accordionContentActiveClasses = [
            "accordion-content-container-active"
        ];

        if (e.currentTarget.nextElementSibling.classList.contains("accordion-container-hidden")) {
            e.currentTarget.classList.add("text-brand-red");
            e.currentTarget.lastElementChild.classList.replace("fi-rr-angle-down", "fi-rr-angle-up");

            accordionContainerHiddenClasses.forEach(hiddenClasses => {
                accordionContainerActiveClasses.forEach(activeClasses => {
                    e.currentTarget.nextElementSibling.classList.replace(hiddenClasses, activeClasses);
                });
            });

            accordionContentHiddenClasses.forEach(hiddenClasses => {
                accordionContentActiveClasses.forEach(activeClasses => {
                    e.currentTarget.nextElementSibling.firstElementChild.classList.replace(hiddenClasses, activeClasses);
                });
            });

            e.currentTarget.nextElementSibling.firstElementChild.classList.add("pt-4");
        } else {
            e.currentTarget.classList.remove("text-brand-red");
            e.currentTarget.lastElementChild.classList.replace("fi-rr-angle-up", "fi-rr-angle-down");

            accordionContainerHiddenClasses.forEach(hiddenClasses => {
                accordionContainerActiveClasses.forEach(activeClasses => {
                    e.currentTarget.nextElementSibling.classList.replace(activeClasses, hiddenClasses);
                });
            });

            accordionContentHiddenClasses.forEach(hiddenClasses => {
                accordionContentActiveClasses.forEach(activeClasses => {
                    e.currentTarget.nextElementSibling.firstElementChild.classList.replace(activeClasses, hiddenClasses);
                });
            });

            e.currentTarget.nextElementSibling.firstElementChild.classList.remove("pt-4");
        }
    };

    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-brand-red"></div>
                <div className="bg-white dark:bg-brand-black"></div>
            </div>

            <div className="bg-white text-slate-900 py-[3%] px-[2%] mx-[3%] rounded-lg z-30 shadow-card isolate relative grid gap-8 mb-12 items-start lg:grid-cols-12 lg:gap-0 lg:divide-x lg:divide-slate-200 lg:p-0">
                <div className="grid gap-4 lg:col-span-8 lg:py-[3%] lg:px-[5%]">
                    <div className="border-b border-slate-200 pb-4">
                        <h2 className="header text-xl">
                            Billing details
                        </h2>
                    </div>

                    <form className="grid gap-4 lg:grid-cols-2">
                        <label className="grid gap-1.5" htmlFor="first-name">
                            <span className="font-semibold block">
                                First name <span className="text-brand-red">*</span>
                            </span>

                            <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]" type="text" name="first-name" id="first-name" />
                        </label>

                        <label className="grid gap-1.5" htmlFor="last-name">
                            <span className="font-semibold block">
                                Last name <span className="text-brand-red">*</span>
                            </span>

                            <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]" type="text" name="last-name" id="last-name" />
                        </label>

                        <label className="grid gap-1.5 lg:col-span-2" htmlFor="email-address">
                            <span className="font-semibold block">
                                Email address <span className="text-brand-red">*</span>
                            </span>

                            <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]" type="email" name="email-address" id="email-address" />
                        </label>

                        <div className="grid gap-4 lg:hidden lg:not-sr-only">
                            <h2 className="header text-xl">
                                Order summary
                            </h2>

                            <div className="divide-y divide-slate-200">
                                <div className="flex items-center gap-4 pb-2">
                                    <Image className="object-cover aspect-square rounded-md" src="/img/01.jpg" height={ 60 } width={ 60 } quality={ 100 } alt="Some Random Product" />

                                    <div className="grid gap-0.5">
                                        <h3 className="font-semibold leading-0">
                                            UI Isometric Devices Pack
                                        </h3>

                                        <p className="text-brand-red slashed-zero">
                                            $ <span className="font-medium">23.</span><small>00</small>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-2">
                                    <Image className="object-cover aspect-square rounded-md" src="/img/02.jpg" height={ 60 } width={ 60 } quality={ 100 } alt="Some Random Product" />

                                    <div className="grid gap-0.5">
                                        <h3 className="font-semibold leading-0">
                                            UI Isometric Devices Pack
                                        </h3>

                                        <p className="text-brand-red slashed-zero">
                                            $<span className="font-medium">23.</span><small>00</small>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-2">
                                    <Image className="object-cover aspect-square rounded-md" src="/img/03.jpg" height={ 60 } width={ 60 } quality={ 100 } alt="Some Random Product" />

                                    <div className="grid gap-0.5">
                                        <h3 className="font-semibold leading-0">
                                            UI Isometric Devices Pack
                                        </h3>

                                        <p className="text-brand-red slashed-zero">
                                            $<span className="font-medium">23.</span><small>00</small>
                                        </p>
                                    </div>
                                </div>

                                <div className="py-4 grid gap-0.5 slashed-zero">
                                    <div className="flex items-center gap-4 justify-between">
                                        <p className="font-medium">
                                            Subtotal:
                                        </p>

                                        <p>
                                            $<span className="font-medium">23.</span><small>00</small>
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 justify-between">
                                        <p className="font-medium">
                                            Taxes:
                                        </p>

                                        <p>
                                            $<span className="font-medium">9.</span><small>30</small>
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 justify-between text-xl">
                                        <p className="font-medium">
                                            Total:
                                        </p>

                                        <p>
                                            $<span className="font-medium">9.</span><small>30</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 lg:col-span-2">
                            <div className="p-4">
                                <button className="flex items-center justify-between gap-4 w-full font-semibold hover:text-brand-red" type="button" onClick={ (e) => togglePaymentMethod(e)}>
                                    <span>
                                        <i className="fr fi-rr-credit-card pr-2"></i>
                                        Pay with Credit Card
                                    </span>

                                    <i className="fr fi-rr-angle-down text-base"></i>
                                </button>

                                <div className="accordion-container accordion-container-hidden">
                                    <div className="accordion-content-container accordion-content-container-hidden gap-8">
                                        <div className="flex items-center gap-x-2 gap-y-1 flex-wrap">
                                            <p>
                                                We accept the following cards:
                                            </p>

                                            <Image src={ acceptedCards } alt="Accepted cards" height={200} width={200} quality={100} />
                                        </div>

                                        <div className="grid gap-4 lg:grid-cols-2">
                                            <label className="w-full" htmlFor="card-number">
                                                <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full" type="number" name="card-number" id="card-number" placeholder="Card Number" />
                                            </label>

                                            <label className="w-full" htmlFor="fullname">
                                                <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full" type="text" name="fullname" id="fullname" placeholder="Full Name" />
                                            </label>

                                            <div className="grid gap-4 lg:grid-cols-2">
                                                <label className="w-full" htmlFor="expiry-date">
                                                    <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full" type="text" name="expiry-date" id="expiry-date" placeholder="MM/YY" />
                                                </label>

                                                <label className="w-full" htmlFor="cvc">
                                                    <input className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full" type="text" name="cvc" id="cvc" placeholder="CVC" />
                                                </label>
                                            </div>

                                            <Link className="bg-brand-red text-white py-2 px-4 text-center hover:bg-brand-dark-rose rounded-lg" href="/">
                                                Place order
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <button className="flex items-center justify-between gap-4 w-full font-semibold hover:text-brand-red" type="button" onClick={ (e) => togglePaymentMethod(e) }>
                                    <span>
                                        <i className="fr fi-brands-paypal pr-2"></i>
                                        Pay with PayPal
                                    </span>

                                    <i className="fr fi-rr-angle-down text-base"></i>
                                </button>

                                <div className="accordion-container accordion-container-hidden">
                                    <div className="accordion-content-container accordion-content-container-hidden gap-4">
                                        <p>
                                            <span className="font-semibold">PayPal</span> - the safer, easier way to pay
                                        </p>

                                        <div>
                                            <Link className="bg-brand-red text-white py-2 px-4 text-center hover:bg-brand-dark-rose rounded-lg inline-block w-auto" href="/">
                                                Checkout with PayPal
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="hidden lg:grid gap-8 lg:col-span-4 lg:py-[6%] lg:px-[10%]">
                    <h2 className="header text-xl text-center">
                        Order summary
                    </h2>

                    <div className="divide-y divide-slate-200">
                        <div className="flex items-center gap-4 pb-2">
                            <Image className="object-cover aspect-square rounded-md" src="/img/01.jpg" height={60} width={60} quality={100} alt="Some Random Product" />

                            <div className="grid gap-0.5">
                                <h3 className="font-semibold leading-0">
                                    UI Isometric Devices Pack
                                </h3>

                                <p className="text-brand-red slashed-zero">
                                    $ <span className="font-medium">23.</span><small>00</small>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 py-2">
                            <Image className="object-cover aspect-square rounded-md" src="/img/02.jpg" height={60} width={60} quality={100} alt="Some Random Product" />

                            <div className="grid gap-0.5">
                                <h3 className="font-semibold leading-0">
                                    UI Isometric Devices Pack
                                </h3>

                                <p className="text-brand-red slashed-zero">
                                    $<span className="font-medium">23.</span><small>00</small>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 py-2">
                            <Image className="object-cover aspect-square rounded-md" src="/img/03.jpg" height={60} width={60} quality={100} alt="Some Random Product" />

                            <div className="grid gap-0.5">
                                <h3 className="font-semibold leading-0">
                                    UI Isometric Devices Pack
                                </h3>

                                <p className="text-brand-red slashed-zero">
                                    $<span className="font-medium">23.</span><small>00</small>
                                </p>
                            </div>
                        </div>

                        <div className="py-4 grid gap-0.5 slashed-zero">
                            <div className="flex items-center gap-4 justify-between">
                                <p className="font-medium">
                                    Subtotal:
                                </p>

                                <p>
                                    $<span className="font-medium">23.</span><small>00</small>
                                </p>
                            </div>

                            <div className="flex items-center gap-4 justify-between">
                                <p className="font-medium">
                                    Taxes:
                                </p>

                                <p>
                                    $<span className="font-medium">9.</span><small>30</small>
                                </p>
                            </div>
                        </div>

                        <div className="flex place-content-center py-4 text-3xl slashed-zero">
                            $<span className="font-bold">9.</span><small className="font-medium">30</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
