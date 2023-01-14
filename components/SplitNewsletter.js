const SplitNewsletter = () => {
    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-white dark:bg-brand-black"></div>
                <div className="bg-slate-800 dark:bg-brand-light-black"></div>
            </div>

            <div className="bg-white text-slate-900 px-[6%] mx-[3%] py-12 rounded-lg grid place-content-center z-30 shadow-card isolate relative">
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
                        <label className="rounded-l-lg py-0.5 pl-3 pr-1 bg-white text-slate-900 flex items-center w-full border border-slate-200 focus-within:border-brand-dark-rose/[0.2]" htmlFor="newsletter-subscription">
                            <i className="fr fi-rr-envelope top-0.5 text-base"></i>
                            <input className="bg-white py-2 input-form w-full" type="email" id="newsletter-subscription" placeholder="Your email" aria-describedby="subscribe-to-newsletter" required />
                        </label>

                        <button className="rounded-r-lg bg-brand-red px-3 shrink-0 text-white hover:bg-rose-900 focus:bg-rose-900" type="submit">
                            Subscribe
                        </button>
                    </form>

                    <small className="-mt-5 mx-auto block lg:w-4/5" id="subscribe-to-newsletter">
                        *Receive early discount offers, updates and new products info.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default SplitNewsletter;
