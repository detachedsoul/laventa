const ContactForm = () => {
    return (
		<div className="py-12 space-y-8">
            <h2 className="header text-2xl lg:text-xl">
                Get in touch. We’ll love to hear from you
            </h2>

			<form className="grid gap-4 sm:grid-cols-2">
				<label
					className="grid gap-1.5"
					htmlFor="name"
				>
					<span className="font-semibold block">
						Your name <span className="text-brand-red">*</span>
					</span>

					<input
						className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] dark:border-brand-light-black dark:bg-brand-light-black dark:text-white dark:placeholder:text-white"
						type="text"
						name="name"
						id="name"
                        placeholder="Your name"
					/>
				</label>

				<label
					className="grid gap-1.5"
					htmlFor="email"
				>
					<span className="font-semibold block">
						Email address <span className="text-brand-red">*</span>
					</span>

					<input
						className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] dark:border-brand-light-black dark:bg-brand-light-black dark:text-white dark:placeholder:text-white"
						type="email"
						name="email"
						id="email"
                        placeholder="Email address"
					/>
				</label>

                <label
					className="grid gap-1.5"
					htmlFor="phone"
				>
					<span className="font-semibold block">
						Your phone <span className="text-brand-red">*</span>
					</span>

					<input
						className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] dark:border-brand-light-black dark:bg-brand-light-black dark:text-white dark:placeholder:text-white"
						type="tel"
						name="phone"
						id="phone"
                        placeholder="Your phone"
					/>
				</label>

                <label
					className="grid gap-1.5"
					htmlFor="subject"
				>
					<span className="font-semibold block">
						Subject <span className="text-brand-red">*</span>
					</span>

					<input
						className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] dark:border-brand-light-black dark:bg-brand-light-black dark:text-white dark:placeholder:text-white"
						type="subject"
						name="subject"
						id="subject"
                        placeholder="Provide short title of your request"
					/>
				</label>

				<label
					className="grid gap-1.5 sm:col-span-2"
					htmlFor="message"
				>
					<span className="font-semibold block">
						Message <span className="text-brand-red">*</span>
					</span>

					<textarea
						className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] dark:border-brand-light-black dark:bg-brand-light-black dark:text-white dark:placeholder:text-white"
						type="email"
						name="message"
						id="message"
                        placeholder="Please describe your request in detail"
                        rows="5"
					></textarea>
                </label>

                <button className="p-3 bg-brand-red text-white rounded-lg hover:bg-brand-dark-rose" type="submit">
                    Send Message
                </button>
			</form>
		</div>
	);
};

export default ContactForm;
