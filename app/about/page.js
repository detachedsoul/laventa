import About from "@components/about/About";

export const metadata = {
	title: "Laventa | About Us",
	description: "About Laventa, our mission, and vision",
};

const Page = () => {
	return (
		<>
			<main className="mb-12 space-y-4 border-b border-slate-200 dark:border-slate-100/[0.06] sm:space-y-0">
				<About />
			</main>
		</>
	);
};

export default Page;
