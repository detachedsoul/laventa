import Link from "next/link";
import Image from "next/image";
import paymentPlatforms from "@assets/img/cards-alt.png";
import android from "@assets/img/download-android.svg";
import iOS from "@assets/img/download-ios.svg";

const Footer = () => {
    const usefulLinks = [
        {
            routeName: "About Us",
            route: "/about"
        },
        {
            routeName: "Blog",
            route: "/blog"
        },
        {
            routeName: "Contact",
            route: "/contact"
        }
    ];

    const helpLinks = [
        {
            routeName: "Help Center",
            route: "/"
        },
        {
            routeName: "Privacy Policy",
            route: "/"
        },
        {
            routeName: "FAQ",
            route: "/"
        },
        {
            routeName: "Terms & Conditions",
            route: "/"
        }
    ]

    return (
        <>

        <footer className="bg-slate-800 text-slate-200 mt-[50%] sm:mt-[10%]">
            <div className="bg-white text-slate-900 px-[6%] mr-[6%] py-12 rounded-lg grid place-content-center relative left-[3%] right-[3%] -translate-y-1/2 z-30 shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem]">
                <div className="text-center grid gap-8">
                    <div className="grid gap-3">
                        <h3 className="header text-3xl">
                            Never miss a drop!
                        </h3>

                        <p>
                            Subscribe to our ultra-exclusive drop list and be the first to know about upcoming drops.
                        </p>
                    </div>

                    <form className="flex flex-nowrap lg:w-4/5 lg:mx-auto" method="POST">
                        <label className="rounded-l-lg py-0.5 pl-3 pr-1 bg-white text-slate-900 flex items-center w-full border border-slate-200" htmlFor="footer-newsletter">
                            <i className="fr fi-rr-envelope top-0.5 text-base"></i>
                            <input className="bg-white py-2 input-form w-full" type="email" id="footer-newsletter" placeholder="Your email" aria-describedby="newsletter-subscription" required />
                        </label>

                        <button className="rounded-r-lg bg-rose-500 px-3 shrink-0 text-white hover:bg-rose-400 focus:bg-rose-400" type="submit">
                            Subscribe
                        </button>
                    </form>

                    <small className="-mt-5 mx-auto block lg:w-4/5" id="newsletter-subscription">
                        *Receive early discount offers, updates and new products info.
                    </small>
                </div>
            </div>

            <div className="grid gap-12 pb-20 px-[3%] -mt-[20vh] sm:-mt-[25vh] lg:-mt-[15vh]">
                <div className="grid gap-8 items-start lg:grid-cols-12 lg:justify-items-end lg:gap-[2fr]">
                    <div className="grid gap-4 lg:col-span-4">
                        <h4 className="header text-xl text-white">
                            Stay informed
                        </h4>

                        <form className="flex flex-nowrap" method="POST">
                            <label className="rounded-l-lg py-0.5 pl-3 pr-1 bg-white text-slate-900 flex items-center w-full" htmlFor="footer-newsletter">
                                <i className="fr fi-rr-envelope top-0.5 text-base"></i>
                                <input className="bg-white py-2 input-form w-full" type="email" id="footer-newsletter" placeholder="Your email" aria-describedby="subscribe-goal" required />
                            </label>

                            <button className="rounded-r-lg bg-rose-500 px-3 shrink-0 text-white hover:bg-rose-400 focus:bg-rose-400" type="submit">
                                Subscribe
                            </button>
                        </form>

                        <small className="-mt-3" id="subscribe-goal">
                            *Subscribe to our newsletter to receive early discount offers, updates and new products info.
                        </small>
                    </div>

                    <div className="grid gap-8 items-start lg:col-span-6 lg:grid-cols-2 lg:gap-12">
                        <div className="grid gap-4">
                            <h3 className="header text-xl text-white">
                                Company
                            </h3>

                            <ul className="grid gap-2">
                                { usefulLinks.map((link, index) => (
                                    <li key={ index }>
                                        <Link className="block hover:text-white focus:text-white text-base" href={ link.route }>
                                            { link.routeName }
                                        </Link>
                                    </li>
                                )) }
                            </ul>
                        </div>

                        <div className="grid gap-4">
                            <h3 className="header text-xl text-white">
                                Help
                            </h3>

                            <ul className="grid gap-2">
                                { helpLinks.map((link, index) => (
                                    <li key={ index }>
                                        <Link className="block hover:text-white focus:text-white text-base" href={ link.route }>
                                            { link.routeName }
                                        </Link>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-8">
                    <div className="flex gap-3 items-center">
                        <Link className="rounded-md px-2 pb-0.5 pt-2 bg-slate-700 transition-colors duration-500 ease-in-out hover:bg-white hover:text-sky-500" href="https://web.facebook.com/IamWisdomOjimah" aria-label="Connect with us on Facebook">
                            <i className="fr fi-brands-facebook top-0"></i>
                        </Link>

                        <Link className="rounded-md px-2 pb-0.5 pt-2 bg-slate-700 transition-colors duration-500 ease-in-out hover:bg-white hover:text-slate-900" href="https://github.com/detachedsoul" aria-label="Connect with us on GitHub">
                            <i className="fr fi-brands-github top-0"></i>
                        </Link>

                        <Link className="rounded-md px-2 pb-0.5 pt-2 bg-slate-700 transition-colors duration-500 ease-in-out hover:bg-white hover:text-sky-500" href="https://www.linkedin.com/in/wisdom-ojimah" aria-label="Connect with us on LinkedIn">
                            <i className="fr fi-brands-linkedin top-0"></i>
                        </Link>
                    </div>

                    <div className="grid gap-4">
                        <h3 className="header text-xl text-white">
                            Download our app
                        </h3>

                        <div className="flex gap-4 items-center">
                            <Link href="">
                                <Image src={android} alt="Download app on android devices on the Google PlayStore" quality={100} />
                            </Link>

                            <Link href="">
                                <Image src={iOS} alt="Download app on iOS devices on the Apple App Store" quality={100} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center bg-slate-900 text-slate-200 justify-between gap-8 py-10 px-[3%]">
                <p className="text-center text-base">
                    &copy; 2023. All rights reserved. Designed with <i className="fr fi-rr-heart text-rose-500 text-base"></i> by <Link className="hover:underline focus:underline decoration-wavy underline-offset-4 decoration-rose-500 decoration-from-font transition-all duration-500 ease-in-out" href="https://github.com/detachedsoul" target="_blank" rel="noreferrer noopenenr">Wisdom Ojimah</Link>
                </p>

                <div className="text-center mx-auto lg:mx-0">
                    <Image src={paymentPlatforms} alt="Accepted payments platforms" quality={100} height={30} />
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
